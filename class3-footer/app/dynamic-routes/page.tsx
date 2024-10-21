"use client";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";

function page() {
  const [val, setVal] = useState("");
  const router = useRouter();

  const handelSubmit = (e:FormEvent) => {
    e.preventDefault()
    router.push(`/${val}`)
  }

  return (
    <div className="w-full min-h-[35rem] p-20 pt-28 text-white/95 flex justify-center items-center">
      <form onSubmit={handelSubmit} className="p-2 flex flex-col gap-2">
        <input
          type="text"
          name="name"
          id="name"
          className="py-2 px-3 bg-transparent border rounded-full text-xl"
          placeholder="Write You name here..."
          required
          value={val}
          onChange={(e) => setVal(e.currentTarget.value)}
        />
        <button className="py-2 px-3 bg-black border rounded-full text-xl">
          Get Dynamic Route 🚀
        </button>
      </form>
    </div>
  );
}

export default page;
