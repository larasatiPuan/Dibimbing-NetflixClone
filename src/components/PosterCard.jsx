import React, { useState } from 'react'
import MovieDetails from './MovieDetails';

export default function PosterCard({data = null, number = 0, status=false}) {
    let date = new Date(data.release_date);
    let year = date.getFullYear(); 

    let [click, setClick] = useState(false);

    console.log(data);

  return (
        <div className="relative w-28 h-40 bg-cover bg-center rounded-sm shrink-0 group"
             style={{ backgroundImage:`url(https://image.tmdb.org/t/p/original/${data.poster_path})`, marginRight:number<8? "4rem":"10rem" }}
             onClick={()=>(setClick(true))}
        >
            <div className="absolute text-[204px] font-bold right-19 -bottom-19 -z-10">
            <h1 className="[-webkit-text-stroke:3px_rgba(255,255,255,0.3)] text-black/0">
                {number+1}
            </h1>
            </div>
            <div className="w-2 h-4 left-[5px] top-[5px] absolute">
            <img
                className="absolute top-0 left-0 w-2 h-4"
                src="./Assets/Netflix_Mini.png"
            />
            </div>

            {status? 
                <div
                data-size="Medium"
                data-type="RecentlyAdded"
                className="pl-1.5 pr-1 py-0.5 bg-red-600 rounded-tl-sm rounded-tr-sm inline-flex justify-center items-center absolute gap-2.5 bottom-0 left-1/2 -translate-x-1/2 w-24"
                >
                <div className="justify-start text-white text-[10px] font-medium bottom-0">
                    Recently Added
                </div>
                </div>:
                null
            }

            <div className='w-full h-full z-20 absolute bg-neutral-900/60 transition-all delay-200 duration-500 text-white group-hover:top-0 top-40'>
                <h5 className='font-bold text-center'>{data.title} <br /> ({year})</h5>
            </div>
            
            {
                click? <MovieDetails data={data} setClick={setClick}/>:null
            }
        </div>
  )
}
