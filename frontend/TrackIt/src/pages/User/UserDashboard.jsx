import React from 'react'
import { useUserAuth } from '../../hooks/useUserAuth'

const UserDashboard = () => {
  useUserAuth();
  return (
    <div>
      Dashboard User
    </div>
  )
}

export default UserDashboard
