import { motion } from "framer-motion";

const Reviews = () => {

  const reviews = [
    "The quality is insane. Totally worth it.",
    "Fits are perfect. Vibe is unmatched.",
    "Finally a brand that understands Gen Z energy.",
  ];

  return (
    <section id="reviews" className="py-24 bg-black">
      <h2 className="text-4xl font-bold text-center mb-16 tracking-widest">
        WHAT THEY SAY
      </h2>

      <div className="flex gap-8 overflow-x-auto px-10">
        {reviews.map((review, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="min-w-[320px] bg-black border border-gray-800 p-8 rounded-2xl"
          >
            <p className="text-gray-300">
              "{review}"
            </p>

            <h4 className="mt-6 text-gray-500 text-sm tracking-widest">
              — VERIFIED BUYER
            </h4>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
