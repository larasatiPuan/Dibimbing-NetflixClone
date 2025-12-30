import React from 'react'

export default function Footer() {
  return (
        <div
            data-type="LandingPage"
            className="px-40 py-16 bg-black/60 flex justify-center items-start gap-2.5 overflow-hidden w-svw absolute bottom-0"
        >
            <div className="w-2/3">
            <div className="max-w-[1104px] w-full flex flex-col justify-start items-start gap-6 ">
                <div className="justify-start">
                <span className="text-base font-normal text-zinc-400 ">
                    Questions? Call{" "}
                </span>
                <span className="text-base font-normal leading-5 underline text-zinc-400">
                    1-844-505-2993
                </span>
                </div>
                <div className="flex flex-col items-start justify-start w-full gap-5">
                <div className="inline-flex items-start justify-start w-full gap-3">
                    <a
                    href=""
                    className="justify-start w-1/4 text-sm font-normal leading-4 underline text-zinc-400 hover:text-zinc-200"
                    >
                    FAQ
                    </a>
                    <a
                    href=""
                    className="justify-start w-1/4 text-sm font-normal leading-4 underline text-zinc-400 hover:text-zinc-200"
                    >
                    Help Center
                    </a>
                    <a
                    href=""
                    className="justify-start w-1/4 text-sm font-normal leading-4 underline text-zinc-400 hover:text-zinc-200"
                    >
                    Netflix Shop
                    </a>
                    <a
                    href=""
                    className="justify-start w-1/4 text-sm font-normal leading-4 underline text-zinc-400 hover:text-zinc-200"
                    >
                    Terms of Use
                    </a>
                </div>
                <div className="inline-flex items-start justify-start w-full gap-3">
                    <a
                    href=""
                    className="justify-start w-1/4 text-sm font-normal leading-4 underline text-zinc-400 hover:text-zinc-200"
                    >
                    Privacy
                    </a>
                    <a
                    href=""
                    className="justify-start w-1/4 text-sm font-normal leading-4 underline text-zinc-400 hover:text-zinc-200"
                    >
                    Cookie Preferences
                    </a>
                    <a
                    href=""
                    className="justify-start w-1/4 text-sm font-normal leading-4 underline text-zinc-400 hover:text-zinc-200"
                    >
                    Corporate Information
                    </a>
                    <a
                    href=""
                    className="justify-start w-1/4 text-sm font-normal leading-4 underline text-zinc-400 hover:text-zinc-200"
                    >
                    Do Not Sell or Share My Personal Information
                    </a>
                </div>
                <div className="inline-flex items-start justify-start w-full gap-3">
                    <a
                    href=""
                    className="justify-start w-1/4 text-sm font-normal leading-4 underline text-zinc-400 hover:text-zinc-200"
                    >
                    Ad Choices
                    </a>
                </div>
                </div>
            </div>
            </div>
        </div>
  )
}
