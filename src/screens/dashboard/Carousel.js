import React, { useState } from 'react';
import { GoVerified } from 'react-icons/go';
import { IconContext } from 'react-icons/lib';
import {
  AiOutlineInteraction,
  AiOutlineLeftCircle,
  AiOutlineRightCircle,
} from 'react-icons/ai';
import { FaUserCircle } from 'react-icons/fa';
import Slider from 'react-slick';
import '../../index.css';

export const Carousel = () => {
  const [showEployee, setShowEmployee] = useState(false);
  const slides = [1, 2, 3, 4, 5];

  const NextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div className={`${className} mr-5`} onClick={onClick}>
        <AiOutlineRightCircle color='#8A1538' className='h-10 w-10' />
      </div>
    );
  };

  const PrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div className={`${className} mr-5`} onClick={onClick}>
        <AiOutlineLeftCircle color='#8A1538' className='h-10 w-10' />
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div>
      <div className='text-center font-semibold text-4xl mr-20 py-5 pb-10'>
        Applications
      </div>
      <div className='flex flex-row justify-between items-center mx-10'>
        <img
          src={process.env.PUBLIC_URL + '/images/candit.png'}
          className='h-64 w-64 mb-[40px]'
          alt='logo'
        />
        <div className='flex flex-row justify-end'>
          <div
            style={{
              width: '900px',
            }}
          >
            <div className='mx-10'>
              <Slider {...settings}>
                {slides?.map((value) => {
                  return (
                    <div className='ml-2'>
                      <div className='max-w-sm rounded overflow-hidden shadow-lg mx-2'>
                        <div className='flex flex-row mx-4 my-4'>
                          <div className='relative'>
                            <FaUserCircle className='w-14 h-14' />
                            <GoVerified className='fill-[#04953E] absolute top-10 right-0' />
                          </div>
                          <div className='flex flex-col ml-4'>
                            <span className='text-sm tracking-wide font-semibold text-[#8A1538]'>
                              Avinash Kumar Jha
                            </span>
                            <span className='text-sm tracking-wide font-medium'>
                              PHP Developer
                            </span>
                            <span className='text-sm tracking-wide font-medium text-[#04953E]'>
                              Open to work
                            </span>
                          </div>
                        </div>
                        <div className='flex justify-end items-center mx-4 mt-2'>
                          <span className='text-xs tracking-wide font-medium'>
                            Skills Matched
                          </span>
                          <span className='text-base tracking-wide text-[#04953E] font-medium mx-2'>
                            75%
                          </span>
                        </div>
                        <div className='mx-4'>
                          <input
                            id='disabled-range'
                            type='range'
                            value='75'
                            class='w-full h-0.5 accent-[#04953E] bg-[#04953E] rounded-lg appearance-none cursor-pointer'
                            disable
                          />
                        </div>
                        <div className='flex flex-row justify-between mx-4 mt-10 mb-20'>
                          <div className='flex flex-col'>
                            <span>
                              <p
                                className='text-base tracking-wide'
                                style={{ fontSize: '11px' }}
                              >
                                Relevant Experience:
                              </p>
                              <p className='text-sm tracking-wide font-semibold'>
                                3 years
                              </p>
                            </span>
                            <span className='mt-4'>
                              <p
                                className='text-base tracking-wide'
                                style={{ fontSize: '11px' }}
                              >
                                Current CTC:
                              </p>
                              <p className='text-sm tracking-wide font-semibold'>
                                ₹ 60,000
                              </p>
                            </span>
                          </div>
                          <div className='flex flex-col'>
                            <span>
                              <p
                                className='text-base tracking-wide'
                                style={{ fontSize: '11px' }}
                              >
                                Location :
                              </p>
                              <p className='text-sm tracking-wide font-semibold'>
                                Pune
                              </p>
                            </span>
                            <span className='mt-4'>
                              <p
                                className='text-base tracking-wide'
                                style={{ fontSize: '11px' }}
                              >
                                Notice period :
                              </p>
                              <p className='text-sm tracking-wide font-semibold'>
                                30 Days
                              </p>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Slider>
            </div>
            <div className='px-8 mb-8'>
              <div className='flex justify-center my-8 text-[#8A1538]'>
                <button
                  type='button'
                  className='border-2 border-[#8A1538] rounded px-6 py-1 font-bold'
                >
                  View All
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='my-10 pt-12 flex items-center justify-center border-b border-gray-400 text-[#4A535C80] w-72 mx-12'>
        <div
          className='flex cursor-pointer'
          onClick={() => setShowEmployee(false)}
        >
          <IconContext.Provider
            value={{
              color: !showEployee ? '#8C172B' : '#808080',
            }}
          ></IconContext.Provider>
          <span
            className={` font-bold text-sm ${
              !showEployee
                ? 'text-[#8C172B] border-b-4 border-[#8C172B]'
                : 'text-[#808080]'
            }`}
          >
            Favorite candidates
          </span>
        </div>
        <div
          className='flex flex-start items-end  cursor-pointer'
          onClick={() => setShowEmployee(true)}
        >
          <IconContext.Provider
            value={{
              color: showEployee ? '#8C172B' : '#808080',
            }}
          ></IconContext.Provider>
          <span
            className={`ml-5 font-bold text-sm ${
              showEployee
                ? 'text-[#8C172B] border-b-4 border-[#8C172B]'
                : 'text-[#808080]'
            }`}
          >
            Shortlisted candidates
          </span>
        </div>
      </div>
      <div className='text-[#000000] text-base font-sm my-10 mx-12 pb-20'>
        <h1>Lorem Ipsum is simply dummy text of</h1>
        <h1>the printing and typesetting industry.</h1>
      </div>
      <div className='mx-10'>
        <Slider {...settings}>
          {slides?.map((value) => {
            return (
              <div className='ml-3'>
                <div
                  className='flex justify-end items-center text-xs underline text-[#8A1538]'
                  style={{ marginRight: '70px' }}
                >
                  <AiOutlineInteraction className='fill-[#8A1538] mr-1' /> Set
                  Interview?
                </div>
                <div className='max-w-sm rounded overflow-hidden shadow-lg mx-2'>
                  <div className='flex flex-row mx-4 my-4'>
                    <div className='relative'>
                      <FaUserCircle className='w-14 h-14' />
                      <GoVerified className='fill-[#04953E] absolute top-10 right-0' />
                    </div>
                    <div className='flex flex-col ml-4'>
                      <span className='text-sm tracking-wide font-semibold text-[#8A1538]'>
                        CB 6578
                      </span>
                      <span className='text-sm tracking-wide font-medium'>
                        PHP Developer
                      </span>
                      <span className='text-sm tracking-wide font-medium text-[#04953E]'>
                        Open to work
                      </span>
                    </div>
                  </div>
                  <div className='flex justify-end items-center mx-4 mt-2'>
                    <span className='text-xs tracking-wide font-medium'>
                      Skills Matched
                    </span>
                    <span className='text-base tracking-wide text-[#04953E] font-medium mx-1'>
                      75%
                    </span>
                  </div>
                  <div className='mx-4'>
                    <input
                      id='disabled-range'
                      type='range'
                      value='75'
                      class='w-full h-0.5 accent-[#04953E] bg-[#04953E] rounded-lg appearance-none cursor-pointer'
                      disable
                    />
                  </div>
                  <div className='flex flex-row justify-between mx-4 mt-10 mb-20'>
                    <div className='flex flex-col'>
                      <span>
                        <p
                          className='text-base tracking-wide'
                          style={{ fontSize: '11px' }}
                        >
                          Experience:
                        </p>
                        <p className='text-sm tracking-wide font-semibold'>
                          3 years
                        </p>
                      </span>
                      <span className='mt-4'>
                        <p
                          className='text-base tracking-wide'
                          style={{ fontSize: '11px' }}
                        >
                          Current CTC:
                        </p>
                        <p className='text-sm tracking-wide font-semibold'>
                          ₹ 60,000
                        </p>
                      </span>
                    </div>
                    <div className='flex flex-col'>
                      <span>
                        <p
                          className='text-base tracking-wide'
                          style={{ fontSize: '11px' }}
                        >
                          Location :
                        </p>
                        <p className='text-sm tracking-wide font-semibold'>
                          Pune
                        </p>
                      </span>
                      <span className='mt-4'>
                        <p
                          className='text-base tracking-wide'
                          style={{ fontSize: '11px' }}
                        >
                          Notice period :
                        </p>
                        <p className='text-sm tracking-wide font-semibold'>
                          30 Days
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
      <div className='flex justify-center my-8 text-[#8A1538]'>
        <button
          type='button'
          className='border-2 border-[#8A1538] rounded px-6 py-1 font-bold'
        >
          View All
        </button>
      </div>
    </div>
  );
};
