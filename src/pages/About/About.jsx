import React from 'react'
import { IoBook } from "react-icons/io5";
import HeaderImage from '../../assets/heading-bg.jpg'
import DarkBg from '../../assets/dark-bg.jpg'
import { FiTarget } from "react-icons/fi";
import { LuLightbulb } from "react-icons/lu";
import { MdOutlinePowerSettingsNew } from "react-icons/md";
import { RiUserAddFill } from "react-icons/ri";
import { IoPlanet } from "react-icons/io5";
import { MdOutlineWoman } from "react-icons/md";
import { GrResources } from "react-icons/gr";
import { Cloudinary } from '@cloudinary/url-gen/index';
import { AdvancedImage } from '@cloudinary/react';
const About = ({isHome}) => {
    const cld = new Cloudinary({ cloud: { cloudName: import.meta.env.VITE_API_URL } });
    const img = cld.image("docs/models-48");
  return (
    <div>
        <div className={`relative w-full ${isHome ?  'py-16' : 'py-22'} ${isHome ? '' : 'pt-32'} ${isHome ? '' : '-mt-[140px]'} flex justify-center items-center`}>
            <img src={HeaderImage} className="absolute inset-0 w-full h-full object-cover -z-10" alt="Background" />
            <div className="absolute inset-0 bg-opacity-40"></div>
            <div className='py-8'>
                <div className='flex justify-center mb-6'>
                    <div className='flex justify-center items-center p-8 rounded-full bg-[#503EC8] shadow-[0_8px_40px_#503EC8]'>
                        <IoBook className='text-4xl text-white' />
                    </div>
                </div>
                <p className='text-4xl lg:text-6xl font-bold text-center text-white mb-10'>About IEEE WIE ISSATM AG</p>
                <p className=' text-xl lg:text-3xl text-center text-white px-4 md:px-20 lg:px-40'>WIE ISSATM is a student affinity group at ISSATM that empowers women in engineering, promotes inclusion in STEM, and inspires future innovators.</p>
            </div>
        </div>
        <div className="relative w-full pt-32 pb-10">
            <img src={DarkBg} className="absolute inset-0 w-full h-full object-cover -z-10" alt="Background" />
            <div className="absolute inset-0 bg-opacity-40"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 px-4 md:px-20">
                {/* Image Card */}
                <div className="rounded-xl overflow-hidden border-2 border-[#4A35A1] shadow-[0_8px_40px_#4A35A1]">
                    <AdvancedImage cldImg={img} alt="error" className="w-full h-full object-cover" />
                </div>

                {/* Vision Card */}
                <div className="space-y-6">
                <div className='relative h-1/2 rounded-xl overflow-hidden border-2 border-[#4A35A1] shadow-[0_8px_40px_#4A35A1] py-8 px-12 flex flex-col justify-between'>
                        {/* Background Glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 -z-10">
                            <div
                            className="rounded-full"
                            style={{
                                backgroundColor: "#3E2DA6",
                                width: "10px",
                                height: "10px",
                                boxShadow: `
                                0px 0px 100px 100px #3E2DA6,
                                0px 0px 120px 120px #2A1C80
                                `,
                            }}
                            ></div>
                        </div>
                        <div className='w-14 h-14 md:w-20 md:h-20 flex justify-center items-center rounded-xl border-2 border-[#4A35A1] shadow-[0_8px_40px_#4A35A1] bg-[#4A35A1]'>
                            <FiTarget className='text-2xl md:text-4xl text-white' />
                        </div>
                        <p className='pl-8 text-center text-white font-semibold text-3xl md:text-4xl relative -top-14'>Our Vision</p>
                        <p className='text-center text-white text-xl relative -top-4'>To empower women in engineering and technology by fostering a global community that drives innovation, supports astronautics-inspired solutions, and advances AI for space exploration.</p>
                    </div>

                    <div className='relative h-1/2 rounded-xl overflow-hidden border-2 border-[#4A35A1] shadow-[0_8px_40px_#4A35A1] py-8 px-12 flex flex-col justify-between'>
                        {/* Background Glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 -z-10">
                            <div
                            className="rounded-full"
                            style={{
                                backgroundColor: "#3E2DA6",
                                width: "10px",
                                height: "10px",
                                boxShadow: `
                                0px 0px 100px 100px #3E2DA6,
                                0px 0px 120px 120px #2A1C80
                                `,
                            }}
                            ></div>
                        </div>
                        <div className='w-14 h-14 md:w-20 md:h-20 flex justify-center items-center rounded-xl border-2 border-[#4A35A1] shadow-[0_8px_40px_#4A35A1] bg-[#4A35A1]'>
                            <LuLightbulb className='text-2xl md:text-4xl text-white' />
                        </div>
                        <p className='pl-8 text-center text-white font-semibold text-3xl md:text-4xl relative -top-14'>Our Mission</p>
                        <p className='text-center text-white text-xl relative -top-4'>IEEE ISSATM WIE AG is committed to bridging the gender gap in STEM through cutting-edge projects, astronaut-focused AI innovations, and hands-on learning opportunities that inspire the next generation of space pioneers.</p>
                    </div>
                </div>
            </div>
                <div className='w-full px-0 md:px-10 lg:px-20'>
                <p className='text-white text-5xl font-semibold mb-10 pt-20 text-center lg:text-left'>What We Do ?</p>
                <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 px-4 md:px-0">
                    <div className='relative rounded-xl overflow-hidden border-2 border-[#4A35A1] shadow-[0_8px_40px_#4A35A1] py-8 px-4 md:px-12 flex flex-col justify-between text-white text-lg md:text-xl text-center'>
                        <div className='w-16 h-16 mb-6 mx-auto flex justify-center items-center rounded-xl border-2 border-[#4A35A1] shadow-[0_8px_40px_#4A35A1] bg-[#4A35A1]'>
                            <MdOutlinePowerSettingsNew className='text-3xl text-white' />
                        </div>
                        <p>Host workshops and hackathons on AI and astronautics</p>
                    </div>
                    <div className='relative rounded-xl overflow-hidden border-2 border-[#4A35A1] shadow-[0_8px_40px_#4A35A1] py-8 px-4 md:px-12 flex flex-col justify-between text-white text-lg md:text-xl  text-center'>
                        <div className='w-16 h-16 mb-6 mx-auto flex justify-center items-center rounded-xl border-2 border-[#4A35A1] shadow-[0_8px_40px_#4A35A1] bg-[#4A35A1]'>
                            <RiUserAddFill className='text-3xl text-white' />
                        </div>
                        <p>Collaborate with space industry leaders for mentorship</p>
                    </div>
                    <div className='relative rounded-xl overflow-hidden border-2 border-[#4A35A1] shadow-[0_8px_40px_#4A35A1] py-8 px-4 md:px-12 flex flex-col justify-between text-white text-lg md:text-xl  text-center'>
                        <div className='w-16 h-16 mb-6 mx-auto flex justify-center items-center rounded-xl border-2 border-[#4A35A1] shadow-[0_8px_40px_#4A35A1] bg-[#4A35A1]'>
                            <IoPlanet className='text-3xl text-white' />
                        </div>
                        <p>Develop AI-driven tools for astronaut missions</p>
                    </div>
                    <div className='relative rounded-xl overflow-hidden border-2 border-[#4A35A1] shadow-[0_8px_40px_#4A35A1] py-8 px-4 md:px-12 flex flex-col justify-between text-white text-lg md:text-xl  text-center'>
                        <div className='w-16 h-16 mb-6 mx-auto flex justify-center items-center rounded-xl border-2 border-[#4A35A1] shadow-[0_8px_40px_#4A35A1] bg-[#4A35A1]'>
                            <MdOutlineWoman className='text-3xl text-white' />
                        </div>
                        <p>Build a supportive network for women in tech</p>
                    </div>
                    <div className='relative rounded-xl overflow-hidden border-2 border-[#4A35A1] shadow-[0_8px_40px_#4A35A1] py-8 px-4 md:px-12 flex flex-col justify-between text-white text-lg md:text-xl  text-center'>
                        <div className='w-16 h-16 mb-6 mx-auto flex justify-center items-center rounded-xl border-2 border-[#4A35A1] shadow-[0_8px_40px_#4A35A1] bg-[#4A35A1]'>
                            <GrResources className='text-3xl text-white' />
                        </div>
                        <p>Provide resources for space tech skill development</p>
                    </div>
                </div>
                </div>
        </div>
    </div>
  )
}

export default About
