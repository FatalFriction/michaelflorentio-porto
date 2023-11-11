"use client"
import Card from "@/components/Card/Card";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import localFont from 'next/font/local'
import RobotCanvas from "@/components/LostRobot/RobotCanvas";
import FirstPanel from "../Panel/FirstPanel";
import SecondPanel from "../Panel/SecondPanel";
import ScrollCanvas from "@/components/Scroll/ScrollCanvas";
import ThirdPanel from "../Panel/ThirdPanel";
import FourthPanel from "../Panel/FourthPanel";

const myFont = localFont({
  src: '/HeavyRain.ttf',
  display: 'swap',
})

const HorizontalCar = () => {
  return (
    <div className="bg-transparent">
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-87%"]);
  
  return (
    <>
    <section ref={targetRef} className="relative h-[2450vh] bg-transparent whitespace-nowrap scroll-smooth">
        <div className="sticky top-0 flex h-screen items-center">
            <motion.div style={{ x }} className="flex">
            {cards.map((card) => (
                card.id === 3 ? <FirstPanel key={card.id} />
                 : card.id === 4 ? <RobotCanvas key={card.id} /> : 
                 card.id === 5 ? <SecondPanel key={card.id} /> :
                 card.id === 6 ? <ScrollCanvas key={card.id} /> :
                 card.id === 7 ? <ThirdPanel key={card.id} /> :
                <motion.div key={card.id} className={myFont.className}>
                    <Card card={card} key={card.id} />
                </motion.div>
                )
            )}
            </motion.div>
        </div>
    </section>
    </>
  );
};

export default HorizontalCar;

const cards = [
  {
    url: "/Riau1.jpg",
    id: 1,
  },
  {
    url: "/Riau.jpg",
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
  {
    id: 5,
  },
  {
    id: 6,
  },
  {
    id: 7,
  },
];