import { Navigate } from "react-router-dom"

const ProtectedRoute = ({ children, user }) => {
  if (!user) {
    alert('nemishe pesar jan')
    return <Navigate to='/' />
  }
  return children
}

export default ProtectedRoute