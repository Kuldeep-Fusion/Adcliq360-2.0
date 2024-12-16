"use client"
import React, { useState, useEffect  } from 'react';
import Customcss from "./Testimonial.module.css"
import { FaQuoteLeft } from "react-icons/fa6";

const testimonials = [
    {
      name: 'John Doe',
      position: 'CEO, Company X',
      text: 'What sets Adcliq360 apart is their commitment to staying ahead of industry trends and implementing cutting-edge technologies. The level of transparency and communication throughout our partnership has been exceptional, providing us with insights and regular updates on the performance of our campaigns',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Jane Smith',
      position: 'Marketing Head, Company Y',
      text: 'The best experience I’ve ever had with a digital marketing agency. Fantastic team!',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Emily Johnson',
      position: 'Product Manager, Company Z',
      text: 'We saw immediate results from their work. Would work with them again in a heartbeat!',
      image: 'https://via.placeholder.com/150',
    },
  ];
  
const Testimonial =() =>{
    const [currentIndex, setCurrentIndex] = useState(0);

    // Handle auto slide transition every 5 seconds
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000); // Change slide every 5 seconds
  
      return () => clearInterval(interval); // Cleanup the interval on component unmount
    }, []);
  
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };
  
    const prevSlide = () => {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
      );
    };
  
    return (
        <div>
            <h5 className={Customcss.title}>TESTIMONIAL</h5>
            <h4 className={Customcss.title2}>We are Creating lasting Bond.</h4>
            <p className={Customcss.pera}>At Adcliq360, we don’t just build your brand. We work closely with you to understand your business needs and goals and build long lasting bonds.</p>
      <div className="relative max-w-6xl mx-auto">
        {/* Testimonial Slide */}
        <div className="flex flex-col items-center p-6 text-white shadow-lg rounded-lg">
          <img
            src={testimonials[currentIndex].image}
            alt={testimonials[currentIndex].name}
            className="w-24 h-24 rounded-full border-4 border-gray-200"
          />
          <p className="mt-4 text-center italic">"{testimonials[currentIndex].text}"</p>
          <FaQuoteLeft className='text-orange-600 text-4xl mt-5' />
          <p className="mt-4 text-lg font-semibold">{testimonials[currentIndex].name}</p>
          <p className="text-sm">{testimonials[currentIndex].position}</p>
        </div>

        {/* Navigation Buttons */}
        <div className="absolute top-1/2 left-0 transform  p-2 text-white bg-gray-700 rounded-full cursor-pointer" onClick={prevSlide}>
          &#60;
        </div>
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 text-white bg-gray-700 rounded-full cursor-pointer" onClick={nextSlide}>
          &#62;
        </div>
      </div>
      </div>
    ); }
export default Testimonial;