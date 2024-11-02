"use client";
import React, { useState } from "react";
import Container from "./Container";
import Link from "next/link";
import CarCard from "@/components/CarCard";
import { FaAngleLeft,FaAngleRight } from "react-icons/fa6";

function Featuring() {
  const [active, setActive] = useState(1);

  const popularCars = [
    {
      title: "Toyota Carola 119",
      price: "PKR 59.7 - 75.5 lacs",
      imageSrc: "https://cache1.pakwheels.com/system/car_generation_pictures/5361/medium/Corolla-X-Cars-Cropped-Pictures-for-Website.jpg?1606903674",
      reviews: 622,
      isStarRating: true,
      pageLink:'/popular/toyotaCorolla'
    },
    {
      title: "Suzuki Alto",
      price: "PKR 23.3 - 30.5 lacs",
      imageSrc: "https://cache4.pakwheels.com/system/car_generation_pictures/6013/medium/Suzuki_Alto_-_PNG.png?1635945100",
      reviews: 199,
      isStarRating: true,
      pageLink:'/popular/suzukiAlto'
    },
    {
      title: "Hyunda City",
      price: "PKR 46.5 - 58.5 lacs",
      imageSrc: "https://cache1.pakwheels.com/system/car_generation_pictures/6425/medium/Honda_City_Front.jpg?1651424945",
      reviews: 456,
      isStarRating: true,
      pageLink:'/popular/hyundaCity'
    },
    {
      title: "Honda Civic",
      price: "PKR 86.6 - 99.0 lacs",
      imageSrc: "https://cache4.pakwheels.com/system/car_generation_pictures/7370/medium/Cover.jpg?1677570254",
      reviews: 359,
      isStarRating: true,
      pageLink:'/popular/hondaCivic'
    },
  ];

  const upcomingCars = [
    {
        title: "2024 Chery Tiggo 8 Pro",
      price: "Call For Price",
      imageSrc: 'https://cache3.pakwheels.com/system/car_generation_pictures/7659/medium/Capture-1.PNG?1705921074',
      reviews: 100,
      isStarRating: false,
    },
    {
        title: "2024 BYD Sealian 6",
      price: "Call For Price",
      imageSrc: 'https://cache3.pakwheels.com/system/car_generation_pictures/7747/medium/Sealion_Phev.png?1723031680',
      reviews: 100,
      isStarRating: false,
    },
    {
        title: "2024 DFSK Glory 500",
      price: "Call For Price",
      imageSrc: 'https://cache4.pakwheels.com/system/car_generation_pictures/6046/medium/Glory_500_-_PNG.png?1637072458',
      reviews: 100,
      isStarRating: false,
    },
    {
        title: "2024 MG 5",
      price: "Call For Price",
      imageSrc: 'https://cache1.pakwheels.com/system/car_generation_pictures/6055/medium/5_-_PNG.png?1637143311',
      reviews: 100,
      isStarRating: false,
    },
  ]

  const newlyLaunchedCars = [
    {
        title: "KIA EV5",
      price: "PKR 1.85 - 2.35 crore",
      imageSrc: 'https://cache1.pakwheels.com/system/car_generation_pictures/7776/medium/Untitled-design--72--removebg-preview.png?1729836713',
      reviews: 100,
      isStarRating: false,
    },
    {
        title: "Hyundai Elantra",
      price: "PKR 97.0 lacs",
      imageSrc: 'https://cache2.pakwheels.com/system/car_generation_pictures/7778/medium/Front_Left_View.jpg?1729860896',
      reviews: 100,
      isStarRating: false,
    },
    {
        title: "BYD Seal",
      price: "PKR 1.48 - 1.7 crore",
      imageSrc: 'https://cache2.pakwheels.com/system/car_generation_pictures/7761/medium/BYD_SEAL_%281%29.png?1723805307',
      reviews: 100,
      isStarRating: false,
    },
    {
        title: "BYD Atto 3",
      price: "PKR 89.9 lacs",
      imageSrc: 'https://cache4.pakwheels.com/system/car_generation_pictures/7748/medium/BYD_Atto_3.png?1723095036',
      reviews: 100,
      isStarRating: false,
    },
  ]

  return (
    <Container>
      <div className="w-full max-w-6xl mx-auto py-20">
        <div className="flex justify-between py-4 px-2">
          <h2 className="text-2xl font-semibold px-1 text-">
            Featured New Cars
          </h2>
          <Link href={"#"} className="text-[#518ecb] hover:underline">View All New Cars</Link>
        </div>
        <div className="w-full border-b h-16 px-4 flex gap-5 text-lg items-center">
          <button
            className={`h-full border-b-2 ${
              active == 1 ? " border-blue-600" : "border-transparent"
            }`}
            onClick={() => setActive(1)}
          >
            Popular
          </button>
          <button
            className={`h-full border-b-2 ${
              active == 2 ? " border-blue-600" : "border-transparent"
            }`}
            onClick={() => setActive(2)}
          >
            Upcomming
          </button>
          <button
            className={`h-full border-b-2 ${
              active == 3 ? " border-blue-600" : "border-transparent"
            }`}
            onClick={() => setActive(3)}
          >
            Newly Launched
          </button>
        </div>
        <div className="flex w-full items-center justify-center">
          <FaAngleLeft className="-mr-5 z-30 bg-white p-2 text-4xl text-gray-400 shadow-md shadow-gray-500 rounded-full cursor-pointer hover:bg-[#518ecb] hover:text-white" />
        <div className="px-2 py-6 flex  gap-4">
          {active == 1 && popularCars.map((car) => (
            <Link href={car.pageLink} key={car.title}> <CarCard {...car} /> </Link>
          ))}
        {active == 2 && upcomingCars.map((car) => (
            <CarCard key={car.title} {...car} />
        ))}
        {active == 3 && newlyLaunchedCars.map((car) => (
            <CarCard key={car.title} {...car} />
        ))}
        </div>
        <FaAngleRight className="-ml-5 z-30 bg-white p-2 text-4xl text-gray-400 shadow-md shadow-gray-500 rounded-full cursor-pointer hover:bg-[#518ecb] hover:text-white" />
        </div>
      </div>
    </Container>
  );
}

export default Featuring;
