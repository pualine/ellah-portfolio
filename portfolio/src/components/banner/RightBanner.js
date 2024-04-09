import React from 'react';
import { bannerImg } from '../../assets';

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <div className="bottom-0 w-[250px] h-[250px] lgl:w-[450px] lgl:h-[450px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center rounded-full">
        <div className="w-[80%] h-[80%] lgl:w-[90%] lgl:h-[90%] overflow-hidden rounded-full">
          <img
            className="w-full h-full object-cover"
            src={bannerImg}
            alt="bannerImg"
          />
        </div>
      </div>
    </div>
  );
}

export default RightBanner;