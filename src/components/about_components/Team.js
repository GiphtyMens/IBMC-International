import React from 'react'
import head114 from "../../assets/img/enoch.png"
import image1 from "../../assets/img/owusu.png"
import img4 from "../../assets/img/shaddy.png"
import franka from "../../assets/img/franka.png"
import steph from "../../assets/img/steve.png"

const Team = () => {
  return (
    <div>
         <div className="mb-0">
            <dh-component>
                <div className="container flex justify-center mx-auto pt-16">
                    <div>
                        <p className="text-gray-500 dark:text-gray-200 text-lg text-center font-normal pb-3">OUR TEAM</p>
                        <h1 className="xl:text-4xl text-3xl text-center text-gray-800 dark:text-white font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">The Talented People Behind the Scenes of the Organization</h1>
                    </div>
                </div>
                <div className="w-full bg-gray-100 dark:bg-gray-800 px-10 pt-10">
                    <div className="container mx-auto">
                        <div role="list" aria-label="Behind the scenes People " className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around">
                            <div role="listitem" className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                                <div className="rounded overflow-hidden shadow-md bg-white dark:bg-gray-900">
                                    <div className="absolute -mt-20 w-full flex justify-center">
                                        <div className="h-44 w-32">
                                            <img src={head114} alt="" role="img" className="rounded-full border-none object-cover h-full w-full shadow-md" />
                                        </div>
                                    </div>
                                    <div className="px-6 mt-28">
                                        <h1 className="font-bold dark:text-white text-3xl text-center mb-1">Lomo E. Dameteye</h1>
                                        <p className="text-gray-800 dark:text-white text-sm text-center">Founding Partner</p>
                                        <p className="text-center text-gray-600 dark:text-gray-200 text-base pt-3 font-normal">An entrepreneur and accountant by profession with over 10 years' cross industry experience in external audit, accounting, strategy, business planning & proposal development, corporate market research and management consulting.</p>
                                        <div className="w-full flex justify-center pt-5 pb-5">
                                            <a href="javascript:void(0)" className="mx-5">
                                                <div aria-label="Github" role="img">
                                                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg1.svg" alt="github" />
                                                </div>
                                            </a>
                                            <a href="javascript:void(0)" className="mx-5">
                                                <div aria-label="Twitter" role="img">
                                                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg2.svg" alt="twitter" />
                                                </div>
                                            </a>
                                            <a href="javascript:void(0)" className="mx-5">
                                                <div aria-label="Instagram" role="img">
                                                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg3.svg" alt="instagram" />
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div role="listitem" className="xl:w-1/3 lg:mx-3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                                <div className="rounded overflow-hidden shadow-md bg-white dark:bg-gray-900">
                                    <div className="absolute -mt-20 w-full flex justify-center">
                                        <div className=" h-44 w-32">
                                            <img src={image1} alt="" role="img" className="rounded-full object-cover h-full w-full shadow-md" />
                                        </div>
                                    </div>
                                    <div className="px-6 mt-28">
                                        <h1 className="font-bold dark:text-white text-3xl text-center mb-1">Frank Owusu Ansah</h1>
                                        <p className="text-gray-800 dark:text-white text-sm text-center">Senior Partner</p>
                                        <p className="text-center text-gray-600 dark:text-gray-200 text-base pt-3 font-normal">Frank is a senior partner at IBMC International, with over 15 years’ experience in assisting Ghana based companies in driving strong growth and building global businesses through strategic expansion and partnerships.</p>
                                        <div className="w-full flex justify-center pt-5 pb-5">
                                            <a href="javascript:void(0)" className="mx-5">
                                                <div aria-label="Github" role="img">
                                                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg1.svg" alt="github" />
                                                </div>
                                            </a>
                                            <a href="javascript:void(0)" className="mx-5">
                                                <div aria-label="Twitter" role="img">
                                                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg2.svg" alt="twitter" />
                                                </div>
                                            </a>
                                            <a href="javascript:void(0)" className="mx-5">
                                                <div aria-label="Instagram" role="img">
                                                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg3.svg" alt="instagram" />
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div role="listitem" className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                                <div className="rounded overflow-hidden shadow-md bg-white dark:bg-gray-900">
                                    <div className="absolute -mt-20 w-full flex justify-center">
                                        <div className="h-44 w-32">
                                            <img src={img4} alt="Display Picture of Johnson Stone" role="img" className="rounded-full object-cover h-full w-full shadow-md" />
                                        </div>
                                    </div>
                                    <div className="px-6 mt-28">
                                        <h1 className="font-bold dark:text-white text-3xl text-center mb-1">Shadrach Dameteye</h1>
                                        <p className="text-gray-800 dark:text-white text-sm text-center">IT Consultant</p>
                                        <p className="text-center text-gray-600 dark:text-gray-200 text-base pt-3 font-normal">Resourceful Developer with 11+ years of experience in designing and developing user interfaces, testing and training employees. Skilled at utilizing a wide variety of tools and programs to provide effective applications.</p>
                                        <div className="w-full flex justify-center pt-5 pb-5">
                                            <a href="javascript:void(0)" className="mx-5">
                                                <div aria-label="Github" role="img">
                                                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg1.svg" alt="github" />
                                                </div>
                                            </a>
                                            <a href="javascript:void(0)" className="mx-5">
                                                <div aria-label="Twitter" role="img">
                                                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg2.svg" alt="twitter" />
                                                </div>
                                            </a>
                                            <a href="javascript:void(0)" className="mx-5">
                                                <div aria-label="Instagram" role="img">
                                                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg3.svg" alt="instagram" />
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div role="listitem" className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                                <div className="rounded overflow-hidden shadow-md bg-white dark:bg-gray-900">
                                    <div className="absolute -mt-20 w-full flex justify-center">
                                        <div className="h-44 w-32">
                                            <img src={franka} alt="Display Picture of Dean Jones" role="img" className="rounded-full object-cover h-full w-full shadow-md" />
                                        </div>
                                    </div>
                                    <div className="px-6 mt-28">
                                        <h1 className="font-bold dark:text-white text-3xl text-center mb-1">Francisca Yarley Yartey</h1>
                                        <p className="text-gray-800 dark:text-white text-sm text-center">Snr. Associate</p>
                                        <p className="text-center text-gray-600 dark:text-gray-200 text-base pt-3 font-normal">Ms. Yartey is an experienced accountant and associate consultant at IBMC INTERNATIONAL with over 5 years’ experience in offering client accounting and financial management services</p>
                                        <div className="w-full flex justify-center pt-5 pb-5">
                                            <a href="javascript:void(0)" className="mx-5">
                                                <div aria-label="Github" role="img">
                                                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg1.svg" alt="github" />
                                                </div>
                                            </a>
                                            <a href="javascript:void(0)" className="mx-5">
                                                <div aria-label="Twitter" role="img">
                                                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg2.svg" alt="twitter" />
                                                </div>
                                            </a>
                                            <a href="javascript:void(0)" className="mx-5">
                                                <div aria-label="Instagram" role="img">
                                                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg3.svg" alt="instagram" />
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div role="listitem" className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                                <div className="rounded overflow-hidden shadow-md bg-white dark:bg-gray-900">
                                    <div className="absolute -mt-20 w-full flex justify-center">
                                        <div className="h-44 w-32">
                                            <img src={steph} alt="Display Picture of Rachel Adams" role="img" className="rounded-full object-cover h-full w-full shadow-md" />
                                        </div>
                                    </div>
                                    <div className="px-6 mt-28">
                                        <h1 className="font-bold dark:text-white text-3xl text-center mb-1">Stephen Odoi Yemoh</h1>
                                        <p className="text-gray-800 dark:text-white text-sm text-center">SNR. ASSOCIATE</p>
                                        <p className="text-center text-gray-600 dark:text-gray-200 text-base pt-3 font-normal">Stephen is an associate tax consultant of IBMC INTERNATIONAL with over 5 years’ experience in audit, tax advisory and in developing simplified accounting systems for our SME clients across Ghana.</p>
                                        <div className="w-full flex justify-center pt-5 pb-5">
                                            <a href="javascript:void(0)" className="mx-5">
                                                <div aria-label="Github" role="img">
                                                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg1.svg" alt="github" />
                                                </div>
                                            </a>
                                            <a href="javascript:void(0)" className="mx-5">
                                                <div aria-label="Twitter" role="img">
                                                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg2.svg" alt="twitter" />
                                                </div>
                                            </a>
                                            <a href="javascript:void(0)" className="mx-5">
                                                <div aria-label="Instagram" role="img">
                                                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg3.svg" alt="instagram" />
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div role="listitem" className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                                <div className="rounded overflow-hidden shadow-md bg-white dark:bg-gray-900">
                                    <div className="absolute -mt-20 w-full flex justify-center">
                                        <div className="h-44 w-32">
                                            <img src={img4} alt="Display Picture of Charles Keith" role="img" className="border-none rounded-full object-cover h-full w-full shadow-md" />
                                        </div>
                                    </div>
                                    <div className="px-6 mt-28">
                                        <h1 className="font-bold dark:text-white text-3xl text-center mb-1">Shadrach Dameteye</h1>
                                        <p className="text-gray-800 dark:text-white text-sm text-center">IT Consultant</p>
                                        <p className="text-center text-gray-600 dark:text-gray-200 text-base pt-3 font-normal">Resourceful Developer with 11+ years of experience in designing and developing user interfaces, testing and training employees. Skilled at utilizing a wide variety of tools and programs to provide effective applications.</p>
                                        <div className="w-full flex justify-center pt-5 pb-5">
                                            <a href="javascript:void(0)" className="mx-5">
                                                <div aria-label="Github" role="img">
                                                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg1.svg" alt="github" />
                                                </div>
                                            </a>
                                            <a href="javascript:void(0)" className="mx-5">
                                                <div aria-label="Twitter" role="img">
                                                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg2.svg" alt="twitter" />
                                                </div>
                                            </a>
                                            <a href="javascript:void(0)" className="mx-5">
                                                <div aria-label="Instagram" role="img">
                                                   <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg3.svg" alt="instagram" />
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </dh-component>
        </div>
    </div>
  )
}

export default Team