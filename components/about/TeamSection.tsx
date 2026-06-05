"use client";

import Image from "next/image";
import type { TeamMember } from "@/sanity/lib/types";

type TeamSectionProps = {
  team: TeamMember[];
};

export default function TeamSection({ team }: TeamSectionProps) {
  if (!team?.length) {
    return null;
  }

  return (
    <section className="bg-[#0A0A0A] py-28">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <span className="inline-block rounded-full border border-pink-500/20 bg-white/5 px-4 py-2 text-sm uppercase tracking-[0.25em] text-pink-300">
          Meet The Team
        </span>

        <h2 className="mt-6 text-4xl font-bold text-white md:text-6xl">
          Creative Experts
          <span className="block bg-gradient-to-r from-pink-400 to-violet-500 bg-clip-text text-transparent">
            Behind BB Events
          </span>
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-gray-400">
          Our talented team brings every celebration to life with passion, style, and precision.
        </p>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {team.map((member) => (
            <article
              key={member._id}
              className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 text-left shadow-sm shadow-black/10"
            >
              {member.image ? (
                <div className="relative h-[260px] overflow-hidden rounded-[1.75rem]">
                  <Image
                    src={member.image}
                    alt={member.name ?? "Team member"}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                    unoptimized
                  />
                </div>
              ) : (
                <div className="flex h-[260px] items-center justify-center rounded-[1.75rem] bg-white/5 text-gray-400">
                  No image available
                </div>
              )}

              <h3 className="mt-6 text-2xl font-bold text-white">
                {member.name ?? "Team Member"}
              </h3>

              {member.role ? (
                <p className="mt-2 text-pink-300">{member.role}</p>
              ) : null}

              {member.bio ? (
                <p className="mt-4 leading-relaxed text-gray-400">{member.bio}</p>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}