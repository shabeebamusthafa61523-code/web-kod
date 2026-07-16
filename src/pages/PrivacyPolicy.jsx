import React from "react";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { 
  ShieldCheck, 
  Lock, 
  Eye, 
  UserCheck, 
  FileText, 
  CheckCircle,
  HelpCircle
} from "lucide-react";

const PrivacyPolicy = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 }
    }
  };

  return (
    <div className="relative z-10 pt-28 pb-20 px-4 sm:px-6 md:px-8 font-geist text-white min-h-screen">
      {/* Background glow effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] -left-[10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-purple-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[20%] -right-[10%] w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-[#c4ec0d]/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        {!isHomePage && (
          <motion.button
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate(-1)}
            className="group/back mb-6 self-start flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] font-bold text-gray-400 hover:text-[#c4ec0d] transition-colors duration-300 cursor-pointer"
          >
            <span className="text-sm group-hover/back:-translate-x-1 transition-transform duration-300">
              ←
            </span>
            Go Back
          </motion.button>
        )}

        {/* Title */}
        <div className="mb-12">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black tracking-tight"
          >
            Privacy Policy
          </motion.h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "120px" }}
            className="h-[3px] mt-3 bg-gradient-to-r from-[#c4ec0d] to-purple-600 rounded-full"
          />
          <p className="mt-4 text-gray-400 text-sm max-w-2xl">
            Last Updated: July 2026. Your privacy is critically important to us. This Privacy Policy details how we handle, collect, and protect your information.
          </p>
        </div>

        {/* Privacy Sections */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-10"
        >
          {/* Section 1: Overview */}
          <motion.div
            variants={itemVariants}
            className="relative bg-white/[0.03] border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-md overflow-hidden group hover:border-white/15 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h2 className="text-xl md:text-2xl font-bold tracking-wide">
                Our Commitment to Privacy
              </h2>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              We respect your privacy and are committed to protecting any personally identifiable information you may provide us through our website and integrating API services. 
            </p>
            <p className="text-gray-300 text-sm leading-relaxed">
              This Privacy Policy explains what information may be collected on our Website, how we use this information, and under what circumstances we may disclose the information to third parties.
            </p>
          </motion.div>

          {/* Section 2: Data Collection & WhatsApp Integration */}
          <motion.div
            variants={itemVariants}
            className="relative bg-white/[0.03] border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-md overflow-hidden group hover:border-white/15 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-teal-500/10 text-teal-400 border border-teal-500/20">
                <Eye className="w-6 h-6" />
              </div>
              <h2 className="text-xl md:text-2xl font-bold tracking-wide">
                Information Collection & Integration
              </h2>
            </div>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-sm text-[#c4ec0d] mb-1">Web Forms & Registration Details</h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  We collect personal contact information (such as your name, corporate email address, and active telephone number) when you register, contact us, or inquire about our programs.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-sm text-[#c4ec0d] mb-1">WhatsApp API Integration & Consent</h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  In compliance with Meta developer standards, we require strict user opt-in before sending transaction notifications or updates via WhatsApp. User phone numbers, opt-in records, and message payloads are transmitted securely and are not shared with unauthorized third parties.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-sm text-[#c4ec0d] mb-1">Facebook Business Data</h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  During official verification setups, any business verification documents shared with our team are used exclusively for onboarding. We do not store, copy, or retain physical or digital copies of corporate documents (GST, bank statement, utility bills) past the completion of the verification process.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Section 3: Data Security */}
          <motion.div
            variants={itemVariants}
            className="relative bg-white/[0.03] border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-md overflow-hidden group hover:border-white/15 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-red-500/10 text-red-400 border border-red-500/20">
                <Lock className="w-6 h-6" />
              </div>
              <h2 className="text-xl md:text-2xl font-bold tracking-wide">
                Data Protection & Security
              </h2>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. 
            </p>
            <p className="text-gray-300 text-sm leading-relaxed">
              While we strive to use commercially acceptable means to protect your Personal Information (such as HTTPS/SSL encryption and access controls), we cannot guarantee its absolute security.
            </p>
          </motion.div>

          {/* Section 4: User Rights */}
          <motion.div
            variants={itemVariants}
            className="relative bg-white/[0.03] border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-md overflow-hidden group hover:border-white/15 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                <UserCheck className="w-6 h-6" />
              </div>
              <h2 className="text-xl md:text-2xl font-bold tracking-wide">
                Your Rights & Choice
              </h2>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              You have the right to request access to the personal data we hold about you, request corrections, or request complete removal of your data from our systems. 
            </p>
            <p className="text-gray-300 text-sm leading-relaxed">
              If you have signed up for marketing alerts or automated WhatsApp/Email services, you may opt-out or unsubscribe at any time by using the "UNSUBSCRIBE" links or responding with "STOP" directly.
            </p>
          </motion.div>

          {/* Help Contact */}
          <motion.div
            variants={itemVariants}
            className="p-4 bg-[#c4ec0d]/10 border border-[#c4ec0d]/20 rounded-xl text-xs text-[#c4ec0d] flex gap-2"
          >
            <HelpCircle className="w-5 h-5 text-[#c4ec0d] shrink-0" />
            <p className="leading-relaxed text-gray-200">
              For any questions or concerns regarding this Privacy Policy, please contact our support team at <strong className="text-[#c4ec0d]">kodbrandsolutions@gmail.com</strong>.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
