import React from 'react'
import Image from "next/image"
import {MagnifyingGlassIcon, GlobeAltIcon, Bars4Icon, UserCircleIcon} from '@heroicons/react/24/solid'

function Header() {
  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5 px-5 md:px-10'>
      {/* Left */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
        src="https://links.papareact.com/qd3"
        fill
        style={{objectFit:"contain", objectPosition:"left"}}
        alt="Logo"
        />
      </div>
      {/* Middle */}
      <div className="flex items-center rounded-full py-2 md:border-2 md:shadow-sm">
        <input className="flex-grow pl-5 outline-0 bg-transparent text-sm text-gray-600 placeholder-gray-400" type="text" placeholder="Start your search" />
        <MagnifyingGlassIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2"/>
      </div>
      {/* Right */}
      <div className='flex items-center space-x-4 justify-end text-gray-500'>
        <p className='hidden md:inline cursor-pointer'>Become a host</p>
        <GlobeAltIcon className='h-6 cursor-pointer'/>
        <div className="flex items-center space-x-1 border-2 p-1 rounded-full">
          <Bars4Icon className="h-6"/>
          <UserCircleIcon className="h-6"/>
        </div>
      </div>
    </header>
  )
}

export default Header