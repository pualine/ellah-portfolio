import React from 'react';
import LeftBanner from './LeftBanner';
import RightBanner from './RightBanner';
import Ring from '../3d/Ring';

const Banner = () => {
  return (
    <section id="banner-section" className="relative w-full h-screen overflow-hidden">
      <Ring />
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="w-full pt-10 pb-20 flex flex-col gap-10 xl:gap-0 lgl:flex-row items-center border-b-[1px] font-titleFont border-b-black">
          <LeftBanner />
          <RightBanner />
        </div>
      </div>
    </section>
  );
}

export default Banner;
