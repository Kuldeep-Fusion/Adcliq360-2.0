import Brand from "@/components/Brand"
import HeroSection from "@/components/HeroSection"
import ServiceAbout from "@/components/ServiceAbout"
import ServiceCard from "@/components/ServiceCard"
import Testimonial from "@/components/Testimonial"
import { Button } from "@/components/ui/button"
import Image from "next/image"
export default function Home() {
  return (
    <>
    <HeroSection/>
    <h1 className="container m-auto capitalize text-white text-center text-5xl font-bold pb-16 pt-2  ">Our services</h1>
   <div className=" flex justify-center gap-[1rem] m-auto flex-wrap">
      <ServiceCard 
        img="/Home-Organic.png" // If local, store in 'public/images'
        title="ORGANIC"
        pera="Organic growth, authentic results online."
      />
      <ServiceCard 
        img="/Home-Development.png"
        title="DEVELOPMENT"
        pera="Your vision, our code."
      />
       <ServiceCard 
        img="/Home-Media.png"
        title="MEDIA BUYING"
        pera=" Your message, the right place, the right time"
      />
      <ServiceCard 
        img="/Home-Advertising.png"
        title="ADVERTISING"
        pera="Innovative campaigns that stand out."
      />
      <ServiceCard 
        img="/Home-Performance.png"
        title="PERFORMANCE"
        pera="Measurable results, scalable growth."
      />
   </div>
 <ServiceAbout className="mt-5 mb-2 " />
 <Button className="m-auto flex justify-center">Lets Connect</Button>
 <h2 className="text-white text-center m-14 font-medium capitalize text-3xl">
 Trusted By The Fastest Growing Brands In Rapidly Developing Economies
 </h2>
 <Brand/>
 <Testimonial/>
 <div className="h-screen flex justify-center items-center bg-black">
      <Image
        src="/strategy.png"
        alt="about adcliq360"
        layout="intrinsic" // Ensures image scales properly
        width={800} // Set desired width
        height={800} // Set desired height
        className="object-contain"
      />
    </div>
    <h4 className="container m-auto capitalize text-orange-500 text-center text-5xl font-bold pb-16 pt-2  ">Our Mode Of Works</h4>
    </>
  )
}
