import React from 'react'
import head9 from "../../assets/img/head9.jpg"
import hands from "../../assets/img/hands.png"

const AboutUsSecOne = () => {
    return (
        <div className='w-full py-16 px-4'>
          <div className='max-w-[1200px] mx-auto grid md:grid-cols-2'>
          <img className='w-[500px] mx-auto my-4' src={head9} alt="/" />
          <div className='w-[500px] flex flex-col justify-center'>
                <p className='mt-4 text-purple-800 font-bold uppercase'>About Us__</p>
                <h1 className='font-bold mb-4 md:text-3xl sm:text:xl py-2'>Our Core Mandates</h1>
                <p className='text-gray-800 mb-4 text-sm'>IBMC International is an integrated Business advisory, tax & Management consulting firm
incorporated by a network of professional accountants, tax advisors, and seasoned management 
consultants to provide specialized consulting service to Large, Medium and Small scale businesses. 
We offer multifaceted business advisory and others. IBMC was founded to master the art 
of assisting companies with strategy, to maintain proper financial records, strong internal control 
systems, building staff capacity, and integrating workforce strategy for effective business process for 
existing companies. Our objective is to help companies grow progressively while observing good 
corporate governance and industry practices.
</p>
                {/* <button className='bg-blue-600 w-[150px] font-medium my-2 rounded-full py-2 text-white'>Read More</button> */}
          </div>
          </div>
        </div>
      )
}

export default AboutUsSecOne