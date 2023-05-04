import React, { useState } from 'react';
import { MdLocationOn } from 'react-icons/md';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);
  const [showEployee, setShowEmployee] = useState(false);
  const [showModal, setShowModal] = React.useState(false);

  const handleSubmit = () => {
    navigate('/dashboard');
  };

  return (
    <div className='flex flex-row justify-center'>
      <div>
        <img
          src={process.env.PUBLIC_URL + '/images/candit.png'}
          className='h-88 mr-3'
          alt='logo'
        />
      </div>
      <div className=' rounded-lg justify-center shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700'>
        <form className='space-y-6' onSubmit={() => handleSubmit()}>
          <div></div>
          <div>
            <h5 className='text-xl font-medium text-gray-900 dark:text-white font-bold'>
              Registration
            </h5>
            <p>Please signup to continue</p>
          </div>
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
          <div className='flex flex-row gap-14'>
            <div className='mb-2 mt-8'>
              <label
                htmlFor='name'
                className='block flex text-sm font-semibold text-gray-800'
              >
                Company Name
                <p className='mt-1 ml-1'>
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
                  className='appearance-none bg-transparent border-none w-full text-gray-700 leading-tight focus:outline-none'
                  type='text'
                  placeholder='Please enter your company name'
                />
              </div>
            </div>
            <div className='mb-2 mt-8'>
              <label
                htmlFor='number'
                className='block flex text-sm font-semibold text-gray-800'
              >
                Contact Number
                <p className='mt-1 ml-1'>
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
                  className='appearance-none bg-transparent border-none w-full text-gray-700  leading-tight focus:outline-none'
                  type='tel'
                  placeholder='123456789'
                />
              </div>
            </div>
          </div>
          <div className='flex flex-row gap-14 '>
            <div className='mb-2 mt-8'>
              <label
                htmlFor='Location'
                className='block flex text-sm font-semibold text-gray-800'
              >
                Location
                <p className='mt-1 ml-1'>
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
              <div className='flex items-center border-b border-grey-500 py-1'>
                <input
                  required
                  className='appearance-none bg-transparent border-none text-gray-700 '
                  type='text'
                  placeholder='Location'
                />
                <div className=' text-red-700 text-3xl'>
                  <MdLocationOn />
                </div>
              </div>
            </div>
            <div className='mb-2 mt-8'>
              <label
                htmlFor='designation'
                className='block flex text-sm font-semibold text-gray-800'
              >
                Designation
                <p className='mt-1 ml-1'>
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
                  className='appearance-none bg-transparent border-none w-full text-gray-700  leading-tight focus:outline-none'
                  type='tel'
                  placeholder='Enter your Designation'
                />
              </div>
            </div>
          </div>

          <div className='flex flex-row gap-14'>
            <div className='mb-2 mt-8'>
              <label
                htmlFor='url'
                className='block flex text-sm font-semibold text-gray-800'
              >
                Company Website
                <p className='mt-1 ml-1'>
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
                  className='appearance-none bg-transparent border-none w-full text-gray-700 leading-tight focus:outline-none'
                  type='url'
                  placeholder='Please enter your company email id'
                />
              </div>
            </div>
            <div className='mb-2 mt-8'>
              <label
                htmlFor='email'
                className='block flex text-sm font-semibold text-gray-800'
              >
                Company Email ID
                <p className='mt-1 ml-1'>
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
                  className='appearance-none bg-transparent border-none w-full text-gray-700  leading-tight focus:outline-none'
                  type='email'
                  placeholder='123456789'
                />
              </div>
            </div>
          </div>
          <div className='flex flex-row gap-14 '>
            <div className='mb-2 mt-8'>
              <label
                htmlFor='password'
                className='block flex text-sm font-semibold text-gray-800'
              >
                Set Password
                <p className='mt-1 ml-1'>
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
                  type={showPassword ? 'text' : 'password'}
                  className='appearance-none bg-transparent mr-2 text-sm border-none w-full text-gray-700  leading-tight focus:outline-none'
                  placeholder='Please enter your password '
                />
                {showPassword ? (
                  <FiEye onClick={() => setShowPassword(!showPassword)} />
                ) : (
                  <FiEyeOff onClick={() => setShowPassword(!showPassword)} />
                )}
              </div>
            </div>
            <div className='mb-2 mt-8'>
              <label
                htmlFor='password'
                className='block flex text-sm font-semibold text-gray-800'
              >
                Confirm Password
                <p className='mt-1 ml-1'>
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
                  type={confirmPassword ? 'text' : 'password'}
                  className='appearance-none bg-transparent text-sm mr-2 border-none w-full text-gray-700  leading-tight focus:outline-none'
                  placeholder='Please enter your password '
                />
                {confirmPassword ? (
                  <FiEye onClick={() => setConfirmPassword(!confirmPassword)} />
                ) : (
                  <FiEyeOff
                    onClick={() => setConfirmPassword(!confirmPassword)}
                  />
                )}
              </div>
            </div>
          </div>

          <div className='flex items-start'>
            <div className='flex items-start ml-20'>
              <div className='flex items-center h-5'>
                <input
                  id='remember'
                  type='checkbox'
                  value=''
                  className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800'
                  required
                />
              </div>
              <label
                htmlFor='remember'
                className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 flex'
              >
                I agree with<p className='text-red-700 ml-2'>CB T & C*</p>
                <p className='ml-2'>and</p>
                <p className='text-red-700 ml-2'>Privacy Policy* </p>
              </label>
            </div>
          </div>
          <div></div>
          <button
            className='w-full bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow'
            type='button'
            onClick={() => setShowModal(true)}
          >
            Register
          </button>
          {showModal && (
            <>
              <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
                <div className='relative w-auto my-6 mx-auto max-w-3xl'>
                  {/*content*/}
                  <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
                    <div class='mt-3 text-center'>
                      <div class='mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100'>
                        <svg
                          class='h-6 w-6 text-green-600'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            stroke-width='2'
                            d='M5 13l4 4L19 7'
                          ></path>
                        </svg>
                      </div>
                    </div>
                    {/*body*/}
                    <div className='relative p-6 flex-auto'>
                      <p className='my-4 text-slate-500 text-lg leading-relaxed'>
                        your registration has been successfully done
                      </p>
                    </div>
                    {/*footer*/}
                    <button
                      id='ok-btn'
                      class='px-4 py-2 bg-green-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300'
                    >
                      OK
                    </button>
                  </div>
                </div>
              </div>
              <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
            </>
          )}
          <button
            type='submit'
            className='w-full text-black border border-pink-700 font-medium rounded-lg text-xl px-5 py-2.5 text-center'
          >
            Already have an account ?
            <a
              href='/login'
              className='ml-2 text-sm text-pink-700 hover:underline dark:text-blue-500'
            >
              Login
            </a>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
