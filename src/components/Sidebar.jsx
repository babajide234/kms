import { GrHomeRounded } from "react-icons/gr";
import { PiClockClockwise,PiFolderThin } from "react-icons/pi";
import { BsChatSquare,BsBookmark } from "react-icons/bs";
import { TbLocation } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import { Link } from "react-router-dom"


const Sidebar = () => {

    const menu =[
        {
            header: "general"
        },
        {
            name: 'home',
            url:'/',
            icon:<GrHomeRounded />
        },
        {
            name: 'recently updated',
            url:'/',
            icon:<PiClockClockwise />
        },
        {
            name: 'categories',
            url:'/',
            icon:<PiFolderThin />
        },
        {
            name: 'FAC',
            url:'/',
            icon:<BsChatSquare />
        },
        {
            header: "personal"
        },
        {
            name: 'bookmarks',
            url:'/',
            icon:<BsBookmark />
        },
        {
            name: 'update request',
            url:'/',
            icon:<TbLocation />
        },
        {
            name: 'settings',
            url:'/',
            icon:<IoSettingsOutline />
        },
    ]

  return (
    <div className=" w-[20%] h-full bg-gray-100 pt-24 hidden md:block">

        {menu.map(((item,index)=>{
            if(item.header){
                return (
                    <h2 key={index} className=" uppercase mb-5 text-sm font-semibold mx-5 text-gray-500">{item.header}</h2>
                )
            }else{
                return <Link key={index} to={item.url} className=" flex items-center px-5 py-2 hover:bg-red-800 hover:text-white w-11/12 rounded-e-md mb-3 capitalize font-normal" > <span className=" mr-3 capitalize">{item.icon}</span> {item.name}</Link>
            }
        }))}
    </div>
  )
}

export default Sidebar