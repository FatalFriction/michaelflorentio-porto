import React, { Suspense } from 'react';
import HorizontalCar from '@/components/UI/Carousel/HorizontalCar';
import Splash from '@/components/Splash/Splash';

export default function Home() {
  
  return (
        <Suspense fallback={<Splash/>}>
          <main className="flex min-h-screen items-center justify-between overflow-clip scroll-smooth bg-transparent" data-theme="blueberry">
              <HorizontalCar />
          </main>
        </Suspense>
  );
}
