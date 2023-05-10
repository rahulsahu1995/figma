import React from 'react';
import { CgCopyright } from 'react-icons/cg';
import { TiSocialLinkedinCircular } from 'react-icons/ti';
import { TiSocialFacebookCircular } from 'react-icons/ti';
import { TiSocialTwitterCircular } from 'react-icons/ti';

const Footer = () => {
  return (
    <div className='mx-4'>
      <footer className='bg-pink-100 flex flex-col rounded-lg'>
        <div className='grid grid-cols-4'>
          <div className='m-5 w-96 border-e border-gray-500'>
            <div className='flex items-center mt-5 ml-2'>
              <img
                src={process.env.PUBLIC_URL + '/images/candit.png'}
                alt='logo'
                className='h-12 w-12'
              />
              <p className='m-1 font-extrabold text-sm tracking-wider'>
                CANDIDATES
              </p>
              <p className='text-[#811319] m-1 font-extrabold text-sm tracking-wider'>
                BAZAAR
              </p>
            </div>
            <p className='text-justify m-2 pt-2 text-sm font-bold pr-5'>
              CandidatesBazaar is a job portal that aims to provide a platform
              for employers to publish verified job openings and for job seekers
              to find and apply for verified job opportunities. The goal of the
              platform is to help connect employers with qualified and reliable
              candidates, while also helping job seekers find legitimate job
              opportunities that align with their skills and experience
            </p>
          </div>
          <div className='m-5 border-e border-gray-500'>
            <div className='ml-16 grid gap-2 justify-center'>
              <h1 className='font-bold text-base mb-2 tracking-wide'>
                Quick Links
              </h1>
              <h1 className='text-base tracking-wide'>Post A job</h1>
              <h1 className='text-base tracking-wide'>Applications</h1>
              <h1 className='text-base tracking-wide'>Shortlisted</h1>
              <h1 className='text-base tracking-wide'>Favorites</h1>
              <h1 className='text-base tracking-wide'>Interviews</h1>
              <h1 className='text-base tracking-wide'>Support</h1>
            </div>
          </div>
          <div className='m-5 mr-4 border-e border-gray-500'>
            <div className='grid gap-2 justify-center'>
              <h1 className='font-bold text-base mb-2 tracking-wide'>
                Contact
              </h1>
              <h1 className='font-bold text-base tracking-wide'>Email Us</h1>
              <h1 className='text-base tracking-wide'>
                info@canditatesbazaar.com
              </h1>
              <h1 className='text-base tracking-wide'>
                admin@canditatesbazaar.com
              </h1>
              <h1 className='font-bold text-base tracking-wide'>
                Phone Number
              </h1>
              <h1 className='text-base tracking-wide'>+91 9876543210</h1>
              <h1 className='text-base tracking-wide'>+91 9876543210</h1>
            </div>
          </div>
          <div className='m-5 mr-10'>
            <div className='mr-2 grid gap-2 justify-center'>
              <h1 className='font-bold text-base tracking-wide'>
                Download app
              </h1>
              <div className='flex mt-2'>
                <img
                  src={
                    process.env.PUBLIC_URL +
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfV4J4-vcbIITntZTIxjn1ekxbEUJrgg8YpQ&usqp=CAU'
                  }
                  className='mr-1 h-10 w-28'
                  alt='img'
                />
                <img
                  src={
                    process.env.PUBLIC_URL +
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUDbypklzLQ9hq5j1s2j6hpu_fjbQ8R8W-jw&usqp=CAU'
                  }
                  alt='img'
                  className='mr-1 h-10 w-28'
                />
              </div>
              <div className='mt-5'>
                <h1 className='font-bold text-base tracking-wide'>Find Us</h1>
                <div className='mt-2'>
                  <h1 className='font-medium text-base tracking-wide'>
                    Baârez Technology Solutions,
                  </h1>
                  <h1 className='font-medium text-base tracking-wide'>
                    Office No 15, Second Floor,
                  </h1>
                  <h1 className='font-medium text-base tracking-wide'>
                    Building no. 226, Vasant Vihar,
                  </h1>
                  <h1 className='font-medium text-base tracking-wide'>
                    Thane – Mumbai, India.
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-row justify-between items-center border border-t-gray-900 px-6 py-6'>
          <div className='flex flex-row gap-6'>
            <h1 className='font-medium text-sm tracking-wide'>
              Terms & conditions
            </h1>
            <h1 className='font-medium text-sm tracking-wide'>Privacy</h1>
            <h1 className='font-medium text-sm tracking-wide'>Cookies</h1>
          </div>
          <div className='flex flex-row'>
            <h1 className='font-medium text-xs tracking-wide'>
              © 2023 Candidates Baazar.com. All Rights Reserved
            </h1>
          </div>
          <div className='flex items-center gap-6'>
            <h1 className='font-medium text-sm tracking-wide'>Follow us</h1>
            <TiSocialFacebookCircular color='#8A1538' className='h-10 w-10' />
            <TiSocialLinkedinCircular color='#8A1538' className='h-10 w-10' />
            <TiSocialTwitterCircular color='#8A1538' className='h-10 w-10' />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
