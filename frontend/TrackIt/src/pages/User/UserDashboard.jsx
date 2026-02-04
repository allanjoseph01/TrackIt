import React, { useEffect, useState, useContext } from 'react'
import { useUserAuth } from '../../hooks/useUserAuth'
import { UserContext } from '../../context/userContext'
import DashboardLayout from '../../components/layouts/DashboardLayout'
import { useNavigate } from 'react-router-dom'
import axiosInstance from '../../utils/axiosinstance'
import { API_PATHS } from '../../utils/apiPaths'
import moment from 'moment'
import { addThousandsSeperator } from '../../utils/helper'
import InfoCard from '../../components/Cards/InfoCard'
import { LuArrowRight } from 'react-icons/lu'
import TaskListTable from '../../components/TaskListTable'
import CustomPieChart from '../../components/Charts/CustomPieChart'
import CustomBarChart from '../../components/Charts/CustomBarChart'

const COLORS = ['#8D51FF', '#00B8DB', '#7BCE00']

const UserDashboard = () => {
  useUserAuth()

  const { user } = useContext(UserContext)
  const navigate = useNavigate()

  const [dashboardData, setDashboardData] = useState(null)
  const [pieChartData, setPieChartData] = useState([])
  const [barChartData, setBarChartData] = useState([])

  const prepareChartData = data => {
    const taskDistribution = data?.taskDistribution || {}
    const taskPriorityLevels = data?.taskPriorityLevels || {}

    setPieChartData([
      { status: 'Pending', count: taskDistribution.Pending || 0 },
      { status: 'In Progress', count: taskDistribution.InProgress || 0 },
      { status: 'Completed', count: taskDistribution.Completed || 0 },
    ])

    setBarChartData([
      { priority: 'Low', count: taskPriorityLevels.Low || 0 },
      { priority: 'Medium', count: taskPriorityLevels.Medium || 0 },
      { priority: 'High', count: taskPriorityLevels.High || 0 },
    ])
  }

  const getDashboardData = async () => {
    try {
      const response = await axiosInstance.get(
        API_PATHS.TASKS.GET_USER_DASHBOARD_DATA
      )
      if (response.data) {
        setDashboardData(response.data)
        prepareChartData(response.data?.charts)
      }
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getDashboardData()
  }, [])

  return (
    <DashboardLayout activeMenu="Dashboard">
      <div className="max-w-7xl mx-auto px-4 my-6 space-y-6">

        <div className="rounded-2xl bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 p-6 shadow-xl">
          <h2 className="text-2xl font-semibold text-white">
            Good Morning, {user?.name}
          </h2>
          <p className="text-sm text-slate-400 mt-1">
            {moment().format('dddd, Do MMM YYYY')}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <InfoCard
              label="Total Tasks"
              value={addThousandsSeperator(
                dashboardData?.charts?.taskDistribution?.All || 0
              )}
              color="bg-indigo-500"
            />
            <InfoCard
              label="Pending"
              value={addThousandsSeperator(
                dashboardData?.charts?.taskDistribution?.Pending || 0
              )}
              color="bg-violet-500"
            />
            <InfoCard
              label="In Progress"
              value={addThousandsSeperator(
                dashboardData?.charts?.taskDistribution?.InProgress || 0
              )}
              color="bg-cyan-500"
            />
            <InfoCard
              label="Completed"
              value={addThousandsSeperator(
                dashboardData?.charts?.taskDistribution?.Completed || 0
              )}
              color="bg-lime-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 p-6 shadow-xl">
            <h5 className="font-medium text-white mb-4">
              Task Distribution
            </h5>
            <CustomPieChart data={pieChartData} colors={COLORS} />
          </div>

          <div className="rounded-2xl bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 p-6 shadow-xl">
            <h5 className="font-medium text-white mb-4">
              Task Priority Levels
            </h5>
            <CustomBarChart data={barChartData} />
          </div>

          <div className="md:col-span-2 rounded-2xl bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 p-6 shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <h5 className="text-lg font-semibold text-white">
                Recent Tasks
              </h5>
              <button
                onClick={() => navigate('/admin/tasks')}
                className="flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition"
              >
                See All <LuArrowRight />
              </button>
            </div>
            <TaskListTable tableData={dashboardData?.recentTasks || []} />
          </div>
        </div>

      </div>
    </DashboardLayout>
  )
}

export default UserDashboard