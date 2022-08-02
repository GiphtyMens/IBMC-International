import React from 'react'
import img1 from "../../assets/img/img1.jpg"
import img2 from "../../assets/img/img2.jpg"
import img3 from "../../assets/img/img3.png"
import img5 from "../../assets/img/img5.jpg"
import img6 from "../../assets/img/img6.png"
import img7 from "../../assets/img/img7.jpg"
import img8 from "../../assets/img/img8.png"
import img9 from "../../assets/img/img9.jpg"
import img10 from "../../assets/img/img10.png"
import img15 from "../../assets/img/img15.jpg"
import img14 from "../../assets/img/img14.jpg"
import img13 from "../../assets/img/img13.png"

const Portfolios = () => {
  return (
    <div>
           
          <div className="w-full bg-black mx-auto pt-8">
            <div className="w-full sm:p-4 px-4">
              <h1 className="title-font font-medium text-center text-white text-xl mb-2 text-gray-80">OUR CLIENTS PORTFOLIO</h1>
              <div className="leading-relaxed text-white text-center">Below is the list of some prestigious clients we have worked for</div>
            </div>
              <div className="xl:py-8 lg:py-18 md:py-18 sm:py-18 px-15 pb-4 flex justify-evenly">
                  <div className="w-6/12 xl:w-1/6 lg:w-1/6 md:w-1/6 flex justify-center xl:border-b xl:pb-10 items-center">
                      <img tabindex="0" className="focus:outline-none w-20" src={img1} alt="Adidas" role="img" />
                  </div>
                  <div className="w-6/12 xl:w-1/6 lg:w-1/6 md:w-1/6 flex justify-center xl:pb-10 items-center">
                      <img tabindex="0" className="focus:outline-none w-20" src={img2} alt="Chanel" role="img" />
                  </div>
                  <div className="w-6/12 xl:w-1/6 lg:w-1/6 md:w-1/6 flex justify-center xl:pb-10 pt-4 items-center">
                      <img tabindex="0" className="focus:outline-none w-20" src={img3} alt="Nike" role="img" />
                  </div>
                  <div className="w-6/12 xl:w-1/6 lg:w-1/6 md:w-1/6 flex justify-center xl:pb-10 items-center">
                      <img tabindex="0" className="focus:outline-none w-20" src={img5} alt="Toyota" role="img" />
                  </div>
                  <div className="w-6/12 xl:w-1/6 lg:w-1/6 md:w-1/6 flex justify-center xl:border-b xl:pb-10 items-center">
                      <img tabindex="0" className="focus:outline-none w-20" src={img7} alt="Adidas" role="img" />
                  </div>
                  <div className="w-6/12 xl:w-1/6 lg:w-1/6 md:w-1/6 flex justify-center xl:border-b xl:pb-10 items-center">
                      <img tabindex="0" className="focus:outline-none w-20" src={img15} alt="Adidas" role="img" />
                  </div>
                  <div className="w-6/12 xl:w-1/6 lg:w-1/6 md:w-1/6 flex justify-center xl:border-b xl:pb-10 items-center">
                      <img tabindex="0" className="focus:outline-none w-20" src={img9} alt="Adidas" role="img" />
                  </div>
                  <div className="w-6/12 xl:w-1/6 lg:w-1/6 md:w-1/6 flex justify-center xl:border-b xl:pb-10 items-center">
                      <img tabindex="0" className="focus:outline-none w-20" src={img10} alt="Adidas" role="img" />
                  </div>
                  <div className="w-6/12 xl:w-1/6 lg:w-1/6 md:w-1/6 flex justify-center xl:border-b xl:pb-10 items-center">
                      <img tabindex="0" className="focus:outline-none w-20" src={img14} alt="Adidas" role="img" />
                  </div>
                  <div className="w-6/12 xl:w-1/6 lg:w-1/6 md:w-1/6 flex justify-center xl:border-b xl:pb-10 items-center">
                      <img tabindex="0" className="focus:outline-none w-20" src={img13} alt="Adidas" role="img" />
                  </div>
                  
              </div>
          </div>
           
    </div>
  )
}

export default Portfolios