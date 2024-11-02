import React from "react";
import Container from "./Container";
import SellOptionCard from "./SellOptionCard";

const HeroSection = () => {
  return (
    <div className="bg-white text-gray-800 w-full py-10">
      <Container>
        <div className="w-full max-w-4xl border-2 m-auto flex-wrap">
          <h1 className="text-2xl text-center font-medium bg-white w-fit m-auto -mt-5">
            Sell Your Car on PakWheels and Get the Best Price
          </h1>
          <div className="flex justify-between items-center w-full max-sm:flex-col ">
            <SellOptionCard
              title="Post your Ad on PakWheels"
              options={[
                "Post your Ad for Free in 3 Easy Steps",
                "Get Genuine offers from Verified Buyers",
                "Sell your car Fast at the Best Price",
              ]}
              btnText="Post Your Add"
              btnVarient="red"
            />
            <div className="w-[0.6px] h-full min-h-60 max-sm:w-full max-sm:h-[0.6px] max-sm:min-h-[0.6px] max-sm:max-w-52 bg-slate-500 flex justify-center items-center">
                <p className="text-2xl w-fit p-1 max-sm:px-4  bg-white">OR</p>
            </div>
            <SellOptionCard
              title="Try PakWheels Sell It For Me"
              options={[
                "Dedicated Sales Expert to Sell your Car",
                "We Bargain for you and share the Best Offer",
                "We ensure Safe & Secure Transaction",
              ]}
              btnText="Register Your Car"
              btnVarient="blue"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
