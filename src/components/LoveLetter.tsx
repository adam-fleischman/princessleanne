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
              I know that this return to long distance has been rough, and I've largely been the cause of that. I'm truly sorry about hiding things from you and for not communicating better, 
              particularly with things related to this frat. I'll put a stop to this stuff both by leaving the frat and by avoiding situations where I'll be prone to making mistakes, like at parties. 
              I know it's dumb, but I really do love you and I don't want to keep hurting you our ruining your college experience by making you so upset that you can't be present with your friends. 
            </p>
            <p>
              I love you so much Leanne. I think about you all throughout my day and I miss you every single night. I can't wait for when I get to see you again and spend time with you and make you happy. 
              I hope this photo collage makes you as happy as it makes me, as I get to look at my beautiful and adorable girlfriend.
            </p>
            <p>
              I just added a few pictures from our Korea trip and from when you came and visited me last weekend! I hope you love them so much (just as much as I love you!)
            </p>
          </div>
          <p className="mt-6 font-serif text-lg text-rose-500">
            Forever yours, Adam 💗 (aka boyfie)
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