import React from 'react'

const AvatarGroup = ({ avatars, maxVisible = 3 }) => {
  return (
    <div className="flex -space-x-3">
      {avatars.slice(0, maxVisible).map((a, i) => (
        <img
          key={i}
          src={a}
          className="w-9 h-9 rounded-full border-2 border-slate-900"
        />
      ))}
      {avatars.length > maxVisible && (
        <div className="w-9 h-9 rounded-full bg-slate-800 text-slate-300 text-xs flex items-center justify-center border-2 border-slate-900">
          +{avatars.length - maxVisible}
        </div>
      )}
    </div>
  )
}

export default AvatarGroup
