import React from 'react'
import Progress from '../Progress'
import moment from 'moment'
import AvatarGroup from '../AvatarGroup'
import { LuPaperclip } from 'react-icons/lu'

const TaskCard = ({
  title,
  description,
  priority,
  status,
  progress,
  createdAt,
  dueDate,
  assignedTo,
  attachments,
  completedTodoCount,
  todoChecklist,
  onClick,
}) => {
  const statusStyle = {
    Pending: 'text-violet-300 bg-violet-500/10',
    'In Progress': 'text-cyan-300 bg-cyan-500/10',
    Completed: 'text-emerald-300 bg-emerald-500/10',
  }

  const priorityStyle = {
    Low: 'text-emerald-300',
    Medium: 'text-amber-300',
    High: 'text-rose-300',
  }

  return (
    <div
      onClick={onClick}
      className="bg-slate-900/80 border border-slate-700/50 rounded-2xl p-5 backdrop-blur-xl hover:border-indigo-500/40 transition cursor-pointer"
    >
      <div className="flex gap-3 mb-3">
        <span className={`px-3 py-1 rounded-lg text-xs ${statusStyle[status]}`}>
          {status}
        </span>
        <span className={`text-xs ${priorityStyle[priority]} mt-1`}>
          {priority} Priority
        </span>
      </div>

      <h3 className="text-white font-semibold text-sm line-clamp-2">
        {title}
      </h3>
      <p className="text-slate-400 text-xs mt-1 line-clamp-2">
        {description}
      </p>

      <div className="mt-3 text-xs text-slate-300">
        {completedTodoCount} / {todoChecklist?.length || 0} tasks done
      </div>

      <Progress progress={progress} status={status} />

      <div className="flex justify-between items-center mt-4">
        <div className="text-xs text-slate-400">
          <p>Start: {moment(createdAt).format('DD MMM')}</p>
          <p>Due: {dueDate ? moment(dueDate).format('DD MMM') : '—'}</p>
        </div>

        <div className="flex items-center gap-3">
          <AvatarGroup avatars={assignedTo || []} />
          {attachments?.length > 0 && (
            <div className="flex items-center gap-1 text-xs text-indigo-300 bg-indigo-500/10 px-2 py-1 rounded-lg">
              <LuPaperclip />
              {attachments.length}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default TaskCard
