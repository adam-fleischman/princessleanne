import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Envelope from "@/components/Envelope";
import LoveLetter from "@/components/LoveLetter";
import PhotoGallery from "@/components/PhotoGallery";

export default function App() {
  const [opened, setOpened] = useState(false);
  const [exiting, setExiting] = useState(false);

  const handleOpen = () => {
    setExiting(true);
    setTimeout(() => setOpened(true), 900);
  };

  useEffect(() => {
    if (opened) window.scrollTo({ top: 0, behavior: "smooth" });
  }, [opened]);

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gradient-to-b from-rose-50 via-pink-50 to-white">
      {/* Floating petals */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        {Array.from({ length: 14 }).map((_, i) => (
          <Petal key={i} index={i} />
        ))}
      </div>

      <AnimatePresence mode="wait">
        {!opened ? (
          <motion.div
            key="envelope"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.15, filter: "blur(8px)" }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
            className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-4 py-10"
          >
            <Envelope onOpen={handleOpen} exiting={exiting} />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-10 animate-pulse text-sm font-medium tracking-wide text-rose-400"
            >
              Tap the envelope to open your surprise
            </motion.p>
          </motion.div>
        ) : (
          <motion.main
            key="content"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col items-center gap-12 px-4 py-10 sm:px-6"
          >
            <header className="text-center">
              <span className="inline-block rounded-full bg-rose-100 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-rose-500">
                Happy National Girlfriend's Day!
              </span>
              <h1 className="mt-4 font-serif text-4xl font-bold text-rose-600 sm:text-5xl">
                To My Lovely Girl
              </h1>
              <div className="mx-auto mt-3 h-px w-24 bg-gradient-to-r from-transparent via-rose-300 to-transparent" />
            </header>

            <LoveLetter />

            <div className="w-full">
              <div className="mb-6 text-center">
                <h2 className="font-serif text-2xl font-semibold text-rose-500">
                  Leanne and Adam!!
                </h2>
              </div>
              <PhotoGallery />
            </div>

            <footer className="pb-6 text-center text-xs text-rose-300">
              Made with so much love, just for you!!!
            </footer>
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}

function Petal({ index }: { index: number }) {
  const left = (index * 7 + 5) % 100;
  const delay = (index * 1.3) % 10;
  const duration = 9 + (index % 5);
  const size = 10 + (index % 4) * 4;
  const drift = (index % 2 === 0 ? 1 : -1) * (20 + index * 5);

  return (
    <div
      className="absolute top-[-40px] animate-petal-fall"
      style={{
        left: `${left}%`,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
      }}
    >
      <div
        className="animate-petal-sway"
        style={{ animationDuration: `${3 + (index % 3)}s` }}
      >
        <div
          className="rounded-full bg-gradient-to-br from-pink-200 to-rose-300 opacity-60"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            transform: `translateX(${drift}px)`,
          }}
        />
      </div>
    </div>
  );
}