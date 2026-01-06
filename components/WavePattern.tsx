"use client";
import { motion } from "framer-motion";

function WavePattern({ isFlipped = false }: { isFlipped?: boolean }) {
  return (
    <motion.div
      style={{
        translateX: '-12vw'
      }}

      animate={{
        x: `-40vw`,
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {isFlipped ? (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 100" width="200vw">
  <path
    d="
      M 64 44
      Q 96 44 128 72
      Q 192 128 256 72
      Q 288 44 320 44
      Q 352 44 384 72
      Q 448 128 512 72
      Q 544 44 576 44
      Q 608 44 640 72
      Q 704 128 768 72
      Q 800 44 832 44
      Q 864 44 896 72
      Q 960 128 1024 72
      Q 1056 44 1088 44
      Q 1120 44 1152 72
      Q 1216 128 1280 72
      Q 1312 44 1344 44
      L 1280 0
      L 0 0
      Z
    "
    fill="#0099ff"
  />
</svg>

      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1280 100"
          width="200vw"
        >
          <path
            d="M -64 56 Q -32 56 0 28 Q 64 -28 128 28 Q 160 56 192 56 Q 224 56 256 28 Q 320 -28 384 28 Q 416 56 448 56 Q 480 56 512 28 Q 576 -28 640 28 Q 672 56 704 56 Q 736 56 768 28 Q 832 -28 896 28 Q 928 56 960 56 Q 992 56 1024 28 Q 1088 -28 1152 28 Q 1184 56 1216 56 Q 1248 56 1280 28 Q 1344 -28 1408 28 Q 1440 56 1472 56 L 1280 100 L 0 100 Z"
            fill="#0099ff"
          ></path>
        </svg>
      )}
    </motion.div>
  );
}

export default WavePattern;
