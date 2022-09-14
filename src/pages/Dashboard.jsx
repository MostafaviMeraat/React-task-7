import React from 'react'

const Dashboard = ({ user }) => {
  console.log(user)
  return (
    <div>
      <p>Hello, {user?.name}</p>
    </div>
  )
}

export default Dashboard