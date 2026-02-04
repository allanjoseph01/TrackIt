import React, { useEffect, useState } from 'react'
import DashboardLayout from '../../components/layouts/DashboardLayout'
import { useLocation, useNavigate } from 'react-router-dom'
import { LuTrash2 } from 'react-icons/lu'
import { PRIORITY_DATA } from '../../utils/data'
import SelectDropdown from '../../components/Inputs/SelectDropdown'
import SelectUsers from '../../components/Inputs/SelectUsers'
import TodoListInput from '../../components/Inputs/TodoListInput'
import AddAttachmentsInput from '../../components/Inputs/AddAttachmentsInput'
import axiosInstance from '../../utils/axiosinstance'
import { API_PATHS } from '../../utils/apiPaths'
import toast from 'react-hot-toast'
import moment from 'moment'
import Modal from '../../components/Modal'
import DeleteAlert from '../../components/DeleteAlert'

const CreateTask = () => {
  const location = useLocation()
  const { taskId } = location.state || {}
  const navigate = useNavigate()

  const [taskData, setTaskData] = useState({
    title: '',
    description: '',
    priority: 'Low',
    dueDate: null,
    assignedTo: [],
    todoChecklist: [],
    attachments: [],
  })

  const [currentTask, setCurrentTask] = useState(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [openDeleteAlert, setOpenDeleteAlert] = useState(false)

  const handleValueChange = (key, value) => {
    setTaskData(prev => ({ ...prev, [key]: value }))
  }

  const createTask = async () => {
    setLoading(true)
    try {
      const todolist = taskData.todoChecklist.map(item => ({
        text: item,
        completed: false,
      }))

      await axiosInstance.post(API_PATHS.TASKS.CREATE_TASK, {
        ...taskData,
        dueDate: new Date(taskData.dueDate).toISOString(),
        todoChecklist: todolist,
      })

      toast.success('Task Created Successfully')
      setTaskData({
        title: '',
        description: '',
        priority: 'Low',
        dueDate: null,
        assignedTo: [],
        todoChecklist: [],
        attachments: [],
      })
    } finally {
      setLoading(false)
    }
  }

  const updateTask = async () => {
    setLoading(true)
    try {
      const todoList = taskData.todoChecklist.map(item => {
        const matched = currentTask?.todoChecklist?.find(t => t.text === item)
        return { text: item, completed: matched?.completed || false }
      })

      await axiosInstance.put(API_PATHS.TASKS.UPDATE_TASK(taskId), {
        ...taskData,
        dueDate: new Date(taskData.dueDate).toISOString(),
        todoChecklist: todoList,
      })

      toast.success('Task Updated Successfully')
      navigate('/admin/tasks')
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = () => {
    setError('')
    if (!taskData.title.trim()) return setError('Title is required')
    if (!taskData.description.trim()) return setError('Description is required')
    if (!taskData.dueDate) return setError('Due date is required')
    if (!taskData.assignedTo.length) return setError('Assign at least one user')
    if (!taskData.todoChecklist.length) return setError('Add at least one todo')

    taskId ? updateTask() : createTask()
  }

  const getTaskDetailsByID = async () => {
    const res = await axiosInstance.get(API_PATHS.TASKS.GET_TASK_BY_ID(taskId))
    const t = res.data
    setCurrentTask(t)
    setTaskData({
      title: t.title,
      description: t.description,
      priority: t.priority,
      dueDate: moment(t.dueDate).format('YYYY-MM-DD'),
      assignedTo: t.assignedTo.map(u => u._id),
      todoChecklist: t.todoChecklist.map(i => i.text),
      attachments: t.attachments,
    })
  }

  useEffect(() => {
    if (taskId) getTaskDetailsByID()
  }, [taskId])

  return (
    <DashboardLayout activeMenu="Create Task">
      <div className="max-w-6xl mx-auto px-4 mt-6">
        <div className="rounded-2xl bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 p-6 shadow-xl">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-white">
              {taskId ? 'Update Task' : 'Create Task'}
            </h2>
            {taskId && (
              <button
                onClick={() => setOpenDeleteAlert(true)}
                className="flex items-center gap-2 text-xs text-rose-400 bg-rose-500/10 px-3 py-1.5 rounded-xl border border-rose-500/20 hover:bg-rose-500/20 transition"
              >
                <LuTrash2 /> Delete
              </button>
            )}
          </div>

          <div className="mt-6 space-y-5">
            <input
              className="w-full rounded-xl bg-slate-800 border border-slate-700 px-4 py-3 text-sm text-white placeholder-slate-500 focus:ring-2 focus:ring-blue-500/40"
              placeholder="Task title"
              value={taskData.title}
              onChange={e => handleValueChange('title', e.target.value)}
            />

            <textarea
              rows={4}
              className="w-full rounded-xl bg-slate-800 border border-slate-700 px-4 py-3 text-sm text-white placeholder-slate-500 focus:ring-2 focus:ring-blue-500/40"
              placeholder="Task description"
              value={taskData.description}
              onChange={e => handleValueChange('description', e.target.value)}
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <SelectDropdown
                options={PRIORITY_DATA}
                value={taskData.priority}
                onChange={v => handleValueChange('priority', v)}
                placeholder="Priority"
              />

              <input
                type="date"
                className="rounded-xl bg-slate-800 border border-slate-700 px-4 py-3 text-sm text-white"
                value={taskData.dueDate}
                onChange={e => handleValueChange('dueDate', e.target.value)}
              />

              <SelectUsers
                selectedUsers={taskData.assignedTo}
                setSelectedUsers={v => handleValueChange('assignedTo', v)}
              />
            </div>

            <TodoListInput
              todoList={taskData.todoChecklist}
              setTodoList={v => handleValueChange('todoChecklist', v)}
            />

            <AddAttachmentsInput
              attachments={taskData.attachments}
              setAttachments={v => handleValueChange('attachments', v)}
            />

            {error && (
              <p className="text-xs text-rose-400 bg-rose-500/10 border border-rose-500/20 rounded-xl px-3 py-2">
                {error}
              </p>
            )}

            <div className="flex justify-end">
              <button
                onClick={handleSubmit}
                disabled={loading}
                className="px-6 py-3 rounded-xl text-sm font-semibold text-white bg-linear-to-r from-blue-500 to-indigo-600 shadow-lg hover:scale-[1.02] transition"
              >
                {taskId ? 'UPDATE TASK' : 'CREATE TASK'}
              </button>
            </div>
          </div>
        </div>
      </div>

      <Modal isOpen={openDeleteAlert} onClose={() => setOpenDeleteAlert(false)} title="Delete Task">
        <DeleteAlert content="Are you sure?" onDelete={() => navigate('/admin/tasks')} />
      </Modal>
    </DashboardLayout>
  )
}

export default CreateTask
