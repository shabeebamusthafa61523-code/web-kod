import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    from_name: "",
    from_email: "",
    phone: "",
    program: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        "kod.brand",
        "template_r7n6vvz",
        formRef.current,
        "Kf5r9OKuDXtwTkZ8W"
      )
      .then(() => {
        setStatus("success");
        setForm({ from_name: "", from_email: "", phone: "", program: "", message: "" });
        setTimeout(() => setStatus("idle"), 3000);
      })
      .catch(() => {
        setStatus("error");
      });
  };

  return (
    <div className="relative z-10 pt-24 px-4 sm:px-6">
      
      {/* SECTION HEADER */}
      <div className="max-w-4xl mx-auto mb-12">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white tracking-tighter"
        >
          Contact Us
        </motion.h2>
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: "80px" }}
          viewport={{ once: true }}
          className="h-[2px] mt-2 bg-gradient-to-r from-[#c4ec0d] to-transparent rounded-full" 
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex items-center justify-center pb-32"
      >
        <div className="w-full max-w-4xl relative group">
          {/* BACKGROUND GLOW EFFECT */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#c4ec0d]/10 to-purple-500/10 rounded-2xl blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>

          {/* FORM CONTAINER */}
          <motion.div 
            className="relative w-full bg-[#0a0a0a]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-10 shadow-2xl overflow-hidden"
          >
            {/* TOP ACCENT LINE */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* NAME */}
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold ml-1">Full Name</label>
                  <input
                    type="text"
                    name="from_name"
                    placeholder="Enter your name"
                    value={form.from_name}
                    onChange={handleChange}
                    required
                    className="w-full p-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-[#c4ec0d]/50 focus:ring-1 focus:ring-[#c4ec0d]/20 transition-all duration-300"
                  />
                </div>

                {/* EMAIL */}
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold ml-1">Email Address</label>
                  <input
                    type="email"
                    name="from_email"
                    placeholder="name@email.com"
                    value={form.from_email}
                    onChange={handleChange}
                    required
                    className="w-full p-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-[#c4ec0d]/50 focus:ring-1 focus:ring-[#c4ec0d]/20 transition-all duration-300"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* PHONE */}
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold ml-1">Phone Number</label>
                  <input
                    type="text"
                    name="phone"
                    placeholder="+00 000 000 000"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full p-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-[#c4ec0d]/50 focus:ring-1 focus:ring-[#c4ec0d]/20 transition-all duration-300"
                  />
                </div>

                {/* PROGRAM DROPDOWN */}
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold ml-1">Inquiry Type</label>
                  <div className="relative">
                    <select
                      name="program"
                      value={form.program}
                      onChange={handleChange}
                      className="w-full p-4 bg-white/5 border border-white/10 rounded-xl text-white appearance-none cursor-pointer focus:outline-none focus:border-[#c4ec0d]/50 transition-all duration-300"
                    >
                      <option value="" className="bg-[#0a0a0a]">Interested Program</option>
                      <option className="bg-[#0a0a0a]">App Development</option>
                      <option className="bg-[#0a0a0a]">Software Development</option>
                      <option className="bg-[#0a0a0a]">Digital Marketing</option>
                      <option className="bg-[#0a0a0a]">Graphic Designing</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-gray-500 text-xs">▼</div>
                  </div>
                </div>
              </div>

              {/* MESSAGE */}
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold ml-1">Your Message</label>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="How can we help you?"
                  value={form.message}
                  onChange={handleChange}
                  required
                  className="w-full p-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-[#c4ec0d]/50 focus:ring-1 focus:ring-[#c4ec0d]/20 transition-all duration-300 resize-none"
                />
              </div>

              {/* FEEDBACK STATUS */}
              <div className="min-h-[24px] flex justify-center">
                {status === "success" && (
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[#c4ec0d] text-xs tracking-[0.2em] font-bold">
                    ✅ MESSAGE DISPATCHED SUCCESSFULLY
                  </motion.p>
                )}
                {status === "error" && (
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-500 text-xs tracking-[0.2em] font-bold">
                    ❌ DISPATCH FAILED. PLEASE RETRY.
                  </motion.p>
                )}
              </div>

              {/* IMPROVED SUBMIT BUTTON */}
              <motion.button
                type="submit"
                disabled={status === "sending"}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="relative w-full group/btn overflow-hidden px-8 py-4 rounded-xl bg-[#c4ec0d] text-black font-black tracking-[0.3em] text-xs transition-all duration-300 disabled:opacity-50"
              >
                {/* BUTTON SHINE EFFECT */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover/btn:animate-[shimmer_1.5s_infinite] transition-transform" />
                
                <span className="relative flex items-center justify-center gap-3">
                  {status === "sending" ? "TRANSMITTING..." : "SEND MESSAGE"}
                  <span className="text-lg group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
                </span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.div>

      {/* CUSTOM ANIMATION FOR SHINE */}
      <style>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};

export default Contact;