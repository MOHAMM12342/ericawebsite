"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, Instagram, Twitter, Youtube, Facebook } from "lucide-react";

const socialLinks = [
  {
    label: "Instagram",
    href: "#",
    icon: Instagram,
    color: "hover:text-[#E1306C]",
    bg: "hover:bg-pink-50",
  },
  {
    label: "Twitter / X",
    href: "#",
    icon: Twitter,
    color: "hover:text-[#1DA1F2]",
    bg: "hover:bg-sky-50",
  },
  {
    label: "YouTube",
    href: "#",
    icon: Youtube,
    color: "hover:text-[#FF0000]",
    bg: "hover:bg-red-50",
  },
  {
    label: "Facebook",
    href: "#",
    icon: Facebook,
    color: "hover:text-[#1877F2]",
    bg: "hover:bg-blue-50",
  },
];

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "info@ericablog.com",
    href: "mailto:info@ericablog.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+974 0000 000",
    href: "tel:+97400000000",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Doha, Qatar",
    href: null,
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <main>
      {/* ── PAGE HEADER ── */}
      <section className="bg-[#F3F4F6] px-6 md:px-20 py-16">
        <span className="inline-flex items-center bg-[#EEF2FF] border border-[#C7D4FB] text-[#1B4FF0] text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wide">
          Get in Touch
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-[#0D0E14] mb-4">
          Contact Erica
        </h1>
        <p className="text-base font-normal text-[#6B7280] leading-relaxed max-w-xl">
          Have a question about Qatar&apos;s stadiums, a travel tip to share, or just want to say hello? I&apos;d love to hear from you!
        </p>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section className="bg-[#F3F4F6] px-6 md:px-20 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* ── LEFT: Contact Details + Social ── */}
          <div className="lg:col-span-1 flex flex-col gap-6">

            {/* Contact Details Card */}
            <div className="bg-white rounded-xl p-6 border border-[#E5E7EB] shadow-sm">
              <h2 className="text-lg font-bold text-[#0D0E14] mb-5">
                Contact Details
              </h2>
              <div className="flex flex-col gap-5">
                {contactDetails.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#EEF2FF] flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-[#1B4FF0]" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#9CA3AF] uppercase tracking-wide mb-0.5">
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          className="text-[15px] font-semibold text-[#0D0E14] hover:text-[#1B4FF0] transition-colors"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-[15px] font-semibold text-[#0D0E14]">
                          {value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media Card */}
            <div className="bg-white rounded-xl p-6 border border-[#E5E7EB] shadow-sm">
              <h2 className="text-lg font-bold text-[#0D0E14] mb-2">
                Follow Along
              </h2>
              <p className="text-sm text-[#6B7280] mb-5">
                Stay updated on my latest Qatar adventures.
              </p>
              <div className="flex flex-col gap-3">
                {socialLinks.map(({ label, href, icon: Icon, color, bg }) => (
                  <a
                    key={label}
                    href={href}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg border border-[#E5E7EB] text-[#6B7280] ${color} ${bg} transition-all group`}
                  >
                    <Icon className="w-5 h-5 flex-shrink-0 transition-colors" />
                    <span className="text-sm font-semibold transition-colors">
                      {label}
                    </span>
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* ── RIGHT: Feedback Form ── */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl p-8 border border-[#E5E7EB] shadow-sm">
              <h2 className="text-lg font-bold text-[#0D0E14] mb-1">
                Send a Message
              </h2>
              <p className="text-sm text-[#6B7280] mb-6">
                Fill out the form below and I&apos;ll get back to you as soon as possible.
              </p>

              {submitted ? (
                /* ── Success State ── */
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#EEF2FF] flex items-center justify-center mb-4">
                    <Send className="w-7 h-7 text-[#1B4FF0]" />
                  </div>
                  <h3 className="text-xl font-extrabold text-[#0D0E14] mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-[#6B7280] max-w-sm">
                    Thanks for reaching out. I&apos;ll reply to{" "}
                    <span className="font-semibold text-[#0D0E14]">{form.email}</span>{" "}
                    as soon as I can.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: "", email: "", subject: "", message: "" });
                    }}
                    className="mt-6 text-sm font-semibold text-[#1B4FF0] hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                /* ── Form ── */
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">

                  {/* Name + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="name"
                        className="text-sm font-semibold text-[#0D0E14]"
                      >
                        Your Name <span className="text-[#1B4FF0]">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="e.g. Sarah Ahmed"
                        value={form.name}
                        onChange={handleChange}
                        className="h-11 px-4 rounded-lg border border-[#E5E7EB] text-[15px] text-[#0D0E14] placeholder:text-[#9CA3AF] outline-none focus:border-[#1B4FF0] focus:ring-2 focus:ring-[#1B4FF0]/10 transition-all"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="email"
                        className="text-sm font-semibold text-[#0D0E14]"
                      >
                        Email Address <span className="text-[#1B4FF0]">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="e.g. sarah@example.com"
                        value={form.email}
                        onChange={handleChange}
                        className="h-11 px-4 rounded-lg border border-[#E5E7EB] text-[15px] text-[#0D0E14] placeholder:text-[#9CA3AF] outline-none focus:border-[#1B4FF0] focus:ring-2 focus:ring-[#1B4FF0]/10 transition-all"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="subject"
                      className="text-sm font-semibold text-[#0D0E14]"
                    >
                      Subject <span className="text-[#1B4FF0]">*</span>
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={form.subject}
                      onChange={handleChange}
                      className="h-11 px-4 rounded-lg border border-[#E5E7EB] text-[15px] text-[#0D0E14] outline-none focus:border-[#1B4FF0] focus:ring-2 focus:ring-[#1B4FF0]/10 transition-all bg-white appearance-none"
                    >
                      <option value="" disabled>
                        Select a subject…
                      </option>
                      <option value="general">General Enquiry</option>
                      <option value="stadium">Stadium Question</option>
                      <option value="travel">Travel Tips</option>
                      <option value="collaboration">Collaboration</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="message"
                      className="text-sm font-semibold text-[#0D0E14]"
                    >
                      Message <span className="text-[#1B4FF0]">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      placeholder="Write your message here…"
                      value={form.message}
                      onChange={handleChange}
                      className="px-4 py-3 rounded-lg border border-[#E5E7EB] text-[15px] text-[#0D0E14] placeholder:text-[#9CA3AF] outline-none focus:border-[#1B4FF0] focus:ring-2 focus:ring-[#1B4FF0]/10 transition-all resize-none leading-relaxed"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 bg-[#1B4FF0] text-white text-[15px] font-semibold px-8 py-3 rounded-lg hover:bg-[#163DD0] transition-all hover:-translate-y-0.5 self-start"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>

                </form>
              )}
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}