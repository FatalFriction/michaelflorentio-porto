"use client"
import Card from "@/components/Card/Card";
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

  return (
    <>
    <section ref={targetRef} className="relative h-[300vh] bg-neutral whitespace-nowrap">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
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