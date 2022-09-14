import { NavLink } from 'react-router-dom'
const NavBar = () => {
  return (
    <nav>

      <NavLink to='/' className={({ isActive }) => (isActive ? 'link active' : 'link')}>Home Page</NavLink>

      {/* <NavLink to='/dashboard' className={({ isActive }) => (isActive ? 'link active' : 'link')}>Dashboard</NavLink> */}

      <NavLink to='/counter' className={({ isActive }) => (isActive ? 'link active' : 'link')}>Counter</NavLink>

      <NavLink to='/products' className={({ isActive }) => (isActive ? 'link active' : 'link')}>Products</NavLink>

      <NavLink to='/login' className={({ isActive }) => (isActive ? 'link active' : 'link')}>Login</NavLink>


    </nav>
  )
}

export default NavBar