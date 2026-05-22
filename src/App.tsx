/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Video, Layers, Send, Smartphone, Globe, ArrowUpRight, Play, 
  CheckCircle2, MessageCircle, Mail, Instagram, Facebook,
  Users, Briefcase, Zap, Star, ChevronRight, Menu, X,
  FileText, ShieldCheck, Clock, Award, Search
} from "lucide-react";


import brandlogo1 from "./assets/brands/Crack_Intake.png";

// Custom Tiktok icon as it might be missing in older Lucide versions
const TiktokIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

type Page = 'landing' | 'videos' | 'graphics' | 'articles' | 'about' | 'privacy' | 'terms';

const PrivacyPolicy = ({ onBack }: { onBack: () => void }) => (
  <section className="max-w-4xl mx-auto px-10 py-32">
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
      <button onClick={onBack} className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500 hover:text-amber-500 transition-colors mb-8 inline-flex items-center gap-2">
        <X className="w-3 h-3" /> Back to Home
      </button>
      <h1 className="text-5xl font-black font-display text-white tracking-tight mb-12">PRIVACY POLICY</h1>
      <div className="space-y-8 text-gray-400 text-sm leading-loose font-medium">
        <p>At FORGE Production, accessible from raushanthakur.com.np, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by FORGE Production and how we use it.</p>
        <div>
          <h3 className="text-white font-bold mb-4 uppercase tracking-wider">Information We Collect</h3>
          <p>We only collect information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, when you participate in activities on the website or otherwise when you contact us.</p>
        </div>
        <div>
          <h3 className="text-white font-bold mb-4 uppercase tracking-wider">How We Use Your Information</h3>
          <ul className="list-disc ml-5 space-y-2">
            <li>To provide, operate, and maintain our website</li>
            <li>To improve, personalize, and expand our services</li>
            <li>To understand and analyze how you use our website</li>
            <li>To develop new products, services, features, and functionality</li>
            <li>To communicate with you for customer service and updates</li>
          </ul>
        </div>
        <p>If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us at contact@raushanthakur.com.np.</p>
      </div>
    </motion.div>
  </section>
);

const TermsOfService = ({ onBack }: { onBack: () => void }) => (
  <section className="max-w-4xl mx-auto px-10 py-32">
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
      <button onClick={onBack} className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500 hover:text-amber-500 transition-colors mb-8 inline-flex items-center gap-2">
        <X className="w-3 h-3" /> Back to Home
      </button>
      <h1 className="text-5xl font-black font-display text-white tracking-tight mb-12 uppercase">Terms of Service</h1>
      <div className="space-y-10 text-gray-400 text-sm leading-loose font-medium">
        <p className="text-lg text-white/80 font-bold mb-4">Welcome to Forge Production. By hiring us for media creation, video production, branding, or related services, you agree to the following Terms of Service:</p>
        
        <div>
          <h3 className="text-white font-bold mb-4 uppercase tracking-wider flex items-center gap-3">
            <span className="text-amber-500">1.</span> Scope of Work & Revisions
          </h3>
          <p>Forge Production will deliver the media services agreed upon in the project proposal or invoice. Any requests for changes, additions, or major revisions outside the original project scope may incur additional fees. Final project delivery timelines are dependent on the client providing timely feedback and assets.</p>
        </div>

        <div>
          <h3 className="text-white font-bold mb-4 uppercase tracking-wider flex items-center gap-3">
            <span className="text-amber-500">2.</span> Intellectual Property & Usage Rights
          </h3>
          <p>Until full payment is made, all creative concepts, drafts, and raw footage remain the exclusive property of Forge Production. Upon final payment, the client receives the usage rights for the final delivered media as agreed. Forge Production retains the right to showcase the completed work in our portfolio, website, and social media for promotional purposes unless a non-disclosure agreement (NDA) is signed.</p>
        </div>

        <div>
          <h3 className="text-white font-bold mb-4 uppercase tracking-wider flex items-center gap-3">
            <span className="text-amber-500">3.</span> Client Responsibilities & Approvals
          </h3>
          <p>The client is responsible for acquiring all necessary permissions, licenses, and releases for any materials (logos, music, scripts, images) they provide to us for production. Forge Production will not be held liable for copyright issues arising from client-furnished materials. Final approval of the delivered media rests solely with the client.</p>
        </div>

        <div>
          <h3 className="text-white font-bold mb-4 uppercase tracking-wider flex items-center gap-3">
            <span className="text-amber-500">4.</span> Payment Terms & Cancellation
          </h3>
          <p>Deposits or booking fees are required to initiate project production and are non-refundable. Final balance payments are due upon delivery of the final product. If a project is cancelled or postponed by the client after production has begun, the client agrees to pay for all work completed up to the date of cancellation.</p>
        </div>
      </div>
    </motion.div>
  </section>
);

// --- CONFIGURATION: EDIT THESE TO CUSTOMIZE YOUR SITE ---
const BRAND_CONFIG = {
  name: "FORGE",
  tagline: "PRODUCTION",
  email: "contact@raushanthakur.com.np",
  phone: "+977 9866716548",
  whatsapp: "9779866716548",
  socials: {
    instagram: "https://www.instagram.com/forge_production/",
    facebook: "https://www.facebook.com/forgeproduction1/",
    tiktok: "https://www.tiktok.com/@forge.production"
  },
  // Set to a URL for an image logo, or stay null to use the text logo
  logoImageUrl: "/forge_logo.png",
  // Image for the "Our Protocol" section (72 Hours box)
  protocolImageUrl: "src/assets/POST 8.jpg" 
};

// --- PORTFOLIO DATA ---
const FEATURED_VIDEOS = [
  { title: "Dynamic Lead Generation", description: "High-impact commercial video showcasing motion graphics, text overlays, and optimized pacing for consultancy brands.", driveId: "1TWN_cMMsYGr3_Sc3m6C-m48NrSmj2q7c", category: "COMMERCIAL AD", thumbnailUrl: "src/assets/thumb/video1.png" },
  { title: "Cinematic Makeover Reel", description: "High-retention commercial lifestyle ad featuring dynamic split-cuts, premium product styling, and structured pacing for salon brands.", driveId: "1hVRcsyChUO_mZPeS0HKbOjlN3qqNDhU7", category: "BRAND TRANSFORMATION", thumbnailUrl: "src/assets/thumb/video2.png" },
  { title: "Product Showcase Reel", description: "A crisp commercial feature highlighting advanced blue-light filters, macro product details, and feature-driven pacing for eyewear brands.", driveId: "1vfpqwh_JfeSriPfg_trELZjQM9jLNsO_", category: "COMMERCIAL AD", thumbnailUrl: "src/assets/thumb/video3.png" },
  { title: "Interactive Contest Reel", description: "A promotional campaign feature showcasing bold kinetic graphics, target audience filters, and incentive-driven conversion tactics.", driveId: "1I8ikM1yqaSNiFkBFapuZ61XGcXnvpG23", category: "CAMPAIGN AD", thumbnailUrl: "src/assets/thumb/video4.png" }
];

const ALL_GRAPHICS = [
  { 
    title: "Visa Strategy Set", 
    description: "Premium typography grid and high-conversion ad copies optimized for commercial client education aesthetics.", 
    tag: "BRAND NARRATIVE & IDENTITY", 
    gradient: "bg-gradient-to-br from-amber-600/30 to-black",
    imageUrl: "src/assets/post/Consultancy Design.jpg" // Add your local image path here like "/assets/graphics/visa.jpg"
  },
  { 
    title: "Merchandise Framework", 
    description: "Clean product and retail pack presentation displaying high-fidelity physical assets with studio-grade lighting.", 
    tag: "BRAND REVEAL", 
    gradient: "bg-gradient-to-br from-orange-600/30 to-black",
    imageUrl: "src/assets/post/Bag 1.jpg" // Add your local image path here like "/assets/graphics/corporate_identity.jpg"
  },
  { 
    title: "Minimalist Product Ad", 
    description: "Studio-grade product display design leveraging vibrant monochrome aesthetics and direct conversion UI placement.", 
    tag: "PRODUCT AD CREATIVE", 
    gradient: "bg-gradient-to-br from-red-600/30 to-black",
    imageUrl: "src/assets/post/watch design.png" // Add your local image path here like "/assets/graphics/admission_banner.jpg"
  },
  { 
    title: "Architectural Prestige", 
    description: "High-end property showcase integrating luxury sky backdrops, crisp typography, and conversions-focused branding layouts.", 
    tag: "REAL ESTATE MEDIA", 
    gradient: "bg-gradient-to-br from-blue-600/30 to-black",
    imageUrl: "src/assets/post/design 1.jpg" // Add your local image path here like "/assets/graphics/poster_series.jpg"
  },
  { 
    title: "Premium Product Launch", 
    description: "Bold high-fidelity promotional asset combining industrial textures, dynamic angles, and high-impact e-commerce styling.", 
    tag: "E-COMMERCE HERO", 
    gradient: "bg-gradient-to-br from-emerald-600/30 to-black",
    imageUrl: "src/assets/post/headphone.jpg" // Add your local image path here like "/assets/graphics/brand_guidelines.jpg"
  },
  { 
    title: "Regional Impact Banner", 
    description: "High-contrast marketing creative blending pop-culture authority with bold local language engagement hooks.", 
    tag: "SOCIAL DISRUPTION", 
    gradient: "bg-gradient-to-br from-purple-600/30 to-black",
    imageUrl: "src/assets/post/POST 1.jpg" // Add your local image path here like "/assets/graphics/annual_report.jpg"
  },
  { 
    title: "Elite Identity Setup", 
    description: "Premium brand placement utilizing hyper-focused lighting and corporate chess metaphors for strategic positioning.", 
    tag: "COMMERCIAL CAMPAIGN", 
    gradient: "bg-gradient-to-br from-pink-600/30 to-black",
    imageUrl: "src/assets/post/POST 4.jpg" // Add your local image path here like "/assets/graphics/podcast_branding.jpg"
  },
  { 
    title: "Heritage Event Kit", 
    description: "Elegant monochrome design layout crafted for high-end traditional events and premium studio photography portfolios.", 
    tag: "CULTURAL NARRATIVE", 
    gradient: "bg-gradient-to-br from-amber-800/30 to-black",
    imageUrl: "src/assets/post/pasni 2.jpg" // Add your local image path here like "/assets/graphics/event_poster.jpg"
  },
  { 
    title: "Academic Legacy Film", 
    description: "A premium narrative documentary capturing international student success stories with high-fidelity corporate brand aesthetic.", 
    tag: "DOCUMENTARY", 
    gradient: "bg-gradient-to-br from-gray-600/30 to-black",
    imageUrl: "src/assets/post/documentary.jpg" // Add your local image path here like "/assets/graphics/social_media_kit.jpg"
  }
];

const CLIENTS_DATA = [
  { name: "Crack Intake", logoText: null, logoImageUrl: brandlogo1 },
  { name: "Dolphin Education", logoText: null, logoImageUrl: "src/assets/brands/Dolphin.png" },
  { name: "Dustynep", logoText: null, logoImageUrl: "src/assets/brands/Dustynep.png" },
  { name: "Seed Academy", logoText: null, logoImageUrl: "src/assets/brands/Seed.png" },
  { name: "Tminnzy", logoText: null, logoImageUrl: "src/assets/brands/Tminnzy.png" }
];

// --- LEADERSHIP DATA ---
const LEADERSHIP_DATA = [
  { 
    name: "Raushan Sharma", 
    role: "Founder", 
    imageUrl: "src/assets/team/Raushan.jpeg", // Add path like "/assets/team/raushan.jpg"
    bio: "Drives creative direction and premium brand systems, specializing in high-end cinematic and architectural motion." 
  },
  { 
    name: "Suman Giri", 
    role: "Production Lead", 
    imageUrl: "src/assets/team/Suman.jpeg", 
    bio: "Executes high-fidelity on-set production, mastering complex camera dynamics and advanced 3D transitions." 
  },
  { 
    name: "Bishal Puri", 
    role: "Post-Production Lead", 
    imageUrl: "src/assets/team/Bishal.jpeg", 
    bio: "Oversees premium editing, color grading, and strategic pacing for high-retention commercial ads." 
  }
];

// const fadeIn = {
//   initial: { opacity: 0, y: 20 },
//   animate: { opacity: 1, y: 0 },
//   transition: { duration: 0.6 }
// };

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

// interface VideoItemProps {
//   title: string;
//   description: string;
//   driveId: string;
//   category?: string;
// }

// function VideoCard({ title, description, driveId, category }: VideoItemProps) {
//   return (
//     <motion.div 
//       variants={fadeIn}
//       className="glass p-5 rounded-xl group transition-all duration-300 hover:border-amber-500/30 flex flex-col h-full"
//     >
//       <div className="aspect-video w-full rounded-lg overflow-hidden bg-gray-950 relative">
//         <iframe 
//           src={driveId.startsWith('http') ? driveId : `https://drive.google.com/file/d/${driveId}/preview`} 
//           width="100%" 
//           height="100%" 
//           allow="autoplay" 
//           allowFullScreen
//           className="opacity-80 group-hover:opacity-100 transition-opacity"
//         />
//         <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
//            <div className="play-btn scale-75 group-hover:scale-100 transition-transform duration-500">
//              <Play className="w-5 h-5 text-black fill-black ml-1" />
//            </div>
//         </div>
//         {category && (
//           <div className="absolute top-3 left-3 bg-amber-500 text-black px-2 py-0.5 text-[8px] uppercase tracking-widest rounded-sm font-black backdrop-blur-sm">
//             {category}
//           </div>
//         )}
//       </div>
//       <h4 className="text-base font-bold mt-5 font-display tracking-tight text-white">{title}</h4>
//       <p className="text-[11px] text-gray-500 mt-2 leading-relaxed flex-grow">{description}</p>
//     </motion.div>
//   );
// }

interface VideoItemProps {
  title: string;
  description: string;
  driveId: string;
  category?: string;
  thumbnailUrl?: string; // <-- FIX: Yahan '?' laga diya taaki ye optional ho jaye aur crash na kare
}

function VideoCard({ title, description, driveId, category, thumbnailUrl }: VideoItemProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const videoSrc = driveId.startsWith('http') 
    ? (driveId.includes('/view') ? driveId.replace('/view', '/preview') : driveId)
    : `https://drive.google.com/file/d/${driveId}/preview`;

  const autoplaySrc = `${videoSrc}?autoplay=1`;

  return (
    <motion.div 
      variants={fadeIn}
      className="glass p-5 rounded-xl group transition-all duration-300 hover:border-amber-500/30 flex flex-col h-full"
    >
      <div className="aspect-video w-full rounded-lg overflow-hidden bg-gray-950 relative">
        
        {/* FIX: Agar isPlaying true ho YA fir galti se thumbnailUrl na ho, toh direct iframe load ho jaye */}
        {isPlaying || !thumbnailUrl ? (
          <iframe 
            src={isPlaying ? autoplaySrc : videoSrc}
            width="100%" 
            height="100%" 
            allow="autoplay" 
            allowFullScreen
            className="w-full h-full border-none"
          />
        ) : (
          <div 
            onClick={() => setIsPlaying(true)}
            className="absolute inset-0 cursor-pointer w-full h-full select-none"
          >
            <img 
              src={thumbnailUrl} 
              alt={`${title} Thumbnail`} 
              className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all duration-500 scale-100 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-60" />

            <div className="absolute inset-0 flex items-center justify-center">
               <div className="play-btn scale-75 group-hover:scale-100 transition-transform duration-500 shadow-xl">
                 <Play className="w-5 h-5 text-black fill-black ml-1" />
               </div>
            </div>
          </div>
        )}

        {category && (
          <div className="absolute top-3 left-3 bg-amber-500 text-black px-2 py-0.5 text-[8px] uppercase tracking-widest rounded-sm font-black backdrop-blur-sm pointer-events-none z-10">
            {category}
          </div>
        )}
      </div>
      
      <h4 className="text-base font-bold mt-5 font-display tracking-tight text-white">{title}</h4>
      <p className="text-[11px] text-gray-500 mt-2 leading-relaxed flex-grow">{description}</p>
    </motion.div>
  );
}

// interface GraphicItemProps {
//   title: string;
//   description: string;
//   tag: string;
//   gradient: string;
//   imageUrl?: string | null;
// }

// function GraphicCard({ title, description, tag, gradient, imageUrl }: GraphicItemProps) {
//   return (
//     <motion.div 
//       variants={fadeIn}
//       className="glass rounded-xl p-5 group transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/30 flex flex-col h-full w-full"
//     >
//       <div className={`aspect-video rounded-lg ${gradient} flex items-center justify-center relative overflow-hidden mb-4`}>
//         {imageUrl ? (
//           <img src={imageUrl} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
//         ) : (
//           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.5)_100%)]" />
//         )}
//         <span className="text-[10px] text-zinc-100 tracking-widest font-mono z-10 opacity-70 uppercase bg-black/60 px-2 py-1 backdrop-blur-md rounded">
//           {tag.split(':')[1]?.trim() || tag}
//         </span>
//       </div>
//       <h4 className="font-bold text-sm font-display flex items-center justify-between tracking-tight text-white">
//         {title}
//         <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all text-amber-500" />
//       </h4>
//       <p className="text-[11px] text-gray-500 mt-2 leading-relaxed flex-grow">{description}</p>
//     </motion.div>
//   );
// }

interface GraphicItemProps {
  title: string;
  description: string;
  tag: string;
  gradient: string;
  imageUrl?: string | null;
}

function GraphicCard({ title, description, tag, gradient, imageUrl }: GraphicItemProps) {
  // State to track if the popup modal is open
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* 1. Main Grid Card Component */}
      <motion.div 
        variants={fadeIn}
        className="glass rounded-xl p-5 group transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/30 flex flex-col h-full w-full"
      >
        {/* Aspect Video wrapper box with active click listener */}
        <div 
          onClick={() => imageUrl && setIsOpen(true)}
          className={`aspect-video rounded-lg ${gradient} flex items-center justify-center relative overflow-hidden mb-4 ${imageUrl ? 'cursor-zoom-in' : ''}`}
        >
          {imageUrl ? (
            /* FIX: Full dynamic cover grid containment handles structural constraints */
            <img 
              src={imageUrl} 
              alt={title} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
            />
          ) : (
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.5)_100%)]" />
          )}
          
          <span className="absolute bottom-3 left-3 text-[10px] text-zinc-100 tracking-widest font-mono z-10 opacity-70 uppercase bg-black/60 px-2 py-1 backdrop-blur-md rounded pointer-events-none">
            {tag.split(':')[1]?.trim() || tag}
          </span>
        </div>

        {/* Dynamic Typography and Navigation Layout Links */}
        <h4 className="font-bold text-sm font-display flex items-center justify-between tracking-tight text-white">
          {title}
          <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all text-amber-500" />
        </h4>
        <p className="text-[11px] text-gray-500 mt-2 leading-relaxed flex-grow">{description}</p>
      </motion.div>

      {/* 2. Premium Elite Lightbox Popup Modal */}
      <AnimatePresence>
        {isOpen && imageUrl && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)} // Close modal if user clicks backdrop context layers
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-10 cursor-zoom-out"
          >
            {/* Safe Close Button Controller Overlay */}
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-all"
            >
              <X className="w-5 h-5" />
            </button>

            {/* High Fidelity Large Scale Display Layout Context */}
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl max-h-[85vh] rounded-lg overflow-hidden flex flex-col items-center justify-center shadow-2xl"
              onClick={(e) => e.stopPropagation()} // Prevents accidental closing when graphics image asset container is clicked
            >
              <img 
                src={imageUrl} 
                alt={title} 
                className="max-w-full max-h-[80vh] object-contain rounded-md border border-white/5 shadow-2xl" 
              />
              
              {/* Context Text Overlay underneath graphic frame limits */}
              <div className="mt-3 text-center pointer-events-none">
                <p className="text-xs text-white/80 font-medium tracking-wide">{title}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// interface ArticleProps {
//   title: string;
//   excerpt: string;
//   date: string;
//   readTime: string;
// }

// function ArticleCard({ title, excerpt, date, readTime }: ArticleProps) {
//   return (
//     <motion.div 
//       variants={fadeIn}
//       className="glass p-6 rounded-xl hover:border-amber-500/20 transition-all cursor-pointer group flex flex-col h-full"
//     >
//       <div className="flex items-center gap-3 text-[10px] text-gray-500 uppercase tracking-widest mb-4">
//         <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {readTime}</span>
//         <span className="w-1 h-1 bg-gray-700 rounded-full" />
//         <span>{date}</span>
//       </div>
//       <h4 className="text-lg font-bold font-display text-white mb-3 group-hover:text-amber-500 transition-colors">{title}</h4>
//       <p className="text-[12px] text-gray-500 leading-[1.8] flex-grow mb-6">{excerpt}</p>
//       <div className="flex items-center gap-2 text-amber-500 text-[10px] font-bold uppercase tracking-widest group-hover:gap-4 transition-all">
//         Read Full Strategy <ChevronRight className="w-4 h-4" />
//       </div>
//     </motion.div>
//   );
// }

interface ArticleProps {
  title: string;
  excerpt: string;
  content: string; // <-- 1. Added full body text content here
  date?: string;   // Optional: If blank, it will auto-take current date
}

export function ArticleCard({ title, excerpt, content, date }: ArticleProps) {
  // State controller to toggle full screen strategy reader
  const [isReaderOpen, setIsReaderOpen] = useState(false);

  // 2. AUTO-DYNAMIC DATE LOGIC: If date missing, auto-generate today's neat format
  const finalDate = date || new Date().toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });

  // 3. AUTO-DYNAMIC READ TIME LOGIC: Counts words and estimates time (Avg 200 words/min)
  const calculateReadTime = (text: string) => {
    const wordsPerMinute = 200;
    const words = text.split(/\s+/).filter(word => word.length > 0).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes < 1 ? 1 : minutes} min read`;
  };

  const autoReadTime = calculateReadTime(content + " " + excerpt);

  return (
    <>
      {/* Clickable Master Grid Card */}
      <motion.div 
        variants={fadeIn}
        onClick={() => setIsReaderOpen(true)}
        className="glass p-6 rounded-xl hover:border-amber-500/20 transition-all cursor-pointer group flex flex-col h-full select-none"
      >
        <div className="flex items-center gap-3 text-[10px] text-gray-500 uppercase tracking-widest mb-4">
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" /> {autoReadTime}
          </span>
          <span className="w-1 h-1 bg-gray-700 rounded-full" />
          <span>{finalDate}</span>
        </div>
        
        <h4 className="text-lg font-bold font-display text-white mb-3 group-hover:text-amber-500 transition-colors">
          {title}
        </h4>
        
        <p className="text-[12px] text-gray-500 leading-[1.8] flex-grow mb-6">
          {excerpt}
        </p>
        
        {/* Call to Action Trigger Anchor */}
        <div className="flex items-center gap-2 text-amber-500 text-[10px] font-bold uppercase tracking-widest group-hover:gap-4 transition-all">
          Read Full Strategy <ChevronRight className="w-4 h-4" />
        </div>
      </motion.div>

      {/* Premium Strategy Article Modal Overlay */}
      <AnimatePresence>
        {isReaderOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsReaderOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-10 cursor-zoom-out"
          >
            {/* Native Close Framework Button */}
            <button 
              onClick={() => setIsReaderOpen(false)}
              className="absolute top-6 right-6 text-white/60 hover:text-white bg-white/5 hover:bg-white/10 p-2.5 rounded-full transition-all"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Strategic Typography Content Container */}
            <motion.div
              initial={{ scale: 0.96, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.96, y: 20 }}
              transition={{ type: "spring", damping: 30, stiffness: 350 }}
              onClick={(e) => e.stopPropagation()} // Stop propagation layer collapse
              className="bg-zinc-950 border border-white/5 p-6 md:p-12 rounded-2xl max-w-3xl w-full max-h-[85vh] overflow-y-auto cursor-default custom-scrollbar shadow-2xl"
            >
              {/* Top Meta Details bar */}
              <div className="flex items-center gap-3 text-[10px] text-amber-500 uppercase tracking-widest mb-4 font-mono">
                <span>{autoReadTime}</span>
                <span className="w-1.5 h-1.5 bg-zinc-800 rounded-full" />
                <span className="text-gray-500">{finalDate}</span>
              </div>

              {/* Strategy Header Document Title */}
              <h2 className="text-2xl md:text-3xl font-bold font-display text-white tracking-tight mb-6 leading-tight">
                {title}
              </h2>

              {/* Divider Interface element */}
              <div className="h-[1px] w-full bg-gradient-to-r from-amber-500/20 via-transparent to-transparent mb-8" />

              {/* Rich Body Content Markdown Structure */}
              <div className="text-zinc-400 text-sm leading-[1.9] space-y-6 font-normal tracking-wide">
                {content.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('landing');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  useEffect(() => {
    if (currentPage === 'landing') {
      const slider = document.getElementById('testimonial-slider');
      if (!slider) return;

      let intervalId: NodeJS.Timeout;

      const startAutoSlide = () => {
        intervalId = setInterval(() => {
          if (!slider) return;
          const maxScroll = slider.scrollWidth - slider.clientWidth;
          if (slider.scrollLeft >= maxScroll - 10) {
            slider.scrollTo({ left: 0, behavior: 'smooth' });
          } else {
            slider.scrollBy({ left: 400, behavior: 'smooth' });
          }
        }, 5000);
      };

      const stopAutoSlide = () => {
        if (intervalId) clearInterval(intervalId);
      };

      slider.addEventListener('mouseenter', stopAutoSlide);
      slider.addEventListener('mouseleave', startAutoSlide);
      
      startAutoSlide();

      return () => {
        stopAutoSlide();
        slider.removeEventListener('mouseenter', stopAutoSlide);
        slider.removeEventListener('mouseleave', startAutoSlide);
      };
    }
  }, [currentPage]);

  const featuredVideos = FEATURED_VIDEOS;

  const allVideos = [
    ...featuredVideos,
    { title: "Graduation Highlights", description: "Capturing the energy and key speakers of major industry events.", driveId: "1bebrBuZ26QzxE4YCt-xJ1wKWClIvyoCP", category: "Highlight" },
    { title: "Student Success Story", description: "A polished, direct-to-camera academic endorsement highlighting career trajectories and international validation metrics.", driveId: "1jb7YTW4krQJSgO-9LseiVrHzM5kvHEcS", category: "TESTIMONIAL" },
    { title: "Institutional Authority", description: "A dynamic campus showcase tracking student life, infrastructure development, and structured educational roadmaps.", driveId: "1afEwDS3OTNI2YC-KhxFOLp3xi8k8Ek0p", category: "CAMPUS PROMO" },
    { title: "Travel Conversion Reel", description: "An incentive-driven destination layout combining package pricing matrices with sweeping landscape sequences.", driveId: "1N2oUjtgbztDKerFnmZUl2GJ76tooO3of", category: "COMMERCIAL CAMPAIGN" },
    { title: "B2B Revenue Scaling", description: "A high-retention corporate service ad blending strategic problem hooks with bold vector motion tracking overlays.", driveId: "1IsmGsYf-FNFb7Rzug7Xw3mtvh-AEE66R", category: "AGENCY AD CREATIVE" },
    { title: "Corporate Legacy Film", description: "A premium real estate commercial tracking structural integrity from foundational blueprints to finalized architecture.", driveId: "1y7Tvun8_ii6U_1bMaMPi4kc8Q0Y6oI2R", category: "REAL ESTATE MEDIA" },
    { title: "Gamified Brand Awareness", description: "A high-engagement community quiz format utilizing split-screen response graphics and real-time score updates.", driveId: "1MBVIz1RAV02cSYQ-VwC1ca8qAHUJLJZj", category: "INTERACTIVE CONTENT" },
    { title: "Seasonal Campaign Promo", description: "A festive retail ad balancing service-focused conversion text with high-fidelity corporate color palettes.", driveId: "1-ZK9oSvB9ElwYNr96FSKpVHNbEXs8gHV", category: "BRAND TRANSFORMATION" },
    { title: "Strategic Enrollment Funnel", description: "A conversion-first corporate commercial combining smooth vector graphics with fast-paced informative typography overlays.", driveId: "1-srheNyPPfAgdokyCy_g5LuAzdX36gr0", category: "COMMERCIAL AD" },
    { title: "Healthcare Authority Reel", description: "An educational medical presentation optimized with bold kinetic captions, high-retention talking head framing, and authoritative delivery.", driveId: "1O4hTNiPZl6coOEWY9hiATY_atHqmY0Z-", category: "MEDICAL MEDIA" },
    { title: "Conversion Credibility Asset", description: "A vertical social media marketing creative designed to feature proof-of-work metrics, high-contrast overlay counters, and consultancy validation.", driveId: "1Dk8UEH5LsbFgvMLzEHWyqI9fsqI98laj", category: "COMMERCIAL AD" },
    { title: "Strategic Content Funnel", description: "A polished, short-form commercial ad leveraging hybrid text tracking, rhythmic post-production cuts, and high-impact target hook systems.", driveId: "1c_HrD0BExSKPtFB2R3h9UnHTVr-bgvq2", category: "BRAND NARRATIVE" }
  ];

  const featuredGraphics = ALL_GRAPHICS.slice(0, 3);
  const allGraphics = ALL_GRAPHICS;

  const testimonials = [
    { name: "Shiv Sir", role: "Founder, Dustynep", comment: "The best thing about working with Forge is that you don't have to constantly micromanage them. We needed a batch of reels for our campaign, and they nailed the pacing and energy right in the first draft. The execution was spot-on!", stars: 4 },
    { name: "Kishan Agarwal", role: "Founder & CEO, Crack Intakes", comment: "Making educational ads engaging is tough, but Forge deeply understood our target audience. The clean text overlays and dynamic captions they added massively improved our viewer retention and lead conversions. Highly recommended!", stars: 5 },
    { name: "Dolphin Education Team", role: "Corporate Relations Lead", comment: "We had the vision, but Forge figured out exactly how to make it look premium on screen. Their post-production framework and color grading are up to international standards. One look at their portfolio and you instantly see the quality.", stars: 4.5 },
    { name: "Seed Financial Academy", role: "Marketing & Brand Head", comment: "We commissioned a documentary-style video for our world topper student. Forge beautifully blended a deep narrative with a polished commercial layout. They simply don't compromise on the final output or client satisfaction.", stars: 5 },
    { name: "Elite Lifestyle Client", role: "Creative Director", comment: "In short-form commercial reels, if you don't hook the user in the first 3 seconds, the video is dead. We've never had a retention issue since we started collaborating with Forge. Their transition cuts and audio mastering are incredibly tight.", stars: 3.9 }
  ];

  const averageRating = Math.round(testimonials.reduce((acc, curr) => acc + curr.stars, 0) / testimonials.length);
  const clients = CLIENTS_DATA;

  const articles = [
    {
      title: "The Psychology of High-Retention Vertical Video",
      excerpt: "Why the first 3 seconds determine your conversion rate in the modern scroll-heavy ecosystem.",
      content: "In the current digital landscape, attention is the most expensive currency. Platforms like Instagram and TikTok don’t just reward good content; they reward consistent watch time. If an audience drops off within the first three seconds, the algorithm flags the asset as irrelevant, cutting its organic reach instantly.\n\nTo build an asset that scales conversions for clients, you have to engineer it around 'Micro-Hooks.' A micro-hook is a visual or auditory pattern interrupt that occurs every 1.5 to 2 seconds. This doesn't mean flashing random colors; it means executing intentional camera angle shifts, tight text overlay transitions, and sharp sound design.\n\nBy synchronizing kinetic typography with the rhythmic pacing of the speaker, you create a seamless cognitive flow that makes it effortless for the viewer to finish the entire video and act on the call-to-action."
    },
    {
      title: "Positioning Your Brand as a High-Ticket Authority",
      excerpt: "Strategic visual cues that command premium pricing structures without saying a word.",
      content: "There is a common misconception in B2B and educational marketing that raw, unedited smartphone videos are enough to drive sales. While authenticity matters, relying entirely on low-effort production creates a massive structural problem: it signals a lack of market authority.\n\nWhen a consumer faces a high-ticket decision—like choosing a real estate developer or a premium study-abroad consultancy—they look for visual credibility cues. Premium production is not an expense; it is an arbitrage strategy on trust.\n\nA commercial asset shot with cinematic lighting, balanced color grading, and razor-sharp typographic discipline acts as an instant trust multiplier. High-quality visuals pre-sell the prospect before they ever jump on a phone call with your team. If you want high-ticket clients, your digital media layout must mirror elite-tier infrastructure."
    },
    {
      title: "Real Estate Media: Cinematic POV vs Traditional Photography",
      excerpt: "Why immersive architectural walkthroughs are outselling traditional static real estate listings.",
      content: "Traditional real estate photography is losing its edge. Static wide-angle images fail to trigger an emotional response from premium investors because they feel sterile and transactional.\n\nBy deploying cinematic POV property walkthroughs, you simulate physical presence. Seamless camera motion tracking, organic environmental transitions, and premium ambient sound design convert a flat real estate listing into an elite experiential asset.\n\nThe goal is to sell the lifestyle, not just the concrete. When a luxury buyer can visually walk through a premium construction site or a finished penthouse via a high-retention reel, their intent shifts from passive browsing to active inquiry. Immersive cinematic storytelling is currently the highest-converting funnel in real estate marketing."
    }
  ];

  const NavContent = () => (
    <>
      <button onClick={() => { setCurrentPage('landing'); setMobileMenuOpen(false); }} className={`hover:text-amber-500 transition-colors ${currentPage === 'landing' ? 'text-white' : ''}`}>Home</button>
      <button onClick={() => { setCurrentPage('videos'); setMobileMenuOpen(false); }} className={`hover:text-amber-500 transition-colors ${currentPage === 'videos' ? 'text-white' : ''}`}>Portfolio</button>
      <button onClick={() => { setCurrentPage('about'); setMobileMenuOpen(false); }} className={`hover:text-amber-500 transition-colors ${currentPage === 'about' ? 'text-white' : ''}`}>Agency</button>
      <a href="#articles" onClick={() => setMobileMenuOpen(false)} className="hover:text-amber-500 transition-colors">Insights</a>
    </>
  );

  return (
    <div className="min-h-screen forge-container forge-gradient font-sans selection:bg-amber-500/30">
      {/* Dynamic Header */}
      <header className="glass border-b border-white/5 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center">
          <motion.button 
            onClick={() => setCurrentPage('landing')}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col items-start group"
          >
            {BRAND_CONFIG.logoImageUrl ? (
              <img src={BRAND_CONFIG.logoImageUrl} alt={BRAND_CONFIG.name} className="h-8 md:h-12 w-auto object-contain" />
            ) : (
              <>
                <h1 className="text-2xl font-black tracking-tighter leading-none text-white group-hover:text-amber-500 transition-colors">{BRAND_CONFIG.name}</h1>
                <span className="text-amber-500 text-[10px] tracking-[0.3em] font-medium uppercase opacity-60 group-hover:opacity-100 transition-opacity">{BRAND_CONFIG.tagline}</span>
              </>
            )}
          </motion.button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex space-x-12 text-[14px] font-bold uppercase tracking-[0.18em] text-gray-500">
            <NavContent />
          </nav>

          <div className="flex items-center gap-6">
            <motion.a 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={`https://wa.me/${BRAND_CONFIG.whatsapp}`}
              className="bg-amber-500 text-black text-[11px] font-black uppercase tracking-widest px-8 py-3.5 rounded-sm shadow-[0_0_20px_rgba(255,90,0,0.2)] transition-all hidden sm:block"
            >
              Consult Free
            </motion.a>
            <button className="lg:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden fixed inset-0 z-40 bg-gray-950/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 text-xl font-bold uppercase tracking-widest"
          >
            <NavContent />
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {currentPage === 'landing' && (
          <>
            {/* Hero Section */}
            <section className="max-w-5xl mx-auto text-center px-6 py-32 md:py-48 flex flex-col items-center relative">
              <motion.div 
                {...fadeIn}
                className="inline-block px-4 py-1.5 mb-8 border border-amber-500/20 rounded-full bg-amber-500/5 backdrop-blur-sm"
              >
                <span className="text-amber-500 text-[9px] font-bold uppercase tracking-[0.3em]">Premium Media Architecture</span>
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] font-display tracking-tight text-white mb-10"
              >
                WE FORGE <br className="hidden md:block" /> VISUAL <span className="text-gradient">LEGENDS</span>
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-12 uppercase tracking-wide font-medium"
              >
                Premium Real Estate • High-Converting Consultancies • Authority Brands
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap justify-center gap-6"
              >
                <button onClick={() => setCurrentPage('videos')} className="bg-white text-black px-12 py-5 rounded-sm font-black text-xs uppercase tracking-[0.2em] hover:bg-amber-500 transition-all shadow-xl">
                  Explore Works
                </button>
                <a href="https://wa.me/9779866716548" className="glass px-12 py-5 rounded-sm font-black text-xs uppercase tracking-[0.2em] hover:border-amber-500/50 transition-all">
                  Get Strategy
                </a>
              </motion.div>
            </section>

            {/* Clients Logo Cloud - Dynamic Adjustable Grid */}
            <section className="max-w-6xl mx-auto px-6 py-24 mb-16">
              <div className="flex flex-col items-center mb-12">
                <span className="text-gray-700 text-[9px] font-black uppercase tracking-[0.5em] mb-8">Aligned with industry leading brands</span>
              </div>
              <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-12 md:gap-x-24 opacity-50 hover:opacity-90 transition-all duration-700">
                {clients.map((c, i) => (
                  <motion.div 
                    key={i} 
                    whileHover={{ scale: 1.1, opacity: 1 }}
                    className="flex flex-col items-center justify-center min-w-[80px]"
                  >
                    <div className="mb-2">
                      {c.logoImageUrl ? (
                        <img src={c.logoImageUrl} alt={c.name} className="h-8 md:h-10 w-auto object-contain brightness-100 opacity-100" />
                      ) : (
                        <div className="text-3xl md:text-4xl font-black tracking-tighter text-white font-display">
                          {c.logoText}
                        </div>
                      )}
                    </div>
                    <div className="text-[9px] uppercase tracking-[0.4em] font-black text-gray-400">
                      {c.name}
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Featured Videos (Cinematic Evolution) */}
            <section id="videos" className="max-w-6xl mx-auto px-6 py-32">
              <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
                <div className="text-left">
                  <span className="text-amber-500 text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">Motion Production</span>
                  <h3 className="text-4xl md:text-5xl font-black font-display text-white tracking-tight">CINEMATIC MOTION PROJECTS</h3>
                </div>
                <button onClick={() => setCurrentPage('videos')} className="group flex items-center gap-3 text-gray-500 hover:text-amber-500 transition-all text-xs font-bold uppercase tracking-widest">
                  View Full Reel <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>

              <motion.div 
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 gap-10"
              >
                {featuredVideos.map((vid, i) => (
                  <VideoCard key={i} {...vid} />
                ))}
              </motion.div>
              
              <div className="mt-16 text-center">
                <button 
                  onClick={() => setCurrentPage('videos')}
                  className="glass px-10 py-4 rounded-sm font-bold text-[10px] uppercase tracking-[0.3em] hover:bg-white/5 transition-all text-gray-400 hover:text-white"
                >
                  Show More Productions
                </button>
              </div>
            </section>

            {/* Strategic Branding (Narrative Architecture) */}
            <section id="graphics" className="max-w-6xl mx-auto px-6 py-32 border-t border-white/5">
              <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
                <div className="text-left">
                  <span className="text-orange-500 text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">Visual Architecture</span>
                  <h3 className="text-4xl md:text-5xl font-black font-display text-white tracking-tight">BRAND NARRATIVE & IDENTITY</h3>
                </div>
                <button onClick={() => setCurrentPage('graphics')} className="group flex items-center gap-3 text-gray-500 hover:text-orange-500 transition-all text-xs font-bold uppercase tracking-widest">
                  View Identities <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>

              <motion.div 
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
              >
                {featuredGraphics.map((graphic, i) => (
                  <GraphicCard key={i} {...graphic} />
                ))}
              </motion.div>

              <div className="mt-16 text-center">
                <button 
                  onClick={() => setCurrentPage('graphics')}
                  className="glass px-10 py-4 rounded-sm font-bold text-[10px] uppercase tracking-[0.3em] hover:bg-white/5 transition-all text-gray-400 hover:text-white"
                >
                  Explore Brand Ecosystems
                </button>
              </div>
            </section>

            {/* Services Section */}
            <section className="max-w-7xl mx-auto px-6 py-32 bg-white/[0.02] border-y border-white/5">
              <div className="text-center mb-24">
                <span className="text-amber-500 text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">Our Expertise</span>
                <h3 className="text-4xl md:text-6xl font-black font-display text-white tracking-tight mb-6">CORE MEDIA SERVICES</h3>
                <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">Integrated production solutions tailored for authority positioning and commercial scale.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { icon: Video, title: "Video Production", desc: "High-ticket commercials, talking-head reels and storytelling brand films." },
                  { icon: Layers, title: "Brand Identity", desc: "Strategic visual identities and premium corporate design systems." },
                  { icon: Search, title: "Organic SEO", desc: "Data-driven content strategies that rank and convert cold traffic." },
                  { icon: Send, title: "Ad Creatives", desc: "Conversion-optimized motion graphics for YouTube and Meta ads." }
                ].map((s, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ y: -5 }}
                    className="glass p-8 rounded-2xl border-white/5 hover:border-amber-500/20 transition-all group"
                  >
                    <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center mb-6 border border-amber-500/20 group-hover:bg-amber-500 transition-colors">
                      <s.icon className="w-6 h-6 text-amber-500 group-hover:text-black transition-colors" />
                    </div>
                    <h4 className="text-lg font-bold font-display text-white mb-3 tracking-tight">{s.title}</h4>
                    <p className="text-[11px] text-gray-500 leading-relaxed font-medium">{s.desc}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Working Overview (Process) */}
            <section className="max-w-7xl mx-auto px-6 py-32 bg-gray-950/40 rounded-[4rem] border border-white/5 mb-32">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div>
                  <span className="text-amber-500 text-[10px] font-bold uppercase tracking-[0.4em] mb-6 block">Our Protocol</span>
                  <h3 className="text-4xl md:text-6xl font-black font-display text-white tracking-tight mb-8 leading-[1.1]">HOW WE FORGE <br />EXCELLENCE</h3>
                  <p className="text-gray-500 text-lg leading-relaxed mb-10 font-medium">A standardized 4-step framework designed for efficiency and uncompromising quality delivery.</p>
                  
                  <div className="space-y-6">
                    {[
                      { num: "01", title: "Strategic Deep-Dive", desc: "Understanding your brand voice, audience pain points, and commercial goals." },
                      { num: "02", title: "Storyboarding & Concepts", desc: "Drafting visual narratives and design mockups before a single frame is shot." },
                      { num: "03", title: "High-Fidelity Production", desc: "Executing the production with premium equipment and elite design tools." },
                      { num: "04", title: "Final Polish & Deployment", desc: "Color grading, sound design, and optimization for all digital platforms." }
                    ].map((p, i) => (
                      <div key={i} className="flex gap-6 group">
                        <span className="text-2xl font-black text-amber-500/20 group-hover:text-amber-500 transition-colors font-display">{p.num}</span>
                        <div>
                          <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-1">{p.title}</h4>
                          <p className="text-[11px] text-gray-500 font-medium">{p.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative">
                  <div className="aspect-square glass rounded-3xl overflow-hidden relative flex items-center justify-center">
                     {BRAND_CONFIG.protocolImageUrl ? (
                       <>
                         <img src={BRAND_CONFIG.protocolImageUrl} alt="Protocol" className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:scale-105 transition-transform duration-700" />
                         <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
                       </>
                     ) : (
                       <Zap className="w-48 h-48 text-amber-500/10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                     )}
                     <div className="z-10 text-center p-8">
                       <h5 className="text-4xl font-black font-display text-white mb-2 tracking-tighter">72 HOURS</h5>
                       <p className="text-[10px] uppercase font-bold text-gray-500 tracking-[0.4em]">First Draft Delivery</p>
                     </div>
                  </div>
                  <div className="absolute -bottom-6 -right-6 glass p-6 rounded-2xl bg-amber-500 border-none shadow-2xl z-20">
                    <Briefcase className="w-8 h-8 text-black" />
                  </div>
                </div>
              </div>
            </section>

            {/* Testimonials */}
            <section className="max-w-7xl mx-auto px-6 py-20 mb-32 overflow-hidden">
              <div className="text-center mb-16">
                <span className="text-amber-500 text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">Trusted Globally</span>
                <h3 className="text-3xl md:text-5xl font-black font-display text-white tracking-tight mb-6">CLIENT VOICES</h3>
                <div className="flex justify-center gap-1.5">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-4 h-4 ${i < averageRating ? 'text-amber-500 fill-amber-500 drop-shadow-[0_0_8px_rgba(255,90,0,0.5)]' : 'text-gray-800'}`} 
                    />
                  ))}
                </div>
              </div>

              {/* Horizontal Scroll Container */}
              <div className="relative group/slider">
                {/* Navigation Arrows */}
                <button 
                  onClick={() => {
                    const slider = document.getElementById('testimonial-slider');
                    slider?.scrollBy({ left: -400, behavior: 'smooth' });
                  }}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 glass rounded-full flex items-center justify-center -ml-6 opacity-0 group-hover/slider:opacity-100 transition-all hover:bg-amber-500 hover:text-black hidden lg:flex"
                >
                  <ChevronRight className="w-6 h-6 rotate-180" />
                </button>
                <button 
                  onClick={() => {
                    const slider = document.getElementById('testimonial-slider');
                    slider?.scrollBy({ left: 400, behavior: 'smooth' });
                  }}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 glass rounded-full flex items-center justify-center -mr-6 opacity-0 group-hover/slider:opacity-100 transition-all hover:bg-amber-500 hover:text-black hidden lg:flex"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                <motion.div 
                  id="testimonial-slider"
                  className="flex overflow-x-auto gap-8 pb-12 pt-4 px-4 no-scrollbar snap-x snap-mandatory cursor-grab active:cursor-grabbing select-none"
                  onMouseDown={(e) => {
                    const slider = e.currentTarget;
                    let isDragging = false;
                    const startX = e.pageX - slider.offsetLeft;
                    const scrollLeft = slider.scrollLeft;

                    const handleMouseMove = (moveEvent: MouseEvent) => {
                      if (!isDragging) {
                        if (Math.abs(moveEvent.pageX - (startX + slider.offsetLeft)) > 5) {
                          isDragging = true;
                          slider.style.scrollSnapType = 'none';
                          slider.style.scrollBehavior = 'auto';
                        }
                      }
                      
                      if (isDragging) {
                        moveEvent.preventDefault();
                        const x = moveEvent.pageX - slider.offsetLeft;
                        const walk = (x - startX) * 1.5;
                        slider.scrollLeft = scrollLeft - walk;
                      }
                    };

                    const handleMouseUp = () => {
                      if (isDragging) {
                        slider.style.scrollSnapType = 'x mandatory';
                        slider.style.scrollBehavior = 'smooth';
                      }
                      window.removeEventListener('mousemove', handleMouseMove);
                      window.removeEventListener('mouseup', handleMouseUp);
                    };

                    window.addEventListener('mousemove', handleMouseMove);
                    window.addEventListener('mouseup', handleMouseUp);
                  }}
                >
                  {testimonials.map((t, i) => (
                    <motion.div 
                      key={i} 
                      variants={fadeIn} 
                      initial="initial" 
                      whileInView="animate" 
                      viewport={{ once: true }} 
                      className="min-w-[320px] md:min-w-[400px] glass p-10 rounded-3xl flex flex-col h-full border-white/5 relative snap-center hover:border-amber-500/20 transition-all duration-500"
                    >
                      <span className="text-7xl font-serif text-amber-500/10 absolute top-8 left-8 italic leading-none">"</span>
                      <p className="text-gray-400 text-sm md:text-base leading-loose italic mb-10 relative z-10 flex-grow pt-6 font-medium">
                        {t.comment}
                      </p>
                      <div className="mt-auto pt-8 border-t border-white/5 flex items-center gap-5">
                        <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center font-black text-amber-500 text-sm border border-white/5">
                          {t.name[0]}
                        </div>
                        <div>
                          <h5 className="text-sm font-bold text-white uppercase tracking-widest">{t.name}</h5>
                          <p className="text-[10px] text-gray-600 font-medium tracking-wider mt-0.5">{t.role}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
                
                {/* Scroll Indicator Hint */}
                <div className="flex justify-center gap-2 mt-4 lg:hidden">
                  {testimonials.map((_, i) => (
                    <div key={i} className="w-1.5 h-1.5 rounded-full bg-white/10" />
                  ))}
                </div>
              </div>
            </section>

            {/* SEO Articles / Blog */}
            <section id="articles" className="max-w-6xl mx-auto px-6 py-32 border-t border-white/5">
              <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
                <div className="text-left">
                  <span className="text-amber-500 text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">Intelligence</span>
                  <h3 className="text-4xl md:text-5xl font-black font-display text-white tracking-tight">CRAFTING CONVERTING VISUALS</h3>
                </div>
                <button className="text-[10px] font-bold uppercase tracking-widest text-gray-500 hover:text-amber-500 transition-colors">All Articles</button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {articles.map((art, i) => (
                  <ArticleCard key={i} {...art} />
                ))}
              </div>
            </section>
          </>
        )}

        {currentPage === 'videos' && (
          <section className="max-w-6xl mx-auto px-10 py-32">
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-20 text-center">
              <button 
                onClick={() => setCurrentPage('landing')}
                className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500 hover:text-amber-500 transition-colors mb-8 inline-flex items-center gap-2"
              >
                <X className="w-3 h-3" /> Back to Home
              </button>
              <h1 className="text-5xl md:text-7xl font-black font-display text-white tracking-tight mb-4">PORTFOLIO</h1>
              <p className="text-gray-500 uppercase text-[10px] tracking-[0.4em] font-bold">Motion Production & Visual Architecture</p>
            </motion.div>
            
            {/* Motion Production Subsection */}
            <div className="mb-24">
              <div className="flex items-center gap-4 mb-12">
                <div className="h-[1px] flex-grow bg-white/10" />
                <h3 className="text-xl font-black font-display text-amber-500 uppercase tracking-[0.3em]">Motion Production</h3>
                <div className="h-[1px] flex-grow bg-white/10" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {allVideos.map((vid, i) => (
                  <VideoCard key={i} {...vid} />
                ))}
              </div>
            </div>

            {/* Visual Architecture Subsection */}
            <div>
              <div className="flex items-center gap-4 mb-12">
                <div className="h-[1px] flex-grow bg-white/10" />
                <h3 className="text-xl font-black font-display text-orange-500 uppercase tracking-[0.3em]">Visual Architecture</h3>
                <div className="h-[1px] flex-grow bg-white/10" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {allGraphics.map((graphic, i) => (
                  <GraphicCard 
                    key={i} 
                    title={graphic.title}
                    description={graphic.description}
                    tag={graphic.tag}
                    gradient={graphic.gradient}
                    imageUrl={graphic.imageUrl}
                  />
                ))}
              </div>
            </div>
          </section>
        )}

        {currentPage === 'graphics' && (
          <section className="max-w-6xl mx-auto px-10 py-32">
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-20 text-center">
              <button 
                onClick={() => setCurrentPage('landing')}
                className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500 hover:text-amber-500 transition-colors mb-8 inline-flex items-center gap-2"
              >
                <X className="w-3 h-3" /> Back to Home
              </button>
              <h1 className="text-5xl md:text-7xl font-black font-display text-white tracking-tight mb-4">VISUAL SYSTEMS</h1>
              <p className="text-gray-500 uppercase text-[10px] tracking-[0.4em] font-bold">Digital Identity & Brand Architecture</p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allGraphics.map((graphic, i) => (
                <GraphicCard 
                  key={i} 
                  title={graphic.title}
                  description={graphic.description}
                  tag={graphic.tag}
                  gradient={graphic.gradient}
                  imageUrl={graphic.imageUrl}
                />
              ))}
            </div>
          </section>
        )}

        {currentPage === 'about' && (
          <section className="max-w-4xl mx-auto px-10 py-32">
             <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-24">
               <h1 className="text-6xl font-black font-display text-white tracking-tight mb-8">FORGING IDENTITY</h1>
               <p className="text-gray-400 text-lg leading-[1.8] font-medium italic">
                "We don't just produce videos; we architect visual dominance. Based in Nepal and serving high-ticket brands globally, FORGE Production is a multidisciplinary agency focused on the intersection of cinema and commerce."
               </p>
             </motion.div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
                <div className="glass p-10 rounded-3xl">
                  <h3 className="text-xl font-bold font-display text-amber-500 uppercase tracking-widest mb-6">Our Mission</h3>
                  <p className="text-sm text-gray-400 leading-loose">To empower premium brands and consultancies with cinematic assets that command authority, elevate market presence, and drive high-value revenue through strategic storytelling.</p>
                </div>
                <div className="glass p-10 rounded-3xl">
                  <h3 className="text-xl font-bold font-display text-orange-500 uppercase tracking-widest mb-6">Our Vision</h3>
                  <p className="text-sm text-gray-400 leading-loose">To become the global benchmark for high-end corporate identity and premium brand media, transforming raw footage into high-end art that redefines luxury storytelling.</p>
                </div>
             </div>

             <div className="mb-32">
               <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-amber-500 mb-12 text-center">The Leadership</h3>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                 {LEADERSHIP_DATA.map((member, i) => (
                   <motion.div 
                     key={i}
                     variants={fadeIn}
                     className="glass p-8 rounded-2xl border-white/5 group hover:border-amber-500/20 transition-all flex flex-col items-center text-center"
                   >
                     <div className="w-24 h-24 bg-amber-500/10 rounded-full flex items-center justify-center mb-6 overflow-hidden border border-white/5 group-hover:border-amber-500/40 transition-colors">
                       {member.imageUrl ? (
                         <img src={member.imageUrl} alt={member.name} className="w-full h-full object-cover" />
                       ) : (
                         <Users className="w-10 h-10 text-amber-500/40" />
                       )}
                     </div>
                     <h4 className="text-xl font-black text-white mb-1 uppercase tracking-widest">{member.name}</h4>
                     <p className="text-amber-500 text-[10px] font-black uppercase tracking-[0.4em] mb-4">{member.role}</p>
                     <p className="text-gray-500 text-xs leading-relaxed max-w-[200px]">
                       {member.bio}
                     </p>
                   </motion.div>
                 ))}
               </div>
             </div>
          </section>
        )}

        {currentPage === 'privacy' && <PrivacyPolicy onBack={() => setCurrentPage('landing')} />}
        {currentPage === 'terms' && <TermsOfService onBack={() => setCurrentPage('landing')} />}
      </main>

      {/* Enhanced Footer */}
      <footer id="contact" className="px-10 py-24 border-t border-white/5 bg-black/40">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 mb-20 text-center md:text-left">
            <div className="lg:col-span-1">
              <div className="flex flex-col items-center md:items-start mb-6">
                {BRAND_CONFIG.logoImageUrl ? (
                   <img src={BRAND_CONFIG.logoImageUrl} alt={BRAND_CONFIG.name} className="h-8 w-auto object-contain brightness-0 invert" />
                ) : (
                  <>
                    <h1 className="text-2xl font-black tracking-tighter leading-none text-white">{BRAND_CONFIG.name}</h1>
                    <span className="text-amber-500 text-[10px] tracking-[0.3em] font-medium uppercase">{BRAND_CONFIG.tagline}</span>
                  </>
                )}
              </div>
              <p className="text-[11px] text-gray-500 leading-relaxed font-medium mb-8">
                Premium media agency specialized in video production and brand systems for elite businesses.
              </p>
              <div className="flex gap-4 justify-center md:justify-start">
                <a href={BRAND_CONFIG.socials.instagram} target="_blank" rel="noreferrer" className="w-9 h-9 glass rounded-full flex items-center justify-center hover:bg-amber-500 hover:text-black transition-all duration-300">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href={BRAND_CONFIG.socials.facebook} target="_blank" rel="noreferrer" className="w-9 h-9 glass rounded-full flex items-center justify-center hover:bg-amber-500 hover:text-black transition-all duration-300">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href={BRAND_CONFIG.socials.tiktok} target="_blank" rel="noreferrer" className="w-9 h-9 glass rounded-full flex items-center justify-center hover:bg-amber-500 hover:text-black transition-all duration-300">
                  <TiktokIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-1">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white mb-8">Navigation</h4>
              <nav className="flex flex-col gap-4 text-[11px] font-bold text-gray-600 uppercase tracking-widest">
                <button onClick={() => setCurrentPage('landing')} className="hover:text-amber-500 text-left transition-colors">Home</button>
                <button onClick={() => setCurrentPage('videos')} className="hover:text-amber-500 text-left transition-colors">Reel Showcase</button>
                <button onClick={() => setCurrentPage('about')} className="hover:text-amber-500 text-left transition-colors">About Agency</button>
                <a href="#articles" className="hover:text-amber-500 text-left transition-colors">Insights</a>
              </nav>
            </div>

            <div className="lg:col-span-2">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white mb-8">Get In Touch</h4>
              <div className="space-y-6">
                <a href={`mailto:${BRAND_CONFIG.email}`} className="flex items-center gap-4 p-5 glass rounded-xl border-white/5 hover:border-amber-500/20 group transition-all">
                  <div className="w-10 h-10 bg-amber-500/10 rounded-lg flex items-center justify-center group-hover:bg-amber-500 transition-colors">
                    <Mail className="w-4 h-4 text-amber-500 group-hover:text-black transition-colors" />
                  </div>
                  <div className="text-left">
                    <span className="text-[8px] uppercase tracking-widest text-gray-600 font-black block mb-1">Email Strategy</span>
                    <span className="text-xs text-white font-medium">{BRAND_CONFIG.email}</span>
                  </div>
                </a>
                <a href={`https://wa.me/${BRAND_CONFIG.whatsapp}`} target="_blank" rel="noreferrer" className="flex items-center gap-4 p-5 glass rounded-xl border-white/5 hover:border-amber-500/20 group transition-all">
                  <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center group-hover:bg-green-500 transition-colors">
                    <MessageCircle className="w-4 h-4 text-green-500 group-hover:text-white transition-colors" />
                  </div>
                  <div className="text-left">
                    <span className="text-[8px] uppercase tracking-widest text-gray-600 font-black block mb-1">Direct Chat</span>
                    <span className="text-xs text-white font-medium">{BRAND_CONFIG.phone}</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
          
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[9px] text-gray-700 uppercase tracking-[0.3em] font-black">
              &copy; {new Date().getFullYear()} FORGE Production. Architecting Visual Dominance.
            </p>
            <div className="flex gap-8 text-[9px] font-black uppercase tracking-[0.2em] text-gray-700">
               <button onClick={() => setCurrentPage('privacy')} className="hover:text-gray-500 transition-colors uppercase">Privacy Policy</button>
               <button onClick={() => setCurrentPage('terms')} className="hover:text-gray-500 transition-colors uppercase">Terms of Service</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
