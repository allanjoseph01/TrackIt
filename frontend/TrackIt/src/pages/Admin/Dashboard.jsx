import React, { useContext, useEffect, useState } from 'react'
import { useUserAuth } from '../../hooks/useUserAuth'
import { UserContext } from '../../context/userContext';
import DashboardLayout from '../../components/layouts/DashboardLayout';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../utils/axiosinstance';
import { API_PATHS } from '../../utils/apiPaths';
import moment from 'moment';
import { addThousandsSeperator } from '../../utils/helper';
import InfoCard from '../../components/Cards/InfoCard';
import { LuArrowRight } from 'react-icons/lu';
import TaskListTable from '../../components/TaskListTable';
import CustomPieChart from '../../components/Charts/CustomPieChart';
import CustomBarChart from '../../components/Charts/CustomBarChart';

const COLORS = ["#8D51FF" , "#00B8DB" , "#7BCE00"];

const Dashboard = () => {
  useUserAuth();

  const {user} = useContext(UserContext);

  const navigate = useNavigate();

  const [dashboardData , setDashboardData] = useState(null);
  const [pieChartData , setPieChartData]= useState([]);
  const [barChartData , setBarChartData]= useState([]);

  const prepareChartData = (data) => {
    const taskDistribution = data?.taskDistribution || null;
    const taskPriorityLevels = data?.taskPriorityLevels || null;

    const taskDistributionData = [
      {status : "Pending" , count : taskDistribution?.Pending || 0},
      {status : "In Progress" , count : taskDistribution?.InProgress || 0},
      {status : "Completed", count : taskDistribution.Completed || 0},
    ];

    setPieChartData(taskDistributionData);

    const PriorityLevelsData = [
      {priority: "Low" , count : taskPriorityLevels?.Low || 0},
      {priority : "Medium" , count : taskPriorityLevels?.Medium || 0},
      {priority : "High" , count : taskPriorityLevels?.High || 0},
    ];
    
    setBarChartData(PriorityLevelsData);
  };

  const getDashboardData = async () => {
    try{
      const response = await axiosInstance.get(
        API_PATHS.TASKS.GET_DASHBOARD_DATA
      );
      if(response.data){
        setDashboardData(response.data);
        prepareChartData(response.data?.charts || null);
      }
    } catch (error) {
      console.error("Error fetching users:" , error);
    }
  };

  const onSeeMore = () => {
    navigate('/admin/tasks')
  }

  useEffect(()=>{
    getDashboardData();

    return ()=>{};
  },[]);
  return (
    <DashboardLayout activeMenu="Dashboard">
      <div className="my-5">
        <h2 className="text-2xl font-semibold text-textPrimary">
          Good Morning, <span className="text-primary">{user?.name}</span> 👋
        </h2>
        <p className="text-sm text-textMuted mt-1">
          {moment().format("dddd, Do MMM YYYY")}
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <InfoCard
          label="Total Tasks"
          value={addThousandsSeperator(
            dashboardData?.charts?.taskDistribution?.All || 0
          )}
          color="bg-gradient-to-r from-indigo-500 to-violet-600"
        />

        <InfoCard
          label="Pending"
          value={addThousandsSeperator(
            dashboardData?.charts?.taskDistribution?.Pending || 0
          )}
          color="bg-gradient-to-r from-violet-500 to-purple-600"
        />

        <InfoCard
          label="In Progress"
          value={addThousandsSeperator(
            dashboardData?.charts?.taskDistribution?.InProgress || 0
          )}
          color="bg-gradient-to-r from-cyan-500 to-sky-600"
        />

        <InfoCard
          label="Completed"
          value={addThousandsSeperator(
            dashboardData?.charts?.taskDistribution?.Completed || 0
          )}
          color="bg-gradient-to-r from-lime-500 to-green-600"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="card">
          <h5 className="text-sm font-medium text-textMuted mb-3">
            Task Distribution
          </h5>
          <CustomPieChart data={pieChartData} colors={COLORS} />
        </div>

        <div className="card">
          <h5 className="text-sm font-medium text-textMuted mb-3">
            Task Priority Levels
          </h5>
          <CustomBarChart data={barChartData} />
        </div>
      </div>

      <div className="card mb-5">
        <div className="flex items-center justify-between mb-4">
          <h5 className="text-lg font-semibold text-textPrimary">
            Recent Tasks
          </h5>
          <button
            onClick={onSeeMore}
            className="flex items-center gap-1 text-sm text-primary hover:underline"
          >
            See All <LuArrowRight />
          </button>
        </div>

        <TaskListTable tableData={dashboardData?.recentTasks || []} />
      </div>
    </DashboardLayout>
  )
}

export default Dashboard
