import Link from "next/link";
import React from "react";

function Card({
  classNo,
  listItems,
  link
}: {
  classNo: string;
  listItems: string[];
  link: string; 
}) {
  return (
    <Link href={link}>
    <div className="border p-2 cursor-pointer hover:bg-slate-950 hover:border-green-500 space-y-6 rounded-lg shadow-2xl">
      <h1>
        {" "}
        <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
          GIAIC
        </code>{" "}
        - Class {classNo} Assignmants
      </h1>

      <ul className="bg-slate-700 text-gray-200 py-3 px-8 rounded list-disc">
        {listItems.map((item, index) => (
            <li key={index}>{item}</li>
          )
        )}
      </ul>
    </div>
    </Link>
  );
}

export default Card;
