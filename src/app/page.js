import React from 'react';
import HorizontalCar from '@/components/UI/Carousel/HorizontalCar';
import Sidebar from '@/components/UI/sidebar/Sidebar';
import Contactdial from '@/components/UI/speedial/Contactdial';
import Image from 'next/image';

export default function Home() {
  
  return (
        <main className="flex min-h-screen items-center justify-between overflow-clip scroll-smooth bg-transparent" data-theme="blueberry">
            <HorizontalCar />
          <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
            <Sidebar />
          </div>
          <div className="z-20">
            <Contactdial />
          </div>
        </main>
  );
}
