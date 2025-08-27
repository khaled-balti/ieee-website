import React from 'react'
import Bgimage from '../../assets/banner-bg.jpg'
import ImageCarousel from '../Carousel/Carousel'

const Landing = () => {
  return (
    <div className="relative w-full lg:h-[100vh] pt-0 lg:pt-32 -mt-[130px] flex justify-center items-center">
      <img src={Bgimage} className="absolute inset-0 w-full h-full object-cover -z-10" alt="Background" />
      <div className="absolute inset-0 bg-opacity-40"></div> {/* Added overlay for better text visibility */}
      <div className="relative z-10 container mx-auto px-8 py-20">
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 -mt-0 items-center'>
          <div className='mt-[150px] flex flex-col text-white lg:-mt-20'>
            <h1 className='font-bold text-4xl md:text-6xl mb-8 leading-tight'>IEEE WIE ISSATM Affinity Group</h1>
            <p className='text-3xl mb-8 max-w-xl'>
              Empowering women in engineering and technology through innovation, leadership, and community
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              {/* <button className="rounded-3xl border border-[#7453FC] cursor-pointer px-6 py-3 text-white text-md font-semibold hover:bg-[#7453FC] transition-colors">
                Check Our Events
              </button> */}
              <button className="cursor-pointer rounded-3xl border border-[#7453FC] px-6 py-3 text-white text-md font-semibold bg-[#7453FC] ">
                How To Do Membership
              </button>
            </div>
          </div>
          <div className='flex justify-center items-center'>
            <ImageCarousel/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing
