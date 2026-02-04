import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axiosInstance from '../../utils/axiosinstance'
import { API_PATHS } from '../../utils/apiPaths'
import DashboardLayout from '../../components/layouts/DashboardLayout'
import moment from 'moment'
import AvatarGroup from '../../components/AvatarGroup'
import { LuSquareArrowOutUpRight } from 'react-icons/lu'

const ViewTaskDetails = () => {
  const { id } = useParams()
  const [task, setTask] = useState(null)

  const getStatusStyles = status => {
    switch (status) {
      case 'In Progress':
        return 'text-cyan-400 bg-cyan-500/10 border border-cyan-500/20'
      case 'Completed':
        return 'text-lime-400 bg-lime-500/10 border border-lime-500/20'
      default:
        return 'text-violet-400 bg-violet-500/10 border border-violet-500/20'
    }
  }

  const getTaskDetailsById = async () => {
    try {
      const res = await axiosInstance.get(API_PATHS.TASKS.GET_TASK_BY_ID(id))
      if (res.data) setTask(res.data)
    } catch {}
  }

  const updateTodoChecklist = async index => {
    const todoChecklist = [...task.todoChecklist]
    todoChecklist[index].completed = !todoChecklist[index].completed
    try {
      const res = await axiosInstance.put(
        API_PATHS.TASKS.UPDATE_TODO_CHECKLIST(id),
        { todoChecklist }
      )
      if (res.status === 200) setTask(res.data.task)
    } catch {
      todoChecklist[index].completed = !todoChecklist[index].completed
    }
  }

  const handleLinkClick = link => {
    if (!/^https?:\/\//i.test(link)) link = 'https://' + link
    window.open(link, '_blank')
  }

  useEffect(() => {
    if (id) getTaskDetailsById()
  }, [id])

  return (
    <DashboardLayout activeMenu="My Tasks">
      <div className="max-w-6xl mx-auto px-4 mt-6">
        {task && (
          <div className="rounded-2xl bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 p-6 shadow-xl">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-xl font-semibold text-white">
                {task.title}
              </h2>
              <span
                className={`text-xs font-semibold px-4 py-1 rounded-full ${getStatusStyles(
                  task.status
                )}`}
              >
                {task.status}
              </span>
            </div>

            <div className="mt-5 space-y-4">
              <InfoBox label="Description" value={task.description} />

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <InfoBox label="Priority" value={task.priority} />
                <InfoBox
                  label="Due Date"
                  value={
                    task.dueDate
                      ? moment(task.dueDate).format('Do MMM YYYY')
                      : 'N/A'
                  }
                />
                <div>
                  <label className="text-xs text-slate-400">
                    Assigned To
                  </label>
                  <div className="mt-1">
                    <AvatarGroup
                      avatars={
                        task.assignedTo?.map(u => u.profileImageUrl) || []
                      }
                      maxVisible={5}
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="text-xs text-slate-400">
                  Todo Checklist
                </label>
                <div className="mt-2 space-y-2">
                  {task.todoChecklist.map((item, i) => (
                    <TodoItem
                      key={i}
                      text={item.text}
                      isChecked={item.completed}
                      onChange={() => updateTodoChecklist(i)}
                    />
                  ))}
                </div>
              </div>

              {task.attachments?.length > 0 && (
                <div>
                  <label className="text-xs text-slate-400">
                    Attachments
                  </label>
                  <div className="mt-2 space-y-2">
                    {task.attachments.map((link, i) => (
                      <Attachment
                        key={i}
                        index={i}
                        link={link}
                        onClick={() => handleLinkClick(link)}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  )
}

export default ViewTaskDetails

const InfoBox = ({ label, value }) => (
  <div>
    <label className="text-xs text-slate-400">{label}</label>
    <p className="text-sm text-slate-200 mt-1">{value}</p>
  </div>
)

const TodoItem = ({ text, isChecked, onChange }) => (
  <div className="flex items-center gap-3 px-3 py-2 rounded-xl bg-slate-800 border border-slate-700">
    <input
      type="checkbox"
      checked={isChecked}
      onChange={onChange}
      className="w-4 h-4 accent-blue-500"
    />
    <p
      className={`text-sm ${
        isChecked ? 'line-through text-slate-400' : 'text-slate-200'
      }`}
    >
      {text}
    </p>
  </div>
)

const Attachment = ({ link, index, onClick }) => (
  <div
    onClick={onClick}
    className="flex items-center justify-between gap-3 px-4 py-2 rounded-xl bg-slate-800 border border-slate-700 hover:bg-slate-700 transition cursor-pointer"
  >
    <div className="flex items-center gap-3 overflow-hidden">
      <span className="text-xs text-slate-400 font-semibold">
        {index < 9 ? `0${index + 1}` : index + 1}
      </span>
      <p className="text-xs text-slate-200 truncate">
        {link}
      </p>
    </div>
    <LuSquareArrowOutUpRight className="text-slate-400" />
  </div>
)
