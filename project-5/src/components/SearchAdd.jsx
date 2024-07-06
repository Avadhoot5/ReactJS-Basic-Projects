import { IoSearchOutline } from "react-icons/io5";
import { FaPlusCircle } from "react-icons/fa";

function SearchAdd() {
  return (
    <div>
        <div className="flex justify-between gap-2 mb-3">
        <div className="relative flex items-center w-[85%]">
            <IoSearchOutline className="absolute text-white text-3xl ml-1"/>
            <input type="text" className="flex-grow bg-transparent 
            border border-white rounded-md h-10 text-white pl-10 "
            placeholder="Search Contact"/>
        </div>
            <FaPlusCircle className="text-white text-4xl cursor-pointer" />
        <div>
            </div>
        </div>
    </div>
  )
}

export default SearchAdd;

{/* <div class="flex items-center justify-center bg-gray-800">
        <form method="GET">
            <div class="relative text-gray-600 focus-within:text-gray-400">
            <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                <button type="submit" class="p-1 focus:outline-none focus:shadow-outline">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </button>
            </span>
            <input type="search" name="q" class="py-2 text-sm text-white bg-gray-900 rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900" placeholder="Search Contact" autocomplete="off"/>
            </div>
        </form>
        </div> */}