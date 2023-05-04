import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/search');
  };

  return (
    <>
      <div>
        <nav className='border-gray-200  bg-gradient-to-r from-white  to-pink-700 dark:bg-gray-800 dark:border-gray-700'>
          <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
            <a href='#' className='flex items-center'>
              <img
                src={process.env.PUBLIC_URL + '/images/candit.png'}
                className='h-8 mr-3'
                alt='logo'
              />
              <span className='flex self-center text-xl font-semibold uppercase whitespace-nowrap dark:text-white'>
                Candidates
                <p className='text-pink-700 ml-2'>Bazaar</p>
              </span>
            </a>
            <button
              data-collapse-toggle='navbar-solid-bg'
              type='button'
              className='inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
              aria-controls='navbar-solid-bg'
              aria-expanded='false'
            >
              <span className='sr-only'>Open main menu</span>
              <svg
                className='w-6 h-6'
                aria-hidden='true'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                  clipRule='evenodd'
                ></path>
              </svg>
            </button>
            <div
              className='hidden w-full md:block md:w-auto'
              id='navbar-solid-bg'
            >
              <ul className='flex flex-col justify-center font-sm mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700'>
                <li className='flex'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='#be185d'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='white'
                    className='w-6 h-6'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6'
                    />
                  </svg>
                  <a
                    href='#'
                    className='block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-white md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent'
                    aria-current='page'
                  >
                    Browse Talent
                  </a>
                </li>
                <li className='flex'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='#be185d'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='white'
                    className='w-6 h-6'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                    />
                  </svg>
                  <a
                    href='#'
                    className='block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='block text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
                  >
                    <button className='btn bg-white hover:bg-white text-pink-700 font-sm py-1 px-4  rounded'>
                      Post A Job
                    </button>
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='block py-2 pl-3 pr-4 text-white rounded md:hover:bg-transparent md:border-0  md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth='1.5'
                      stroke='currentColor'
                      className='w-6 h-6'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0'
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      {/* Form-----!!!! */}

      <div>
        <div className='flex flex-col justify-center items-center'>
          <div className='text-center font-bold text-5xl p-2 mt-16 font-mono'>
            Hey!
          </div>
          <p className='text-center text-2xl'>
            Techno Wiz Solution | CBE120 Welcome To Candidates Bazaar
          </p>
          <div className='border-2 px-48 mt-6'>
            <form className='w-full max-w-lg' onSubmit={() => handleSubmit()}>
              <div className='flex flex-wrap -mx-3 mb-6 mt-8'>
                <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                  <label
                    className=' tracking-wide text-gray-700  flex text-xs font-bold mb-2'
                    htmlFor='grid-first-name'
                  >
                    Enter Job Title
                    <p className='mt-1'>
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
                  <input
                    required
                    className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                    id='grid-first-name'
                    type='text'
                    placeholder='E.g. Web Developer'
                  />
                </div>
                <div className='w-full md:w-1/2 px-3'>
                  <label
                    className='block tracking-wide flex text-gray-700 text-xs font-bold mb-2'
                    htmlFor='grid-last-name'
                  >
                    Salary Range{''}
                    <p className='mt-1'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='#be185d'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
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
                  <input
                    className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                    id='grid-last-name'
                    type='text'
                    placeholder='Select Salary Range'
                  />
                </div>
              </div>
              <div className='flex flex-wrap -mx-3 mb-6'>
                <div className='w-full px-3'>
                  <label
                    className='block flex tracking-wide text-gray-700 text-xs font-bold mb-2'
                    htmlFor='grid-password'
                  >
                    Select additional skill(s)
                    <p>
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
                  <input
                    required
                    className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                    id='grid-password'
                    type='password'
                    placeholder='E.g. AngularJS'
                  />
                </div>
              </div>
              <div className='flex flex-wrap -mx-3 mb-2'>
                <div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
                  <label
                    className='block flex tracking-wide text-gray-700 text-xs font-bold mb-2'
                    htmlFor='grid-city'
                  >
                    Certification
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
                  <input
                    required
                    className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                    id='grid-city'
                    type='text'
                    placeholder='AWS'
                  />
                </div>
                <div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
                  <label
                    className='block tracking-wide flex text-gray-700 text-xs font-bold mb-2'
                    htmlFor='grid-state'
                  >
                    Relevent Experience
                    <p className='mt-1'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='#be185d'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
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
                  <div className='relative'>
                    <select
                      className='block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                      id='grid-state'
                    >
                      <option>0</option>
                      <option>1 Year</option>
                      <option>2 Years</option>
                      <option>More Then 3 Years</option>
                    </select>
                    <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
                      <svg
                        className='fill-current h-4 w-4'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 20 20'
                      >
                        <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className='content-end'>
                <button className='mb-5 bg-pink-700 text-black bg-white border border-pink-700 mt-5 font-bold  py-2 px-6 rounded'>
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Next Card */}

        <div>
          <section className='text-gray-600 body-font'>
            <div className='container px-5 py-24 mx-auto'>
              <div className='flex flex-wrap -m-4 text-center'>
                <div className='p-4 md:w-1/4 sm:w-1/2 w-full'>
                  <div className='border-2 border-gray-200 px-4 py-6 rounded-lg'>
                    <h2 className='title-font flex inline-block justify-center font-medium text-3xl text-gray-900'>
                      <p>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='white'
                          viewBox='0 0 24 24'
                          strokeWidth='1.5'
                          stroke='#be185d'
                          className='w-10 h-10'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m6.75 12l-3-3m0 0l-3 3m3-3v6m-1.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z'
                          />
                        </svg>
                      </p>
                      14
                      <p className='mt-2 ml-2'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          strokeWidth='1.5'
                          stroke='#be185d'
                          className='w-6 h-6'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M8.25 4.5l7.5 7.5-7.5 7.5'
                          />
                        </svg>
                      </p>
                    </h2>
                    <p className='leading-relaxed font-semibold text-black'>
                      Posted Jobs
                    </p>
                  </div>
                </div>
                <div className='p-4 md:w-1/4 sm:w-1/2 w-full'>
                  <div className='border-2 border-gray-200 px-4 py-6 rounded-lg'>
                    <h2 className='title-font flex inline-block justify-center font-medium text-3xl text-gray-900'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='#be185d'
                        className='w-10 h-10'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m6.75 12H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z'
                        />
                      </svg>
                      145
                      <p className='mt-2 ml-2'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='white'
                          viewBox='0 0 24 24'
                          strokeWidth='1.5'
                          stroke='#be185d'
                          className='w-6 h-6'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M8.25 4.5l7.5 7.5-7.5 7.5'
                          />
                        </svg>
                      </p>
                    </h2>
                    <p className='leading-relaxed font-semibold text-black'>
                      Applications
                    </p>
                  </div>
                </div>
                <div className='p-4 md:w-1/4 sm:w-1/2 w-full'>
                  <div className='border-2 border-gray-200 px-4 py-6 rounded-lg'>
                    <h2 className='title-font flex inline-block justify-center font-medium text-3xl text-gray-900'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='#be185d'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        className='w-10 h-10'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z'
                        />
                      </svg>
                      34
                      <p className='mt-2 ml-2'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          strokeWidth='1.5'
                          stroke='#be185d'
                          className='w-6 h-6'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M8.25 4.5l7.5 7.5-7.5 7.5'
                          />
                        </svg>
                      </p>
                    </h2>
                    <p className='leading-relaxed font-semibold text-black'>
                      Favorite Candidates
                    </p>
                  </div>
                </div>
                <div className='p-4 md:w-1/4 sm:w-1/2 w-full'>
                  <div className='border-2 border-gray-200 px-4 py-6 rounded-lg'>
                    <h2 className='title-font flex inline-block justify-center font-medium text-3xl text-gray-900'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='#be185d'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        className='w-10 h-10'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z'
                        />
                      </svg>
                      22
                      <p className='mt-2 ml-2'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          strokeWidth='1.5'
                          stroke='#be185d'
                          className='w-6 h-6'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M8.25 4.5l7.5 7.5-7.5 7.5'
                          />
                        </svg>
                      </p>
                    </h2>
                    <p className='leading-relaxed font-semibold text-black'>
                      Shortlisted Candidates
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
