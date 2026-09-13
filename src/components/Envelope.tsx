import { useState } from "react";
import { motion } from "framer-motion";

export default function Envelope({
  onOpen,
  exiting,
}: {
  onOpen: () => void;
  exiting: boolean;
}) {
  const [hover, setHover] = useState(false);
  const [opened, setOpened] = useState(false);

  const handleClick = () => {
    if (opened) return;
    setOpened(true);
    setTimeout(onOpen, 350);
  };

  return (
    <motion.button
      onClick={handleClick}
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{
        scale: exiting ? 1.3 : 1,
        opacity: exiting ? 0 : 1,
      }}
      transition={{
        scale: { duration: exiting ? 0.9 : 0.8, ease: "easeOut" },
        opacity: { duration: exiting ? 0.9 : 0.8, ease: "easeOut" },
      }}
      className="group relative flex flex-col items-center outline-none"
      aria-label="Open envelope"
    >
      <div className="absolute -inset-10 rounded-full bg-rose-200/40 blur-3xl" />

      <motion.div
        animate={{ y: hover && !opened ? -8 : [0, -10, 0] }}
        transition={
          hover && !opened
            ? { duration: 0.3 }
            : { duration: 3, repeat: Infinity, ease: "easeInOut" }
        }
        className="relative"
      >
        <svg
          width="220"
          height="170"
          viewBox="0 0 220 170"
          fill="none"
          className="drop-shadow-xl"
        >
          <rect
            x="10"
            y="40"
            width="200"
            height="120"
            rx="14"
            fill="#fff5f7"
            stroke="#f9a8c4"
            strokeWidth="2"
          />
          <path
            d="M10 40 L110 110 L10 160 Z"
            fill="#fce4ec"
            stroke="#f9a8c4"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M210 40 L110 110 L210 160 Z"
            fill="#f9d5e2"
            stroke="#f9a8c4"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          {/* Top flap */}
          <path
            d="M10 40 L110 110 L210 40 Z"
            fill="#fff0f5"
            stroke="#f9a8c4"
            strokeWidth="2"
            strokeLinejoin="round"
            style={{
              transformOrigin: "110px 40px",
              transform: opened ? "rotateX(180deg) translateY(-2px)" : "none",
              transition: "transform 0.6s ease-in-out",
            }}
          />
          {/* Wax seal */}
          <motion.g
            animate={{ scale: opened ? 0 : hover ? 1.15 : 1, opacity: opened ? 0 : 1 }}
            transition={{ duration: opened ? 0.3 : 0.2 }}
            style={{ transformOrigin: "110px 75px" }}
          >
            <path
              d="M110 85 C 100 70, 80 70, 80 88 C 80 100, 110 118, 110 118 C 110 118, 140 100, 140 88 C 140 70, 120 70, 110 85 Z"
              fill="#e8115f"
              className="drop-shadow-md"
            />
          </motion.g>
        </svg>
      </motion.div>

      <span className="mt-6 font-serif text-xl text-rose-500">
        For You, My Love
      </span>
    </motion.button>
  );
}