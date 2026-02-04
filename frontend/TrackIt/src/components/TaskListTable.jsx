import React from 'react';
import moment from 'moment';

const TaskListTable = ({ tableData = [] }) => {

  const getStatusBadgeColor = (status) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-500/10 text-green-400 border border-green-500/20';
      case 'Pending':
        return 'bg-purple-500/10 text-purple-400 border border-purple-500/20';
      case 'In Progress':
        return 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20';
      default:
        return 'bg-gray-500/10 text-gray-400 border border-gray-500/20';
    }
  };

  const getPriorityBadgeColor = (priority) => {
    switch (priority) {
      case 'High':
        return 'bg-red-500/10 text-red-400 border border-red-500/20';
      case 'Medium':
        return 'bg-orange-500/10 text-orange-400 border border-orange-500/20';
      case 'Low':
        return 'bg-green-500/10 text-green-400 border border-green-500/20';
      default:
        return 'bg-gray-500/10 text-gray-400 border border-gray-500/20';
    }
  };

  return (
    <div className="overflow-x-auto mt-4 rounded-xl border border-border">
      <table className="min-w-full border-collapse">
        <thead className="bg-bg-card">
          <tr>
            <th className="px-4 py-3 text-left text-xs font-semibold text-textMuted uppercase tracking-wider">
              Name
            </th>
            <th className="px-4 py-3 text-left text-xs font-semibold text-textMuted uppercase tracking-wider">
              Status
            </th>
            <th className="px-4 py-3 text-left text-xs font-semibold text-textMuted uppercase tracking-wider">
              Priority
            </th>
            <th className="px-4 py-3 text-left text-xs font-semibold text-textMuted uppercase tracking-wider hidden md:table-cell">
              Created On
            </th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((task) => (
            <tr
              key={task._id}
              className="border-t border-border hover:bg-white/5 transition-colors"
            >
              <td className="px-4 py-3 text-sm text-textPrimary line-clamp-1">
                {task.title}
              </td>

              <td className="px-4 py-3">
                <span
                  className={`px-2.5 py-1 text-xs font-medium rounded-full ${getStatusBadgeColor(
                    task.status
                  )}`}
                >
                  {task.status}
                </span>
              </td>

              <td className="px-4 py-3">
                <span
                  className={`px-2.5 py-1 text-xs font-medium rounded-full ${getPriorityBadgeColor(
                    task.priority
                  )}`}
                >
                  {task.priority}
                </span>
              </td>

              <td className="px-4 py-3 text-sm text-textMuted hidden md:table-cell whitespace-nowrap">
                {task.createdAt
                  ? moment(task.createdAt).format('Do MMM YYYY')
                  : 'N/A'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskListTable;
