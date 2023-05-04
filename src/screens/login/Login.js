import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiEye, FiEyeOff } from 'react-icons/fi';

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
          <div className='w-96 p-6 mt-6 ml-8 m-auto bg-white shadow-xl shadow-md lg:max-w-xl'>
            <form onSubmit={() => handleSubmit()}>
              <div className='font-semibold text-center font-sans text-2xl'>
                LOGIN
              </div>
              <div className='text-center'>Please Login To Continue</div>
              <div className='flex items-center  border-b border-grey-500 py-2 mt-12'>
                <div
                  className='flex flex-start items-end cursor-pointer'
                  onClick={() => setShowEmployee(false)}
                >
                  <img
                    src={process.env.PUBLIC_URL + '/images/user.png'}
                    className='w-7 h-7'
                  />
                  <span
                    className={`ml-2 text-sm ${
                      !showEployee ? 'text-red-600' : 'text-gray-600'
                    }`}
                  >
                    Candidate
                  </span>
                </div>
                <div
                  className='flex flex-start items-end ml-20 cursor-pointer'
                  onClick={() => setShowEmployee(true)}
                >
                  <img
                    src={process.env.PUBLIC_URL + '/images/user.png'}
                    className='w-7 h-7'
                  />
                  <span
                    className={`ml-2 text-sm ${
                      showEployee ? 'text-red-600' : 'text-gray-600'
                    }`}
                  >
                    Employer
                  </span>
                </div>
              </div>
              <div className='mb-2 mt-8'>
                <label
                  htmlFor='email'
                  className='block text-sm flex font-semibold text-gray-800'
                >
                  Company Email ID
                  <p className='mt-1.5 ml-1'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='#be185d'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='w-2 h-2'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z'
                      />
                    </svg>
                  </p>
                </label>
                <div className='flex items-center border-b border-grey-500 py-2'>
                  <input
                    required
                    className='appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none'
                    type='email'
                    placeholder='Please enter your company emial id'
                    aria-label='Email'
                  />
                </div>
              </div>
              <h1 className='flex'>
                Password Revealer
                <p className='mt-2.5 ml-1'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='#be185d'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-2 h-2'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z'
                    />
                  </svg>
                </p>
              </h1>
              <div className='input'>
                <div className='flex items-center border-b border-grey-500 py-2'>
                  <input
                    required
                    type={showPassword ? 'text' : 'password'}
                    className='appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none'
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
                <a href='#' className='text-xs text-pink-700 hover:underline'>
                  Forget Password?
                </a>
              </div>
              <div className='mt-6'>
                <button className='w-full flex justify-center px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-pink-700 rounded-md hover:bg--600 focus:outline-none focus:bg-purple-600'>
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
            <p className='mt-4 text-xs  text-center text-gray-700'>
              <Link to='/register'>
                <button className='w-full px-4 py-2 border mb-16 border-2 border-pink-700 font-semibold tracking-wide text-black transition-colors duration-200 transform bg-white rounded-md'>
                  Don't have an account ?
                  <a className='font-medium text-pink-800 font-bold hover:underline ml-1'>
                    Register now
                  </a>
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
