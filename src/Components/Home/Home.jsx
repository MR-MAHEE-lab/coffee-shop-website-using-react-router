import HeroImg from "../../assets/coffee.png";

const Home = () => {
  return (
    <div className='min-h-[550px] sm:min-h-[600px] bg-brandDark flex justify-center items-center text-white'>
      <div className="container pb-8 sm:pb-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          
          {/* Text content section */}
          <div className='order-2 sm:order-1 flex flex-col justify-center gap-6 text-center sm:text-left'>
            <h1 
              data-aos="fade-up"
              data-aos-once="true"
              className='text-4xl sm:text-5xl lg:text-6xl font-bold'
            >
              Welcome to the richest {" "}
              <span 
                data-aos="zoom-out"
                data-aos-delay="300"
                className='text-primary font-cursive'
              >
                Coffee
              </span> {" "}
              in the city
            </h1>

            <div data-aos="fade-up" data-aos-delay="400">
              <button className='bg-gradient-to-r from-primary to-secondary border-2 border-primary rounded-full px-4 py-2 text-white hover:scale-105 duration-200'>
                Coffee with Code
              </button>
            </div>
          </div>

          {/* Image section */}
          <div 
            data-aos="zoom-in" 
            className='order-1 sm:order-2 flex justify-center items-center relative min-h-[400px] sm:min-h-[450px]'
          >
            <img 
              src={HeroImg} 
              alt="Coffee Hero" 
              className='w-[250px] sm:w-[400px] lg:w-[450px] sm:scale-105 m-auto spin'
            />

            {/* Decorative Text Boxes */}
            <div 
              data-aos="fade-left"
              className='bg-gradient-to-r from-primary to-secondary absolute top-4 sm:top-10 left-4 sm:left-10 p-2 sm:p-3 rounded-xl text-xs sm:text-sm lg:text-base font-semibold'
            >
              Coffee Lovers
            </div>

            <div 
              data-aos="fade-right"
              className='bg-gradient-to-r from-primary to-secondary absolute bottom-4 sm:bottom-10 right-4 sm:right-10 p-2 sm:p-3 rounded-xl text-xs sm:text-sm lg:text-base font-semibold'
            >
              Drink Coffee
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Home;
