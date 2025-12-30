import React from 'react'

export default function HeroSection() {
  return (
<>
  {/* 1: HERO SECTION */}
  <div className="relative h-[810px] ">
    <img
      alt="gambar"
      src="/assets/images/Hero.png"
      className="absolute inset-0 object-cover w-full h-full"
    />
    <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/20 to-black/0" />
    {/* hero - text */}
    <div className="relative z-20 flex items-center p-8 text-white h-svh">
      <div
        data-size="Medium"
        className="inline-flex flex-col items-start justify-start gap-5"
      >
        {/* judul dan deskripsi */}
        <div className="flex flex-col items-start justify-start gap-5 max-w-[518px] mb-6 sm:mb-0">
          <div data-size="Small2" className="relative h-52">
            <img
              className="absolute top-0 left-0 h-52 max-w-[518px]"
              src="/assets/images/Hero-Title.png"
            />
          </div>
          <div className="justify-center hidden h-16 text-base font-normal text-white sm:block">
            Years after retiring from their formidable ninja lives, a
            dysfunctional family must return to shadowy missions to counteract a
            string of looming threats.
          </div>
        </div>
        {/* button */}
        <div
          data-type="Play+MoreInfo"
          className="inline-flex justify-start items-center gap-2.5"
        >
          <div
            data-size="Medium"
            data-state="Default"
            data-type="Play"
            className="w-28 h-10 px-6 py-2 bg-white rounded inline-flex flex-col justify-center items-center gap-2.5 overflow-hidden"
          >
            <div className="inline-flex items-center justify-start gap-3">
              <div className="relative w-5 h-6 bg-white">
                <img src="/assets/icon/BlackTriangle.png" alt="" />
              </div>
              <div className="justify-center text-base font-medium leading-6 tracking-wide text-center text-black">
                Play
              </div>
            </div>
          </div>
          <div
            data-size="Medium"
            data-state="Default"
            data-type="MoreInfo"
            className="w-40 h-10 px-6 py-2 bg-neutral-500/70 rounded inline-flex flex-col justify-center items-center gap-2.5 overflow-hidden"
          >
            <div className="inline-flex items-center justify-start gap-3 w-28">
              <div className="relative flex justify-center items-center gap-2.5">
                <div className="w-6 h-6 border-2 border-white rounded-full" />
                <div className="left-[11px] top-[1px] absolute text-center justify-center text-white text-base font-medium leading-6">
                  i
                </div>
              </div>
              <div className="justify-center text-base font-medium leading-6 tracking-wide text-center text-white">
                More Info
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  {/* film label */}
  <div
    data-type="HeroBannerRating"
    className="sm:inline-flex justify-start items-center gap-4 absolute right-0 top-[31rem] hidden"
  >
    <div
      data-location="HeroImagePreview"
      data-state="Default"
      data-type="RepeatArrow"
      className="relative flex justify-center items-center gap-2.5"
    >
      <div className="relative border rounded-full w-9 h-9 bg-white/0 border-white/70">
        <img
          src="./Assets/ReplayLogo.png"
          className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          alt=""
        />
      </div>
    </div>
    <div className="w-32 h-9 pl-3.5 pr-12 py-2 bg-zinc-800/60 border-l-[3px] border-zinc-300 inline-flex justify-center items-center gap-2.5">
      <div className="justify-center text-base font-normal text-white ">
        TV-14
      </div>
    </div>
  </div>
  {/* gradasi warna */}
  
  <div className="h-32 -top-33 relative bg-linear-to-b from-neutral-900/0 via-neutral-900/50 to-neutral-900" />
</div>
</>

  )
}
