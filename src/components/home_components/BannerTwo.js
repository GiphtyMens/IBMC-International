import React from 'react'
import read from "../../assets/img/header-1.jpg"

const BannerTwo = () => {
  return (
    <div>
         
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h1 className="sm:text-3xl text-2xl font-medium mt-[-3rem] title-font mb-4 text-gray-900">Nationwide Offices</h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Leadership Starts With Competitive Advantage</p>
            </div>
            <div className="flex flex-wrap -m-4">
              <div className="lg:w-1/3 sm:w-1/2 p-4">
                <div className="flex relative">
                  <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={read} />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-sm title-font font-medium uppercase text-indigo-500 mb-1">Leadership</h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Starts With Competitive Advantage</h1>
                    <p className="leading-relaxed">Strategies lacking a sharp definition of how to win, relative to the industry’s rules of the game, seldom return their cost of capital.</p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/3 sm:w-1/2 p-4">
                <div className="flex relative">
                  <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={read} />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest title-font text-sm font-medium uppercase text-indigo-500 mb-1">Customer Advocacy</h2>
                    <h1 className="title-font text-lg font-medium text-sm text-gray-900 mb-3">The Acid Test of Competitive Advantage.</h1>
                    <p className="leading-relaxed text-sm">Most companies fail to deliver a superior customer proposition; however, sustained value creators are twice as likely to get it right.</p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/3 sm:w-1/2 p-4">
                <div className="flex relative">
                  <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={read} />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-sm title-font font-medium uppercase text-indigo-500 mb-1">A Good Strategy</h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">One That Can be Implemented.</h1>
                    <p className="leading-relaxed">The reason many strategies don’t deliver results is the failure to change behaviors. Winning strategies are designed for and with the front line.</p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/3 sm:w-1/2 p-4">
                <div className="flex relative">
                  <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={read} />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Repeatable Models®</h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Deliver Enduring Success</h1>
                    <p className="leading-relaxed">Successful companies build Repeatable Models with well-defined core differentiation.</p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/3 sm:w-1/2 p-4">
                <div className="flex relative">
                  <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={read} />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-sm title-font font-medium uppercase text-indigo-500 mb-1">Achieve sustained growth</h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Tailored solutions to help clients</h1>
                    <p className="leading-relaxed">We begin by helping clients choose where to focus so they can outsmart their competitors.</p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/3 sm:w-1/2 p-4">
                <div className="flex relative">
                  <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={read} />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-sm title-font font-medium uppercase text-indigo-500 mb-1">creative solutions</h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Offering you more creative solutions</h1>
                    <p className="leading-relaxed">Our intimate sector knowledge and clear insights help create value in your business.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
         
    </div>
  )
}

export default BannerTwo