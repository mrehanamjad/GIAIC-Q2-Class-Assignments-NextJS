import Image from "next/image";
import React from "react";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

function CarCard({
  title,
  price,
  isStarRating = true,
  imageSrc,
  reviews,
}: {
  title: string;
  price: string;
  isStarRating?: boolean;
  imageSrc: string;
  reviews: number;
}) {
  return (
    <div className="h-80 w-64 border flex flex-col items-center hover:shadow-lg duration-500 group">
      <Image
        src={imageSrc}
        alt="Car Image"
        height={1000}
        width={1000}
        className="w-full h-2/3"
      />

      <div className="mx-auto text-center space-y-2">
        <div>
          <h3 className="font-bold text-[#233d7b] group-hover:text-[#3f6edd]">
            {title}
          </h3>
          <p className=" text-[16px] text-green-500">{price}</p>
        </div>
        <div className={`gap-2 ${!isStarRating ? 'hidden' : 'flex'}`}>
          <span className="flex text-orange-700 items-center justify-center">
            <FaStar />
            <FaStar />
            <FaStar />
            <CiStar />
            <CiStar />
          </span>
          <span className="text-gray-500">{reviews} Reviews</span>
        </div>
        <p className={`text-gray-500 text-sm ${isStarRating ? 'hidden' : ''}`}>Launching October 2024*</p>
      </div>
    </div>
  );
}

export default CarCard;
