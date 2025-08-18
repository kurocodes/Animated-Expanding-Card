import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { characters } from "../assets/assets";

export default function ExpandingCard() {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      layout
      onClick={() => setExpanded(!expanded)}
      className="rounded-lg cursor-pointer border border-gray-300 shadow-[0_0_4px_rgba(0,0,0,0.1)] flex gap-2"
      style={{
        width: expanded ? "350px" : "200px",
        height: expanded ? "100px" : "fit-content",
        flexDirection: expanded ? "row" : "column",
        padding: expanded ? "0.5rem" : "1rem",
      }}
      transition={{ layout: { duration: 0.5 } }}
    >
      <motion.img
        layout
        src={characters[1].image}
        className="rounded-md relative z-1"
        style={{
          width: expanded ? "fit-content" : "100%",
          height: expanded ? "100%" : "fit-content",
        }}
        transition={{ layout: { duration: 0.5 } }}
      />
      {expanded && (
        <AnimatePresence>
          <motion.div className="flex flex-col justify-center">
            <motion.h2
              layout
              className="text-lg font-cutedino text-[#6566a0]"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -50, opacity: 0 }}
              transition={{ delay: 0.3, duration: 0.3 }}
            >
              Mai Sakurajima*
            </motion.h2>
            <motion.p
              layout
              className="text-sm text-center text-[#74727f]"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -50, opacity: 0 }}
              transition={{ delay: 0.4, duration: 0.3 }}
            >
              Extra details appear smoothly~
            </motion.p>
          </motion.div>
        </AnimatePresence>
      )}
    </motion.div>
  );
}
