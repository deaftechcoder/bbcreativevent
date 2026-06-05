"use client";

export default function ServicesCTA() {
  return (
    <section className="relative overflow-hidden py-28">
      <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-500/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-4xl font-bold leading-tight text-white md:text-6xl">
          Planning a wedding, party,
          <span className="block bg-gradient-to-r from-pink-400 to-violet-500 bg-clip-text text-transparent">
            or corporate event?
          </span>
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-gray-400">
          Send your event date, venue, guest estimate, and style inspiration.
          We will help you understand what is possible and what to prioritise.
        </p>

        <a
          href="https://wa.me/2348165392277"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-8 py-4 font-semibold text-white shadow-[0_0_35px_rgba(255,61,129,0.35)] transition hover:scale-105"
        >
          Start On WhatsApp
        </a>
      </div>
    </section>
  );
}
