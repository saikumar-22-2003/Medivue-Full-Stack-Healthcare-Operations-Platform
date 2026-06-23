import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
const navigate = useNavigate()

  return (
    <div>

      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>CONTACT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
        <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className=' font-semibold text-lg text-gray-600'>OUR OFFICE</p>
          <p className=' text-gray-500'>Anantapur <br /> road No : 5, Andhra Pradesh, India</p>
          <p className=' text-gray-500'>Tel: (987) 654-3210 <br /> Email: saikumar@gmail.com</p>
          <p className=' font-semibold text-lg text-gray-600'>CAREERS AT Medivue</p>
          <p className=' text-gray-500'>Learn more about our teams and job openings.</p>
          <button onClick={() => navigate('/careers')} className='bg-black text-white text-sm hover:bg-gray-800 py-4 px-8 rounded'>
  Explore Jobs
</button>
         
        </div>
      </div>

    </div>
  )
}

export default Contact
