"use client"

import {
  GlobeAltIcon,
  UserCircleIcon,
  UserIcon,
  UsersIcon,
} from "@heroicons/react/16/solid"
import Image from "next/image"
import { useState } from "react"
import { BiMenu } from "react-icons/bi"
import "react-date-range/dist/styles.css" // main css file
import "react-date-range/dist/theme/default.css" // theme css file
import { DateRangePicker } from "react-date-range"
import { useRouter, useSearchParams } from "next/navigation"
import Link from "next/link"


interface Props {
  placeholder?: string
}

const Header = ({ placeholder }: Props) => {
  const [searchInput, setSearchInput] = useState("")
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const [noOfGuests, setNoOGuests] = useState(1)
  const router = useRouter()
  // const searchParams = useSearchParams()

  const handleSelect = (ranges: any) => {
    setStartDate(ranges.selection.startDate)
    setEndDate(ranges.selection.endDate)
  }

  const resetInput = () => {
    setSearchInput("")
  }

  // const search = () => {
  //   router.push(`/search`)
  // }

  const selectionRange = {
    startDate,
    endDate,
    key: "selection",
  }

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      {/* Left */}
      <div
        className="relative flex items-center h-10 cursor-pointer my-auto"
        onClick={() => router.push("/")}
      >
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
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          type="text"
          placeholder={placeholder || "Start your Search"}
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

      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
          />
          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl flex-grow font-semibold">
              Number of Guests
            </h2>
            <UsersIcon className="h-5" />
            <input
              type="number"
              className="w-12 pl-2 text-lg outline-none text-red-400"
              value={noOfGuests}
              onChange={(e) => setNoOGuests(e.target.value as any)}
              min={1}
            />
          </div>
          <div className="flex">
            <button className="flex-grow text-gray-500" onClick={resetInput}>
              Cancel
            </button>
            <button className="flex-grow text-red-400">
              <Link href={{
                pathname: "/search",
                query: {
                  location: searchInput,
                  startDate: startDate.toISOString(),
                  endDate: endDate.toISOString(),
                  noOfGuests,
                }
              }}>Search</Link>
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
export default Header