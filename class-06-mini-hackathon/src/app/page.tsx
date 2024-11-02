import Container from "@/components/Container";
import Featuring from "@/components/Featuring";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <div className=" bg-white text-black  min-h-screen py-8 pb-20 sm:py-20 font-[family-name:var(--font-geist-sans)]">
      <Container>
        <HeroSection />
        <Featuring />
      </Container>
    </div>
  );
}
