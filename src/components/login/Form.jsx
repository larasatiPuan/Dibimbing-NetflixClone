import React, { useState } from 'react'


export default function Form() {

const loginHandler = () => {
    
    // Create Request Token
    const optionsToken = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNTMzMTMzYTBiY2YwY2UzMjBhMzUzMzJmNzdiZDVkZiIsIm5iZiI6MTc2NzAyMTAxNi44MDcwMDAyLCJzdWIiOiI2OTUyOTlkODQ2NmMzOTY2Yjk3MGZhMjgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.swM4phsAYMyYukkr8T_idMWhkZ3jBwh0f1KIjywmZ2g'
    }
    };

    fetch('https://api.themoviedb.org/3/authentication/token/new', optionsToken)
    .then(res => res.json())
    .then(res => {
        if (!res.success) {
        alert("Gagal ambil request token");
        return;
        }

        window.location.href =
        `https://www.themoviedb.org/authenticate/${res.request_token}?redirect_to=${encodeURIComponent("http://localhost:5173/auth")}`;
    });
}

  return (
        <div className="mx-auto rounded max-w-[25rem] bg-black/60 px-[68px] mb-20">
            <div className="flex justify-center gap-5 py-[48px] ">
            <div className="flex flex-col items-start justify-start gap-7">
                <div className="justify-center text-3xl font-medium leading-10 text-white w-80">
                log In
                </div>
                <div
                className="flex flex-col items-center justify-start w-full gap-4"
                >
                    {/* button */}
                    <button
                        className="justify-center w-full gap-4 px-6 py-3 text-base font-medium leading-6 text-center text-white bg-red-600 rounded line-clamp-1 hover:cursor-pointer"
                        onClick={loginHandler}
                    >
                        Login with TMDB
                    </button>
                </div>

                <div className="w-full text-xs font-normal leading-4 text-zinc-500">
                This page is protected by Google reCAPTCHA to ensure you’re not a bot.{" "}
                <a href="" className="text-xs font-normal leading-4 text-blue-600">
                    Learn more.{" "}
                </a>{" "}
                </div>
            </div>
            </div>
        </div>
  )
}
