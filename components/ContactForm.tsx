"use client";

import { useState } from "react";
import {Send, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const eventTypes = [
  "Wedding Decoration",
  "Birthday Celebration",
  "Traditional Wedding",
  "Corporate Event",
  "Proposal Setup",
  "Baby Shower",
  "Outdoor Event",
  "Other",
];

interface ContactFormProps {
  showMotion?: boolean;
}

export default function ContactForm({ showMotion = true }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    eventType: "",
    eventDate: "",
    location: "",
    budget: "",
    message: "",
  });

  const whatsappNumber = "+2348165392277";
  const businessEmail = "bbcreativeevent@gmail.com";

  const formattedEventDate = formData.eventDate
    ? new Date(formData.eventDate).toLocaleDateString("en-NG", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "Not selected";

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const messageText = `Hello BB Creative Events, I would like to make an event decoration inquiry.

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email || "Not provided"}
Event Type: ${formData.eventType}
Event Date: ${formattedEventDate}
Location: ${formData.location}
Budget: ${formData.budget || "Not provided"}

Message:
${formData.message || "No extra message"}`;

  const encodedMessage = encodeURIComponent(messageText);
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  const FormContent = (
    <>
      <div className="grid gap-5 md:grid-cols-2">
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Full Name"
          className="rounded-2xl border border-white/10 bg-black/40 px-5 py-4 text-white outline-none placeholder:text-gray-500 focus:border-pink-500 dark:text-white dark:placeholder:text-gray-400 light:bg-white light:text-gray-900 light:placeholder:text-gray-600"
        />

        <input
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          placeholder="Phone Number"
          className="rounded-2xl border border-white/10 bg-black/40 px-5 py-4 text-white outline-none placeholder:text-gray-500 focus:border-pink-500 dark:text-white dark:placeholder:text-gray-400 light:bg-white light:text-gray-900 light:placeholder:text-gray-600"
        />

        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address"
          className="rounded-2xl border border-white/10 bg-black/40 px-5 py-4 text-white outline-none placeholder:text-gray-500 focus:border-pink-500 dark:text-white dark:placeholder:text-gray-400 light:bg-white light:text-gray-900 light:placeholder:text-gray-600"
        />

        <select
          name="eventType"
          value={formData.eventType}
          onChange={handleChange}
          required
          className="rounded-2xl border border-white/10 bg-black/40 px-5 py-4 text-white outline-none focus:border-pink-500 light:bg-white light:text-gray-900"
        >
          <option value="" className="bg-black">
            Select Event Type
          </option>
          {eventTypes.map((type) => (
            <option key={type} value={type} className="bg-black">
              {type}
            </option>
          ))}
        </select>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="eventDate"
            className="text-sm font-medium text-gray-300"
          >
            Event Date
          </label>

          <input
            id="eventDate"
            name="eventDate"
            type="date"
            value={formData.eventDate}
            onChange={handleChange}
            required
            min={new Date().toISOString().split("T")[0]}
            className="rounded-2xl border border-white/10 bg-black/40 px-5 py-4 text-white outline-none [color-scheme:dark] focus:border-pink-500 light:bg-white light:text-gray-900"
          />
        </div>

        <input
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
          placeholder="Event Location"
          className="rounded-2xl border border-white/10 bg-black/40 px-5 py-4 text-white outline-none placeholder:text-gray-500 focus:border-pink-500 dark:text-white dark:placeholder:text-gray-400 light:bg-white light:text-gray-900 light:placeholder:text-gray-600"
        />

        <input
          name="budget"
          value={formData.budget}
          onChange={handleChange}
          placeholder="Estimated Budget"
          className="rounded-2xl border border-white/10 bg-black/40 px-5 py-4 text-white outline-none placeholder:text-gray-500 focus:border-pink-500 dark:text-white dark:placeholder:text-gray-400 light:bg-white light:text-gray-900 light:placeholder:text-gray-600 md:col-span-2"
        />

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          placeholder="Tell us about your event style, theme, colors, and expectations..."
          className="resize-none rounded-2xl border border-white/10 bg-black/40 px-5 py-4 text-white outline-none placeholder:text-gray-500 focus:border-pink-500 dark:text-white dark:placeholder:text-gray-400 light:bg-white light:text-gray-900 light:placeholder:text-gray-600 md:col-span-2"
        />
      </div>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-8 py-4 font-semibold text-white shadow-[0_0_35px_rgba(255,61,129,0.35)] transition-all duration-300 hover:scale-105"
        >
          <MessageCircle className="h-5 w-5" />
          Send to WhatsApp
        </button>

        <a
          href={`mailto:${businessEmail}?subject=Event Decoration Inquiry&body=${encodedMessage}`}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-pink-500/40 hover:bg-white/10"
        >
          <Send className="h-5 w-5" />
          Send Email
        </a>
      </div>
    </>
  );

  if (showMotion) {
    return (
      <motion.form
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl md:p-8"
        onSubmit={(e) => {
          e.preventDefault();
          window.open(whatsappLink, "_blank");
        }}
      >
        {FormContent}
      </motion.form>
    );
  }

  return (
    <form
      className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl md:p-8"
      onSubmit={(e) => {
        e.preventDefault();
        window.open(whatsappLink, "_blank");
      }}
    >
      {FormContent}
    </form>
  );
}
