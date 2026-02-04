import React, { useEffect, useState } from 'react'
import axiosInstance from '../../utils/axiosinstance'
import { API_PATHS } from '../../utils/apiPaths'
import { LuUsers } from 'react-icons/lu'
import Modal from '../Modal'
import AvatarGroup from '../AvatarGroup'

const SelectUsers = ({ selectedUsers, setSelectedUsers }) => {
  const [allUsers, setAllUsers] = useState([])
  const [open, setOpen] = useState(false)
  const [temp, setTemp] = useState([])

  useEffect(() => {
    axiosInstance
      .get(API_PATHS.USERS.GET_ALL_USERS)
      .then(r => setAllUsers(r.data || []))
  }, [])

  useEffect(() => {
    setTemp(selectedUsers || [])
  }, [selectedUsers])

  const toggle = id =>
    setTemp(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    )

  const avatars = allUsers
    .filter(u => selectedUsers.includes(u._id))
    .map(u => u.profileImageUrl)

  return (
    <>
      {avatars.length === 0 ? (
        <button
          onClick={() => setOpen(true)}
          className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-700/50 text-slate-300 hover:border-indigo-500/40 transition"
        >
          <LuUsers className="text-lg" />
          Assign Members
        </button>
      ) : (
        <div
          onClick={() => setOpen(true)}
          className="cursor-pointer inline-flex"
        >
          <AvatarGroup avatars={avatars} />
        </div>
      )}

      <Modal isOpen={open} onClose={() => setOpen(false)} title="Select Members">
        <div className="space-y-2 max-h-[60vh] overflow-y-auto pr-1">
          {allUsers.map(u => (
            <div
              key={u._id}
              onClick={() => toggle(u._id)}
              className={`flex items-center gap-4 p-3 rounded-xl cursor-pointer transition ${
                temp.includes(u._id)
                  ? 'bg-indigo-500/10 border border-indigo-400/30'
                  : 'hover:bg-slate-800/60'
              }`}
            >
              <img
                src={u.profileImageUrl}
                className="w-10 h-10 rounded-full"
              />
              <div className="flex-1">
                <p className="text-sm font-medium text-white">{u.name}</p>
                <p className="text-xs text-slate-400">{u.email}</p>
              </div>
              <input
                type="checkbox"
                checked={temp.includes(u._id)}
                onChange={() => toggle(u._id)}
                className="w-4 h-4 accent-indigo-500"
              />
            </div>
          ))}
        </div>

        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={() => setOpen(false)}
            className="px-4 py-2 rounded-xl border border-slate-700 text-slate-300 hover:bg-slate-800 transition"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              setSelectedUsers(temp)
              setOpen(false)
            }}
            className="px-5 py-2 rounded-xl bg-indigo-500 text-white hover:bg-indigo-400 transition"
          >
            Done
          </button>
        </div>
      </Modal>
    </>
  )
}

export default SelectUsers