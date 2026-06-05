import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact BB Creative Events | Get Your Event Decorated",
  description:
    "Reach out to BB Creative Events for your decoration needs. We specialize in wedding decorations, birthday celebrations, corporate events, and more. Get a free consultation today.",
  openGraph: {
    title: "Contact BB Creative Events",
    description:
      "Get in touch for event decoration services across Nigeria. Contact us via WhatsApp, email, or our online form.",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#050505] pt-32">
      {/* Header */}
      <section className="relative overflow-hidden px-6 py-16 md:py-24">
        <div className="absolute left-0 top-20 h-96 w-96 rounded-full bg-pink-500/10 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-violet-500/10 blur-[140px]" />

        <div className="relative z-10 mx-auto max-w-4xl">
          <Link
            href="/#contact"
            className="mb-8 inline-flex items-center gap-2 text-gray-400 transition-colors hover:text-pink-400"
          >
            <ArrowLeft className="h-5 w-5" />
            Back to Home
          </Link>

          <h1 className="text-5xl font-bold text-white md:text-6xl">
            Let&apos;s Discuss Your
            <span className="block bg-gradient-to-r from-pink-400 to-violet-500 bg-clip-text text-transparent">
              Event Ideas
            </span>
          </h1>

          <p className="mt-6 text-xl leading-relaxed text-gray-300">
            Have a special event coming up? Whether it&apos;s a wedding, birthday,
            corporate gathering, or any celebration, we&apos;re here to bring your
            vision to life with stunning decorations and creative designs.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="relative overflow-hidden px-6 py-20">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-b from-pink-500/5 via-transparent to-violet-500/5 pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-4xl">
          <ContactForm showMotion={false} />
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="relative px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-white mb-12">
            Other Ways to Reach Us
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl hover:border-pink-500/40 transition-colors">
              <h3 className="text-xl font-semibold text-white mb-4">
                WhatsApp
              </h3>
              <a
                href="https://wa.me/2348165392277"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-400 hover:text-pink-300 text-lg"
              >
                +234 816 539 2277
              </a>
              <p className="text-gray-400 mt-2">
                Quick chat for immediate inquiries
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl hover:border-pink-500/40 transition-colors">
              <h3 className="text-xl font-semibold text-white mb-4">Email</h3>
              <a
                href="mailto:hello@bbcreativeevents.com"
                className="text-pink-400 hover:text-pink-300 text-lg"
              >
                hello@bbcreativeevents.com
              </a>
              <p className="text-gray-400 mt-2">
                Detailed inquiries and project discussions
              </p>
            </div>
          </div>

          <div className="mt-12 rounded-2xl border border-pink-500/20 bg-gradient-to-r from-pink-500/10 to-violet-500/10 p-8 backdrop-blur-xl">
            <h3 className="text-xl font-semibold text-white mb-3">
              Response Time
            </h3>
            <p className="text-gray-300">
              We typically respond to inquiries within 2-4 hours during business
              hours. For urgent requests, WhatsApp is the fastest way to reach
              us.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
