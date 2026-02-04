import React from 'react'

const UserCard = ({ userInfo }) => {
  return (
    <div className="rounded-2xl bg-slate-900/80 border border-slate-700/50 p-5 hover:border-indigo-500/30 transition">
      <div className="flex items-center gap-4">
        <img
          src={userInfo?.profileImageUrl}
          className="w-12 h-12 rounded-full border border-slate-700"
        />
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-white truncate">
            {userInfo?.name}
          </p>
          <p className="text-xs text-slate-400 truncate">
            {userInfo?.email}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 mt-6">
        <StatCard
          label="Pending"
          count={userInfo?.pendingTasks || 0}
          status="Pending"
        />
        <StatCard
          label="In Progress"
          count={userInfo?.inProgressTasks || 0}
          status="In Progress"
        />
        <StatCard
          label="Completed"
          count={userInfo?.completedTasks || 0}
          status="Completed"
        />
      </div>
    </div>
  )
}

export default UserCard

const StatCard = ({ label, count, status }) => {
  const styles = {
    Pending: 'bg-violet-500/10 text-violet-400 border-violet-500/30',
    'In Progress': 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
    Completed: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30'
  }

  return (
    <div
      className={`rounded-xl border px-3 py-2 text-center ${styles[status]}`}
    >
      <p className="text-lg font-semibold">{count}</p>
      <p className="text-[11px] font-medium tracking-wide">
        {label}
      </p>
    </div>
  )
}