import React from 'react'

const DeleteAlert = ({ content, onDelete }) => {
  return (
    <div className="w-full">
      <p className="text-sm text-slate-300 leading-relaxed">
        {content}
      </p>

      <div className="flex justify-end gap-3 mt-6">
        <button
          onClick={onDelete}
          className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-rose-500 to-red-600 hover:from-rose-600 hover:to-red-700 active:scale-95 transition shadow-lg shadow-rose-500/20"
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default DeleteAlert
