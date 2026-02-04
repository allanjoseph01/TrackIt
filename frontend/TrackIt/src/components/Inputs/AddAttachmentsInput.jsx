import React, { useState } from 'react'
import { HiMiniPlus, HiOutlineTrash } from 'react-icons/hi2'
import { LuPaperclip } from 'react-icons/lu'

const AddAttachmentsInput = ({ attachments, setAttachments }) => {
  const [option, setOption] = useState('')

  const add = () => {
    if (option.trim()) {
      setAttachments([...attachments, option.trim()])
      setOption('')
    }
  }

  return (
    <div className="space-y-3">
      {attachments.map((a, i) => (
        <div
          key={i}
          className="flex items-center justify-between bg-slate-800 border border-slate-700 rounded-xl px-3 py-2"
        >
          <div className="flex items-center gap-2 text-sm text-white">
            <LuPaperclip /> {a}
          </div>
          <HiOutlineTrash
            onClick={() => setAttachments(attachments.filter((_, x) => x !== i))}
            className="text-rose-400 cursor-pointer"
          />
        </div>
      ))}

      <div className="flex gap-3">
        <input
          value={option}
          onChange={e => setOption(e.target.value)}
          placeholder="Attachment link"
          className="flex-1 rounded-xl bg-slate-800 border border-slate-700 px-3 py-2 text-sm text-white"
        />
        <button
          onClick={add}
          className="px-4 py-2 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 hover:bg-blue-500/20 flex items-center gap-1"
        >
          <HiMiniPlus /> Add
        </button>
      </div>
    </div>
  )
}

export default AddAttachmentsInput
