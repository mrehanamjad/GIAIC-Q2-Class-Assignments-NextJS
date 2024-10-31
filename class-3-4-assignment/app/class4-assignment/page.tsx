import React from "react";

function page() {
  return (
    <div className="pt-20 flex flex-col gap-10">
      <h1 className="text-4xl font-bold m-10 ">Class 4 assignment:</h1>
      <section className="w-full p-12 flex justify-center items-center flex-col bg-white/60 text-gray-900 gap-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-black">Section 1</h2>
          <p>
            Create a section containing Three cards of equal widths in a row.
          </p>
        </div>
        <div className="w-full flex justify-center items-center lg:h-72 gap-5 md:h-60 sm:h-52 h-36">
          <div className="text-center text-xl bg-red-700 text-white rounded-2xl w-80 h-full flex justify-center items-center">
            Card 1
          </div>
          <div className="text-center text-xl bg-green-700 text-white rounded-2xl w-80 h-full flex justify-center items-center">
            Card 2
          </div>
          <div className="text-center text-xl bg-blue-700 text-white rounded-2xl w-80 h-full flex justify-center items-center">
            Card 3
          </div>
        </div>
      </section>
      <section className="w-full p-12 flex justify-center items-center flex-col bg-white/60 text-gray-900 gap-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-black">Section 2</h2>
          <p>
          Create a section containing two cards of equal widths in a row.
          </p>
        </div>
        <div className="w-full flex justify-center items-center lg:h-72 gap-5 md:h-60 sm:h-52 h-36">
          <div className="text-center text-xl bg-amber-800 text-white rounded-2xl w-80 h-full flex justify-center items-center">
            Card 1
          </div>
          <div className="text-center text-xl bg-indigo-800 text-white rounded-2xl w-80 h-full flex justify-center items-center">
            Card 2
          </div>
          
        </div>
      </section>
    </div>
  );
}

export default page;
