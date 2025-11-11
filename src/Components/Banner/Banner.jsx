import BannerImg from "../../assets/coffee-white.png";
import BgTexture from "../../assets/website/coffee-texture.jpg";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

const bgImage = {
  backgroundImage: `url(${BgTexture})`,
  backgroundColor: "#270c03",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const Banner = () => {
  return (
    <>
      <span id="about"></span>
      <div style={bgImage} className="relative">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="container relative z-10 min-h-[550px] flex justify-center items-center py-12 sm:py-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">

            {/* Image with spin */}
            <div className="flex justify-center md:justify-end">
              <img 
                src={BannerImg} 
                alt="Coffee cup" 
                className="max-w-[300px] sm:max-w-[380px] md:max-w-[430px] w-full mx-auto drop-shadow-2xl animate-spin-slow"
              />
            </div>

            {/* Text */}
            <div className="flex flex-col justify-center gap-6 text-white text-center md:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-cursive bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Premium Blend Coffee
              </h1>

              <p className="text-sm sm:text-base md:text-lg text-gray-300 tracking-wide leading-6">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem quasi tempora a vero distinctio? Quibusdam odio laborum temporibus eius adipisci animi illum quia corrupti nesciunt molestiae similique, molestias fugit at?
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                <div className="space-y-5 flex flex-col items-center sm:items-start">
                  <div className="flex items-center gap-3">
                    <GrSecure className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-100"/>
                    <span>Premium Coffee</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <IoFastFood className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-orange-100"/>
                    <span>Hot Coffee</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <GiFoodTruck className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-yellow-100"/>
                    <span>Cold Coffee</span>
                  </div>
                </div>

                <div className="border-l-4 border-primary/50 pl-6 space-y-3">
                  <h1 className="text-2xl font-semibold font-cursive text-primary">
                    Tea Lover
                  </h1>
                  <p className="text-gray-300 text-sm sm:text-base">
                    Much like writing code, brewing the perfect cup of tea requires patience, 
                    precision, and a dash of passion to create a comforting blend of flavours.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
