import React from 'react'
import PosterCard from './PosterCard'

export default function FilmRank({heading = "Rank", status = false, datas = []}) {
  return (
    <>
    {/* heading */}
    <div className="relative w-56 h-4 mb-4">
        <div className="absolute top-0 left-0 justify-start text-xl font-medium leading-4 w-100 pl-14 text-neutral-200">
        {heading}
        </div>
    </div>
    {/* contents */}
      <div className="flex gap-4 overflow-x-auto px-14 scrollbar-hide  h-auto overflow-y-hidden ml-10">
        {datas.map((val, index) => (
          <PosterCard
            key={index}
            data={val}
            number={index}
          />
        ))}
      </div>
    </>
  )
}
