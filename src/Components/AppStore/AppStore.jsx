import React from 'react';
import AppStoreImg from "../../assets/website/app_store.png";
import PlayStoreImg from "../../assets/website/play_store.png";
import BgPng from "../../assets/website/coffee-beans-bg.png";

const backgroundStyle = {
    backgroundImage: `url(${BgPng})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%", // fixed typo
};

const AppStore = () => {
  return (
    <div style={backgroundStyle} className='py-14'>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
          
          {/* Text & logos */}
          <div
            data-aos="fade-up"
            className='space-y-6 max-w-xl mx-auto md:mx-0 text-center md:text-left'>
            
            <h1 className='text-2xl sm:text-3xl md:text-4xl font-semibold text-white/90'>
              Cafie Coffee is available for Android and iOS
            </h1>
            
            <div className='flex flex-wrap justify-center md:justify-start items-center gap-4'>
              <a href="#">
                <img 
                  src={AppStoreImg} 
                  alt="App Store" 
                  className='max-w-[150px] sm:max-w-[180px] md:max-w-[200px]'
                />
              </a>
              <a href="#">
                <img 
                  src={PlayStoreImg} 
                  alt="Play Store" 
                  className='max-w-[150px] sm:max-w-[180px] md:max-w-[200px]'
                />
              </a>
            </div>
          </div>

          {/* Empty right column for layout balance */}
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default AppStore;
