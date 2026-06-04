"use client";

import { useState, useEffect } from "react";
import { MessageCircle, Mail, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function StickyContactWidget() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  const whatsappNumber = "+2348165392277";
  const businessEmail = "hello@bbcreativeevents.com";

  const quickMessage = encodeURIComponent(
    "Hi BB Creative Events, I'm interested in your decoration services. Can you tell me more?"
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${quickMessage}`;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-24 right-6 z-40 flex flex-col gap-3 md:bottom-8"
        >
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="mb-2 flex flex-col gap-2"
              >
                {/* WhatsApp Button */}
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-full bg-gradient-to-r from-green-500 to-green-600 px-4 py-3 text-white shadow-lg hover:shadow-green-500/50 transition-all hover:scale-105"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span className="text-sm font-medium">WhatsApp</span>
                </a>

                {/* Email Button */}
                <a
                  href={`mailto:${businessEmail}?subject=Event Decoration Inquiry`}
                  className="flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 px-4 py-3 text-white shadow-lg hover:shadow-blue-500/50 transition-all hover:scale-105"
                >
                  <Mail className="h-5 w-5" />
                  <span className="text-sm font-medium">Email</span>
                </a>

                {/* Contact Page Button */}
                <Link
                  href="/contact"
                  className="flex items-center gap-3 rounded-full border border-pink-500/40 bg-pink-500/10 px-4 py-3 text-white backdrop-blur-sm hover:bg-pink-500/20 transition-all hover:scale-105"
                >
                  <span className="text-sm font-medium">Full Form</span>
                </Link>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main Toggle Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-violet-600 text-white shadow-[0_0_35px_rgba(255,61,129,0.35)] hover:shadow-[0_0_50px_rgba(255,61,129,0.5)] transition-all"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-6 w-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <MessageCircle className="h-6 w-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
