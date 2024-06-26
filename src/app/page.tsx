'use client'

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import CardSlider from '../../components/CardSlider';
import EWHeader from '../../components/EWHeader';
import EWFooter from '../../components/EWFooter';

import 'swiper/css';
import 'swiper/css/pagination';
import '../styles/swiper.css';

const HomePage: React.FC = () => {
  const [isEventsDropdownOpen, setIsEventsDropdownOpen] = useState(false);
    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
    
    const toggleEventsDropdown = () => {
        setIsEventsDropdownOpen(!isEventsDropdownOpen);
        setIsProfileDropdownOpen(false); // Ensure the profile dropdown is closed
    };
    
    const toggleProfileDropdown = () => {
        setIsProfileDropdownOpen(!isProfileDropdownOpen);
        setIsEventsDropdownOpen(false); // Ensure the events dropdown is closed
    };
    
  return (
    <div>
      <EWHeader/>

      {/* Image Background */}
      <section className="relative bg-[url('/images/home_bg1.png')] h-custom-60 bg-cover bg-center">
        <div className="flex items-center justify-end h-full bg-black bg-opacity-50">
          <h1 className="text-white text-4xl pr-20">Join exciting events that<br />pique your interest!</h1>
        </div>
      </section>

      {/* Floating Button */}
      <div className="absolute top-1/5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="flex justify-center space-x-10">
          <a href='/events'>
            <button className="inline-block bg-customColor_yellow text-2xl text-customColor_black px-10 p-4 rounded-md shadow-lg hover:bg-customColor_white hover:text-customColor_black">
              Festivals
            </button>
          </a>
          
          <a href='/events'>
            <button className="inline-block bg-customColor_yellow text-2xl text-customColor_black px-10 p-4 rounded-md shadow-lg hover:bg-customColor_white hover:text-customColor_black">
              Weddings
            </button>
          </a>
          
          <a href='/'>
            <button className="inline-block bg-customColor_yellow text-2xl text-customColor_black px-10 p-4 rounded-md shadow-lg hover:bg-customColor_white hover:text-customColor_black">
              Concerts
            </button>
          </a>
          
          <a href='/'>
            <button className="inline-block bg-customColor_yellow text-2xl text-customColor_black px-10 p-4 rounded-md shadow-lg hover:bg-customColor_white hover:text-customColor_black">
              See More
            </button>
          </a>
        </div>
      </div>
      
      {/* Content Section */}
      <section className="bg-customColor_black h-custom-50 place-content-center">
        <div className="flex items-center justify-center h-custom-30 bg-customColor_yellow">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1 items-center justify-center">
            <div className="flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-20 items-center justify-center pr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                />
              </svg>
            </div>
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-customColor_black text-4xl pr-4">Schedule Plans Available</h1>
              <p className="text-customColor_black text-lg">Come see which plans works best for you.</p>
            </div>
            <div className="flex items-center justify-center">
              <a href='/events'>
                <button className="inline-block bg-customColor_yellow text-2xl text-customColor_black px-10 p-4 rounded-full shadow-lg border-4 border-customColor_black hover:bg-customColor_white hover:text-customColor_black">
                  View Events
                </button>
              </a>           
            </div>
          </div>
        </div>
      </section>

      {/* Festival Cards */}
      <div className="flex-1 flex bg-customColor_black h-custom-60 items-center justify-center">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className='p-4'>
            <h1 className="text-white text-4xl">Festivals</h1>
          </div>
          <Swiper 
          slidesPerView={3}
          spaceBetween={20}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
          >
            <SwiperSlide><a href='#'>
              <div className='h-custom-45'><CardSlider cards={[{ title: 'Sinulog Festival', description: 'Description for this event 1', image: '/images/festival_sinulog.jpg' },]}/></div></a>
            </SwiperSlide>

            <SwiperSlide><a href='#'>
              <div><CardSlider cards={[{ title: 'Ati-Atihan Festival', description: 'Description for this event 2', image: '/images/festival_atiatihan.jpg' },]}/></div></a>
            </SwiperSlide>

            <SwiperSlide><a href='#'>
              <div><CardSlider cards={[{ title: 'Kaamulan Festival', description: 'Description for this event 3', image: '/images/festival_kaamulan.jpg' },]}/></div></a>
            </SwiperSlide>

            <SwiperSlide><a href='#'>
              <div><CardSlider cards={[{ title: 'Panagbenga Festival', description: 'Description for this event 4', image: '/images/festival_panagbenga.jpg' },]}/></div></a>
            </SwiperSlide>
            
            <SwiperSlide><a href='#'>
              <div><CardSlider cards={[{ title: 'Pahiyas Festival', description: 'Description for this event 5', image: '/images/festival_pahiyas.jpg' },]}/></div></a>
            </SwiperSlide>

            <SwiperSlide><a href='#'>
              <div><CardSlider cards={[{ title: 'Masskara Festival', description: 'Description for this event 6', image: '/images/festival_masskara.jpg' },]}/></div></a>
            </SwiperSlide>

            <SwiperSlide><a href='#'>
              <div><CardSlider cards={[{ title: 'Higantes Festival', description: 'Description for this event 7', image: '/images/festival_higantes.jpg' },]}/></div></a>
            </SwiperSlide>

          </Swiper>
        </div>
      </div>

      {/* Weddings Cards */}
      <div className="flex-1 flex bg-customColor_black h-custom-60 items-center justify-center">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className='p-4'>
            <h1 className="text-white text-4xl">Weddings</h1>
          </div>
          <Swiper 
          slidesPerView={3}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
          >
            <SwiperSlide><a href='#'>
              <div className='h-custom-45'><CardSlider cards={[{ title: 'Mr. & Mrs. Malik Wedding', description: 'Description for this event 1', image: '/images/wedding_1.jpg' },]}/></div></a>
            </SwiperSlide>

            <SwiperSlide><a href='#'>
              <div><CardSlider cards={[{ title: 'Mr. & Mrs. Lim Wedding', description: 'Description for this event 2', image: '/images/wedding_2.jpg' },]}/></div></a>
            </SwiperSlide>

            <SwiperSlide><a href='#'>
              <div><CardSlider cards={[{ title: 'Mr. & Mrs. Ricalde Wedding', description: 'Description for this event 3', image: '/images/wedding_3.jpg' },]}/></div></a>
            </SwiperSlide>

            <SwiperSlide><a href='#'>
              <div><CardSlider cards={[{ title: 'Garcia"s Wedding', description: 'Description for this event 4', image: '/images/wedding_1.jpg' },]}/></div></a>
            </SwiperSlide>
            
            <SwiperSlide><a href='#'>
              <div><CardSlider cards={[{ title: 'Reyes" Wedding', description: 'Description for this event 5', image: '/images/wedding_2.jpg' },]}/></div></a>
            </SwiperSlide>

            <SwiperSlide><a href='#'>
              <div><CardSlider cards={[{ title: 'Mendoza"s Wedding', description: 'Description for this event 6', image: '/images/wedding_3.jpg' },]}/></div></a>
            </SwiperSlide>

            <SwiperSlide><a href='#'>
              <div><CardSlider cards={[{ title: 'Myoi"s Wedding', description: 'Description for this event 7', image: '/images/wedding_1.jpg' },]}/></div></a>
            </SwiperSlide>

          </Swiper>
        </div>
      </div>

      {/* Birthdays Cards */}
      <div className="flex-1 flex bg-customColor_black h-custom-60 items-center justify-center">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className='p-4'>
            <h1 className="text-white text-4xl">Birthdays</h1>
          </div>
          <Swiper 
          slidesPerView={3}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
          >
            <SwiperSlide><a href='#'>
              <div className='h-custom-45'><CardSlider cards={[{ title: 'Maria"s Birthday', description: 'Description for this event 1', image: '/images/birthday_1.jpg' },]}/></div></a>
            </SwiperSlide>

            <SwiperSlide><a href='#'>
              <div><CardSlider cards={[{ title: 'Mikha"s Birthday', description: 'Description for this event 2', image: '/images/birthday_2.jpg' },]}/></div></a>
            </SwiperSlide>

            <SwiperSlide><a href='#'>
              <div><CardSlider cards={[{ title: 'Alain"s Birthday', description: 'Description for this event 3', image: '/images/birthday_3.jpg' },]}/></div></a>
            </SwiperSlide>

            <SwiperSlide><a href='#'>
              <div><CardSlider cards={[{ title: 'Jose"s Birthday', description: 'Description for this event 4', image: '/images/birthday_1.jpg' },]}/></div></a>
            </SwiperSlide>
            
            <SwiperSlide><a href='#'>
              <div><CardSlider cards={[{ title: 'Mayumi"s Birthday', description: 'Description for this event 5', image: '/images/birthday_2.jpg' },]}/></div></a>
            </SwiperSlide>

            <SwiperSlide><a href='#'>
              <div><CardSlider cards={[{ title: 'Leon"s Birthday', description: 'Description for this event 6', image: '/images/birthday_3.jpg' },]}/></div></a>
            </SwiperSlide>

            <SwiperSlide><a href='#'>
              <div><CardSlider cards={[{ title: 'Jhoanna"s Birthday', description: 'Description for this event 7', image: '/images/birthday_1.jpg' },]}/></div></a>
            </SwiperSlide>

          </Swiper>
        </div>
      </div>

      {/* Concerts Cards */}
      <div className="flex-1 flex bg-customColor_black h-custom-60 items-center justify-center">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className='p-4'>
            <h1 className="text-white text-4xl">Concerts</h1>
          </div>
          <Swiper 
          slidesPerView={3}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
          >
            <SwiperSlide><a href='#'>
              <div className='h-custom-45'><CardSlider cards={[{ title: 'Ben & Ben', description: 'Description for this event 1', image: '/images/concert_b&b.jpg' },]}/></div></a>
            </SwiperSlide>

            <SwiperSlide><a href='#'>
              <div><CardSlider cards={[{ title: 'Taylor Swift', description: 'Description for this event 2', image: '/images/concert_taylor.jpg' },]}/></div></a>
            </SwiperSlide>

            <SwiperSlide><a href='#'>
              <div><CardSlider cards={[{ title: 'Twice', description: 'Description for this event 3', image: '/images/concert_twice.png' },]}/></div></a>
            </SwiperSlide>

            <SwiperSlide><a href='#'>
              <div><CardSlider cards={[{ title: 'Silent Sanctuary', description: 'Description for this event 4', image: '/images/concert_ss.jpg' },]}/></div></a>
            </SwiperSlide>
            
            <SwiperSlide><a href='#'>
              <div><CardSlider cards={[{ title: 'Cup of Joe', description: 'Description for this event 5', image: '/images/concert_1.jpeg' },]}/></div></a>
            </SwiperSlide>

            <SwiperSlide><a href='#'>
              <div><CardSlider cards={[{ title: 'EraserHeads', description: 'Description for this event 6', image: '/images/concert_2.jpg' },]}/></div></a>
            </SwiperSlide>

            <SwiperSlide><a href='#'>
              <div><CardSlider cards={[{ title: 'BINI', description: 'Description for this event 7', image: '/images/concert_bini.jpg' },]}/></div></a>
            </SwiperSlide>

          </Swiper>
        </div>
      </div>

      {/* Footer Top */}
      <footer className="bg-customColor_black text-customColor_white py-8">
                <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0 md:w-1/2">
                        <a href="#" className="flex items-center">
                            <img src="/images/logo_label.png" className="h-8 me-3" alt="EventWise Logo" />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
                        </a>
                        <h3 className="text-white text-base mb-4 mt-3">Our Mission</h3>
                        <p className="text-gray-500">
                        Our mission is to deliver the best events and services to our customers. We aim to exceed expectations and continuously innovate to meet the needs of our diverse clientele.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-base font-semibold text-customColor_white uppercase dark:text-white">EVENTWISE</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Grants</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">EventWise Cop</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Media Kit</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Careers</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Disclaimer</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-base font-semibold text-customColor_white uppercase dark:text-white">GET CONNECTED</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline ">Ecosystem</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Blog</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Newsletter</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium pl-20">
                            <a href="#" className="text-gray-500 hover:text-customColor_yellow dark:hover:text-white">
                                EN
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                                </svg>
                                <span className="sr-only">EN</span>
                            </a>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Footer Line */}
                <hr className="my-6 border-gray-700 sm:mx-auto dark:border-gray-700 lg:my-8"/>

                {/* Footer Bottom */}
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-base text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="#" className="hover:underline">EventWise Foundation™</a>. All Rights Reserved.
                    </span>
                    <div className="flex mt-4 sm:justify-center sm:mt-0">
                        <a href="#" className="text-gray-500 hover:text-customColor_yellow dark:hover:text-white">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                                <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
                            </svg>
                            <span className="sr-only">Facebook page</span>
                        </a>
                        <a href="#" className="text-gray-500 hover:text-customColor_yellow dark:hover:text-white ms-5">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                                <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"/>
                            </svg>
                            <span className="sr-only">Discord community</span>
                        </a>
                        <a href="#" className="text-gray-500 hover:text-customColor_yellow dark:hover:text-white ms-5">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                            <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd"/>
                        </svg>
                            <span className="sr-only">Twitter page</span>
                        </a>
                        <a href="#" className="text-gray-500 hover:text-customColor_yellow dark:hover:text-white ms-5">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
                            </svg>
                            <span className="sr-only">GitHub account</span>
                        </a>
                        <a href="#" className="text-gray-500 hover:text-customColor_yellow dark:hover:text-white ms-5">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z" clip-rule="evenodd"/>
                        </svg>
                            <span className="sr-only">Dribbble account</span>
                        </a>
                    </div>
                </div>
            </div>
            </footer>
    </div>
  );
}

export default HomePage;

