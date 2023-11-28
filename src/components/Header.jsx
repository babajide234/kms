import Buttons from "./Buttons"
import { IoMdNotificationsOutline } from "react-icons/io";
const Header = () => {
  return (
    <div className=" flex items-center justify-between mb-10">
        <div className=" w-full md:flex-grow">
            <h1 className=" font-bold text-4xl mb-1">Home</h1>
            <p className=" capitalize text-gray-500">Welcome to the KMS <span className=" font-bold text-gray-900">Ademola</span> start exploring</p>
        </div>
        <div className="hidden md:block">
            <Buttons type={'icon'} variant={'accent'} >
                <IoMdNotificationsOutline/>
            </Buttons>
        </div>
    </div>
  )
}

export default Header