import React, { useEffect, useState } from 'react'
import DashboardLayout from '../../components/layouts/DashboardLayout'
import { useNavigate } from 'react-router-dom'
import axiosInstance from '../../utils/axiosinstance'
import { API_PATHS } from '../../utils/apiPaths'
import { LuFileSpreadsheet } from 'react-icons/lu'
import TaskStatusTabs from '../../components/TaskStatusTabs'
import TaskCard from '../../components/Cards/TaskCard'

const ManageTask = () => {
  const [allTasks, setAllTasks] = useState([])
  const [tabs, setTabs] = useState([])
  const [filterStatus, setFilterStatus] = useState('All')

  const navigate = useNavigate()

  const getAllTasks = async () => {
    try {
      const response = await axiosInstance.get(API_PATHS.TASKS.GET_ALL_TASKS, {
        params: { status: filterStatus === 'All' ? '' : filterStatus },
      })

      setAllTasks(response.data?.tasks || [])

      const s = response.data?.statusSummary || {}
      setTabs([
        { label: 'All', count: s.all || 0 },
        { label: 'Pending', count: s.pendingTasks || 0 },
        { label: 'In Progress', count: s.inProgressTasks || 0 },
        { label: 'Completed', count: s.completedTasks || 0 },
      ])
    } catch (e) {}
  }

  const handleDownloadReport = async () => {
    const response = await axiosInstance.get(API_PATHS.REPORTS.EXPORT_TASKS, {
      responseType: 'blob',
    })

    const url = window.URL.createObjectURL(new Blob([response.data]))
    const link = document.createElement('a')
    link.href = url
    link.download = 'task_details.xlsx'
    link.click()
    window.URL.revokeObjectURL(url)
  }

  useEffect(() => {
    getAllTasks()
  }, [filterStatus])

  return (
    <DashboardLayout activeMenu="Manage Tasks">
      <div className="mt-6 space-y-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <h2 className="text-xl font-semibold text-white tracking-wide">
            My Tasks
          </h2>

          {tabs.length > 0 && (
            <div className="flex flex-wrap items-center gap-4">
              <TaskStatusTabs
                tabs={tabs}
                activeTab={filterStatus}
                setActiveTab={setFilterStatus}
              />
              <button
                onClick={handleDownloadReport}
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium bg-indigo-500/10 border border-indigo-400/20 text-indigo-300 hover:bg-indigo-500/20 transition"
              >
                <LuFileSpreadsheet /> Export
              </button>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {allTasks.map(task => (
            <TaskCard
              key={task._id}
              {...task}
              assignedTo={task.assignedTo?.map(u => u.profileImageUrl)}
              onClick={() =>
                navigate('/admin/create-task', {
                  state: { taskId: task._id },
                })
              }
            />
          ))}
        </div>
      </div>
    </DashboardLayout>
  )
}

export default ManageTask