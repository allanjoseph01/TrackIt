import React from 'react'

const Progress = ({ progress, status }) => {
  const color = {
    Pending: 'bg-violet-500',
    'In Progress': 'bg-cyan-500',
    Completed: 'bg-emerald-500',
  }

  return (
    <div className="w-full h-1.5 bg-slate-700 rounded-full mt-3 overflow-hidden">
      <div
        className={`h-full ${color[status]} transition-all`}
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}

export default Progress
