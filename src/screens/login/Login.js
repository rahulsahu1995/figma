import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaRegUserCircle } from 'react-icons/fa';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { IconContext } from 'react-icons/lib';

const Login = () => {
  const navigate = useNavigate();
  const [showEployee, setShowEmployee] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = () => {
    navigate('/dashboard');
  };

  return (
    <div className='flex flex-row'>
      <div className='grid grid-cols-3 gap-4'>
        <div>
          <img
            src={process.env.PUBLIC_URL + '/images/candit.png'}
            className='w-32 h-32 mt-10 ml-20'
          />
        </div>
        <div className='justify-center min-h-screen overflow-hidden'>
          <div className='w-96 p-6 mt-6 ml-8 m-auto bg-white shadow-xl shadow-md'>
            <form onSubmit={() => handleSubmit()}>
              <div className='font-semibold text-center font-sans text-2xl'>
                LOGIN
              </div>
              <div className='text-center text-sm'>
                Please Login to continue
              </div>
              <div className='flex items-center border-b text-[#4A535C80] mt-12'>
                <div
                  className='flex flex-start items-end cursor-pointer'
                  onClick={() => setShowEmployee(false)}
                >
                  <IconContext.Provider
                    value={{
                      color: !showEployee ? '#8C172B' : '#808080',
                    }}
                  >
                    <div>
                      <FaRegUserCircle className='w-7 h-7' />
                    </div>
                  </IconContext.Provider>
                  <span
                    className={`ml-2 text-sm ${
                      !showEployee ? 'text-[#8C172B] border-b-2 border-[#8C172B]' : 'text-[#808080]'
                    }`}
                  >
                    Candidate
                  </span>
                </div>
                <div
                  className='flex flex-start items-end ml-20 cursor-pointer'
                  onClick={() => setShowEmployee(true)}
                >
                  <IconContext.Provider
                    value={{
                      color: showEployee ? '#8C172B' : '#808080',
                    }}
                  >
                    <div>
                      <FaRegUserCircle className='w-7 h-7' />
                    </div>
                  </IconContext.Provider>
                  <span
                    className={`ml-2 text-sm ${
                      showEployee ? 'text-[#8C172B] border-b-2 border-[#8C172B]' : 'text-[#808080]'
                    }`}
                  >
                    Employer
                  </span>
                </div>
              </div>
              <div className='mb-2 mt-8'>
                <label
                  htmlFor='email'
                  className='block text-sm flex font-semibold'
                >
                  {!showEployee ? 'Email ID' : 'Company Email ID'}
                  <span className='text-[#8C172B] ml-1'>*</span>
                </label>
                <div className='flex items-center border-b text-[#4A535C80] pt-2'>
                  <input
                    required
                    className='w-full text-sm text-black mr-3 pt-1 leading-tight placeholder:text-sm border-transparent focus:border-transparent focus:ring-0 outline-none'
                    type='email'
                    placeholder='Please enter your company email id.'
                    aria-label='Email'
                  />
                </div>
              </div>
              <div className='mb-2 mt-8'>
                <label
                  htmlFor='password'
                  className='block text-sm flex font-semibold'
                >
                  Password
                  <span className='text-[#8C172B] ml-1'>*</span>
                </label>
                <div className='flex items-center border-b text-[#4A535C80] pt-2'>
                  <input
                    required
                    className='w-full text-sm text-black mr-3 pt-1 leading-tight placeholder:text-sm border-transparent focus:border-transparent focus:ring-0 outline-none'
                    type={showPassword ? 'text' : 'password'}
                    placeholder='Please enter your password'
                    aria-label='Password'
                  />
                  {showPassword ? (
                    <FiEye onClick={() => setShowPassword(!showPassword)} />
                  ) : (
                    <FiEyeOff onClick={() => setShowPassword(!showPassword)} />
                  )}
                </div>
              </div>
              <div className='flex flex-row-reverse mt-2'>
                <a href='/#' className='text-xs text-[#8A1538] '>
                  Forget Password?
                </a>
              </div>
              <div className='mt-6'>
                <button className='w-full flex justify-center px-4 py-2 tracking-wide text-[#FFFFFF] bg-[#8A1538] rounded-md'>
                  Login
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    className='w-6 h-6 ml-2 mt-0.5'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3'
                    />
                  </svg>
                </button>
              </div>
            </form>
            <p className='mt-4 text-xs text-center text-gray-700'>
              <Link to='/register'>
                <button className='w-full px-4 py-3 border border-1 border-[#8A1538] font-semibold tracking-wide text-black bg-white rounded-md'>
                  Don't have an account ?
                  <span className='text-[#8A1538] font-bold ml-1'>
                    Register now
                  </span>
                </button>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
