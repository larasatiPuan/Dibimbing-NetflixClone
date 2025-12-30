import React, { useState } from 'react'
import MovieDetails from './MovieDetails';

export default function Card({data}) {
   let date = new Date(data.release_date);
   let year = date.getFullYear(); 
   let [click, setClick] = useState(false);

  return (
    <>
        <div className="relative w-56 h-32 rounded-sm bg-[url(https://placehold.co/11x20)] bg-cover bg-center shrink-0 overflow-hidden group" 
        style={{backgroundImage: `url(https://image.tmdb.org/t/p/w500/${data.backdrop_path})`,}}
        onClick={()=>(setClick(true))}
        >
            <div
                data-size="Medium"
                data-type="RecentlyAdded"
                className="z-10 pl-1.5 pr-1 py-0.5 left-1/2 bottom-0 -translate-x-1/2 absolute bg-red-600 rounded-tl-sm rounded-tr-sm inline-flex justify-center items-center gap-2.5"
            >
                <div className="justify-start text-white text-[10px] font-medium">
                Recently Added
                </div>
            </div>

            <div
                data-size="Small"
                data-type="Letter"
                className="w-2.5 h-5 left-1.5 top-1.5 absolute"
            >
                <img
                className="w-2.5 h-5 left-0 top-0 absolute"
                src="./Assets/Netflix_Mini.png"
                />
            </div>
            <div className='w-full h-full z-20 absolute bg-neutral-900/60 transition-all delay-200 duration-500 text-white group-hover:top-0 top-32'>
                <h5 className='font-bold text-center'>{data.title} <br /> ({year})</h5>

            </div>
        </div>

        
        {click? <MovieDetails data={data} setClick={setClick}/>:null}
        
    </>

        
  )
}
