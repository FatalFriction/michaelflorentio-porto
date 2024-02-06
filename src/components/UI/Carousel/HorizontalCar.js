"use client"
import React, { Suspense, useEffect, useState } from 'react';
import Card from "@/components/Card/Card";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import dynamic from 'next/dynamic';

import { cards } from "@/utils/indexdata";
import localFont from 'next/font/local'

const RobotCanvas = dynamic(() => import('@/components/LostRobot/RobotCanvas'))
const ScrollCanvas = dynamic(() => import('@/components/Scroll/ScrollCanvas'))

const SecondPanel = dynamic(() => import('../Panel/SecondPanel'))
const ThirdPanel = dynamic(() => import('../Panel/ThirdPanel'))

import FirstPanel from "../Panel/FirstPanel";

import Contactdial from '../speedial/Contactdial';
import Sidebar from '../sidebar/Sidebar';
import MobilePanelHome from '../Panel/MobilePanelHome';
import MobilePanelContact from '../Panel/MobilePanelContact';
import HorizontalDivider from '../HorizontalDivider';
import Splash from '@/components/Splash/Splash';

const myFont = localFont({
  src: '/HeavyRain.ttf',
  display: 'swap',
})

const HorizontalCar = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-71%"]);

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
            <motion.div style={{ x }} className="flex" key={card.id}>
              {card.id === 3 ? (
                <FirstPanel key={card.id} />
              ) : card.id === 4 ?
              (
                <Suspense fallback={<Splash />}>
                  <RobotCanvas key={card.id} />
                </Suspense>
              ) 
                : card.id === 5 ? (
                <SecondPanel key={card.id} />
              ) : card.id === 6 ? (
                <ScrollCanvas key={card.id} />
              ) : card.id === 7 ? (
                <ThirdPanel key={card.id} />
              ) : (
                <motion.div className={myFont.className}>
                  <Card card={card} key={card.id} />
                </motion.div>
              )}
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
