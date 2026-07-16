import React from "react";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { 
  Shield, 
  BookOpen, 
  Users, 
  CreditCard, 
  FileText, 
  Award, 
  MessageSquare, 
  Globe, 
  AlertTriangle, 
  Lock, 
  RefreshCw, 
  Scale, 
  Mail, 
  Phone,
  ArrowLeft
} from "lucide-react";

const TermsConditions = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const sections = [
    {
      id: "1",
      title: "1. About Kodbrand Academy",
      icon: <BookOpen className="w-5 h-5 text-teal-400" />,
      content: "Kodbrand Academy provides educational and training services, including online and offline courses, workshops, mentoring programs, internships, and skill development programs in various domains."
    },
    {
      id: "2",
      title: "2. Eligibility",
      icon: <Users className="w-5 h-5 text-purple-400" />,
      content: "By using our services, you confirm that you are at least 18 years of age, or you have the permission of a parent or legal guardian to enroll in our programs. You agree to provide accurate and complete information during registration."
    },
    {
      id: "3",
      title: "3. Course Enrollment",
      icon: <FileText className="w-5 h-5 text-blue-400" />,
      content: "Enrollment in any course is subject to availability and successful registration. Kodbrand Academy reserves the right to accept or reject any enrollment at its sole discretion."
    },
    {
      id: "4",
      title: "4. Fees and Payments",
      icon: <CreditCard className="w-5 h-5 text-[#c4ec0d]" />,
      list: [
        "Course fees must be paid according to the payment schedule communicated during enrollment.",
        "Fees paid are generally non-refundable unless otherwise stated in the specific course policy.",
        "Failure to complete payment may result in suspension or cancellation of access to course materials and services."
      ]
    },
    {
      id: "5",
      title: "5. Student Responsibilities",
      icon: <Users className="w-5 h-5 text-orange-400" />,
      content: "Students agree to maintain respectful behavior towards trainers, staff, and fellow students, use learning materials only for personal educational purposes, not copy, distribute, record, or reproduce course content without written permission, and follow all classroom and online learning guidelines. Any misconduct may result in suspension or termination of enrollment without refund."
    },
    {
      id: "6",
      title: "6. Intellectual Property",
      icon: <Shield className="w-5 h-5 text-red-400" />,
      content: "All course materials, videos, presentations, assignments, software, logos, website content, and training resources are the intellectual property of Kodbrand Academy. Unauthorized copying, sharing, resale, or distribution is strictly prohibited."
    },
    {
      id: "7",
      title: "7. Certificates",
      icon: <Award className="w-5 h-5 text-yellow-400" />,
      content: "Certificates will be issued only to students who successfully complete the required course criteria, including attendance, assignments, assessments, or projects, where applicable."
    },
    {
      id: "8",
      title: "8. WhatsApp Communication",
      icon: <MessageSquare className="w-5 h-5 text-emerald-400" />,
      content: "By providing your mobile number, you consent to receive WhatsApp communications from Kodbrand Academy regarding:",
      list: [
        "Admission enquiries",
        "Course updates",
        "Class schedules",
        "Assignment reminders",
        "Internship and placement updates",
        "Event notifications",
        "Student support",
        "Promotional offers (where applicable)"
      ],
      footer: "You may request to stop receiving promotional messages at any time by contacting our support team."
    },
    {
      id: "9",
      title: "9. Website Usage",
      icon: <Globe className="w-5 h-5 text-pink-400" />,
      content: "Users agree not to attempt unauthorized access to our systems, upload malicious software or harmful content, misuse the website for illegal activities, or interfere with the operation or security of the website."
    },
    {
      id: "10",
      title: "10. Limitation of Liability",
      icon: <AlertTriangle className="w-5 h-5 text-amber-500" />,
      content: "Kodbrand Academy strives to provide accurate information and quality education. However, we do not guarantee specific academic, employment, or career outcomes. We shall not be liable for any indirect, incidental, or consequential damages arising from the use of our website or educational services."
    },
    {
      id: "11",
      title: "11. Privacy",
      icon: <Lock className="w-5 h-5 text-indigo-400" />,
      content: "Your personal information is handled in accordance with our Privacy Policy. By using our website and services, you consent to the collection and use of your information as described in the Privacy Policy."
    },
    {
      id: "12",
      title: "12. Changes to Terms",
      icon: <RefreshCw className="w-5 h-5 text-cyan-400" />,
      content: "Kodbrand Academy reserves the right to modify these Terms and Conditions at any time. Updated versions will be published on this website and become effective immediately upon publication."
    },
    {
      id: "13",
      title: "13. Governing Law",
      icon: <Scale className="w-5 h-5 text-slate-400" />,
      content: "These Terms and Conditions shall be governed by the laws of India. Any disputes arising from these Terms shall be subject to the jurisdiction of the competent courts in Kerala, India."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 25 }
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
            <ArrowLeft className="w-3 h-3 group-hover/back:-translate-x-1 transition-transform duration-300" />
            Go Back
          </motion.button>
        )}

        {/* Title / Intro */}
        <div className="mb-12">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black tracking-tight"
          >
            Terms & Conditions
          </motion.h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "120px" }}
            className="h-[3px] mt-3 bg-gradient-to-r from-[#c4ec0d] to-purple-600 rounded-full"
          />
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-8 p-6 bg-white/[0.02] border border-white/5 rounded-2xl backdrop-blur-sm"
          >
            <p className="text-gray-300 text-sm leading-relaxed">
              Welcome to <strong>Kodbrand Academy</strong> – the leading Digital Marketing & Graphic Designing, Software Development, App Development Academy in Kerala. By accessing or using our website, enrolling in our courses, or communicating with us through our website or WhatsApp, you agree to comply with these Terms and Conditions. If you do not agree with these terms, please do not use our services.
            </p>
          </motion.div>
        </div>

        {/* Policy Sections */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          {sections.map((section) => (
            <motion.div
              key={section.id}
              variants={itemVariants}
              className="p-6 bg-white/[0.02] border border-white/5 hover:border-white/10 rounded-2xl transition-all duration-300 backdrop-blur-sm group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors">
                  {section.icon}
                </div>
                <h3 className="font-bold text-base md:text-lg text-gray-100">{section.title}</h3>
              </div>

              {section.content && (
                <p className="text-gray-300 text-sm leading-relaxed">{section.content}</p>
              )}

              {section.list && (
                <ul className="mt-3 space-y-2 text-sm text-gray-300 pl-5 list-disc marker:text-[#c4ec0d]">
                  {section.list.map((item, idx) => (
                    <li key={idx} className="leading-relaxed">{item}</li>
                  ))}
                </ul>
              )}

              {section.footer && (
                <p className="mt-3 text-xs text-gray-400 italic">{section.footer}</p>
              )}
            </motion.div>
          ))}

          {/* Section 14: Contact Us */}
          <motion.div
            variants={itemVariants}
            className="p-6 bg-purple-950/10 border border-purple-500/20 rounded-2xl backdrop-blur-sm group"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/20">
                <Mail className="w-5 h-5 text-purple-400" />
              </div>
              <h3 className="font-bold text-base md:text-lg text-gray-100">14. Contact Us</h3>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              If you have any questions regarding these Terms and Conditions, please contact us using the details below:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl flex items-center gap-3">
                <div className="text-teal-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Email Us</p>
                  <a href="mailto:kodbrandsolutions@gmail.com" className="text-sm font-bold text-gray-200 hover:text-teal-400 transition-colors">
                    kodbrandsolutions@gmail.com
                  </a>
                </div>
              </div>

              <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl flex items-center gap-3">
                <div className="text-[#c4ec0d]">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Visit Our Website</p>
                  <a href="https://kodbrand.com" target="_blank" rel="noreferrer" className="text-sm font-bold text-gray-200 hover:text-[#c4ec0d] transition-colors">
                    https://kodbrand.com
                  </a>
                </div>
              </div>

              <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl flex items-center gap-3 sm:col-span-2">
                <div className="text-purple-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Phone Support</p>
                  <span className="text-sm font-bold text-gray-200">
                    +91 9678007291
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsConditions;
