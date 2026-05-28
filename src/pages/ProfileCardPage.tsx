import { Link } from "react-router-dom";
import { Download, Share, Wallet } from "lucide-react";
import { motion } from "motion/react";
import { PageTransition } from "../components/PageTransition";
import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import profilePic from "../assets/sibz.jpg";

export function ProfileCardPage() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleShare = async () => {
    const shareData = {
      title: 'Sibongamandla Mnyandu - Portfolio',
      text: 'Check out Sibongamandla Mnyandu\'s digital business card and portfolio.',
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      showToast("Link copied to clipboard!");
    }
  };

  const portfolioUrl = window.location.origin;

  return (
    <PageTransition title="PROFILE">
      <div className="min-h-screen bg-[#fafafa] flex flex-col items-center justify-center p-6 md:p-12 relative font-sans overflow-hidden">
        {/* Subtle mesh background */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-300/30 blur-[120px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-orange-300/20 blur-[120px]"></div>
        </div>
        
        {toastMessage && (
          <div className="fixed top-20 left-1/2 -translate-x-1/2 bg-black text-white px-6 py-3 rounded-full shadow-lg z-[100] text-sm font-mono tracking-widest uppercase animate-pulse">
            {toastMessage}
          </div>
        )}
        <Link to="/" className="fixed top-8 left-8 text-black/50 hover:text-black transition-colors uppercase font-mono tracking-widest text-xs z-50">
          &larr; Back to Portfolio
        </Link>
  
        <div className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-center gap-16 md:gap-32 mt-12 md:mt-0">
          
          {/* Left Side: Titles and CTAs */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left z-10">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-medium tracking-tight text-neutral-900 mb-4 leading-tight drop-shadow-sm">
              Nothing Physical <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-400 to-neutral-600">100% Digital</span>
            </h1>
            
            <div className="flex flex-col gap-4 mt-8 w-full max-w-[280px]">
              <button onClick={() => showToast("Apple Wallet integration coming soon!")} className="flex items-center gap-4 bg-white/70 backdrop-blur-md border border-white/50 px-6 py-4 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 transition-all duration-300 group w-full text-left relative overflow-hidden">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-transparent border border-black/5 shrink-0 relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
                  {/* Apple Wallet colors representation */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-400 via-yellow-400 to-green-400 opacity-80 mix-blend-multiply"></div>
                  <Wallet className="w-4 h-4 text-black relative z-10 placeholder-black mix-blend-overlay" />
                </div>
                <div className="flex flex-col items-start leading-tight">
                  <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-medium mb-0.5">Add to</span>
                  <span className="font-semibold text-neutral-800 text-sm">Apple Wallet</span>
                </div>
              </button>
  
              <button onClick={() => showToast("Google Wallet integration coming soon!")} className="flex items-center gap-4 bg-white/70 backdrop-blur-md border border-white/50 px-6 py-4 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 transition-all duration-300 group w-full text-left relative overflow-hidden">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-transparent border border-black/5 shrink-0 relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
                  {/* Google Wallet colors representation */}
                  <div className="absolute inset-x-0 top-0 h-1/2 bg-blue-500 rounded-t-full"></div>
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-green-500 rounded-b-full"></div>
                  <div className="absolute inset-y-0 left-0 w-1/2 bg-yellow-500 rounded-l-full mix-blend-multiply opacity-50"></div>
                  <Wallet className="w-4 h-4 text-white relative z-10" />
                </div>
                <div className="flex flex-col items-start leading-tight">
                  <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-medium mb-0.5">Add to</span>
                  <span className="font-semibold text-neutral-800 text-sm">Google Wallet</span>
                </div>
              </button>
              
              <div className="flex gap-4 mt-6">
                 <a href="/assets/cv.pdf" download className="flex-1 flex items-center justify-center gap-2 bg-neutral-900 text-white px-4 py-3.5 rounded-xl hover:bg-black transition-all duration-300 text-xs uppercase tracking-widest font-mono shadow-lg shadow-black/10 hover:shadow-xl hover:-translate-y-0.5 hover:shadow-black/20">
                   <Download className="w-4 h-4" /> CV
                 </a>
                 <button onClick={handleShare} className="flex-1 flex items-center justify-center gap-2 bg-white/80 backdrop-blur-sm border border-neutral-200 text-neutral-800 px-4 py-3.5 rounded-xl hover:bg-white hover:border-neutral-300 transition-all duration-300 text-xs uppercase tracking-widest font-mono shadow-sm hover:shadow-md hover:-translate-y-0.5">
                   <Share className="w-4 h-4" /> Share
                 </button>
              </div>
            </div>
          </div>
  
          {/* Right Side: The Digital Card */}
          <div className="relative z-10 perspectives-[2000px] mt-12 md:mt-0">
            <motion.div 
              initial={{ rotateY: 20, rotateX: 10, y: 50, opacity: 0 }}
              animate={{ rotateY: 0, rotateX: 0, y: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="w-full w-[300px] md:w-[320px] aspect-[1/1.6] bg-[#111] backdrop-blur-2xl rounded-[2.5rem] p-8 flex flex-col relative overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] border border-white/10 text-white group shrink-0"
            >
               {/* Decorative background blur inside card */}
               <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 mix-blend-screen pointer-events-none"></div>
               <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-600/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 mix-blend-screen pointer-events-none"></div>
               
               {/* Card Header */}
               <div className="flex items-center gap-2 mb-8 text-neutral-300 font-mono text-[10px] tracking-widest uppercase relative z-10">
                 <span className="font-bold">DBC</span> Digital Business Card
               </div>
  
               {/* Profile */}
               <div className="flex flex-col gap-8 relative z-10">
                  <div className="flex items-start justify-between">
                    <h2 className="text-2xl font-display font-medium tracking-tight text-white leading-tight mt-2">
                      Sibongamandla <br/> Mnyandu
                    </h2>
                    <div className="w-16 h-16 rounded-full bg-neutral-800 overflow-hidden shrink-0 border-2 border-white/10 shadow-inner">
                      <img 
                        src={profilePic} 
                        alt="Profile"
                        className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-500" 
                      />
                    </div>
                  </div>
  
                  {/* Details */}
                  <div className="flex flex-col gap-5">
                     <div className="flex flex-col">
                       <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest mb-1.5">Phone</span>
                       <span className="text-sm font-medium tracking-wide">+27 76 385 8588</span>
                     </div>
                     <div className="flex flex-col">
                       <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest mb-1.5">Email</span>
                       <span className="text-sm font-medium tracking-wide">sibonga@isutech.co.za</span>
                     </div>
                     <div className="flex flex-col">
                       <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest mb-1.5">Address</span>
                       <span className="text-sm font-medium tracking-wide text-neutral-300 leading-snug">Pretoria, South Africa</span>
                     </div>
                  </div>
               </div>
  
               {/* QR Code Section */}
               <div className="absolute left-0 right-0 bottom-0 h-40 bg-gradient-to-t from-black via-black/90 to-transparent flex items-end justify-center pb-8 z-10 pointer-events-none">
                  <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-[1.5rem] p-4 flex items-center justify-center shadow-[0_8px_32px_rgba(0,0,0,0.2)] pointer-events-auto hover:bg-white/20 transition-all duration-300 cursor-pointer group/qr">
                     <div className="w-24 h-24 relative overflow-hidden bg-white/90 group-hover/qr:bg-white group-hover/qr:scale-105 transition-all duration-500 flex items-center justify-center rounded-xl p-1.5 shadow-inner">
                       <QRCodeSVG value={portfolioUrl} size={84} className="mix-blend-multiply opacity-90 group-hover/qr:opacity-100 transition-opacity" />
                       
                       {/* Subtle scan line animation */}
                       <div className="absolute top-0 left-0 right-0 h-0.5 bg-black/20 shadow-[0_0_15px_rgba(0,0,0,0.5)] animate-scan pointer-events-none"></div>
                     </div>
                  </div>
               </div>
            </motion.div>
          </div>
  
        </div>
      </div>
    </PageTransition>
  );
}
