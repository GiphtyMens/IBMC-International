import React from 'react'
import {BsTwitter} from "react-icons/bs";
import {FaFacebookF, FaLinkedin} from "react-icons/fa";
import {FiMail, FiPhoneCall} from "react-icons/fi";
import {GoLocation} from "react-icons/go"
import {Link} from "react-router-dom"
import cert from "../assets/img/certif.png"

const FooterTwo = () => {
  return (
    <div>
         
        <footer className="text-gray-50 body-font bg-gray-800">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap md:text-left text-center order-first">
              <div className="lg:w-1/4 md:w-1/2 w-full px-4 pb-4">
                <h2 className="title-font font-medium text-gray-50 tracking-widest text-sm mb-3">IBMC</h2>
                <p>Welcome to International Business Management Consultancy. Contact us for all modern approach in solving corporate challenges.</p>
                <img
                    className="lg:block mt-8 h-16 w-auto"
                    src={cert}
                    alt="Workflow"
                  />
                <div id='social_icons' className='flex justify-start my-12 text-white'>
                  {/* <Link to="https://web.facebook.com/profile.php?id=100022757516333">
                  <button className=' h-12 w-12 rounded-full border-2 pl-3 mr-6 hover:mr-8 hover:bg-blue-800 hover:border-0'><FaFacebookF size={20} /></button>
                  </Link>
                  <Link  to="https://www.linkedin.com/notifications/">
                  <button className=' h-12 w-12 rounded-full border-2 pl-3 mr-6 hover:mr-8 hover:bg-blue-500 hover:border-0'> <FaLinkedin size={20} /></button>
                  </Link> */}
                  <Link  to="">
                  {/* <button className=' h-12 w-12 rounded-full border-2 pl-3 mr-6 hover:mr-8 hover:bg-green-500 hover:border-0'><FiMail size={20} /></button> */}
                  </Link>
                </div>
              </div>

              <div className="lg:w-1/4 md:w-1/2 w-full text-center px-4">
                <h2 className="title-font font-medium text-gray-50 tracking-widest text-sm mb-3">Company</h2>
               
               <nav className="list-none mb-10">
               <Link to="/">
                  <li className=''>
                    <a className="text-gray-50 hover:text-gray-400 ">Home</a>
                  </li>
               </Link>
               <Link to="services">
                  <li className=''>
                    <a className="text-gray-50 hover:text-gray-400  ">Services</a>
                  </li>
               </Link>
               <Link to="about">
                  <li className=''>
                    <a className="text-gray-50 hover:text-gray-400 ">About</a>
                  </li>
               </Link>
               <Link to="contact">
                  <li className=''>
                    <a className="text-gray-50 hover:text-gray-400 ">Contact</a>
                  </li>
               </Link>
                  <li className=''>
                    <a className="text-gray-50 hover:text-gray-400 "></a>
                  </li>
                  <li className=''>
                    <a className="text-gray-50 hover:text-gray-400 "></a>
                  </li>
                  <li className=''>
                    <a className="text-gray-50 hover:text-gray-400 "></a>
                  </li>
                </nav>
               
              </div>
              <div className="lg:w-1/4 md:w-1/2 w-full px-6">
                <h2 className="title-font font-medium text-gray-50 tracking-widest text-sm mb-3">CONTACT US</h2>
                <nav className="list-none mb-10">
                  <li className='flex items-center'>
                    <GoLocation size={28}/>
                    <div className='w-[14rem] px-4'>
                      <span>Tema, Community 1, </span>
                      <span>Greenwich Meridian Road</span>
                      <br/>
                      <span>IBMC, UTC Building</span>
                    </div>
                  </li>
                  
                  <li className='flex items-center py-4'>
                  <FiPhoneCall size={28}/>
                    <div className='ml-3 w-[14rem] px-2'>
                      <span>(233) 249 756 910</span>
                      <br />
                      <span>(233) 302 906 740</span>
                    </div>
                  </li>
                  <li className='flex items-center'>
                    <FiMail size={28}/>
                    <div className='ml-3 w-[14rem] px-4'>
                        <span>info@ibmcinternational.com</span>
                        <div>ibmc.gh1@gmail.com</div>
                        <div>P.O.Box CO 1511</div>
                    </div>
                  </li>
                   <div id='social_icons' className='flex justify-start ml-8 my-4 text-white'>
                   <a href="https://web.facebook.com/profile.php?id=100022757516333" rel="noopener noreferrer" className="text-white-800 ml-1" target="_blank">
                   <button className=' h-8 w-10 rounded border-2 pl-3 mr-6 hover:mr-8 hover:bg-blue-800 hover:border-0'><FaFacebookF size={20} /></button>
                   </a>
                  
                   <a href="https://www.linkedin.com/notifications/" rel="noopener noreferrer" className="text-white-800 ml-1" target="_blank">
                   <button className=' h-8 w-10 rounded border-2 pl-3 mr-6 hover:mr-8 hover:bg-blue-800 hover:border-0'><FaLinkedin size={20} /></button>
                   </a>
                  
                  {/* <Link  to="https://www.linkedin.com/notifications/">
                  <button className=' h-8 w-10 rounded border-2 pl-3 mr-6 hover:mr-8 hover:bg-blue-800 hover:border-0'> <FaLinkedin size={20} /></button>
                  </Link> */}
                  </div>
                </nav>
              </div>
              <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-bold text-gray-50 tracking-widest text-xl mb-3">Industries</h2>
                <nav className="list-none">
                <li className=''>
                    <a className="text-gray-50   ">Consumer</a>
                  </li>
                  <li className=''>
                    <a className="text-gray-50  ">Energy & Resources</a>
                  </li>
                  <li className=''>
                    <a className="text-gray-50  ">Financial Services</a>
                  </li>
                  <li className=''>
                    <a className="text-gray-50  ">Government and Public Services</a>
                  </li>
                  <li className=''>
                    <a className="text-gray-50  ">Technology, Media & Telecom</a>
                  </li>
                  </nav>
                <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                  {/* <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                    <label for="footer-field" className="leading-7 text-sm text-gray-500">Email</label>
                    <input type="text" id="footer-field" name="footer-field" className="w-full bg-gray-700 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-gray-500 text-base outline-none text-gray-50 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                  </div> */}
                  {/* <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                    <label for="footer-field" className="leading-7 text-sm text-gray-500">Placeholder</label>
                    <input type="text" id="footer-field" name="footer-field" className="w-full bg-gray-700 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-gray-500 text-base outline-none text-gray-50 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                  </div> */}
                  {/* <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-blue-800 border-0 py-2 px-6 focus:outline-none hover:bg-purple-900 rounded">Button</button> */}
                </div>
              
              </div>
            </div>
          </div>
          <div className="bg-gray-800 mt-[-5rem]">
            <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
              
              <p className="text-sm text-gray-50 sm:ml-6 sm:mt-0 mt-4 mb-12">© 2022 Masters Hive —
                <a href="https://www.linkedin.com/in/gifty-mensah-42a633143/" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@Giphty</a>
              </p>
              {/* <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                <a className="text-gray-50">
                  <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a className="ml-3 text-gray-50">
                  <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeLidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a className="ml-3 text-gray-50">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                  </svg>
                </a>
                <a className="ml-3 text-gray-50">
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                    <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                  </svg>
                </a>
              </span> */}
            </div>
          </div>
        </footer>
         
    </div>
  )
}

export default FooterTwo