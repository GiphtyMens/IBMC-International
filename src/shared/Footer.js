import React from 'react'
import {BsTwitter} from "react-icons/bs";
import {FaFacebookF} from "react-icons/fa";
import {FiMail, FiPhoneCall} from "react-icons/fi";
import {GoLocation} from "react-icons/go"

const Footer = () => {
  return (
    <footer id='footer_main' className='bg-gray-800 min-h-[57vh] border-2 w-full px-7 py-7 items-center'>
     <div id='footer' className='container grid grid-cols-4 lg:grid-cols-4 sm:grid-cols-1 sm:gap-1 md:grid-cols-2 gap-7 w-[90%] my-0 mx-auto min-h-[55vh] items-center'>
        <div id='footer_card' className=' border-2 text-white group relative h-[56vh] pt-8 px-3'>
          <h1 className='mb-6 text-2xl font-semibold text-white'>IBMC</h1>
          <p>Welcome to International Business Management Consultancy. Contact us for all modern approach in solving corporate challenges.</p>
          <div id='social_icons' className='flex justify-start my-12 text-white'>
            <button className=' h-12 w-12 rounded-full border-2 pl-3 mr-6 hover:mr-8 hover:bg-purple-800 hover:border-0'><FaFacebookF size={20} /></button>
            <button className=' h-12 w-12 rounded-full border-2 pl-3 mr-6 hover:mr-8 hover:bg-purple-800 hover:border-0'> <BsTwitter size={20} /></button>
            <button className=' h-12 w-12 rounded-full border-2 pl-3 mr-6 hover:mr-8 hover:bg-purple-800 hover:border-0'><FiMail size={20} /></button>
          </div>
        </div>
        <div id='footer_card' className='group relative border-2 h-[56vh] pt-8 px-16'>
          <h1 className='mb-6 text-2xl font-semibold text-white'>Explore</h1>
         <div className="text-white shadow">
            <ul className="divide-y-2 divide-gray-800">
                <li className="p-3 ">About Us</li>
                <li className="p-3">Our Portfolio</li>
                <li className="p-3">List Item 3</li>
                <li className="p-3">Contact Us</li>
            </ul>
          </div>
        </div>
        <div id='footer_card' className='group relative h-[56vh] pt-8 px-4'>
          <h1 className='mb-6 text-2xl font-semibold text-white'>Contact Us</h1>
          <div className=" text-white shadow">
              <ul className="divide-y-2 divide-gray-800">
                  <li className="p-1 flex justify-between items-center mb-6">
                    <GoLocation size={28}/>
                    <div className='ml-3 w-[14rem]'>
                      <span>Tema, Community 1, </span>
                      <span>Meridian Road</span>
                    </div>
                  </li>
                  <li className="p-1 flex justify-between items-center mb-6">
                    <FiPhoneCall size={28}/>
                    <div className='ml-3 w-[14rem]'>
                      <span>(233) 249 756 910</span>
                      <br />
                      <span>(233) 302 906 740</span>
                    </div>
                  </li>
                  <li className="p-1 flex justify-between items-center mb-6">
                    <FiMail size={28}/>
                    <div className='ml-3 w-[14rem]'>
                        <span>info@ibmcinternational.com</span>
                        <div>ibmc.gh1@gmail.com</div>
                    </div>
                  </li>
              </ul>
            </div>
        </div>
        <div id='footer_card_last' className='group relative h-[56vh] pt-8 px-4'>
          <h1 className='mb-6 text-2xl font-semibold text-white'>Request Quote</h1>
            <form className="shadow">
              <ul className="divide-y-2 divide-gray-800">
                  <li className="p-1">
                    <label for="" className='text-sm text-white'>Name</label>
                    <input type="text" name='name' className='w-full mt-2 px-2 block h-8 focus:outline-none focus:ring focus:border-purple-500 rounded' placeholder="Name"/> 
                  </li>
                  <li className="p-1">
                    <label for="" className='text-sm text-white'>Email</label>
                  <input type="email" name='email' className='mt-2 px-2 block h-8 w-full focus:outline-none focus:ring focus:border-gray-50 rounded' placeholder="Email"/> 
                  </li>
                  <li className="p-1">
                    <label for="" className='text-sm text-white'>Message</label>
                    <textarea name="message" className='mt-2 px-2 w-full block focus:outline-none focus:ring focus:border-gray-50 rounded' rows="" cols=""></textarea>
                  </li>
                  <li className="p-1"><button type='submit' className='btn bg-gray-700 hover:bg-gray-600 text-white py-1 px-8 rounded'>Send</button></li>
              </ul>
            </form>
        </div>
     </div>
    </footer>
  )
}

export default Footer