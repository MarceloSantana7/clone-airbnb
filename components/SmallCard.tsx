import Image from 'next/image';
import React from 'react'

export type ExploreData = {
  location: string;
  distance: string;
  img: string;
};

function SmallCard({img, location, distance}:ExploreData) {
  return (
    <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out">
      <div className='relative h-16 w-16'>
      <Image
      className="rounded-lg"
      src={img}
      alt={location}
      fill
      sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
      style={{objectFit:"contain"}}
      />
      </div>

      <div>
        <h2>{location}</h2>
        <h3 className="text-gray-500">{distance}</h3>
      </div>
    </div>
  )
}

export default SmallCard