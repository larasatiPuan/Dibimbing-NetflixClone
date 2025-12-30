import React from 'react'

export default function Footer() {
  return (
        <div className="flex justify-center py-10 w-svw">
        <div data-type="HomePage" className="flex flex-col items-start gap-3 pb-1 ">
            <div className="inline-flex items-center justify-start gap-4 ">
            <div className="">
                <img src="./Assets/Facebook.png" className="" alt="" />
            </div>
            <div className="">
                <img src="./Assets/Instagram.png" alt="" />
            </div>
            <div className="">
                <img src="./Assets/Twitter.png" alt="" />
            </div>
            <div className="">
                <img src="./Assets/YouTube.png" alt="" />
            </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-5">
            <div className="flex flex-col items-start justify-start gap-8">
                {/* link  */}
                <div className="flex flex-col items-start justify-start w-full gap-4">
                <div className="inline-flex items-start justify-start gap-3 w-svw max-w-[980px]">
                    <a
                    href=""
                    className="justify-start flex-1 text-xs font-normal leading-4 text-zinc-500 hover:text-zinc-200"
                    >
                    Audio Description
                    </a>
                    <a
                    href=""
                    className="justify-start flex-1 text-xs font-normal leading-4 text-zinc-500 hover:text-zinc-200"
                    >
                    Help Center
                    </a>
                    <a
                    href=""
                    className="justify-start flex-1 text-xs font-normal leading-4 text-zinc-500 hover:text-zinc-200"
                    >
                    Gift Cards
                    </a>
                    <a
                    href=""
                    className="justify-start flex-1 text-xs font-normal leading-4 text-zinc-500 hover:text-zinc-200"
                    >
                    Media Center
                    </a>
                </div>
                <div className="inline-flex items-start justify-start gap-3 w-svw max-w-[980px]">
                    <a
                    href=""
                    className="justify-start flex-1 text-xs font-normal leading-4 text-zinc-500 hover:text-zinc-200"
                    >
                    Investor Relations
                    </a>
                    <a
                    href=""
                    className="justify-start flex-1 text-xs font-normal leading-4 text-zinc-500 hover:text-zinc-200"
                    >
                    Jobs
                    </a>
                    <a
                    href=""
                    className="justify-start flex-1 text-xs font-normal leading-4 text-zinc-500 hover:text-zinc-200"
                    >
                    Netflix Shop
                    </a>
                    <a
                    href=""
                    className="justify-start flex-1 text-xs font-normal leading-4 text-zinc-500 hover:text-zinc-200"
                    >
                    Terms of Use
                    </a>
                </div>
                <div className="inline-flex items-start justify-start gap-3 w-svw max-w-[980px]">
                    <a
                    href=""
                    className="justify-start flex-1 text-xs font-normal leading-4 text-zinc-500 hover:text-zinc-200"
                    >
                    Privacy
                    </a>
                    <a
                    href=""
                    className="justify-start flex-1 text-xs font-normal leading-4 text-zinc-500 hover:text-zinc-200"
                    >
                    Legal Notices
                    </a>
                    <a
                    href=""
                    className="justify-start flex-1 text-xs font-normal leading-4 text-zinc-500 hover:text-zinc-200"
                    >
                    Cookie Preferences
                    </a>
                    <a
                    href=""
                    className="justify-start flex-1 text-xs font-normal leading-4 text-zinc-500 hover:text-zinc-200"
                    >
                    Corporate Information
                    </a>
                </div>
                <div className="inline-flex items-start justify-start gap-3 w-svw max-w-[980px]">
                    <a
                    href=""
                    className="justify-start flex-1 text-xs font-normal leading-4 text-zinc-500 hover:text-zinc-200"
                    >
                    Contact Us
                    </a>
                    <a
                    href=""
                    className="justify-start flex-1 text-xs font-normal leading-4 text-zinc-500 hover:text-zinc-200"
                    >
                    Do Not Sell or Share My Personal
                    <br />
                    Information
                    </a>
                    <a
                    href=""
                    className="justify-start flex-1 text-xs font-normal leading-4 text-zinc-500 hover:text-zinc-200"
                    >
                    Ad Choices
                    </a>
                    <div className="justify-start flex-1 text-xs font-normal leading-4 text-zinc-500">
                    {" "}
                    </div>
                </div>
                </div>
                {/* button */}
                <button className="hover:cursor-pointer justify-start text-xs font-normal leading-4 text-zinc-500 w-24 h-8 p-2.5 outline outline-1 outline-offset-[-1px] outline-zinc-500 hover:outline-zinc-200 hover:bg-zinc-500 hover:text-white">
                Service Code
                </button>
            </div>
            <div className="justify-start w-64 text-xs font-normal text-zinc-500">
                © 1997 - 2024 Netflix, Inc.
            </div>
            </div>
        </div>
        </div>
  )
}
