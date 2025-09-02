"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { XIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { VideoIcon } from "@/icons/video";

type AnimationStyle =
  | "from-bottom"
  | "from-center"
  | "from-top"
  | "from-left"
  | "from-right"
  | "fade"
  | "top-in-bottom-out"
  | "left-in-right-out";

interface HeroVideoProps {
  animationStyle?: AnimationStyle;
  videoSrc: string; // Local video path like "/videos/client.mp4"
  className?: string;
}

const animationVariants = {
  "from-bottom": {
    initial: { y: "100%", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "100%", opacity: 0 },
  },
  "from-center": {
    initial: { scale: 0.5, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.5, opacity: 0 },
  },
  "from-top": {
    initial: { y: "-100%", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "-100%", opacity: 0 },
  },
  "from-left": {
    initial: { x: "-100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "-100%", opacity: 0 },
  },
  "from-right": {
    initial: { x: "100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "100%", opacity: 0 },
  },
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  "top-in-bottom-out": {
    initial: { y: "-100%", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "100%", opacity: 0 },
  },
  "left-in-right-out": {
    initial: { x: "-100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "100%", opacity: 0 },
  },
};

export default function HeroVideoDialog({
  animationStyle = "from-center",
  videoSrc,
  className,
}: HeroVideoProps) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const selectedAnimation = animationVariants[animationStyle];

  return (
    <div className={cn("relative", className)}>
      {/* Simple button instead of preview */}
      <button
        onClick={() => setIsVideoOpen(true)}
        className="pr-6 pl-3 py-3 shadow border border-white text-white font-semibold hover:bg-emerald-50 hover:border-transparent transition flex gap-2 items-center group hover:text-primary cursor-pointer"
      >
        <VideoIcon className="size-6 fill-white group-hover:fill-primary" />
        What Clients Say
      </button>

      {/* Popup video */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsVideoOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md"
          >
            <motion.div
              {...selectedAnimation}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="relative w-full max-w-fit mx-2 sm:mx-4" // max-w-md makes it vertical-friendly on desktop
              onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside video
            >
              {/* Close button */}

              {/* Video always vertical */}
              <div className="relative w-full overflow-hidden border-2 border-white flex items-center justify-center bg-black/10">
                <video
                  src={videoSrc}
                  controls
                  autoPlay
                  className="w-full h-auto max-h-[80vh] object-contain"
                />
                <motion.button
                  onClick={() => setIsVideoOpen(false)}
                  className="absolute top-2 right-2 bg-neutral-900/50 p-2 text-white backdrop-blur-md hover:bg-neutral-900/70 cursor-pointer"
                >
                  <XIcon className="size-5" />
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
