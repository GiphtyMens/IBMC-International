import React from 'react'
import {Link} from "react-router-dom"

const BannerOne = () => {
  return (
    <div>
         
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Services We Offer</h1>
              <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">IBMC was founded with the prime focus to providing financial, tax, assurancement advisory services to companies.</p>
            </div>
            <div className="flex flex-wrap -m-4">
              <div className="xl:w-1/3 md:w-1/2 p-4">
                <div className="border border-gray-200 p-6 rounded">
                  <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-blue-800 mb-4">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Audit & Assurance</h2>
                  <p className="leading-relaxed text-base">At IBMC, we focus on delivering quality audit that gives maximum assurance to investors.</p>
                </div>
              </div>
              <div className="xl:w-1/3 md:w-1/2 p-4">
                <div className="border border-gray-200 p-6 rounded">
                  <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-blue-800 mb-4">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                      <circle cx="6" cy="6" r="3"></circle>
                      <circle cx="6" cy="18" r="3"></circle>
                      <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                    </svg>
                  </div>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Tax Advisory</h2>
                  <p className="leading-relaxed text-base">We assist clients’ handle Direct tax, and Indirect tax (VAT/NHIL), Tax audits and filing tax returns with the GRA.</p>
                </div>
              </div>
              <div className="xl:w-1/3 md:w-1/2 p-4">
                <div className="border border-gray-200 p-6 rounded">
                  <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-blue-800 mb-4">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Accounting & Payroll Management</h2>
                  <p className="leading-relaxed text-base">IBMC offer fully outsourced payroll services to clients where we manage salary payments including P.A.Y.E & SSNIT (1st & 2nd tier) payment.</p>
                </div>
              </div>
              <div className="xl:w-1/3 md:w-1/2 p-4">
                <div className="border border-gray-200 p-6 rounded">
                  <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"></path>
                    </svg>
                  </div>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Business Planning & Proposal Development</h2>
                  <p className="leading-relaxed text-base">At IBMC, we take time to understand our clients’ business idea and concepts, research and apply our cross industry experience to craft a realistic business plan.</p>
                </div>           </div>
              <div className="xl:w-1/3 md:w-1/2 p-4">
                <div className="border border-gray-200 p-6 rounded">
                  <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-blue-800 mb-4">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                      <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
                    </svg>
                  </div>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Market Research, Feasibility Studies & Market Representation</h2>
                  <p className="leading-relaxed text-base">We employ qualitative and quantitative research methods in extracting market information to help companies willing to enter any industry within the Ghanaian market.</p>
                </div>
              </div>
              <div className="xl:w-1/3 md:w-1/2 p-4">
                <div className="border border-gray-200 p-6 rounded">
                  <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-blue-800 mb-4">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                  </div>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Financial Engineering & Project Management 
</h2>
                  <p className="leading-relaxed text-base">We provide you with financial projections, and business valuation services that help re-engineer your financials to fairly represent your company’s worth considering its historical numbers, situation analysis and future prospects.</p>
                </div>
              </div>
            </div>
            <Link to="services">
                <button className="flex mx-auto mt-16 text-white bg-blue-800 border-0 py-2 px-8 focus:outline-none hover:bg-blue-700 rounded text-lg">Read more</button>
            </Link>
          </div>
        </section>
         
    </div>
  )
}

export default BannerOne