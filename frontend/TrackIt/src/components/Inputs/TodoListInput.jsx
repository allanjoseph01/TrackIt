import React, { useState } from 'react'
import { HiMiniPlus, HiOutlineTrash } from 'react-icons/hi2'

const TodoListInput = ({ todoList, setTodoList }) => {
  const [option, setOption] = useState('')

  return (
    <div className="space-y-3">
      {todoList.map((t, i) => (
        <div
          key={i}
          className="flex justify-between items-center bg-slate-800 border border-slate-700 rounded-xl px-3 py-2"
        >
          <p className="text-sm text-white">
            <span className="text-slate-500 mr-2">{String(i + 1).padStart(2, '0')}</span>
            {t}
          </p>
          <HiOutlineTrash
            className="text-rose-400 cursor-pointer"
            onClick={() => setTodoList(todoList.filter((_, x) => x !== i))}
          />
        </div>
      ))}

      <div className="flex gap-3">
        <input
          value={option}
          onChange={e => setOption(e.target.value)}
          placeholder="New todo"
          className="flex-1 rounded-xl bg-slate-800 border border-slate-700 px-3 py-2 text-sm text-white"
        />
        <button
          onClick={() => {
            if (option.trim()) {
              setTodoList([...todoList, option.trim()])
              setOption('')
            }
          }}
          className="px-4 py-2 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20"
        >
          <HiMiniPlus />
        </button>
      </div>
    </div>
  )
}

export default TodoListInput
