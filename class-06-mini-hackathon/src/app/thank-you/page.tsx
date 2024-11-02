import Container from "@/components/Container";
import React from "react";

function Page() {
  return (
    <div className="bg-blue-100">
    <Container>
      <div className="h-full w-full min-h-screen  text-center flex justify-center items-center flex-col gap-6 text-gray-800">
        <h1 className="text-[#518ecb] text-5xl font-bold italic">
          Thank you for shoping!!!
        </h1>
        <p>Your order will be delivered in 3 Bussiness days </p>
      </div>
    </Container>
    </div>
  );
}

export default Page;
