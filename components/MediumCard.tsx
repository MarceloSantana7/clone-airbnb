import React from 'react'
import Image from 'next/image'

type CardsData = {
  img: string;
  title: string;
};

function MediumCard({img, title}:CardsData) {
  return (
    <div className='cursor-pointer hover:scale-105 transform transition duration-300 ease-out'>
      <div className="relative h-80 w-80">
        <Image
        src={img}
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        style={{objectFit:"contain"}}
        className="rounded-xl"
        />
      </div> 
      <h3 className="text-2xl mt-3">{title}</h3>           
    </div>
  )
}

export default MediumCard