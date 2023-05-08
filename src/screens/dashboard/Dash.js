import React from 'react';
import { GoVerified } from 'react-icons/go';

const Dash = () => {
  return (
    <div>
      <div className='text-center font-bold text-4xl'>Applications</div>
      <div className='flex justify-around mt-8'>
        <form className='bg-gray-100'>
          <div class='max-w-sm rounded border border-[#8A1538] h-96 w-80'>
            <div class='flex flex-row mt-8 justify-center'>
              <img
                src={process.env.PUBLIC_URL + '/images/user.png'}
                className='w-14 h-14'
                alt=''
              />
              <GoVerified className='mt-10 mr-3 fill-[#04953E]' />
              <div>
                <div className='text-sm'>
                  <div className='font-semibold ml-5  text-[#8A1538] '>
                    Avinash Kumar Jha
                  </div>

                  <div className='font-semibold ml-5 '>PHP Developer</div>
                  <div className='font-semibold ml-5 text-[#04953E] '>
                    Open to work
                  </div>
                </div>
                <div className='flex flex-row'>
                  <div>Skills Matched</div>
                  <div className='text-[#04953E] font-semibold ml-2'>75%</div>
                </div>
              </div>
            </div>
            <input
              id='disabled-range'
              type='range'
              value='75'
              class='ml-4 w-10/12 h-0.5 accent-[#04953E] bg-[#04953E] rounded-lg appearance-none cursor-pointer'
              disable
            />
            <div className='px-8 py-10 mt-4'>
              <div className='flex'>
                <p>Relevant Experience:</p>
                <p className='ms-auto'>Location:</p>
              </div>
              <div className='flex font-semibold'>
                <p>3 Years</p>
                <p className='ms-auto'>Pune</p>
              </div>
              <div className='flex mt-4'>
                <p>Current CTC:</p>
                <p className='ms-auto'>Notice Period:</p>
              </div>
              <div className='flex font-semibold'>
                <p>₹60000</p>
                <p className='ms-auto'>30 Days</p>
              </div>
            </div>
          </div>
        </form>
        <form className='bg-gray-100'>
          <div class='max-w-sm rounded border border-[#8A1538] h-96 w-80'>
            <div class='flex flex-row mt-8 justify-center'>
              <img
                src={process.env.PUBLIC_URL + '/images/user.png'}
                className='w-14 h-14'
                alt=''
              />
              <GoVerified className='mt-10 mr-3 fill-[#04953E]' />
              <div>
                <div className='text-sm'>
                  <div className='font-semibold ml-5  text-[#8A1538] '>
                    Avinash Kumar Jha
                  </div>

                  <div className='font-semibold ml-5 '>PHP Developer</div>
                  <div className='font-semibold ml-5 text-[#04953E] '>
                    Open to work
                  </div>
                </div>
                <div className='flex flex-row'>
                  <div>Skills Matched</div>
                  <div className='text-[#04953E] font-semibold ml-2'>75%</div>
                </div>
              </div>
            </div>
            <input
              id='disabled-range'
              type='range'
              value='75'
              class='ml-4 w-10/12 h-0.5 accent-[#04953E] bg-[#04953E] rounded-lg appearance-none cursor-pointer'
              disable
            />
            <div className='px-8 py-10 mt-4'>
              <div className='flex'>
                <p>Relevant Experience:</p>
                <p className='ms-auto'>Location:</p>
              </div>
              <div className='flex font-semibold'>
                <p>3 Years</p>
                <p className='ms-auto'>Pune</p>
              </div>

              <div className='flex mt-4'>
                <p>Current CTC:</p>
                <p className='ms-auto'>Notice Period:</p>
              </div>
              <div className='flex font-semibold'>
                <p>₹60000</p>
                <p className='ms-auto'>30 Days</p>
              </div>
            </div>
          </div>
        </form>
        <form className='bg-gray-100'>
          <div class='max-w-sm rounded border border-[#8A1538] h-96 w-80'>
            <div class='flex flex-row mt-8 justify-center'>
              <img
                src={process.env.PUBLIC_URL + '/images/user.png'}
                className='w-14 h-14'
                alt=''
              />
              <GoVerified className='mt-10 mr-3 fill-[#04953E]' />
              <div>
                <div className='text-sm'>
                  <div className='font-semibold ml-5  text-[#8A1538]'>
                    Avinash Kumar Jha
                  </div>

                  <div className='font-semibold ml-5 '>PHP Developer</div>
                  <div className='font-semibold ml-5 text-[#04953E] '>
                    Open to work
                  </div>
                </div>
                <div className='flex flex-row'>
                  <div>Skills Matched</div>
                  <div className='text-[#04953E] font-semibold ml-2'>75%</div>
                </div>
              </div>
            </div>
            <input
              id='disabled-range'
              type='range'
              value='75'
              class='ml-4 w-10/12 h-0.5 accent-[#04953E] bg-[#04953E] rounded-lg appearance-none cursor-pointer'
              disable
            />
            <div className='px-8 py-10 mt-4'>
              <div className='flex'>
                <p>Relevant Experience:</p>
                <p className='ms-auto'>Location:</p>
              </div>
              <div className='flex font-semibold'>
                <p>3 Years</p>
                <p className='ms-auto'>Pune</p>
              </div>

              <div className='flex mt-4'>
                <p>Current CTC:</p>
                <p className='ms-auto'>Notice Period:</p>
              </div>
              <div className='flex font-semibold'>
                <p>₹60000</p>
                <p className='ms-auto'>30 Days</p>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className='flex justify-center p-8'>
        <button class='bg-white border border-[#8A1538] text-[#8A1538] font-bold py-2 px-8 rounded-xl'>
          View All
        </button>
      </div>

      {/* Second Card----!!!! */}

      <div className='p-20'>
        <div>
          <h3 className=' font-bold text-sm underline decoration-[#8A1538] text-[#8A1538]'>
            Favorite Candidates <span className='text-black decoration-gray-300 underline text-Heebo text- ml-6'>Shortlisted Candidates</span>
          </h3>
        </div>
        <div className='mt-8 text-[#000000] font-semibold'>
          Lorem Ipsum is simply dummy text of 
          <p>the printing and typesetting
          industry.</p>
        </div>
      </div>
      <div>
        <div className='flex justify-around mt-8'>
          <form className='bg-gray-100'>
            <div class='max-w-sm rounded border border-[#8A1538] h-96 w-80'>
              <p className='text-end underline text-[#8A1538] text-sm font-semibold'>
                Set Interview
              </p>
              <div class='flex flex-row mt-8 justify-center'>
                <img
                  src={process.env.PUBLIC_URL + '/images/user.png'}
                  className='w-14 h-14'
                  alt=''
                />
                <GoVerified className='mt-10 mr-3 fill-[#04953E]' />
                <div>
                  <div className='text-sm'>
                    <div className='font-semibold ml-5  text-[#8A1538] '>
                      CB 6578
                    </div>

                    <div className='font-semibold ml-5 '>PHP Developer</div>
                    <div className='font-semibold ml-5 text-[#04953E] '>
                      Open to work
                    </div>
                  </div>
                  <div className='flex flex-row'>
                    <div>Skills Matched</div>
                    <div className='text-[#04953E] font-semibold ml-2'>75%</div>
                  </div>
                </div>
              </div>
              <input
                id='disabled-range'
                type='range'
                value='75'
                class='ml-4 w-10/12 h-0.5 accent-[#04953E] bg-[#04953E] rounded-lg appearance-none cursor-pointer'
                disable
              />
              <div className='px-8 py-10 mt-4'>
                <div className='flex'>
                  <p>Relevant Experience:</p>
                  <p className='ms-auto'>Location:</p>
                </div>
                <div className='flex font-semibold'>
                  <p>3 Years</p>
                  <p className='ms-auto'>Pune</p>
                </div>

                <div className='flex mt-4'>
                  <p>Current CTC:</p>
                  <p className='ms-auto'>Notice Period:</p>
                </div>
                <div className='flex font-semibold'>
                  <p>₹60000</p>
                  <p className='ms-auto'>30 Days</p>
                </div>
              </div>
            </div>
          </form>
          <form className='bg-gray-100'>
            <div class='max-w-sm rounded border border-[#8A1538] h-96 w-80'>
              <p className='text-end underline text-[#8A1538] text-sm font-semibold'>
                Set Interview
              </p>
              <div class='flex flex-row mt-8 justify-center'>
                <img
                  src={process.env.PUBLIC_URL + '/images/user.png'}
                  className='w-14 h-14'
                  alt=''
                />
                <GoVerified className='mt-10 mr-3 fill-[#04953E]' />
                <div>
                  <div className='text-sm'>
                    <div className='font-semibold ml-5  text-[#8A1538] '>
                      CB 6578
                    </div>

                    <div className='font-semibold ml-5 '>PHP Developer</div>
                    <div className='font-semibold ml-5 text-[#04953E] '>
                      Open to work
                    </div>
                  </div>
                  <div className='flex flex-row'>
                    <div>Skills Matched</div>
                    <div className='text-[#04953E] font-semibold ml-2'>75%</div>
                  </div>
                </div>
              </div>
              <input
                id='disabled-range'
                type='range'
                value='75'
                class='ml-4 w-10/12 h-0.5 accent-[#04953E] bg-[#04953E] rounded-lg appearance-none cursor-pointer'
                disable
              />
              <div className='px-8 py-10 mt-4'>
                <div className='flex'>
                  <p>Relevant Experience:</p>
                  <p className='ms-auto'>Location:</p>
                </div>
                <div className='flex font-semibold'>
                  <p>3 Years</p>
                  <p className='ms-auto'>Pune</p>
                </div>

                <div className='flex mt-4'>
                  <p>Current CTC:</p>
                  <p className='ms-auto'>Notice Period:</p>
                </div>
                <div className='flex font-semibold'>
                  <p>₹60000</p>
                  <p className='ms-auto'>30 Days</p>
                </div>
              </div>
            </div>
          </form>
          <form className='bg-gray-100'>
            <div class='max-w-sm rounded border border-[#8A1538] h-96 w-80'>
              <p className='text-end underline text-[#8A1538] text-sm font-semibold'>
                Set Interview
              </p>
              <div class='flex flex-row mt-8 justify-center'>
                <img
                  src={process.env.PUBLIC_URL + '/images/user.png'}
                  className='w-14 h-14'
                  alt=''
                />
                <GoVerified className='mt-10 mr-3 fill-[#04953E]' />
                <div>
                  <div className='text-sm'>
                    <div className='font-semibold ml-5  text-[#8A1538] '>
                      CB 6578
                    </div>

                    <div className='font-semibold ml-5 '>PHP Developer</div>
                    <div className='font-semibold ml-5 text-[#04953E] '>
                      Open to work
                    </div>
                  </div>
                  <div className='flex flex-row'>
                    <div>Skills Matched</div>
                    <div className='text-[#04953E] font-semibold ml-2'>75%</div>
                  </div>
                </div>
              </div>
              <input
                id='disabled-range'
                type='range'
                value='75'
                class='ml-4 w-10/12 h-0.5 accent-[#04953E] bg-[#04953E] rounded-lg appearance-none cursor-pointer'
                disable
              />
              <div className='px-8 py-10 mt-4'>
                <div className='flex'>
                  <p>Relevant Experience:</p>
                  <p className='ms-auto'>Location:</p>
                </div>
                <div className='flex font-semibold'>
                  <p>3 Years</p>
                  <p className='ms-auto'>Pune</p>
                </div>

                <div className='flex mt-4'>
                  <p>Current CTC:</p>
                  <p className='ms-auto'>Notice Period:</p>
                </div>
                <div className='flex font-semibold'>
                  <p>₹60000</p>
                  <p className='ms-auto'>30 Days</p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Dash;
