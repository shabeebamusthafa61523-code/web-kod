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

        setForm({
          from_name: "",
          from_email: "",
          phone: "",
          program: "",
          message: "",
        });

        setTimeout(() => {
          setStatus("idle");
        }, 3000);
      })
      .catch(() => {
        setStatus("error");
      });
  };

  return (
    <div className="relative z-10 pt-22">
     <motion.h2
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          className="text-2xl max-w-4xl mx-auto text-start sm:text-2xl  text-white text-start"
        >
          Contact Us
        </motion.h2>
              <div className="max-w-4xl mx-auto ">
                   <div className=" w-29 h-[1px]  rounded-full bg-white/50 "></div>

            </div>
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex items-center justify-center  px-4 sm:px-6 pt-14 sm:pt-14 pb-30"
    >
      
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.12 } },
        }}
        className="w-full max-w-4xl bg-transparent  bg-white/4 backdrop-blur-sm  rounded-2xl p-5 sm:p-8 "
      >
       

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">

          {/* NAME */}
          <motion.input
            type="text"
            name="from_name"
            placeholder="Full Name"
            value={form.from_name}
            onChange={handleChange}
            required
            className="w-full p-3 sm:p-4 text-sm sm:text-base bg-[#121212] border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#c4ec0d] focus:ring-1 focus:ring-[#c4ec0d]"
          />

          {/* EMAIL */}
          <motion.input
            type="email"
            name="from_email"
            placeholder="Email Address"
            value={form.from_email}
            onChange={handleChange}
            required
            className="w-full p-3 sm:p-4 text-sm sm:text-base bg-[#121212] border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#c4ec0d] focus:ring-1 focus:ring-[#c4ec0d]"
          />

          {/* PHONE + DROPDOWN */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">

            <motion.input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              className="w-full p-3 sm:p-4 text-sm sm:text-base bg-[#121212] border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#c4ec0d] focus:ring-1 focus:ring-[#c4ec0d]"
            />

            {/* 🔥 RESPONSIVE DROPDOWN */}
            <div className="relative w-full">
              <motion.select
                name="program"
                value={form.program}
                onChange={handleChange}
              className="w-full p-4 bg-[#121212] border border-[#5b21b6] rounded-lg text-white appearance-none cursor-pointer focus:outline-none focus:border-[#c4ec0d] focus:ring-1 focus:ring-[#c4ec0d] transition"
              >
                <option value="">Interested Program</option>
                <option>For Enquiries</option>
                <option>App Development</option>
                <option>Software Development</option>
                <option>Digital Marketing</option>
                <option>Graphic Designing</option>
              </motion.select>

              {/* Custom Arrow */}
              <div className="pointer-events-none absolute inset-y-0 right-3 sm:right-4 flex items-center text-gray-400 text-sm">
                ▼
              </div>
            </div>
          </div>

          {/* MESSAGE */}
          <motion.textarea
            name="message"
            rows="5"
            placeholder="Message"
            value={form.message}
            onChange={handleChange}
            required
            className="w-full p-3 sm:p-4 text-sm sm:text-base bg-[#121212] border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#c4ec0d] focus:ring-1 focus:ring-[#c4ec0d]"
          />

          {/* STATUS */}
          {status === "success" && (
            <p className="text-center text-[#c4ec0d] text-xs sm:text-sm tracking-widest">
              ✅ Message sent successfully!
            </p>
          )}

          {status === "error" && (
            <p className="text-center text-red-400 text-xs sm:text-sm tracking-widest">
              ❌ Something went wrong. Please try again.
            </p>
          )}

          {/* BUTTON */}
          <motion.button
            type="submit"
            disabled={status === "sending"}
            className="mt-4 sm:mt-6 px-6 py-3 w-full rounded-full border border-[#c4ec0d]/40 bg-black/30 backdrop-blur-sm flex items-center justify-center gap-3 text-xs sm:text-sm font-semibold tracking-[0.2em] sm:tracking-[0.25em] text-[#c4ec0d] transition-all duration-500 hover:scale-105 disabled:opacity-50"
          >
            <span>{status === "sending" ? "SENDING..." : "SEND MESSAGE"}</span>
            <span className="text-white">→</span>
          </motion.button>

        </form>
      </motion.div>
    </motion.div>
    </div>
  );
};

export default Contact;