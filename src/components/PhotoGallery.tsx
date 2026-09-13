import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

type Photo = {
  id: string;
  url: string;
  name: string;
  description: string;
};

// A list mapping image file names to their romantic descriptions.
// If an image is found but not listed here, it will use the default caption.
const DESCRIPTIONS: Record<string, string> = {
  "1": "Adorable little puppy baby cutie! - 12/20/09",
  "m": "Princess and me <3 - 12/13/25",
  "lp_image": "Cutie girl posing in mirror! AAAAA SO CUTE - 6/12/26",
  "8.5": "PUPPY FACE!!! - 6/14/26",
  "5": "The original baby princess! So cute!! - just a baby",
  "6": "Old picture! We look so different but cute like puppy! - 5/9/24",
  "7": "Such a fun day! So princesslike with the flower in your hair! - 5/25/24",
  "8": "My pretty princess in her gorgeous dress! - 5/28/26",
  "z9": "You just look so pretty here, I had to add it - 5/28/26",
  "10": "My beautiful girl before the big dance! - 5/28/26",
  "u": "Highlight of that night! Walmart trip was so spontaneous but so much fun!! - 12/14/24",
  "12": "Hol Ball! A bit of an awkward photo but you look so stunning so I love it - 12/14/24",
  "13": "Into the Woods! So much fun to do with you, and we might not have met without it!! - 5/15/24",
  "14": "U in ma car! This was a freaky night but u made such a cute face here and I love it! - 1/25/25",
  "us1": "Our amazing beach day!! - 6/17/25",
  "us2": "ADORABLE GIRL! I just really like this picture hehe - 4/19/25",
  "us3": "Gorgeous girl graduating! - 5/31/26",
  "couple": "My graduation! But you steal the show with how gorgeous you look hehe - 5/17/25",
  "love": "Cutie patootie making cutie face - 6/6/25",
  "date": "Awkward goodbye for the summer! If only I knew you didn't like hawaiian shirts... - 5/30/24",
  "zforever": "Adorable princess again! - 5/31/25",
  "sweetheart": "Princess!!! So princess! - 5/31/25",
  "together": "Adorable girl on the train! NYC day for my birthday! - 4/26/25",
  "valentine": "We r so silly w the filter haha - 4/3/25",
  "zz1": "gorgeous girl sitting by beautiful view - 8/13/26",
  "zz2": "aesthetic picture of aesthetic leanne - 8/18/26",
  "zz3": "A real, beautiful princess with her princess dress at a princess palace"
};

const DEFAULT_DESCRIPTION = "This picture has no description for some reason! Just know that it is of adorable puppy princess!";

export default function PhotoGallery() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [selected, setSelected] = useState<Photo | null>(null);

  useEffect(() => {
  // List every actual filename in your GalleryPictures folder
  const FILES = [
    "1.jpeg",
    "5.JPG",
    "6.JPG",
    "7.jpg",
    "8.jpeg",
    "8.5.jpeg",
    "10.JPEG",
    "m.JPG",
    "lp_image.jpeg",
    "z9.jpeg",
    "zforever.jpeg",
    "us1.jpeg",
    "us2.jpeg",
    "us3.jpeg",
    "couple.JPG",
    "love.jpeg",
    "date.jpeg",
    "sweetheart.jpeg",
    "together.jpeg",
    "valentine.JPG",
    "zz1.jpeg",
    "zz2.jpeg",
    "zz3.jpeg"
  ];

  const found: Photo[] = FILES.map((file) => {
    const baseName = file.replace(/\.[^/.]+$/, ""); // remove extension

    return {
      id: `gallery-${file}`,
      url: `/GalleryPictures/${file}`,
      name: file,
      description: DESCRIPTIONS[baseName] || DEFAULT_DESCRIPTION,
    };
  });

  setPhotos(found);
}, []);

  const removePhoto = useCallback((id: string) => {
    setPhotos((prev) => prev.filter((p) => p.id !== id));
    setSelected((prev) => (prev?.id === id ? null : prev));
  }, []);

  return (
    <div className="w-full">
      {photos.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-rose-200 bg-rose-50/50 px-6 py-16 text-center">
          <Heart className="h-10 w-10 text-rose-300" />
          <p className="mt-3 text-sm text-rose-400">
            Add your favorite photos of us to the
            <span className="mx-1 rounded bg-rose-100 px-1.5 py-0.5 font-mono text-xs text-rose-500">
              GalleryPictures
            </span>
            folder and they'll appear here.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          <AnimatePresence>
            {photos.map((photo) => (
              <motion.div
                key={photo.id}
                layout
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.35 }}
                className="group relative flex aspect-square flex-col overflow-hidden rounded-2xl border border-rose-200 bg-rose-50 shadow-sm"
              >
                <div className="relative flex-1 overflow-hidden">
                  <img
                    src={photo.url}
                    alt={photo.name}
                    className="h-full w-full cursor-pointer object-cover transition-transform duration-500 group-hover:scale-110"
                    onClick={() => setSelected(photo)}
                  />
                  <button
                    onClick={() => removePhoto(photo.id)}
                    className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-white/80 text-rose-500 opacity-0 shadow-sm backdrop-blur-sm transition-all hover:bg-white group-hover:opacity-100"
                    aria-label="Remove photo"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>

                <div className="relative flex items-center justify-center p-2">
                  <p className="truncate text-center text-xs italic text-rose-600">
                    {photo.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-rose-950/60 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-full max-w-3xl overflow-hidden rounded-2xl bg-white p-2 shadow-2xl"
            >
              <img
                src={selected.url}
                alt={selected.name}
                className="max-h-[75vh] w-full rounded-xl object-contain"
              />
              <p className="px-4 py-3 text-center font-serif text-sm italic text-rose-500">
                "{selected.description}"
              </p>
              <button
                onClick={() => setSelected(null)}
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-rose-500 shadow-md transition hover:bg-white"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function checkImage(url: string): Promise<boolean> {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = url;
  });
}

function Heart({ className }: { className?: string }) {
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