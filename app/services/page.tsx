import type { Metadata } from "next";

import ServicesHero from "@/components/services/ServiceHero";
import ServicesGrid from "@/components/services/ServiceGrid";
import ServiceProcess from "@/components/services/ServiceProcess";
import WhyChooseServices from "@/components/services/WhyChooseService";
import ServicesCTA from "@/components/services/ServiceCTA";
import { getServices } from "@/sanity/lib/content";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore wedding decoration, birthday setup, corporate event styling, traditional ceremony decor, proposals, and outdoor event setup by BB Creative Events.",
};

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <main className="bg-[#050505]">
      <ServicesHero />
      <ServicesGrid services={services} />
      <ServiceProcess />
      <WhyChooseServices />
      <ServicesCTA />
    </main>
  );
}