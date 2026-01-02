import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const menu = ["Home", "Tv Shows", "Movies", "New & Popular", "My List", "Browse by Languages"];

export default function Navbar({active = "Home", avatar = "/assets/images/Profile.png"}) {

  // Profile
    const [profile, setProfile] = useState(null);
    const navigate = useNavigate();

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
    <div data-type="HomePgae" className="fixed z-50 inline-flex items-center justify-between w-full h-16 px-14 bg-gradient-to-b from-neutral-900 via-neutral-900/90 to-neutral-900/0">
        {/* left section */}
        <div className="flex items-center justify-start gap-11">
            {/* logo */}
            <div className="relative w-24 h-6">
                <img className="absolute top-0 left-0 w-24 h-6" src="/assets/logo/Netflix.png" alt='logo'/>
            </div>
            
            {/* menu : deskstop */}
            <div className="items-start justify-start hidden gap-5 lg:flex">
                {
                    menu.map((value, index)=>(
                        // Notes : Jika aktif menggunakan text-white font-medium
                        <a href='#' className="justify-center text-sm font-normal leading-4 text-neutral-200 hover:underline hover:underline-offset-4" key={index}>{value}</a>
                    ))
                }
            </div>
        </div>

        {/* right section */}
        <div className="flex justify-start items-center gap-3.5">
            {/* menu vertical - responsive */}
            <div className="w-9 h-8 py-0.5 flex justify-center items-start gap-2.5">
                <div className="relative w-5 h-5 lg:hidden">
                    <img src="/assets/icon/Menu-Vertical.png" alt="" />
                </div>
            </div>

            {/* search */}
            <div className="w-9 h-8 py-0.5 flex justify-center items-start gap-2.5">
                <div className="relative w-5 h-5">
                    <img src="/assets/icon/Search.png" alt=""/>
                </div>
            </div>

            {/* notification */}
            <div className="w-9 h-8 py-1 flex justify-center items-start gap-2.5">
                <img src="/assets/icon/Notification.png" alt=""/>
            </div>

            {/* profile */}
            <div data-size="Small" data-type="UserProfileMenu" className="flex items-center justify-between w-12 hover:cursor-pointer" onClick={()=>{navigate("/profile")}}>
                <div className="relative w-8 h-8 overflow-hidden bg-white rounded-sm">
                    <div data-size="Small" data-type="UserProfilePicture" className="absolute top-0 left-0 w-8 h-8">
                        <img
                        className="absolute top-0 left-0 w-8 h-8 rounded-sm"
                        src={
                            profile?.avatar?.tmdb?.avatar_path
                            ? `https://image.tmdb.org/t/p/original${profile.avatar.tmdb.avatar_path}`
                            : avatar
                        }
                        alt="profile"
                        />
                    </div>
                </div>
                <div className="w-2.5 h-1.5 relative">
                    <img src="/assets/icon/ArrowDown.png" alt=""/>
                </div>
            </div>
        </div>
    </div>
  )
}
