import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiUpload } from 'react-icons/fi';
import { RiUserHeartLine, RiUserFollowLine } from 'react-icons/ri';
import { AiOutlineDollar } from 'react-icons/ai';
import { BsFileEarmarkArrowUpFill } from 'react-icons/bs';
import Footer from '../footer/footer';
import { FiChevronRight } from 'react-icons/fi';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { Carousel } from './Carousel';
import '../../index.css';
import { AiOutlineFileText } from 'react-icons/ai';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/search');
  };
  const [setSelected] = useState('');

  const handleChange = (event) => {
    setSelected(event.target.value);
  };

  return (
    <>
      <nav className='border-gray-200 bg-gradient-to-r from-white to-[#8A1538] dark:bg-gray-800 dark:border-gray-700'>
        <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4'>
          <a href='/#' className='flex items-center'>
            <img
              src={process.env.PUBLIC_URL + '/images/candit.png'}
              className='h-8 mr-3'
              alt='logo'
            />
            <span className='flex text-base tracking-wide font-semibold uppercase whitespace-nowrap'>
              Candidates
              <span className='text-[#8A1538] ml-2'>Bazaar</span>
            </span>
          </a>
          <div className='flex flex-row justify-start items-center'>
            <RiUserFollowLine className='w-5 h-5' color='#f1f5f9' />
            <span className='text-sm tracking-wide text-white ml-2 mr-8'>
              Browse Talent
            </span>
            <AiOutlineDollar className='w-5 h-5' color='#f1f5f9' />
            <span className='text-sm tracking-wide text-white ml-2 mr-8'>
              Pricing
            </span>
            <button className='flex flex-row items-center btn bg-white text-[#8A1538] font-sm py-3 px-4 rounded mr-8'>
              <FiUpload className='w-5 h-5' />
              <span className='text-sm tracking-wide ml-2 font-semibold'>
                Post A Job
              </span>
            </button>
            <IoMdNotificationsOutline
              className='m-auto mr-1 text-2xl mr-8'
              color='white'
            />
            <img
              src={process.env.PUBLIC_URL + '/images/menu-logo.png'}
              className='h-9 w-9 p-1 bg-gray-100 rounded-full'
              alt='logo'
            />
          </div>
        </div>
      </nav>
      {/* Form-----!!!! */}
      <div>
        <div className='flex flex-col justify-center items-center p-8'>
          <div className='text-center font-bold text-3xl font-sans-Roboto'>
            Hey!
          </div>
          <p className='text-center text-lg mt-4'>
            Techno Wiz Solutions | CBE120 Welcome to Candidates Bazaar
          </p>
        </div>
        <div className='px-10 py-6 mx-auto w-8/12 border border-gray-200'>
          <form onSubmit={() => handleSubmit()} className=''>
            <div className='flex flex-row justify-between items-center'>
              <div className='flex flex-col'>
                <div>
                  <label
                    htmlFor='Enter Job Title'
                    className='block flex text-sm font-medium'
                  >
                    Enter Job Title
                    <span className='text-[#8C172B] ml-1'>*</span>
                  </label>
                  <div class='border-b border-grey-dark w-full mt-2'>
                    <input
                      required
                      className='text-sm text-black pt-1 leading-tight placeholder:text-sm 
        placeholder:font-medium border-transparent focus:border-transparent focus:ring-0 outline-none border-b'
                      type='text'
                      placeholder='E.g. Web developer'
                    />
                  </div>
                  <div className='flex flex-row items-center justify-start mt-8'>
                    <div className='mr-8'>
                      <label
                        htmlFor='Salary Range'
                        className='block flex text-sm font-medium'
                      >
                        Salary Range
                        <span className='text-[#8C172B] ml-1'>*</span>
                      </label>
                      <div class='border-b border-grey-dark mt-2'>
                        <select
                          required
                          className='w-52 text-sm text-black pt-1 leading-tight placeholder:text-sm 
        placeholder:font-medium border-transparent focus:border-transparent focus:ring-0 outline-none border-b'
                        >
                          <option
                            value=''
                            selected
                            className='text-gray-400 font-medium'
                          >
                            Selelct salary range
                          </option>
                          <option value='US' className='text-black font-medium'>
                            0-10 LPA
                          </option>
                          <option value='WI' className='text-black font-medium'>
                            10-20 LPA
                          </option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor='Relevant Experience'
                        className='block flex text-sm font-medium'
                      >
                        Relevant Experience
                        <span className='text-[#8C172B] ml-1'>*</span>
                      </label>
                      <div class='border-b border-grey-dark mt-2'>
                        <select
                          required
                          className='w-52 text-sm text-black pt-1 leading-tight placeholder:text-sm 
        placeholder:font-medium border-transparent focus:border-transparent focus:ring-0 outline-none border-b'
                        >
                          <option value='' className='text-[#4A535C80]'>
                            0 - 3 Yrs
                          </option>
                          <option value='US'>0-3 Yrs</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className='flex flex-col'>
                  <div>
                    <label
                      htmlFor='Select additional Skill(s)'
                      className='block flex text-sm font-medium'
                    >
                      Select additional Skill(s)
                    </label>
                    <div class='border-b border-grey-dark mt-2'>
                      <select
                        required
                        className='text-sm text-black pt-1 leading-tight placeholder:text-sm 
        placeholder:font-medium border-transparent focus:border-transparent focus:ring-0 outline-none w-80'
                      >
                        <option value='' className='text-[#4A535C80]'>
                          E.g. AngularJS
                        </option>
                        <option value='US'>ReactJS</option>
                      </select>
                    </div>
                  </div>
                  <div className='mt-8 w-80'>
                    <label
                      htmlFor='Certification(s)'
                      className='block flex text-sm font-medium'
                    >
                      Certification(s)
                    </label>
                    <div className='flex items-center border-b text-[#4A535C80] pt-2'>
                      <input
                        required
                        className='w-full text-sm text-black mr-3 pt-1 leading-tight placeholder:text-sm border-transparent focus:border-transparent focus:ring-0 outline-none w-80'
                        type='text'
                        placeholder='AWS'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex justify-end pt-4'>
              <button className='bg-white text-sm text-black border-2 border-[#8A1538] font-semibold py-3 px-8 rounded-lg'>
                Search
              </button>
            </div>
          </form>
        </div>
        <div>
          <section className='text-gray-600 body-font'>
            <div className='container px-5 py-24 mx-auto'>
              <div className='flex flex-wrap -m-4 text-center'>
                <div className='p-4 md:w-1/4 sm:w-1/2 w-full'>
                  <div className='border-2 border-gray-200 px-4 py-6 rounded-lg'>
                    <h2 className='title-font flex  font-medium text-3xl text-gray-900'>
                      <div>
                        <BsFileEarmarkArrowUpFill
                          className='mx-3 text-5xl'
                          color='#8A1538'
                        />
                      </div>
                      <div className='font-bold flex flex-row mt-2'>
                        14
                        <FiChevronRight color='#8A1538' className='mt-1' />
                      </div>
                    </h2>
                    <p className='leading-relaxed font-semibold text-sm text-black mr-5'>
                      Posted Jobs
                    </p>
                  </div>
                </div>
                <div className='p-4 md:w-1/4 sm:w-1/2 w-full'>
                  <div className='border-2 border-gray-200 px-4 py-6 rounded-lg'>
                    <h2 className='title-font flex font-medium text-3xl text-gray-900'>
                      <div>
                        <AiOutlineFileText
                          className='mx-3  text-5xl'
                          color='#8A1538'
                        />
                      </div>
                      <div className='font-bold flex flex-row mt-2'>
                        145
                        <FiChevronRight color='#8A1538' className='mt-1' />
                      </div>
                    </h2>
                    <p className='leading-relaxed font-semibold text-black mr-5  text-sm '>
                      Applications
                    </p>
                  </div>
                </div>
                <div className='p-4 md:w-1/4 sm:w-1/2 w-full'>
                  <div className='border-2 border-gray-200 px-4 py-6 rounded-lg'>
                    <h2 className='title-font flex font-medium text-3xl text-gray-900'>
                      <div>
                        <RiUserHeartLine
                          className='mx-3  text-5xl'
                          color='#8A1538'
                        />
                      </div>
                      <div className='font-bold flex flex-row mt-2'>
                        34
                        <FiChevronRight color='#8A1538' className='mt-1' />
                      </div>
                    </h2>
                    <p className='leading-relaxed font-semibold text-black ml-6  text-sm '>
                      Favorite Candidates
                    </p>
                  </div>
                </div>
                <div className='p-4 md:w-1/4 sm:w-1/2 w-full'>
                  <div className='border-2 border-gray-200 px-4 py-6 rounded-lg'>
                    <h2 className='title-font flex font-medium text-3xl text-gray-900'>
                      <div>
                        <RiUserFollowLine
                          color='#8A1538'
                          className='mx-3 text-5xl'
                        />
                      </div>
                      <div className='font-bold flex flex-row mt-2'>
                        22
                        <FiChevronRight color='#8A1538' className='my-1' />
                      </div>
                    </h2>
                    <p className='leading-relaxed font-semibold text-black text-sm ml-8'>
                      Shortlisted Candidates
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Carousel />
      <div className='mt-10'>
        <Footer />
      </div>
    </>
  );
};

export default Dashboard;
