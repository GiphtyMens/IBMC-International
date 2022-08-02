import React from 'react'
import {FaFacebookSquare, FaInstagram, FaTwitterSquare, FaWhatsappSquare} from "react-icons/fa"

const ContactSecOne = () => {
  return (
    <div className='w-full border h-screen sm:h-screen md:h-screen px-4'>
        <div className='lg:w-3/4 border sm:w-full md:w-full mx-auto my-0 h-screen grid grid-cols-2 sm:grid-col-1 md:grid-cols-1 gap-4 justify-between'>
            <div className='border py-5 px-5 h-96'>
                <p className='text-[#ff006a] font-bold text-sm'>Happy To Help__</p>
                <h1 className='md:text-2xl text-xl font-bold'>If You Need Someone To Talk To,</h1>
                <h1 className='text-2xl font-bold mb-[2rem]'>We Are Here</h1>
                <div>
                    <h3>(+233) 555-0122</h3>
                    <h3 className='mb-[2rem]'>(+233) 555-0122</h3>
                </div>
                <div>
                    <h3>support@elency.com</h3>
                    <h3 className='mb-[2rem]'>support@elency.com</h3>
                </div>
                <div>
                    <h3>4517 Washington Ave</h3>
                    <h3 className='mb-[2rem]'>Manchester, Kentucky 39495</h3>
                </div>
                <div className='flex justify-center ml-[-17rem] text-[#ff006a] space-x-12'>
                    <FaFacebookSquare size={20} />
                    <FaInstagram size={20} />
                    <FaTwitterSquare size={20} />
                    <FaWhatsappSquare size={20} />
                </div>
            </div>
            <div className='border-2 h-96 py-5 px-5'>
                <p className='text-[#ff006a] font-bold text-sm mt-[5rem]'>Get In Touch__</p>
                <h1 className='text-2xl font-bold'>Want To Discuss Something More</h1>
                <h1 className='text-2xl font-bold'>Important?</h1>
                <div>
                  <input className='w-[75%] outline-0 bg-gray-200 p-2 mt-[2rem] mb-[2rem]' type="name" placeholder="Name" />
                  <input className='w-[75%] outline-0 bg-gray-200 mb-[2rem] p-2' type="email" placeholder="Email" />
                  <textarea className='w-[75%] outline-0 bg-gray-200 p-8 mb-[4rem]' rows="" cols="" placeholder='Message'></textarea>
                  <button className='rounded-full font-bold p-3 mb-[5rem] ml-[-23.5rem] text-xs text-white bg-[#ff006a]' type="text">Submit Comment</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactSecOne;