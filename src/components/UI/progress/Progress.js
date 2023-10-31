"use client"
import { motion, useScroll } from "framer-motion";
import React from "react";

const Progress = () => {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <div className="h-[800px] bg-gray-200 rounded-full w-0.5 dark:bg-gray-700">
        <motion.div
          className="fixed h-[800px] origin-[0%] bg-blue-600 w-0.5 rounded-full" style={{ scaleY: scrollYProgress }}/>
      </div>
    </>
  );
};

export default Progress;
