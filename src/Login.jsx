import React from 'react'

export default function Login() {
  return (
        <div className="bg-[url(/assets/images/Hero-Auth.png)] bg-cover">
        {/* NAVBAR */}
        <div
            data-type="LandingPage"
            className="h-24 px-12 pt-6 pb-7 flex justify-start items-start gap-[744px]"
        >
            <div data-size="Medium" data-type="Word" className="relative h-10 w-36">
            <img
                className="absolute top-0 left-0 h-10 w-36"
                src="/assets/logo/Netflix.png"
            />
            </div>
        </div>
        {/* LOGIN SECTION */}
        <div className="mx-auto rounded max-w-[25rem] bg-black/60 px-[68px] mb-20">
            <div className="flex justify-center gap-5 py-[48px] ">
            <div className="flex flex-col items-start justify-start gap-7">
                <div className="justify-center text-3xl font-medium leading-10 text-white w-80">
                Sign In
                </div>
                <form
                className="flex flex-col items-center justify-start w-full gap-4"
                action=""
                method="post"
                >
                {/* text field */}
                <input
                    type="text"
                    name=""
                    id=""
                    className="font-medium leading-6 text-stone-300 w-full h-14 pl-4 pr-6 py-2 bg-black/50 rounded outline outline-1 outline-offset-[-1px] outline-zinc-500 inline-flex justify-start items-center gap-4"
                    placeholder="Email or phone number"
                />
                <input
                    type="password"
                    name=""
                    id=""
                    className="font-medium leading-6 text-stone-300 w-full h-14 pl-4 pr-6 py-2 bg-black/50 rounded outline outline-1 outline-offset-[-1px] outline-zinc-500 inline-flex justify-start items-center gap-4"
                    placeholder="Password"
                />
                {/* button */}
                <button
                    type="submit"
                    className="justify-center w-full gap-4 px-6 py-3 text-base font-medium leading-6 text-center text-white bg-red-600 rounded line-clamp-1 hover:cursor-pointer"
                >
                    Sign In
                </button>
                <div className="justify-center text-base font-normal text-center text-white/70 ">
                    OR
                </div>
                <button className="justify-center w-full gap-4 px-6 py-3 text-base font-medium leading-6 text-center text-white rounded line-clamp-1 hover:cursor-pointer bg-white/20">
                    Use a Sign-In Code
                </button>
                <a href="" className="text-base font-normal text-white">
                    Forgot Password?
                </a>
                </form>
                <div className="flex flex-col items-start justify-start gap-4 w-80">
                <div
                    data-boolean="False"
                    data-name="RememberMe"
                    data-state="Default"
                    data-type="Checkbox"
                    className="inline-flex items-center justify-start gap-3"
                >
                    <input
                    type="checkbox"
                    name=""
                    id=""
                    className="w-4 h-4 bg-black border rounded-sm border-white/30"
                    />
                    <div className="justify-center text-base font-normal text-white ">
                    Remember me
                    </div>
                </div>
                <div className="text-base font-normal text-white/70">
                    New to Netflix?{" "}
                    <a href="" className="text-base font-medium leading-6 text-white">
                    Sign Up Now.
                    </a>
                </div>
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
        {/* FOOTER */}
        <div
            data-type="LandingPage"
            className="px-40 py-16 bg-black/60 flex justify-center items-start gap-2.5 overflow-hidden w-svw"
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
        </div>
  )
}
