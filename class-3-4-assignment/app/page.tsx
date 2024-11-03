import Image from "next/image";
import Logo from "./components/Logo";
import Card from "./components/Card";

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
        />{" "}
        <Logo />
        <Card
          classNo="3"
          listItems={[
            "Practice the concepts you've learned in class through hands-on exercises.",
            " Create a footer and render it once so that it's available across all routes.",
          ]}
          link="/"
        />
        <Card
          classNo="5"
          listItems={[
            "Practice the concepts you've learned in class through hands-on exercises.",
            "Create a section containing Three cards of equal widths in a row.",
            "Create a section containing two cards of equal widths in a row."
          ]}
          link="/class5-assignment"
        />
      </main>
    </div>
  );
}
