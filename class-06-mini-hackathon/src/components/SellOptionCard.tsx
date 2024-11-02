import React from "react";
import Button from "./Button";
import { MdDone } from "react-icons/md";

function SellOptionCard({
  title,
  options,
  btnText,
  btnVarient
}: {
  title: string;
  options: string[];
  btnText: string;
  btnVarient: "blue" | "red";
}) {
  return (
    <div className="p-10 space-y-5">
      <h2 className="text-xl font-medium text-[#233d7b]">{title}</h2>
      <ul className="text-sm text-gray-600 space-y-2">
        {
            options.map((option, i) => (
              <li className="flex items-center gap-1" key={i}> <MdDone className="text-green-600 text-xl" /> { option}</li>
            ))
        }
      </ul>
      <Button variant={btnVarient} className="px-8 py-3 ml-1">{btnText}</Button>
    </div>
  );
}

export default SellOptionCard;
