import React from 'react'
import Card from './Card'

export default function FilmList({heading = "Films", datas}) {
  return (
    <>
    {/* heading */}
    <div className="relative w-56 h-4">
        <div className="absolute top-0 left-0 justify-start w-56 text-xl font-medium leading-4 pl-14 text-neutral-200">
        {heading}
        </div>
    </div>
    {/* contents */}
    <div className="inline-flex justify-start items-center gap-1.5 overflow-x-auto scrol h-44 scrollbar-hide w-lvw pl-14">

        {/* cards */}
        
        {
        datas?.map((data, index)=>(
          <Card data={data}/>
        ))
        }
    </div>
    </>
  )
}
