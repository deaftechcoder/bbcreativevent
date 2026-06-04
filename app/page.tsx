import Hero from "@/components/sections/Hero";
import TrustedBrands from "@/components/sections/TrustedBrands";


export default function Home() {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      <Hero />
      <TrustedBrands />
    </div>
  );
}
