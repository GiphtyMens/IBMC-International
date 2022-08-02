import React from 'react'

const BannerZero = () => {
  return (
    <div>
        
       <section className="text-gray-600 body-font">
         <div className=" px-5 py-24 mx-auto">
           <div className="flex flex-col text-center w-full mb-20">
             <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1"></h2>
             <h1 className="sm:text-3xl text-2xl mb-[-2rem] font-medium title-font text-gray-800">OUR CORE VALUES</h1>
           </div>
           {/* <div className="flex m-4 lg:w-full md:w-full"> */}
           <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 xl:px-20 px-6 py-8 gap-6">
             <div className="p-4 lg:w-full md:w-[50%]">
               <div className="flex h-full bg-gray-100 p-4 flex-col">
                 <div className="flex items-center mb-3">
                   <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                     <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                       <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                     </svg>
                   </div>
                   <h2 className="text-gray-900 text-lg title-font font-medium">Integrity</h2>
                 </div>
                 <div className="flex-grow">
                   <p className="leading-relaxed text-base">This is the foundation on which we build relationships and trust to deliver professionally excellent financial, tax, and management consulting services.</p>
                 </div>
               </div>
             </div>
             <div className="p-4 lg:w-full md:w-[50%]">
               <div className="flex h-full bg-gray-100 p-4 flex-col">
                 <div className="flex items-center mb-3">
                   <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                     <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                       <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                       <circle cx="12" cy="7" r="4"></circle>
                     </svg>
                   </div>
                   <h2 className="text-gray-900 text-lg title-font font-medium">Innovation</h2>
                 </div>
                 <div className="flex-grow">
                   <p className="leading-relaxed text-base">This is what allows us to learn, and from it, we iterate, adapt and generate new ideas. We adopt a modern approach to help solve your corporate challenges.</p>
                 </div>
               </div>
             </div>
             <div className="p-4 lg:w-full md:w-[50%]">
               <div className="flex h-full bg-gray-100 p-4 flex-col">
                 <div className="flex items-center mb-3">
                   <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                     <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                       <circle cx="6" cy="6" r="3"></circle>
                       <circle cx="6" cy="18" r="3"></circle>
                       <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                     </svg>
                   </div>
                   <h2 className="text-gray-900 text-lg title-font font-medium">Professionalism</h2>
                 </div>
                 <div className="flex-grow">
                   <p className="leading-relaxed text-base">Professional values are our guiding beliefs and principles that influence our work behaviour and Commitments for consistency and excellent service delivery.</p>
                 </div>
               </div>
             </div>
             <div className="p-4 lg:w-full md:w-[50%]">
               <div className="flex h-full bg-gray-100 p-4 flex-col">
                 <div className="flex items-center mb-3">
                   <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                     <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                       <circle cx="6" cy="6" r="3"></circle>
                       <circle cx="6" cy="18" r="3"></circle>
                       <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                     </svg>
                   </div>
                   <h2 className="text-gray-900 text-lg title-font font-medium">Value</h2>
                 </div>
                 <div className="flex-grow">
                   <p className="leading-relaxed text-base">We make sure our encounter with clients; yield the expected results on time.  We focus on bringing value to clients in all our engagements.</p>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </section>
        
         
    </div>
  )
}

export default BannerZero