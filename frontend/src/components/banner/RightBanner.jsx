import React from 'react';
import { ellah } from '../../assets';

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <div className="bottom-0 w-[300px] h-[300px] lgl:w-[400px] lgl:h-[400px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center rounded-full">
        <div className="w-[300px] h-[300px] lgl:w-[400px] lgl:h-[400px] overflow-hidden rounded-full">
          <img
            className="w-full h-full object-cover"
            src={ellah}
            alt="bannerImg"
          />
        </div>
      </div>
    </div>
  );
}

export default RightBanner;
