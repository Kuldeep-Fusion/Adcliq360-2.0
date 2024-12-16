import React from "react";
import { Button } from "./ui/button";
import WordRotate from "./ui/word-rotate";
import { PiCellSignalHighBold } from "react-icons/pi";
const HeroSection = () => {
  return (
    <div className="relative h-screen items-center">
      <video
        className="absolute top-0 left-0 w-full h-[95vh] object-cover z-0"
        autoPlay
        loop
        muted
      >
        <source src="/assets/bgv2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
       <div className="absolute top-0 left-0 w-full h-[95vh] bg-black opacity-80"></div>
     <div className="container z-10 relative m-auto items-start h-[90vh] flex flex-col justify-center gap-4">
      <h1 className=" text-white text-8xl font-medium leading-[7rem] ">Connect.<hr className="w-[28rem]"/> 
Collaborate.<br></br> 
Success. </h1>
<div className="flex items-center text-4xl text-white font-bold gap-5 ps-10">We Deal in <WordRotate
      className="text-4xl font-bold text-orange-600 p-2"
      words={["Word", "Rotate"]}
    /></div>

<Button>Grow Business <PiCellSignalHighBold /></Button>
     </div>
     
    </div>
  );
};

export default HeroSection;
