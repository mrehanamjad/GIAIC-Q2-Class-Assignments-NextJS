import React from "react";
import WeatherCard from "./WeatherCard";

function page() {
  return (
    <div className="pt-20 max-md:pt-40 flex  flex-col gap-10">
      <h1 className="text-4xl font-bold m-10 max-md:text-center ">Class 5 assignment:</h1>
      <section className="w-full p-12 flex justify-center items-center flex-col bg-white/90 text-gray-900 gap-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-black">Section 1</h2>
          <p>
            Create a section containing Three cards of equal widths in a row.
          </p>
        </div>
        <div className="w-full flex justify-center items-center flex-wrap  gap-5">
          <WeatherCard imgSrc="https://cdn-icons-png.freepik.com/256/10531/10531657.png?semt=ais_hybrid" />
          <WeatherCard imgSrc="https://cdn-icons-png.freepik.com/256/4834/4834462.png?ga=GA1.1.1944218876.1730389044&semt=ais_hybrid"  textColor="text-white" bgColor="bg-cyan-600" />
          <WeatherCard imgSrc="https://cdn-icons-png.freepik.com/256/792/792508.png?semt=ais_hybrid" />
        </div>
      </section>
      <section className="w-full p-12 flex justify-center items-center flex-col bg-white/60 text-gray-900 gap-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-black">Section 2</h2>
          <p>
          Create a section containing two cards of equal widths in a row.
          </p>
        </div>
        <div className="w-full flex flex-wrap justify-center items-center  gap-5 ">
          <WeatherCard imgSrc="https://cdn-icons-png.freepik.com/256/10531/10531657.png?semt=ais_hybrid" />
          <WeatherCard imgSrc="https://cdn-icons-png.freepik.com/256/792/792508.png?semt=ais_hybrid" />
          
        </div>
      </section>
    </div>
  );
}

export default page;
