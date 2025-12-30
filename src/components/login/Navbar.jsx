import React from 'react'

export default function Navbar() {
  return (
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
  )
}
