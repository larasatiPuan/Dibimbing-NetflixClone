import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Profile() {
    const [profile, setProfile] = useState(null);
    const navigate = useNavigate();

    const logOutHandler = async () => {
    try {
        const sessionId = localStorage.getItem("tmdb_session_id");
        if (!sessionId) {

        localStorage.removeItem("tmdb_session_id");
        localStorage.removeItem("tmdb_account_id");
        navigate("/"); // atau /login
        return;
        }

        const options = {
        method: "DELETE",
        headers: {
            accept: "application/json",
            "content-type": "application/json",
            Authorization: `Bearer Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNTMzMTMzYTBiY2YwY2UzMjBhMzUzMzJmNzdiZDVkZiIsIm5iZiI6MTc2NzAyMTAxNi44MDcwMDAyLCJzdWIiOiI2OTUyOTlkODQ2NmMzOTY2Yjk3MGZhMjgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.swM4phsAYMyYukkr8T_idMWhkZ3jBwh0f1KIjywmZ2g`,
        },
        body: JSON.stringify({ session_id: sessionId }),
        };

        const res = await fetch("https://api.themoviedb.org/3/authentication/session", options);
        const data = await res.json();

        if (!res.ok || data?.success !== true) {
        console.error("Logout failed:", data);
        alert("Logout gagal. Coba lagi ya.");
        return;
        }

        // bersihin state/token lokal
        localStorage.removeItem("tmdb_session_id");
        localStorage.removeItem("tmdb_account_id");
        // kalau kamu simpan user lain:
        // localStorage.removeItem("tmdb_user");

        navigate("/"); // atau /login
    } catch (err) {
        console.error(err);
        alert("Terjadi error saat logout.");
    }
    };


    useEffect(()=>{
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNTMzMTMzYTBiY2YwY2UzMjBhMzUzMzJmNzdiZDVkZiIsIm5iZiI6MTc2NzAyMTAxNi44MDcwMDAyLCJzdWIiOiI2OTUyOTlkODQ2NmMzOTY2Yjk3MGZhMjgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.swM4phsAYMyYukkr8T_idMWhkZ3jBwh0f1KIjywmZ2g'
            }
        };
    
        fetch('https://api.themoviedb.org/3/account/22599870', options)
        .then(res => res.json())
        .then(res => setProfile(res))
        .catch(err => console.error(err));
    }, [])

  return (
    <div className="w-svw h-svh relative overflow-hidden flex justify-center align-middle">
        <div className="absolute inline-flex flex-col justify-start items-center gap-16 top-1/2 -translate-y-1/2">
            <div className="flex flex-col justify-start items-center gap-8">
            <div className="justify-center text-white text-5xl font-normal ">Who’s watching?</div>

            <div className="inline-flex justify-center items-start gap-7" onClick={()=>(navigate("/homepage"))}>
                <div data-state="Default" data-type="UserProfileAvatar" className="inline-flex flex-col justify-start items-center gap-2.5">
                <div className="w-36 h-36 relative rounded overflow-hidden">
                    <div data-name="red" className="w-36 h-36 left-0 top-0 absolute">
                <img className="w-36 h-36 left-0 top-0 absolute rounded hover:cursor-pointer" src={profile?.avatar?.tmdb?.avatar_path? 
                `https://image.tmdb.org/t/p/original${profile.avatar.tmdb.avatar_path}`: "https://placehold.co/144x144"} 
                alt="avatar"
                />
                    </div>
                </div>
                <div className="self-stretch h-8 inline-flex justify-center items-start gap-2.5">
                    <div className="justify-center text-zinc-500 text-lg font-normal leading-5">{profile?.username}</div>
                </div>
                </div>
            </div>
            </div>
            <div data-state="Default" data-type="ManageProfile" className="w-44 h-10 p-2.5 outline outline-1 outline-offset-[-1px] outline-red-950 bg-red-800 inline-flex justify-between items-center">
            <div className="justify-center text-red-200 text-base font-normal hover:cursor-pointer" onClick={logOutHandler}>Log Out</div>
            </div>
        </div>
        <div className="w-svw h-16 left-0 top-0 absolute bg-gradient-to-b from-black/70 to-black/0" />
    </div>
  )
}
