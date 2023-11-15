"use client"
import React, { useEffect, useState } from 'react';
import Card from "@/components/Card/Card";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import localFont from 'next/font/local'
import RobotCanvas from "@/components/LostRobot/RobotCanvas";
import FirstPanel from "../Panel/FirstPanel";
import SecondPanel from "../Panel/SecondPanel";
import ScrollCanvas from "@/components/Scroll/ScrollCanvas";
import ThirdPanel from "../Panel/ThirdPanel";
import { cards } from "@/utils/indexdata";
import Contactdial from '../speedial/Contactdial';
import Sidebar from '../sidebar/Sidebar';
import MobilePanelHome from '../Panel/MobilePanelHome';
import MobilePanelContact from '../Panel/MobilePanelContact';
import HorizontalDivider from '../HorizontalDivider';

const myFont = localFont({
  src: '/HeavyRain.ttf',
  display: 'swap',
})

const HorizontalCar = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-87%"]);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {isMobile ? <VerticalCarousel /> : <HorizontalScrollCarousel x={x} />}
    </>
  );
};

const HorizontalScrollCarousel = ({ x }) => {
  return (
    <>
      <section className="relative h-[2450vh] bg-transparent whitespace-nowrap scroll-smooth">
        <div className="sticky top-0 flex h-screen items-center">
          <motion.div style={{ x }} className="flex">
            {cards.map((card) => (
              card.id === 3 ? <FirstPanel key={card.id} /> :
                card.id === 4 ? <RobotCanvas key={card.id} /> :
                  card.id === 5 ? <SecondPanel key={card.id} /> :
                    card.id === 6 ? <ScrollCanvas key={card.id} /> :
                      card.id === 7 ? <ThirdPanel key={card.id} /> :
                        <motion.div key={card.id} className={myFont.className}>
                          <Card card={card} key={card.id} />
                        </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <Sidebar />
      </div>
      <div className="z-20">
        <Contactdial />
      </div>
    </>
  );
};

const VerticalCarousel = () => {
  return (
    <>
      <section className="w-auto h-auto scroll-smooth">
        <div className="flex flex-col">
          <MobilePanelHome />
          <HorizontalDivider />
          <FirstPanel />
          <HorizontalDivider />
          <SecondPanel />
          <HorizontalDivider />
          <MobilePanelContact />
        </div>
      </section>
    </>
  );
};

export default HorizontalCar;
