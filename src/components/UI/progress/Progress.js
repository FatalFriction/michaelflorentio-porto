"use client"
import { motion, useScroll } from "framer-motion";
import React from "react";

const Progress = () => {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <div className="h-[800px] bg-gray-200 rounded-full w-0.5 dark:bg-gray-700 text-gray-500 uppercase">
        <motion.div
          className="fixed h-[800px] origin-[0%] bg-blue-600 w-0.5 rounded-full" style={{ scaleY: scrollYProgress }}/>
          <motion.div initial={{ opacity: 0 }} whileHover={{ opacity:1 }} className="h-auto w-[100px] -translate-x-8 mt-16">
            <h1 className="rotate-90 block mt-12 hover:text-white">work with me</h1>
            <h1 className="rotate-90 block mt-24 hover:text-white">what i do</h1>
            <h1 className="rotate-90 block mt-24 hover:text-white">who am i</h1>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileHover={{ opacity:1 }}  className="h-auto w-[100px] -translate-x-7 mt-48">
            <h1 className="rotate-90 block mt-14 hover:text-white">who am i</h1>
            <h1 className="rotate-90 block mt-24 hover:text-white">what i do</h1>
            <h1 className="rotate-90 block mt-20 hover:text-white">work with me</h1>
          </motion.div>
      </div>
    </>
  );
};

export default Progress;
