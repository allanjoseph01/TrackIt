import React from 'react'

const TaskStatusTabs = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <div className="flex gap-2 bg-slate-900/70 border border-slate-700/50 rounded-2xl p-1">
      {tabs.map(tab => (
        <button
          key={tab.label}
          onClick={() => setActiveTab(tab.label)}
          className={`px-4 py-2 rounded-xl text-xs font-medium transition ${
            activeTab === tab.label
              ? 'bg-indigo-500/20 text-indigo-300'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          {tab.label}
          <span className="ml-2 text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-300">
            {tab.count}
          </span>
        </button>
      ))}
    </div>
  )
}

export default TaskStatusTabs
