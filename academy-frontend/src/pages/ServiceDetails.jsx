import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function ServiceDetails() {
  const navigate = useNavigate();

  const cards = [
    {
      title: "Branding & Identity",
      description:
        "We craft powerful brand identities that go beyond just visuals. From defining your brand positioning to designing a cohesive visual language, we ensure your business stands out with clarity, consistency, and purpose. Whether you’re launching something new or rebranding, we build identities that people remember.",
      logo: "/logo3.jpeg",
    },
    {
      title: "Social Media Growth",
      description:
        "Your social media should do more than just exist — it should grow your business. We manage and scale your presence across platforms like Instagram, Facebook, and LinkedIn through strategic content, consistent execution, and performance tracking. Our focus is on building engagement, increasing reach, and turning followers into customers.",
      logo: "/logo3.jpeg",
    },
    {
      title: "Performance Marketing",
      description:
        "We run data-driven advertising campaigns designed to generate real results. From Meta ads to Google campaigns, we focus on reaching the right audience, optimizing conversions, and maximizing your return on investment. Every campaign is built with a clear goal — leads, sales, or brand visibility.",
      logo: "/logo3.jpeg",
    },
    {
      title: "Content Creation & Production",
      description:
        "Content is the backbone of modern marketing, and we make sure yours stands out. From ideation to execution, we produce high-quality videos, creatives, and brand content that capture attention and drive engagement. Our approach combines creativity with strategy to deliver content that performs.",
      logo: "/logo3.jpeg",
    },
    {
      title: "Website & E-Commerce Development",
      description:
          "Your website is your digital storefront, and we make sure it performs like one. We design and develop modern, user-friendly websites and e-commerce platforms that are optimized for conversions, speed, and user experience. Whether it’s a business website or a Shopify store, we build with growth in mind.",
      logo: "/logo3.jpeg",
    },
    {
      title: "SEO & Organic Growth",
      description:
        "Content is the backbone of modern marketing, and we make sure yours stands out. From ideation to execution, we produce high-quality videos, creatives, and brand content that capture attention and drive engagement. Our approach combines creativity with strategy to deliver content that performs.",
      logo: "/logo3.jpeg",
    },
    {
      title: "Creative & Design Services",
      description:
       "Strong visuals create strong impressions. We design impactful creatives for social media, advertisements, and branding materials that align with your identity and communicate your message effectively. Every design is crafted to capture attention and enhance brand recall.",
      logo: "/logo3.jpeg",
    },
    {
      title: "Growth Strategy & Consultation",
      description:
           "We don’t just execute — we guide. Our strategy and consulting services are designed to give your business a clear direction for growth. From market analysis to funnel planning, we help you make smarter decisions and build scalable systems that support long-term success.",
      logo: "/logo3.jpeg",
    },
    {
      title: "Personal Branding",
      description:
         "In today’s digital world, people connect with people. We help founders, professionals, and creators build a strong personal brand that establishes authority and trust. From content direction to platform strategy, we position you as a leader in your space.",
      logo: "/logo3.jpeg",
    },
    {
      title: "Sales & Lead Systems",
      description:
       "Generating leads is only half the job — converting them is what matters. We design and implement systems that streamline your sales process, including CRM setups, automation, and WhatsApp or email funnels. Our goal is to turn interest into consistent revenue.",
      logo: "/logo3.jpeg",
    },
   
  ];

  // Reusable renderer
  const renderCards = (cardList) =>
    cardList.map((card, i) => {
      const isSpecial = i % 3 === 0;

      return (
        <motion.div
          key={i}
          variants={{
            hidden: { opacity: 0, y: 30, scale: 0.95 },
            visible: { opacity: 1, y: 0, scale: 1 },
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          whileHover={{ scale: 1.03 }}
          className={`group rounded-2xl p-[1px] ${
            isSpecial
              ? "bg-gradient-to-br from-[#b7d333]/60 via-[#442d82]/60 to-[#b7d333]/40 shadow-[0_0_60px_rgba(183,211,51,0.15)]"
              : "bg-gradient-to-br from-[#1a1a1a] via-[#0f0f0f] to-[#1a1a1a]"
          }`}
        >
          <div
            className={`rounded-2xl p-6 h-full flex flex-col transition-all duration-500 group-hover:-translate-y-2 ${
              isSpecial
                ? "bg-gradient-to-br from-[#1a1a1a] via-[#0d0d0d] to-[#1b1230]"
                : "bg-[#0b0b0b]"
            } group-hover:shadow-[0_0_40px_rgba(68,45,130,0.25)]`}
          >
            {/* Logo */}
            <div className="w-14 h-14 rounded-xl bg-black border border-white/10 flex items-center justify-center mb-5">
              <img
                src={card.logo}
                alt={card.title}
                className={`object-contain ${
                  isSpecial ? "w-10 h-10" : "w-8 h-8"
                }`}
              />
            </div>

            {/* Title */}
            <h3
              className={`font-semibold tracking-wide text-white ${
                isSpecial ? "text-2xl mb-4" : "text-2xl mb-4"
              }`}
            >
              {card.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-400 leading-6 flex-1">
              {card.description}
            </p>

          </div>
        </motion.div>
      );
    });

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="min-h-screen w-full bg-black py-20 pt-38 px-6 text-white relative overflow-hidden"
    >
      {/* Background styles */}
      <style>{`
        @keyframes blob1 {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(80px, -60px) scale(1.1); }
          66% { transform: translate(-60px, 40px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes blob2 {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(-70px, 50px) scale(1.2); }
          66% { transform: translate(60px, -40px) scale(0.95); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes blob3 {
          0% { transform: translate(0px, 0px) scale(1); }
          50% { transform: translate(40px, 30px) scale(1.1); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .blob1 { animation: blob1 18s infinite; }
        .blob2 { animation: blob2 22s infinite; }
        .blob3 { animation: blob3 20s infinite; }
      `}</style>

      {/* Background blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[600px] h-[600px] bg-[#b7d333]/10 rounded-full blur-[120px] blob1 top-[-200px] left-[-150px]" />
        <div className="absolute w-[500px] h-[500px] bg-[#442d82]/20 rounded-full blur-[120px] blob2 bottom-[-200px] right-[-150px]" />
        <div className="absolute w-[400px] h-[400px] bg-white/5 rounded-full blur-[120px] blob3 top-[40%] left-[40%]" />
      </div>
        <div className="max-w-5xl mx-auto">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {renderCards(cards)}
  </div>
</div>
    </motion.div>
  );
}