import React from 'react'

const LogoutModal = ({ open, onClose, onConfirm }) => {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
      <div className="w-full max-w-sm rounded-2xl bg-slate-900 border border-slate-700 shadow-xl p-6">
        <h3 className="text-lg font-semibold text-slate-100">
          Confirm Logout
        </h3>

        <p className="text-sm text-slate-400 mt-2">
          Are you sure you want to logout from your account?
        </p>

        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-sm font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 transition"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="px-5 py-2 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-rose-500 to-red-500 hover:from-rose-600 hover:to-red-600 transition"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  )
}

export default LogoutModal
