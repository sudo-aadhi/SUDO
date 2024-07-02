import React from "react";
import SparkleButton from "../components/sparkle";

export function GridBackgroundDemo() {
  return (
    <div className="h-[50rem] w-full dark:bg-black bg-[#0E0F15] dark:bg-grid-white/[0.015] bg-grid-[#C0C0C0]/[0.05] relative flex items-center justify-center flex-col">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-white bg-[#0E0F15] [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)]"></div>
      <span className="flex flex-col items-center relative top-[-125px]">
        <span className="">
          <p className="text-4xl sm:text-5xl font-normal relative z-20 bg-clip-text bg-gradient-to-r from-[#3a3a3a] via-[#efefef] to-[#565656] text-transparent py-8">
            World's first full-fledged
          </p>
        </span>
        <span>
          <p className="top-[-40px] text-4xl sm:text-5xl font-medium relative z-20 text-transparent bg-gradient-to-r from-[#565656] via-[#ececec] to-[#565656] bg-clip-text py-8">
            DevOps and Cloud Learning Platform
          </p>
        </span>
        <span className="relative top-[-50px] text-[#909090] flex items-center flex-col">
          <p>
            Sudo is the pioneering website offering comprehensive courses on the
            topic
          </p>
          <p>Cloud computing and DevOps,empowering with essential skills.</p>
        </span>
      </span>
      <SparkleButton />
    </div>
  );
}
