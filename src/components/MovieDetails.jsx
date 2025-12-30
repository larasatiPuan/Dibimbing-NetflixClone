import React, { useEffect, useState } from 'react'

export default function MovieDetails({data, setClick}) {
  const movie_id = data.id;
  const [item, setItem] = useState(null);

  const getDetailMovie = () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNTMzMTMzYTBiY2YwY2UzMjBhMzUzMzJmNzdiZDVkZiIsIm5iZiI6MTc2NzAyMTAxNi44MDcwMDAyLCJzdWIiOiI2OTUyOTlkODQ2NmMzOTY2Yjk3MGZhMjgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.swM4phsAYMyYukkr8T_idMWhkZ3jBwh0f1KIjywmZ2g'
      }
    };
  
    fetch(`https://api.themoviedb.org/3/movie/${movie_id}?language=en-US`, options)
      .then(res => res.json())
      .then(json => setItem(json))
      .catch(err => console.error(err));

    }
    
    useEffect(()=>{
      getDetailMovie();
    }, [])
    
    
    return (
    <>
      <div className="w-full max-w-[850px] aspect-[850/700] bg-neutral-900 rounded overflow-hidden fixed top-15 z-30 left-1/2 -translate-x-1/2">

        {/* PREVIEW */}
        <div className="absolute top-0 left-0 w-full aspect-[850/480]">

          {/* bg */}
          <img
            className="w-full h-full object-cover absolute inset-0"
            src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`}
            alt=""
          />

          {/* overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/0 to-neutral-900" />

          {/* close icon */}
          <div className="absolute right-2 top-2 flex justify-center items-center cursor-pointer"
              onClick={(e)=>{
                e.stopPropagation();
                setClick(false);
              }}
          >
            <div className="w-9 h-9 bg-neutral-900 rounded-full" />
            <img src="assets/icon/Plus.png" alt="" className="absolute -rotate-45" />
          </div>

          {/* title & buttons */}
          <div className="absolute left-0 bottom-12 px-5">
            <h1 className="mb-5 text-[clamp(2.5rem,6vw,4.5rem)] font-bold text-white text-shadow-lg">
              {item?.title}
            </h1>

            <div className="flex items-center gap-2">
              {/* play */}
              <div className="w-28 h-11 px-6 bg-white rounded flex items-center gap-3">
                <img src="/assets/icon/BlackTriangle.png" alt="" className="w-5 h-6" />
                <span className="text-black font-medium">Play</span>
              </div>

              {/* add */}
              <div className="relative w-10 h-10 bg-zinc-800 rounded-full border-2 border-white/50 flex items-center justify-center">
                <img src="/assets/icon/Plus.png" alt="" className="w-4 h-4" />
              </div>

              {/* thumbs */}
              <div className="relative w-10 h-10 bg-zinc-800 rounded-full border-2 border-white/50 flex items-center justify-center">
                <img src="/assets/icon/Thumbsup.png" alt="" className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM INFO */}
        <div className="absolute bottom-0 w-full h-[30%] px-6 py-4 flex gap-6">

          {/* left */}
          <div className="flex-1 min-w-0 flex flex-col gap-3">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-green-400">Rating</span>
              <span className="text-stone-300">{item?.vote_average}</span>
              <span className="px-1 text-xs border border-zinc-500 rounded text-neutral-200">HD</span>
            </div>

            <p className="text-white text-sm leading-relaxed max-w-[480px]">
              Years after retiring from their formidable ninja lives, a dysfunctional family must return to shadowy missions to counteract a string of looming threats.
            </p>
          </div>

          {/* right */}
          <div className="w-60 shrink-0 flex flex-col gap-2 text-sm">
            <p><span className="text-neutral-500">Movie Id : </span> <span className="text-white">{item?.id}</span></p>

            <p><span className="text-neutral-500">Genres:</span> <span className="text-white">
              {
                item?.genres?.map((val, index)=>(<span>{val.name} </span>))
              }
            </span></p>

            <p><span className="text-neutral-500">Popularity :</span> <span className="text-white">{item?.popularity}</span></p>
          </div>
        </div>
      </div>
      <div className='w-svw h-svh bg-neutral-600/10 backdrop-blur-sm fixed top-0 left-0 z-20' onClick={(e)=>{
          setClick(false);
          e.stopPropagation();
        }}></div>
    </>
  )
}
