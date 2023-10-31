"use client"
import Card from "@/components/Card/Card";
import Hover from "@/utils/Hover";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const HorizontalCar = () => {
  return (
    <div className="bg-neutral">
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-86%"]);

  const hoverHero = Hover(targetRef, {
    x: 6,
    y: 10,
    z: 0,
  });

  const imageHover = Hover(targetRef, {
    x: 0,
    y: -5,
    z: 0,
  });

  return (
    <>
    <section ref={targetRef} className="relative h-[2450vh] bg-primary whitespace-nowrap scroll-smooth">
    <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex">
        {cards.map((card) => (
            <motion.div key={card.id} style={{ scaleY: card.id === 1 ? 1.1 : 1, scaleX: card.id === 1 ? 1.1 : 1 }}>
            <div style={{ transform: card.id === 1 ? hoverHero.transform : "none" }}>
                <Card card={card} key={card.id} style={{ transform: card.id === 1 ? imageHover.transform : "none" }} />
            </div>
            </motion.div>
        ))}
        </motion.div>
    </div>
    </section>
    </>
  );
};

export default HorizontalCar;

const cards = [
  {
    url: "/Riau.jpg",
    title: "Title 1",
    id: 1,
  },
  {
    url: "/Illustration/2.jpg",
    title: "Title 2",
    id: 2,
  },
  {
    url: "/Illustration/3.jpg",
    title: "Title 3",
    id: 3,
  },
  {
    url: "/Illustration/4.jpg",
    title: "Title 4",
    id: 4,
  },
  {
    url: "/Illustration/5.jpg",
    title: "Title 5",
    id: 5,
  },
  {
    url: "/Illustration/6.jpg",
    title: "Title 6",
    id: 6,
  },
  {
    url: "/Illustration/7.jpg",
    title: "Title 7",
    id: 7,
  },
];