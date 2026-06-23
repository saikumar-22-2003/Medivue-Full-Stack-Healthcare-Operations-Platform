import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 text-sm'>
        <div>
          <img className='mb-5 w-40' src={assets.medivue} alt="" />
          <p className='w-full md:w-2/3 text-gray-600 leading-6'>At Medivue, we believe quality healthcare should be accessible 
                  to everyone. Our platform helps you find, compare, and book 
                  appointments with trusted doctors across multiple specialities -
                  all from the comfort of your home.</p>
        </div>
        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>+91-987-654-3210</li>
            <li>saikumar@gmail.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2026 @ Medivue.com - All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
