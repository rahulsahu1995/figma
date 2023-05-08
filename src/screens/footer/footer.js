import React from 'react';
import { CgCopyright } from 'react-icons/cg';
import { TiSocialLinkedinCircular } from 'react-icons/ti';
import { TiSocialFacebookCircular } from 'react-icons/ti';
import { TiSocialTwitterCircular } from 'react-icons/ti';

const Footer = () => {
  return (
    <div className='mx-4'>
      <footer className='bg-pink-100 flex flex-row'>
        <div className='grid grid-cols-4 '>
          <div className='m-5 border-e border-gray-500 w-96'>
            <div className='h-10 w-16 flex mt-5 ml-2'>
              <img
                src={process.env.PUBLIC_URL + '/images/candit.png'}
                alt='logo'
              />
              <h1 className='m-1 font-bold text-xl'>CANDIDATES</h1>
              <h1 className='text-red-800 m-1 font-bold text-xl'>BAZAAR</h1>
            </div>
            <p className='text-justify m-2'>
              CandidatesBazaar is a job portal that aims to provide a platform
              for employers to publish verified job openings and for job seekers
              to find and apply for verified job opportunities. The goal of the
              platform is to help connect employers with qualified and reliable
              candidates,skills and experience
            </p>
          </div>
          <div className='m-5 border-e border-gray-500'>
            <div className='ml-16 grid gap-2 justify-center'>
              <h1 className='font-bold text-xl'>Quick Links</h1>
              <h1>Post A job</h1>
              <h1>Applications</h1>
              <h1>Shortlisted</h1>
              <h1>Favorites</h1>
              <h1>Interviews</h1>
              <h1>Support</h1>
            </div>
          </div>
          <div className='m-5 mr-4 border-e border-gray-500'>
            <div className=' grid gap-2 justify-center'>
              <h1 className='font-bold text-xl'>Contact</h1>
              <h1 className='font-bold text-xl'>Email Us</h1>
              <h1 className='text-xl'>info@canditatesbazaar.com</h1>
              <h1 className='text-xl'>admin@canditatesbazaar.com</h1>
              <h1 className='font-bold text-xl'>Phone Number</h1>
              <h1 className='text-xl'>+91 9876543210</h1>
              <h1 className='text-xl'>+91 9876543210</h1>
            </div>
          </div>
          <div className='m-5 mr-10'>
            <div className='mr-2 grid gap-2 justify-center'>
              <h1 className='font-bold text-xl'>Download app</h1>
              <div className='h-10 w-22 flex mt-4'>
                <img
                  src={
                    process.env.PUBLIC_URL +
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfV4J4-vcbIITntZTIxjn1ekxbEUJrgg8YpQ&usqp=CAU'
                  }
                  className='mr-1'
                  alt='img'
                />
                <img
                  src={
                    process.env.PUBLIC_URL +
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUDbypklzLQ9hq5j1s2j6hpu_fjbQ8R8W-jw&usqp=CAU'
                  }
                  alt='img'
                />
              </div>
              <h1 className='font-bold text-xl'>Find Us</h1>
            </div>
            <div className='text-xl mt-5'>
              <h1>Baarez Technology Solutions,</h1>
              <h1>Office No 15 Second Floor,</h1>
              <h1>Building no.266 Vasant Vihar,</h1>
              <h1>Thane - Mumbai India,</h1>
            </div>
          </div>
          <div className='ml-6 flex gap-5 font-bold border border-t-gray-900'>
            <h1 className='mt-3'>Terms & conditions</h1>
            <h1 className='mt-3'>Privacy</h1>
            <h1 className='mt-3'>Cookies</h1>
          </div>
          <div className='flex gap-3  border border-t-gray-900'>
            <CgCopyright className='font-bold text-xl mt-4 ml-14' />
            <h1 className='mt-3'> 2023 Candidates Bazzar.Com </h1>
            <h1 className='mt-3'> All </h1>
          </div>
          <div className='flex gap-6  border border-t-gray-900'>
            <h1 className='mt-3'>Rights Reserved</h1>
          </div>
          <div className='flex gap-6  border border-t-gray-900 mr-5'>
            <h1 className='mt-3'> Follow us </h1>
            <TiSocialFacebookCircular
              className='mt-2 font-bold text-4xl'
              color='#8A1538'
            />
            <TiSocialLinkedinCircular
              className='mt-2 font-bold text-4xl'
              color='#8A1538'
            />
            <TiSocialTwitterCircular
              className='mt-2 font-bold text-4xl'
              color='#8A1538'
            />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
