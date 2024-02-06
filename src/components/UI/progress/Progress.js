"use client"
import { motion, useScroll } from "framer-motion";
import React from "react";

const Progress = () => {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <div className="h-[800px] bg-gray-200 rounded-full w-0.5 dark:bg-gray-700 text-gray-500 uppercase">
        <motion.div
          className="fixed h-[800px] origin-[0%] bg-blue-600 w-0.5 rounded-full" style={{ scaleY: scrollYProgress }}
          />
          <motion.div initial={{ opacity: 0.5 }} whileHover={{ opacity:1, x:8 }} className="h-auto w-[100px] text-white -translate-x-9 mt-16">
            <h1 className="rotate-90 block mt-12">work with me</h1>
            <h1 className="rotate-90 block mt-24">what i do</h1>
            <h1 className="rotate-90 block mt-24">who am i</h1>
          <div className="mt-48">
            <h1 className="rotate-90 block mt-14">who am i</h1>
            <h1 className="rotate-90 block mt-24">what i do</h1>
            <h1 className="rotate-90 block mt-20">work with me</h1>
          </div>
          </motion.div>
      </div>
    </>
  );
};

export default Progress;
