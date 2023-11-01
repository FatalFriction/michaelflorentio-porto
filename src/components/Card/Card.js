import Image from 'next/image';
import React from 'react'

const Card = ({ card }) => {
    return (
      <div
        key={card.id}
        className="group relative w-screen h-screen overflow-hidden bg-neutral-200"
      >
        <Image
          src={card.url}
          className="absolute inset-0 z-0 w-full h-full overflow-hidden bg-center bg-cover"
          alt={card.id}
          width={5000}
          height={5000}
        />
        {/* <div className="absolute inset-0 z-10 grid justify-center items-end mb-20">
          <p className="bg-gradient-to-br from-white/20 to-white/0  backdrop-blur-lg p-8 text-6xl font-black uppercase text-white">
            {card.title}
          </p>
        </div> */}
      </div>
    );
  };

export default Card