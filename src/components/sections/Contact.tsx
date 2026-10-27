"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FiMail, FiMapPin, FiSend, FiCheck, FiDownload, FiPhone, FiAlertCircle } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_b8ff2qt";
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_7fo9gpk";
const EMAILJS_AUTOREPLY_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_AUTOREPLY_TEMPLATE_ID || "template_2z1a76m";
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "DEAemN5F9o43MBw1R";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Invalid email address";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSending(true);
    setSendError(false);

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: "jmvhitimana050@gmail.com",
      };

      // Send the notification to you first — this one matters most.
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        { publicKey: EMAILJS_PUBLIC_KEY }
      );

      // Best-effort auto-reply to the visitor — don't fail the whole
      // submission if this one has an issue, since the notification
      // above already succeeded.
      try {
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_AUTOREPLY_TEMPLATE_ID,
          templateParams,
          { publicKey: EMAILJS_PUBLIC_KEY }
        );
      } catch (autoReplyErr) {
        console.error("Auto-reply send failed (notification still sent):", autoReplyErr);
      }

      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err: unknown) {
      const status = (err as { status?: number })?.status;
      const text = (err as { text?: string })?.text;
      const message = err instanceof Error ? `${err.name}: ${err.message}` : String(err);
      console.error(
        `EmailJS send failed | status: ${status ?? "none"} | text: ${text ?? "none"} | message: ${message}`
      );
      setSendError(true);
      setTimeout(() => setSendError(false), 20000);
    } finally {
      setSending(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  return (
    <section id="contact" ref={ref} className="section-padding relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-400/5 rounded-full blur-3xl" />

      <div className="container-max mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 font-mono text-sm tracking-widest uppercase">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3">
            Let&apos;s{" "}
            <span className="gradient-text-static">Connect</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Have a project in mind or want to discuss geospatial AI solutions?
            I&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2 space-y-4"
          >
            {/* Email */}
            <div className="glass rounded-2xl p-6 hover-card flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-400/10 flex items-center justify-center flex-shrink-0">
                <FiMail className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">
                  Email
                </p>
                <a
                  href="mailto:jmvhitimana050@gmail.com"
                  className="text-white font-medium hover:text-cyan-400 transition-colors"
                >
                  jmvhitimana050@gmail.com
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="glass rounded-2xl p-6 hover-card flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-400/10 flex items-center justify-center flex-shrink-0">
                <FiMapPin className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">
                  Location
                </p>
                <p className="text-white font-medium">
                  Kigali, Rwanda
                </p>
              </div>
            </div>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/hitimana-jean-marie-vianney"
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-2xl p-6 hover-card flex items-center gap-4 block"
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-400/10 flex items-center justify-center flex-shrink-0">
                <FaLinkedinIn className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">
                  LinkedIn
                </p>
                <p className="text-white font-medium hover:text-cyan-400 transition-colors">
                  LinkedIn Profile
                </p>
              </div>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/GeospatialAIEngineer"
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-2xl p-6 hover-card flex items-center gap-4 block"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0">
                <SiGithub className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">
                  GitHub
                </p>
                <p className="text-white font-medium hover:text-cyan-400 transition-colors">
                  GitHub Profile
                </p>
              </div>
            </a>

            {/* Download CV */}
            <button
  onClick={() => {
    const link = document.createElement("a");
    link.href = "/Hitimana_JMV_CV.pdf";
    link.download = "Hitimana_Jean_Marie_Vianney_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }}
  className="glass rounded-2xl p-6 hover-card flex items-center gap-4 w-full border border-cyan-400/20 hover:border-cyan-400/40 transition-all"

            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400/20 to-emerald-400/20 flex items-center justify-center flex-shrink-0">
                <FiDownload className="w-5 h-5 text-cyan-400" />
              </div>
              <div className="text-left">
                <p className="text-white font-semibold">Download CV</p>
                <p className="text-slate-500 text-sm">PDF format</p>
              </div>
            </button>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="glass rounded-3xl p-8 border border-cyan-400/10"
            >
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 mb-6 p-4 rounded-xl bg-emerald-400/10 border border-emerald-400/20 text-emerald-400"
                >
                  <FiCheck className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm">
                    Message sent successfully! I&apos;ll get back to you soon.
                  </span>
                </motion.div>
              )}

              {sendError && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 mb-6 p-4 rounded-xl bg-red-400/10 border border-red-400/20 text-red-400"
                >
                  <FiAlertCircle className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm">
                    Something went wrong sending your message. Please try again or email me directly at{" "}
                    <a
                      href={`mailto:jmvhitimana050@gmail.com?subject=${encodeURIComponent(
                        formData.subject || "Portfolio contact"
                      )}&body=${encodeURIComponent(formData.message)}`}
                      className="underline font-medium hover:text-red-300"
                    >
                      jmvhitimana050@gmail.com
                    </a>
                    .
                  </span>
                </motion.div>
              )}

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm text-slate-400 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl bg-navy-900/50 border ${
                      errors.name ? "border-red-400" : "border-slate-700 focus:border-cyan-400"
                    } text-white placeholder-slate-500 outline-none transition-colors`}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm text-slate-400 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl bg-navy-900/50 border ${
                      errors.email ? "border-red-400" : "border-slate-700 focus:border-cyan-400"
                    } text-white placeholder-slate-500 outline-none transition-colors`}
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm text-slate-400 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl bg-navy-900/50 border ${
                    errors.subject ? "border-red-400" : "border-slate-700 focus:border-cyan-400"
                  } text-white placeholder-slate-500 outline-none transition-colors`}
                  placeholder="What's this about?"
                />
                {errors.subject && (
                  <p className="text-red-400 text-xs mt-1">{errors.subject}</p>
                )}
              </div>

              <div className="mb-6">
                <label className="block text-sm text-slate-400 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-4 py-3 rounded-xl bg-navy-900/50 border ${
                    errors.message ? "border-red-400" : "border-slate-700 focus:border-cyan-400"
                  } text-white placeholder-slate-500 outline-none transition-colors resize-none`}
                  placeholder="Tell me about your project or opportunity..."
                />
                {errors.message && (
                  <p className="text-red-400 text-xs mt-1">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={sending}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-400 to-emerald-400 text-navy-900 font-bold rounded-2xl hover:shadow-lg hover:shadow-cyan-400/25 transition-all duration-300 hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <FiSend className="w-4 h-4" />
                {sending ? "Sending..." : "Send Message"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
