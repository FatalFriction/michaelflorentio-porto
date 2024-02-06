import React from 'react';
import HorizontalCar from '@/components/UI/Carousel/HorizontalCar';

export default function Home() {
  
  return (
      <main className="flex min-h-screen items-center justify-between overflow-clip scroll-smooth bg-transparent" data-theme="blueberry">
        <HorizontalCar />
      </main>
  );
}
