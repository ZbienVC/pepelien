import Hero from "@/components/sections/Hero";
import Story from "@/components/sections/Story";
import Tokenomics from "@/components/sections/Tokenomics";
import Chart from "@/components/sections/Chart";
import Gallery from "@/components/sections/Gallery";
import HowToBuy from "@/components/sections/HowToBuy";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col overflow-hidden w-full relative">
      <Hero />
      <Story />
      <Tokenomics />
      <Chart />
      <Gallery />
      <HowToBuy />
    </main>
  );
}
