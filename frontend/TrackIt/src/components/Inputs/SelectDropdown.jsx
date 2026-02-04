import React, { useState } from 'react'
import { LuChevronDown } from 'react-icons/lu'

const SelectDropdown = ({ options, value, onChange, placeholder }) => {
  const [open, setOpen] = useState(false)

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="w-full rounded-xl bg-slate-800 border border-slate-700 px-4 py-3 text-sm text-white flex justify-between items-center"
      >
        {options.find(o => o.value === value)?.label || placeholder}
        <LuChevronDown className={open ? 'rotate-180' : ''} />
      </button>

      {open && (
        <div className="absolute z-10 w-full mt-2 rounded-xl bg-slate-900 border border-slate-700 shadow-xl">
          {options.map(o => (
            <div
              key={o.value}
              onClick={() => {
                onChange(o.value)
                setOpen(false)
              }}
              className="px-4 py-2 text-sm text-slate-300 hover:bg-slate-800 cursor-pointer"
            >
              {o.label}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default SelectDropdown
