"use client";

import { Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  const businessEmail = "bbcreativeevent@gmail.com";

  return (
    <section id="contact" className="relative overflow-hidden bg-[#050505] py-28">
      <div className="absolute left-0 top-20 h-96 w-96 rounded-full bg-pink-500/10 blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-violet-500/10 blur-[140px]" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block rounded-full border border-pink-500/20 bg-white/5 px-4 py-2 text-sm uppercase tracking-[0.25em] text-pink-300"
          >
            Contact Us
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-4xl font-bold leading-tight text-white md:text-6xl"
          >
            Let&apos;s Decorate
            <span className="block bg-gradient-to-r from-pink-400 to-violet-500 bg-clip-text text-transparent">
              Your Next Event
            </span>
          </motion.h2>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-400">
            Tell us about your event, date, location, and budget. We&apos;ll respond
            with the best decoration option for your celebration.
          </p>

          <div className="mt-10 space-y-5">
            <div className="flex items-start gap-4 rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
              <Phone className="mt-1 h-6 w-6 text-pink-300" />
              <div>
                <h3 className="font-semibold text-white">Phone / WhatsApp</h3>
                <p className="mt-1 text-gray-400">+234 816 539 2277</p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
              <Mail className="mt-1 h-6 w-6 text-pink-300" />
              <div>
                <h3 className="font-semibold text-white">Email</h3>
                <p className="mt-1 text-gray-400">{businessEmail}</p>
              </div>
            </div>
          </div>
        </div>

        <ContactForm showMotion={true} />
      </div>
    </section>
  );
}
