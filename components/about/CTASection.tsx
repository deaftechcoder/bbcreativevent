"use client";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden py-28">
      <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-500/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-4xl font-bold leading-tight text-white md:text-6xl">
          Ready To Create
          <span className="block bg-gradient-to-r from-pink-400 to-violet-500 bg-clip-text text-transparent">
            Something Beautiful?
          </span>
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-gray-400">
          Let BB Creative Events bring elegance, creativity, and unforgettable
          experiences to your next celebration.
        </p>

        <a
          href="https://wa.me/2348165392277?text=Hello%20BB%20Creative%20Events%2C%20I%20would%20like%20to%20inquire%20about%20your%20event%20styling%20services.%20Please%20let%20me%20know%20how%20I%20can%20get%20started!"
          target="_blank"
          className="mt-10 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-8 py-4 font-semibold text-white shadow-[0_0_35px_rgba(255,61,129,0.35)] transition-all duration-300 hover:scale-105"
        >
          Book Your Event
        </a>
      </div>
    </section>
  );
}