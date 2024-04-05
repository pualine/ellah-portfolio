import React from 'react';
import LeftBanner from './LeftBanner';
import RightBanner from './RightBanner';
import Ring from '../3d/Ring';

const Banner = () => {
  return (
    <section id="banner-section" className="relative w-full h-screen overflow-hidden">
      <Ring/>
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="container mx-auto px-4 lg:px-8 xl:px-0">
          <div className="w-full flex flex-col gap-10 xl:gap-0 lg:flex-row items-center border-b-[1px] font-titleFont border-b-black">
            <LeftBanner />
            <RightBanner />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
