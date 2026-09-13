import { motion } from "framer-motion";

export default function LoveLetter() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative w-full max-w-2xl"
    >
      <div className="absolute -inset-4 rounded-3xl bg-rose-200/30 blur-2xl" />
      <div className="relative overflow-hidden rounded-3xl border border-rose-200 bg-white/80 p-8 shadow-xl backdrop-blur-sm sm:p-12">
        <div className="pointer-events-none absolute right-6 top-6 text-rose-100">
          <HeartIcon className="h-16 w-16" />
        </div>
        <div className="pointer-events-none absolute -left-4 -bottom-4 rotate-12 text-rose-100">
          <HeartIcon className="h-20 w-20" />
        </div>

        <div className="relative">
          <p className="font-serif text-2xl text-rose-500">Dear Leanne,</p>
          <div className="mt-4 space-y-4 text-rose-700/90">
            <p>
              Hi Leanne! This is where our digital photo gallery will live! I hope you look through these pictures time to time to remember how you cute are!
            </p>
            <p>
              It was so sweet of you to come down and see me, and I really can't wait for you to come again and for us to see each other more! And for when I get to visit you! 
              I love you so very much and I miss you every single day.
            </p>
            <p>
              I just added a few pictures from our Korea trip! I hope you love them so much (just as much as I love you!)
            </p>
          </div>
          <p className="mt-6 font-serif text-lg text-rose-500">
            Forever yours, Adam 💗
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function HeartIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 21s-7-4.5-9.5-9C1 9 2.5 5.5 6 5.5c2 0 3.5 1 4 2.5 0.5-1.5 2-2.5 4-2.5 3.5 0 5 3.5 3.5 6.5C19 16.5 12 21 12 21z" />
    </svg>
  );
}