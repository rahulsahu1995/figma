import React, { useState } from 'react';
import { MdLocationOn } from 'react-icons/md';
import { FaCheck, FaRegUserCircle } from 'react-icons/fa';
import { IoIosCloseCircle } from 'react-icons/io';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { IconContext } from 'react-icons/lib';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);
  const [showEployee, setShowEmployee] = useState(false);
  const [showModal, setShowModal] = React.useState(false);

  const handleSubmit = (e) => {
    setShowModal(true);
    e?.preventDefault();
  };

  return (
    <div className='flex flex-row justify-between'>
      <div className='w-2/6'>
        <img
          src={process.env.PUBLIC_URL + '/images/candit.png'}
          className='w-32 h-32 mt-10 ml-20'
          alt='logo'
        />
      </div>
      <div className='flex items-center justify-center px-12 py-8 w-8/12'>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className='font-semibold text-left font-sans text-2xl'>
            Register
          </div>
          <div className='text-left text-sm'>Please sign up to continue</div>
          <div className='flex items-center justify-center border-b text-[#4A535C80] pb-1 mt-4 w-72'>
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
                  !showEployee ? 'text-[#8C172B]' : 'text-[#808080]'
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
                  showEployee ? 'text-[#8C172B]' : 'text-[#808080]'
                }`}
              >
                Employer
              </span>
            </div>
          </div>
          <div className='flex flex-row items-center justify-center mt-2 gap-14'>
            <div className='flex flex-col'>
              <div className='mb-2 mt-4 w-64'>
                <label
                  htmlFor='Company Name'
                  className='block flex text-sm font-semibold text-[#000000]'
                >
                  Company Name
                  <span className='text-[#8C172B] ml-1'>*</span>
                </label>
                <div className='flex items-center border-b text-[#4A535C80] pt-2'>
                  <input
                    required
                    className='w-full text-sm text-black mr-3 pt-1 leading-tight placeholder:text-sm border-transparent focus:border-transparent focus:ring-0 outline-none'
                    type='text'
                    placeholder='Enter company name'
                  />
                </div>
              </div>
              <div className='mb-2 mt-4 w-64'>
                <label
                  htmlFor='Location'
                  className='block flex text-sm font-semibold text-[#000000]'
                >
                  Location
                  <span className='text-[#8C172B] ml-1'>*</span>
                </label>
                <div className='flex items-center border-b text-[#4A535C80] pt-2'>
                  <input
                    required
                    className='w-full text-sm text-black mr-3 pt-1 leading-tight placeholder:text-sm border-transparent focus:border-transparent focus:ring-0 outline-none'
                    type='text'
                    placeholder='Location'
                  />
                  <div className='text-[#8A1538] text-2xl'>
                    <MdLocationOn />
                  </div>
                </div>
              </div>
              <div className='mb-2 mt-4 w-64'>
                <label
                  htmlFor='url'
                  className='block flex text-sm font-semibold text-[#000000]'
                >
                  Company Website
                  <span className='text-[#8C172B] ml-1'>*</span>
                </label>
                <div className='flex items-center border-b text-[#4A535C80] pt-2'>
                  <input
                    required
                    className='w-full text-sm text-black mr-3 pt-1 leading-tight placeholder:text-sm border-transparent focus:border-transparent focus:ring-0 outline-none'
                    type='url'
                    placeholder='Enter company website url'
                  />
                </div>
              </div>
              <div className='mb-2 mt-4 w-64'>
                <label
                  htmlFor='password'
                  className='block flex text-sm font-semibold text-[#000000]'
                >
                  Set Password
                  <span className='text-[#8C172B] ml-1'>*</span>
                </label>
                <div className='flex items-center border-b text-[#4A535C80] pt-2'>
                  <input
                    required
                    type={showPassword ? 'text' : 'password'}
                    className='w-full text-sm text-black mr-3 pt-1 leading-tight placeholder:text-sm border-transparent focus:border-transparent focus:ring-0 outline-none'
                    placeholder='* * * * * * * *'
                  />
                  {showPassword ? (
                    <FiEye onClick={() => setShowPassword(!showPassword)} />
                  ) : (
                    <FiEyeOff onClick={() => setShowPassword(!showPassword)} />
                  )}
                </div>
              </div>
            </div>
            <div className='flex flex-col'>
              <div className='mb-2 mt-4 w-64'>
                <label
                  htmlFor='number'
                  className='block flex text-sm font-semibold text-[#000000]'
                >
                  Contact Number
                  <span className='text-[#8C172B] ml-1'>*</span>
                </label>
                <div className='flex items-center border-b text-[#4A535C80] pt-2'>
                  <input
                    required
                    className='w-full text-sm text-black mr-3 pt-1 leading-tight placeholder:text-sm border-transparent focus:border-transparent focus:ring-0 outline-none'
                    type='tel'
                    pattern='[0-9]{10}'
                    placeholder='+91 1234567890'
                  />
                </div>
              </div>
              <div className='mb-2 mt-4 w-64'>
                <label
                  htmlFor='designation'
                  className='block flex text-sm font-semibold text-[#000000]'
                >
                  Designation
                  <span className='text-[#8C172B] ml-1'>*</span>
                </label>
                <div className='flex items-center border-b text-[#4A535C80] pt-2'>
                  <select
                    required
                    className='w-full text-sm text-black mr-3 pt-1 leading-tight placeholder:text-sm border-transparent focus:border-transparent focus:ring-0 outline-none'
                  >
                    <option value='' className='text-[#4A535C80]'>
                      Enter your designation
                    </option>
                    <option value='US'>United States</option>
                    <option value='CA'>Canada</option>
                    <option value='FR'>France</option>
                    <option value='DE'>Germany</option>
                  </select>
                </div>
              </div>
              <div className='mb-2 mt-4 w-64'>
                <label
                  htmlFor='email'
                  className='block flex text-sm font-semibold text-[#000000]'
                >
                  Company Email ID
                  <span className='text-[#8C172B] ml-1'>*</span>
                </label>
                <div className='flex items-center border-b text-[#4A535C80] pt-2'>
                  <input
                    required
                    className='w-full text-sm text-black mr-3 pt-1 leading-tight placeholder:text-sm border-transparent focus:border-transparent focus:ring-0 outline-none'
                    type='email'
                    placeholder='Enter your company email ID'
                  />
                </div>
              </div>
              <div className='mb-2 mt-4 w-64'>
                <label
                  htmlFor='password'
                  className='block flex text-sm font-semibold text-[#000000]'
                >
                  Confirm Password
                  <span className='text-[#8C172B] ml-1'>*</span>
                </label>
                <div className='flex items-center border-b text-[#4A535C80] pt-2'>
                  <input
                    required
                    type={confirmPassword ? 'text' : 'password'}
                    className='w-full text-sm text-black mr-3 pt-1 leading-tight placeholder:text-sm border-transparent focus:border-transparent focus:ring-0 outline-none'
                    placeholder='* * * * * * * *'
                  />
                  {confirmPassword ? (
                    <FiEye
                      onClick={() => setConfirmPassword(!confirmPassword)}
                    />
                  ) : (
                    <FiEyeOff
                      onClick={() => setConfirmPassword(!confirmPassword)}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className='flex items-center justify-center mt-4'>
            <input
              type='checkbox'
              className='w-4 h-4 ml-2 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800'
              required
            />
            <label
              htmlFor='remember'
              className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 flex'
            >
              I agree with
              <p className='text-[#8A1538] ml-2 font-medium'>CB T & C*</p>
              <p className='ml-2'>and</p>
              <p className='text-[#8A1538] ml-2 font-medium'>Privacy Policy </p>
            </label>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <button
              className='w-80 h-10 mt-4 bg-[#8A1538] text-white active:bg-pink-600 text-sm rounded-lg tracking-wider'
              type='submit'
            >
              Register
            </button>
            <button
              type='button'
              className='w-80 h-10 mt-3 text-black border border-[#8A1538] font-medium rounded-lg text-xs text-center'
              onClick={() => navigate('/')}
            >
              Already have an account ?
              <span className='ml-2 text-sm text-[#8A1538] font-bold text-xs'>
                Login
              </span>
            </button>
          </div>
        </form>
      </div>
      {showModal && (
        <div>
          <div className='flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
            <div className='relative w-48 h-48 my-6 mx-auto'>
              <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none bg-[#f8eff0]'>
                <div class='mt-3 text-right text-[#8A1538] fill-[#8A1538]'>
                  <button
                    class='px-4'
                    onClick={() => {
                      setShowModal(false);
                      navigate('/dashboard');
                    }}
                  >
                    <IoIosCloseCircle />
                  </button>
                  <div class='mx-auto flex items-center justify-center h-8 w-8 rounded-full bg-white'>
                    <IconContext.Provider
                      value={{
                        color: '#4ECB71',
                      }}
                    >
                      <FaCheck />
                    </IconContext.Provider>
                  </div>
                </div>
                <p
                  className='my-4 pb-8 text-black text-xs font-medium mx-4 w-auto text-center'
                  dangerouslySetInnerHTML={{
                    __html: 'Your registration<br/>has been successfully done',
                  }}
                ></p>
              </div>
            </div>
          </div>
          <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
        </div>
      )}
    </div>
  );
};

export default Registration;
