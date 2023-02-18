import React from 'react'
import Image from 'next/image'

function Banner() {
  return (
    <div className='relative h-[300px]'>
        <Image
        src="https://links.papareact.com/0fm"
        fill
        style={{objectFit:"cover"}}
        alt="Logo"
        />
    </div>
  )
}

export default Banner