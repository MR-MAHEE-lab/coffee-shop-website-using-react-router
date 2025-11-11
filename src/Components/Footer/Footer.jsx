import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa6';
import FooterBg from "../../assets/website/coffee-footer.jpg";

const FooterLinks = [
    { title: "Home", link: "/#" },
    { title: "About", link: "/#about" },
    { title: "Contact", link: "/#contact" },
    { title: "Blog", link: "/#blog" },
];

const bgImage = {
    backgroundImage: `url(${FooterBg})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
};

const Footer = () => {
  return (
    <div style={bgImage} className='text-white'>
      <div className="bg-black/40 min-h-[400px]">
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-8 pb-20 pt-10">
          
          {/* Company details */}
          <div className='py-4 px-4 text-center md:text-left'>
            <a 
              href="#" 
              className='font-semibold tracking-widest text-2xl sm:text-3xl font-cursive'
            >
              Cafie Cafe
            </a>
            <p className='pt-4 text-sm sm:text-base'>
              Crafted Coffee, Cozy Vibes,<br/> 
              Unforgettable Moments - Your perfect <br/>
              Espresso Escape
            </p>
            <a 
              href='#' 
              target='_blank'
              className='inline-block bg-[#3d2517] py-2 px-4 mt-5 text-sm rounded-full hover:scale-105 duration-200'
            >
              Visit our YouTube Channel
            </a>
          </div>

          {/* Footer Links */}
          <div className='col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-4 md:pl-10'>
            
            {/* Footer Links Column */}
            <div className='py-4 px-2 text-center sm:text-left'>
              <h1 className='text-xl font-semibold mb-3'>Footer Links</h1>
              <ul className='space-y-2'>
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a 
                      href={data.link}
                      className='inline-block hover:scale-105 duration-200'
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links Column */}
            <div className='py-4 px-2 text-center sm:text-left'>
              <h1 className='text-xl font-semibold mb-3'>Quick Links</h1>
              <ul className='space-y-2'>
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a 
                      href={data.link}
                      className='inline-block hover:scale-105 duration-200'
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Address & Social */}
            <div className='py-4 px-2 text-center sm:text-left'>
              <h1 className='text-xl font-semibold mb-3'>Address</h1>
              <p className='mb-2'>Enugu, Enugu</p>
              <p>+234 7057619705</p>
              <div className='flex justify-center sm:justify-start space-x-4 mt-4'>
                <a href='#'><FaFacebook className='text-3xl hover:scale-110 duration-200'/></a>
                <a href='#'><FaLinkedin className='text-3xl hover:scale-110 duration-200'/></a>
                <a href='#'><FaInstagram className='text-3xl hover:scale-110 duration-200'/></a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
};

export default Footer;
