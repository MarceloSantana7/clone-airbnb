import React from 'react'
import Image from "next/image"
import {MagnifyingGlassIcon} from '@heroicons/react/24/solid'

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
      <div className="flex items-center border-2 rounded-full py-2">
        <input type="text" placeholder="Start your search" />
        <MagnifyingGlassIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer"/>
      </div>
      {/* Right */}
      <div></div>
    </header>
  )
}

export default Header