
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'


const ShardeLayout = () => {

  return (
    <div className="homePage">

      <NavBar />
      <Outlet />

    </div>)
}

export default ShardeLayout