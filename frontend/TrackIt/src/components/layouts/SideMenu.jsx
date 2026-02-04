import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../context/userContext'
import { SIDE_MENU_DATA, SIDE_MENU_USER_DATA } from '../../utils/data'
import { useNavigate } from 'react-router-dom'
import LogoutModal from '../LogoutModal'

const SideMenu = ({ activeMenu }) => {
  const { user, clearUser } = useContext(UserContext)
  const [sideMenuData, setSideMenuData] = useState([])
  const [openLogoutModal, setOpenLogoutModal] = useState(false)

  const navigate = useNavigate()

  const handleClick = (route) => {
    if (route === 'logout') {
      setOpenLogoutModal(true)
      return
    }
    navigate(route)
  }

  const handleLogout = () => {
    localStorage.clear()
    clearUser()
    navigate('/login')
  }

  useEffect(() => {
    if (user) {
      setSideMenuData(
        user?.role === 'admin' ? SIDE_MENU_DATA : SIDE_MENU_USER_DATA
      )
    }
  }, [user])

  return (
    <>
      <div className="w-64 h-[calc(100vh-61px)] bg-slate-900 border-r border-slate-700 sticky top-[61px] z-20 text-slate-200">
        <div className="flex flex-col items-center justify-center mb-7 pt-6">
          <img
            src={user?.profileImageUrl}
            alt="profile"
            className="w-20 h-20 rounded-full border-2 border-slate-700 object-cover"
          />

          {user?.role === 'admin' && (
            <span className="mt-2 text-[10px] font-semibold text-blue-300 bg-blue-500/10 px-3 py-0.5 rounded-full">
              ADMIN
            </span>
          )}

          <h5 className="mt-3 text-slate-100 font-medium">
            {user?.name}
          </h5>

          <p className="text-xs text-slate-400">
            {user?.email}
          </p>
        </div>

        <div className="px-2">
          {sideMenuData.map((item, index) => (
            <button
              key={`menu_${index}`}
              onClick={() => handleClick(item.path)}
              className={`w-full flex items-center gap-4 text-sm px-4 py-3 rounded-xl mb-1 transition-all
                ${
                  activeMenu === item.label
                    ? 'bg-blue-500/10 text-blue-400'
                    : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
            >
              <item.icon className="text-lg" />
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <LogoutModal
        open={openLogoutModal}
        onClose={() => setOpenLogoutModal(false)}
        onConfirm={handleLogout}
      />
    </>
  )
}

export default SideMenu
