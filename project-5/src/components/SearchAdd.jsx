import { IoSearchOutline } from "react-icons/io5";
import { FaPlusCircle } from "react-icons/fa";


function SearchAdd({onOpen, filterContacts}) {

  return (
    <div>
        <div className="flex justify-between gap-2 mb-3">
        <div className="relative flex items-center w-[85%]">
            <IoSearchOutline className="absolute text-white text-3xl ml-1"/>
            <input onChange={filterContacts} type="text" className="flex-grow bg-transparent 
            border border-white rounded-md h-10 text-white pl-10 items-center"
            placeholder="Search Contact"/>
        </div>
            <FaPlusCircle onClick={onOpen} className="text-white text-4xl cursor-pointer" />
        <div>
            </div>
        </div>
    </div>
  )
}

export default SearchAdd;

