import Particleseng from '@/utils/Particleseng';
import Image from 'next/image';
import React from 'react'

const Card = ({ card }) => {

    return (
      <div
        key={card.id}
        className="group relative w-screen h-screen bg-neutral-200"
      >
        <Image
          src={card.url}
          className="absolute inset-0 z-0 w-full h-full bg-center bg-cover"
          alt={card.id}
          width={5000}
          height={5000}
        />
        {card.id === 1 ? <Particleseng id="tsparticles" number={0}/> : null}
        {card.id === 2 ? <Particleseng id="tsparticles1" number={1}/> : null}
      </div>
    );
  };

export default Card