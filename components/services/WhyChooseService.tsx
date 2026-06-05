"use client";

export default function WhyChooseServices() {
  const reasons = [
    {
      label: "In person",
      title: "Looks Good In Person",
      description:
        "We design for the actual venue, guest movement, photos, and the feeling clients want in the room.",
    },
    {
      label: "Budget",
      title: "Budget-Aware Choices",
      description:
        "We guide clients toward details that make the strongest visual impact without wasting money.",
    },
    {
      label: "Setup",
      title: "Calm Event-Day Setup",
      description:
        "We plan setup timing, handle the styling work, and do final checks before the event begins.",
    },
  ];

  return (
    <section className="py-28">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <span className="inline-block rounded-full border border-pink-500/20 bg-white/5 px-4 py-2 text-sm uppercase tracking-[0.25em] text-pink-300">
          Why Clients Choose Us
        </span>

        <h2 className="mt-6 text-4xl font-semibold leading-none text-white md:text-6xl">
          Professional styling with
          <span className="block text-pink-200">
            practical event sense
          </span>
        </h2>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="group rounded-2xl border border-white/10 bg-white/5 p-8 text-left transition duration-300 hover:-translate-y-2 hover:border-pink-300/40 hover:bg-white/[0.07]"
            >
              <span className="text-xs uppercase tracking-[0.24em] text-pink-200">
                {reason.label}
              </span>
              <h3 className="mt-8 font-heading text-3xl font-semibold leading-none text-white">
                {reason.title}
              </h3>

              <p className="mt-4 text-gray-400">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
