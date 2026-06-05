import AboutHero from "@/components/about/AboutHero";
import BrandStory from "@/components/about/BrandStory";
import MissionVision from "@/components/about/MissionVision";
import WhyChooseUs from "@/components/about/WhyChooseUs";
import TeamSection from "@/components/about/TeamSection";
import CTASection from "@/components/about/CTASection";
import { getTeam } from "@/sanity/lib/content";
import type { TeamMember } from "@/sanity/lib/types";
import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about BB Creative Events, a Nigerian luxury event decoration brand creating elegant weddings, birthdays, corporate events, and unforgettable celebrations.",
};

export default async function AboutPage() {
  let team: TeamMember[] = [];

  try {
    team = await getTeam();
  } catch (error) {
    // Gracefully handle missing Sanity env or fetch errors during build.
    // Log to server build output and continue with an empty team list.
    // This prevents SSG/SSRError failures when environment variables
    // are not set in the deployment environment.
    console.error("getTeam() failed during build:", error);
    team = [];
  }

  return (
    <main className="bg-[#050505]">
      <AboutHero />
      <BrandStory />
      <MissionVision />
      <WhyChooseUs />
      <TeamSection team={team} />
      <CTASection />
    </main>
  );
}