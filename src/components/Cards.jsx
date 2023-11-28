import { PiFolderThin } from "react-icons/pi";
import { BsThreeDots } from "react-icons/bs";

const Cards = ({modal}) => {
  return (
    <div className=" w-full border border-gray-200 bg-slate-50 rounded-lg p-2 group">
            <div className="flex items-center justify-between gap-3 mb-3">
              <div className=" flex items-center">
                <div className=" bg-red-200 rounded-md w-8 h-8 flex items-center justify-center mr-2 ">
                    <PiFolderThin/>
                </div>
                <h2 className="capitalize font-semibold text-lg">new employee guide</h2>
              </div>
              <button onClick={modal} className=" w-8 h-8 hover:bg-gray-200 rounded-full flex items-center justify-center"><BsThreeDots /></button>
            </div>
            <p className=" text-[10px] text-gray-700 mb-3 group-hover:text-gray-950">Lorem ipsum dolor sit, amet consectetur adipisicing elit. At nemo sint reprehenderit, ipsam commodi dolorum perferendis quis iusto ipsa fugiat labore ratione voluptatem fuga quia, debitis autem quam id unde!</p>
            <div className="flex justify-between items-center">
              <ul className="flex gap-1 items-center justify-between">
                <li className=" text-[10px] text-red-800">50 documents</li>
                <li className=" text-[10px] text-red-800">10 articles</li>
                <li className=" text-[10px] text-red-800">50 videos</li>
              </ul>
              <span className=" text-[10px] text-gray-600">edited 2 months ago</span>
            </div>
          </div>
  )
}

export default Cards