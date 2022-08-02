import React from 'react'
import head12 from "../../assets/img/head12.jpg"
import hands from "../../assets/img/hands.png"

const AboutUsSectwo = () => {
  return (
    <div className='w-full py-16 px-4'>
      <div className='max-w-[1100px] mx-auto grid md:grid-cols-2'>
        <div className='w-[500px] flex flex-col justify-center'>
            <h1 className='font-bold mb-4 md:text-3xl sm:text:xl py-2'>Our Vision</h1>
            <p className='text-gray-800 mb-6 text-sm'>To become the first point of call in SME business advisory across Africa by 2050</p>
            <h1 className='font-bold mb-4 md:text-3xl sm:text:xl py-2'>Our Mission</h1>
            <p className='text-gray-800 mb-6 text-sm'>To deliver professionally excellent financial, tax, and management advisory services that add value to clients</p>
        </div>
        <img className='w-[500px] mx-auto my-4' src={hands} alt="/" />
      </div>
    </div>
  )
}

export default AboutUsSectwo