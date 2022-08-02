import React from 'react'
import img from "../../assets/img/group.jpg"

const Banner = () => {
  return (
    <div > 
       
      <section className="text-gray-50 body-font bg-gray-800">
        <div className="container px-10 py-18 mx-auto flex flex-wrap">
          <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
            <div className="w-full sm:p-4 px-4 mb-6">
              <h1 className="title-font font-medium text-xl mb-2 text-gray-50">Multi-Year Engagement</h1>
              <div className="leading-relaxed text-sm">All works are reviewed by an authorized professional which means our engagements with our client will be reviewed by the engagement manager to ensure that working papers and supporting documentation is adequate to support the final product delivered in accordance with any corresponding professional standards as well as our own internal quality control standards.</div>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 className="title-font font-medium text-3xl text-gray-50">100+</h2>
              <p className="leading-relaxed">Clients</p>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 className="title-font font-medium text-3xl text-gray-50">1.8K</h2>
              <p className="leading-relaxed">Subscribes</p>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 className="title-font font-medium text-3xl text-gray-50">100+</h2>
              <p className="leading-relaxed">Projects</p>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 className="title-font font-medium text-3xl text-gray-50">  4</h2>
              <p className="leading-relaxed">Awards</p>
            </div>
          </div>
          <div className="lg:w-1/2 sm:w-1/3 w-full rounded overflow-hidden items-center sm:mt-0">
            <img className="object-cover object-center w-full mt-[5rem] h-3/5" src={img} alt="stats" />
          </div>
        </div>
      </section>
       
    </div>
  )
}

export default Banner