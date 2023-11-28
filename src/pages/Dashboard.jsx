import Cards from "../components/Cards";
import Header from "../components/Header"
import { IoSearch } from "react-icons/io5";
import Modal from "../components/Modal";
import { useState } from "react";
import Buttons from "../components/Buttons";
import { FiMail } from "react-icons/fi";

const Dashboard = () => {

  const [open, setOpen]=useState(false);
  const myArray = Array.from({ length: 20 }, (_, index) => index + 1);

  return (
    <div className=" w-full">
      <Header/>
      <div className=" flex flex-col md:flex-row md:items-center justify-between">
        <div className=" bg-gray-100 rounded-full w-full mb-3 md:mb-0 px-1 py-2 flex items-center justify-between md:gap-3">
          <button className=" text-md md:text-lg  md:flex px-2 md:px-5 py-1 hover:bg-red-800 rounded-full hover:text-white">All</button>
          <button className=" text-md md:text-lg  md:flex px-2 md:px-5 py-1 hover:bg-red-800 rounded-full hover:text-white">Organization</button>
          <button className=" text-md md:text-lg  md:flex px-2 md:px-5 py-1 hover:bg-red-800 rounded-full hover:text-white">Department</button>
          <button className=" text-md md:text-lg  md:flex px-2 md:px-5 py-1 hover:bg-red-800 rounded-full hover:text-white">Role</button>
        </div>
        <div className=" bg-slate-100 rounded-full flex items-center px-4 py-2 focus-within:border border-red-800  md:w-[300px]">
          <IoSearch className="mr-2 text-xl text-red-800"/>
          <input type="text" className=" flex-grow bg-slate-100 focus:outline-none " />
        </div>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-3 py-10 gap-5">
        {
          myArray.map((item,index)=>
            <Cards key={index} modal={()=> setOpen(!open)}/>
          )
        }
      </div>
      <Modal isOpen={open} onClose={()=> setOpen(!open)} >
          <div className=" border-b border-gray-300 py-3">
            <h2 className=" text-2xl font-semibold">Share</h2>
          </div>
          <div className=" py-5">
            <div className=" mb-5">
              <ul className=" flex items-center ">
                <li className=" py-2 px-2 text-md border-b-2 border-red-800 hover:cursor-pointer">Send as mail</li>
                <li className=" py-2 px-2 text-md hover:border-b-2 border-red-800 hover:cursor-pointer">Share in-app</li>
                <li className=" py-2 px-2 text-md hover:border-b-2 border-red-800 hover:cursor-pointer">Generate link</li>
              </ul>
            </div>
            <div className=" border border-gray-300 rounded-md py-2 flex items-center px-3">
              <FiMail className=" text-xl text-gray-400 mr-2"/>
              <input type="text" className=" outline-none flex-grow" placeholder="" />
            </div>
          </div>
          <div className=" flex justify-end">
            <Buttons variant={'primary'} type={'md'} >Button</Buttons>
          </div>
      </Modal>
    </div>
  )
}

export default Dashboard