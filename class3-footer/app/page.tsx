import Image from "next/image";
import Logo from "./components/Logo";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start text-white">
        <Image
          className="dark:invert"
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        /> <Logo/>
        <div className="border p-2 space-y-6 rounded-lg shadow-2xl">
        <h1>
          {" "}
          <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
            GIAIC
          </code>{" "}
          - Class 3 Assignmants
        </h1>

        <ul className="bg-slate-700 text-gray-200 py-3 px-8 rounded list-disc">
          <li>
            {" "}
            Practice the concepts you've learned in class through hands-on
            exercises.
          </li>
          <li>
            {" "}
            Create a footer and render it once so that it's available across all
            routes.
          </li>
        </ul>
        </div>
      </main>
    </div>
  );
}
