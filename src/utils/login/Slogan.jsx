import React from 'react';
import { motion } from 'framer-motion';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import VerifiedIcon from '@mui/icons-material/Verified';
import SecurityIcon from '@mui/icons-material/Security';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

const Slogan = () => {
  const slogans = [
    {
      name: "Hire the Right Talent, Not Just Any Talent",
      desc: "Only skilled candidates can apply—thanks to our smart, exam-based resume shortlisting system.",
      icon: <CheckCircleIcon className="text-slate-500 mt-1  hover:text-green-300 hover:cursor-pointer" />,
    },
    {
      name: "Skill-First, Resume-Second",
      desc: "Say goodbye to fake resumes. We prioritize verified skills through assessments before candidates can even apply.",
      icon: <VerifiedIcon className="text-slate-500 mt-1 hover:text-yellow-300 hover:cursor-pointer" />,
    },
    {
      name: "Secure & Transparent Hiring Process",
      desc: "Built with enterprise-grade security to ensure safe, confidential hiring for both companies and applicants.",
      icon: <SecurityIcon className="text-slate-500 mt-1  hover:text-red-500 hover:cursor-pointer" />,
    },
    {
      name: "Filter Once, Hire Smart",
      desc: "Our intelligent qualification filter ensures only eligible candidates move forward, saving your time and effort.",
      icon: <FilterAltIcon className="text-slate-500 mt-1  hover:text-purple-400 hover:cursor-pointer " />,
    },
    {
      name: "Built-in Online Interviewing",
      desc: "No third-party tools needed. Conduct live interviews right on SkillVerify—streamlined, secure, and fully integrated.",
      icon: <VideoCallIcon className="text-slate-500 mt-1  hover:text-blue-500 hover:cursor-pointer " />,
    },
    
    
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="text-white p-6 rounded-xl mt-10 w-[500px]"
    >
      <div>
        <img src="/logo.png" alt="SkillVerify Logo" className="w-32" />
      </div>

      {slogans.map((value, index) => (
        <div key={index} className="flex items-start gap-3 mb-6 space-x-3">
          {value.icon}
          <div className="space-y-0.5">
            <h2 className="text-sm text-slate-50">{value.name}</h2>
            <p className="text-sm text-slate-500 hover:text-slate-200">{value.desc}</p>
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default Slogan;