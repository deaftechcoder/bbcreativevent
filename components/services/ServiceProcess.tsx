"use client";

const process = [
  {
    step: "01",
    title: "Discovery Call",
    description:
      "We ask about your date, venue, guest size, colours, budget range, and must-have details.",
  },
  {
    step: "02",
    title: "Design Direction",
    description:
      "We agree on the style, focal areas, materials, layout, and what should be prioritised.",
  },
  {
    step: "03",
    title: "Preparation",
    description:
      "We prepare decor items, confirm logistics, and schedule arrival around your venue access time.",
  },
  {
    step: "04",
    title: "Event Setup",
    description:
      "Our team installs, styles, checks the details, and leaves the space ready for guests.",
  },
];

export default function ServiceProcess() {
  return (
    <section className="bg-[#0A0A0A] py-16 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="inline-block rounded-full border border-pink-500/20 bg-white/5 px-4 py-2 text-sm uppercase tracking-[0.25em] text-pink-300">
            Our Process
          </span>

          <h2 className="mt-6 text-4xl font-semibold leading-none text-white md:text-6xl">
            A clear process,
            <span className="block text-pink-200">
              fewer surprises
            </span>
          </h2>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {process.map((item) => (
            <div
              key={item.step}
              className="group rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-pink-300/40"
            >
              <span className="font-heading text-7xl font-semibold leading-none text-pink-200/25 transition-colors group-hover:text-pink-200/55">
                {item.step}
              </span>

              <h3 className="mt-6 font-heading text-3xl font-semibold leading-none text-white">
                {item.title}
              </h3>

              <p className="mt-4 leading-relaxed text-gray-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
