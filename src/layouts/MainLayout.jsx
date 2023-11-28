import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'

const MainLayout = () => {
  return (
    <>
        <div className=" flex w-full h-screen overflow-y-hidden">
            <Sidebar/>
            <div className=" flex-1 p-8 overflow-y-scroll">
                <Outlet/>
            </div>
        </div>
    </>
  )
}

export default MainLayout