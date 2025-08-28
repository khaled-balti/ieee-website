import React from 'react'
import DarkBg from '../../assets/dark-bg.jpg'
import HeaderImage from '../../assets/heading-bg.jpg'
import { HiTrophy } from "react-icons/hi2";
import { formatDate } from '../../helper/formatDate';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { Cloudinary } from '@cloudinary/url-gen/index';
import { AdvancedImage } from '@cloudinary/react';
const Awards = ({isHome}) => {
    const cld = new Cloudinary({ cloud: { cloudName: import.meta.env.VITE_API_URL } });
    const AwardsImage = cld.image("awards_ckp4ry");
    const awards = [
        {
            id: 1,
            title: "WIE CREATIVE STAR",
            description: "We're honored to be named the WIE Creative Star as part of the IEEE Tunisia Section Spotlight Series! This recognition reflects the dedication, passion, and creativity of our entire WIE ISSATM SAG family. Thank you to the IEEE Tunisia SAC for this spotlight - it motivates us to keep pushing boundaries and inspiring change through innovation and teamwork.",
            image: AwardsImage,
            date: "06/07/2025"
        }
    ]
  return (
    <div>
            <div className={`relative w-full ${isHome ?  'py-20' : 'py-22'} ${isHome ? '' : 'pt-32'} ${isHome ? '' : '-mt-[140px]'} flex justify-center items-center`}>
                                    <img src={HeaderImage} className="absolute inset-0 w-full h-full object-cover -z-10" alt="Background" />
                                    <div className="absolute inset-0 bg-opacity-40"></div>
                                    <div className='py-8'>
                                        <div className='flex justify-center mb-6'>
                                            <div className='flex justify-center items-center p-8 rounded-full bg-[#503EC8] shadow-[0_8px_40px_#503EC8]'>
                                                <HiTrophy className='text-4xl text-white' />
                                            </div>
                                        </div>
                                        <p className='text-4xl lg:text-6xl font-bold text-center text-white mb-10'>Our Awards</p>
                                        <p className=' text-xl lg:text-3xl text-center text-white px-4 md:px-20 lg:px-40'>Our journey of excellence and recognition in the IEEE WIE</p>
                                    </div>
                                </div>
            <div className="relative w-full pt-10 flex flex-col justify-center items-center pb-10">
                <img src={DarkBg} className="absolute inset-0 w-full h-full object-cover -z-10" alt="Background" />
                <div className=' px-4 lg:px-40'>
                    {awards.map(award => <div key={award?.id} className='grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-16 overflow-hidden'>
                        <div className="lg:h-[400px]">
                            <AdvancedImage
                            cldImg={award?.image}
                            alt="error"
                            className="h-full w-full object-fit rounded-2xl"
                            />
                        </div>
                        <div>
                            <p className='text-white text-4xl font-semibold mb-10'>{award?.title}</p>
                            <p className='text-white text-lg xl:text-xl mb-10'>{award?.description}</p>
                             <div className='flex space-x-6'>
                                <FaRegCalendarAlt className='text-2xl text-white' />
                                <p className='text-white text-lg'>{formatDate(award?.date)}</p>
                            </div>
                        </div>
                    </div>)}
                </div>
            </div>
        </div>
  )
}

export default Awards
