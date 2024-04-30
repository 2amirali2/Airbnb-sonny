import {
  GlobeAltIcon,
  UserCircleIcon,
  UserIcon,
} from "@heroicons/react/16/solid"
import Image from "next/image"
import { BiMenu } from "react-icons/bi"

const Header = async () => {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      {/* Left */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src={"https://links.papareact.com/qd3"}
          alt=""
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      {/* Middle - Search */}
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-md">
        <input
          type="text"
          placeholder="Start your Search"
          className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder:text-gray-400"
        />
        {/* <FaSearch className="h-8 bg-red-400 text-white rounded-full cursor-pointer" /> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="hidden lg:inline-flex h-8 bg-red-400 text-white rounded-full cursor-pointer p-2 md:mx-2"
        >
          <path
            fillRule="evenodd"
            d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      {/* Right */}
      <div className="flex space-x-4 items-center justify-end text-gray-500">
        <p className="hidden lg:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex space-x-2 border-2 p-2 rounded-full">
          <BiMenu className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
        <UserIcon className="h-6" />
      </div>
    </header>
  )
}
export default Header
