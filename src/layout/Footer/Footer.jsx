import React from 'react'
import FooterBg from '../../assets/footer-bg.jpg'
import Icon1 from '../../assets/icon-01.png'
import Icon2 from '../../assets/icon-02.png'
import Icon3 from '../../assets/icon-03.png'
import { Link } from 'react-router-dom';
import { MdMailOutline } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <>
        <div className="relative w-full py-16 px-10 md:px-30 lg:px-60">
            <img src={FooterBg} className="absolute inset-0 w-full h-full object-cover -z-10" alt="Background" />
            <div className='bg-white h-0.5 w-24 mb-10 mx-auto md:mx-0'></div>
            <p className='text-white text-4xl font-semibold mb-16 text-center md:text-start'>IEEE WIE ISSATM AG</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10'>
                <div className='flex flex-col px-10 space-y-6 items-center md:items-start md:border-r-1 border-0 border-white'>
                    <div className='bg-white w-16 h-16 rounded-full flex justify-center items-center'>
                        <img src={Icon1} alt="error" />
                    </div>
                    <div className='text-white font-semibold text-2xl'>Description</div>
                    <div className='text-white text-lg'>The leading platform IEEE WIE ISSATM in Tunisia</div>
                    <div className='flex space-x-4'>
                        <div>
                            <a href='https://www.facebook.com/profile.php?id=61556801021082&sk=about' target='_blank'>
                                <FaFacebook className='text-3xl text-white' />
                            </a>
                        </div>
                        <div>
                            <a href='https://www.instagram.com/wie.issatm/' target='_blank'>
                                <FaInstagram className='text-3xl text-white' />
                            </a>
                        </div>
                        <div>
                            <a href='https://www.linkedin.com/company/ieee-women-in-engineering-issatm-student-branch-affinity-group/' target='_blank'>
                                <FaLinkedin className='text-3xl text-white' />
                            </a>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col px-10 space-y-6 items-center md:items-start lg:border-r-1 border-0 border-white pb-8'>
                    <div className='bg-white w-16 h-16 rounded-full flex justify-center items-center'>
                        <img src={Icon2} alt="error" />
                    </div>
                    <div className='text-white font-semibold text-2xl'>Quick Links</div>
                    <div className='grid grid-cols-2 gap-x-6 gap-y-2'>
                        <Link className='text-white font-semibold' to="/">Home</Link>
                        <Link className='text-white font-semibold' to="/about">About Us</Link>
                        <Link className='text-white font-semibold' to="/team">Our Team</Link>
                        <Link className='text-white font-semibold' to="/events">Events</Link>
                        <Link className='text-white font-semibold' to="/awards">Awards</Link>
                        <Link className='text-white font-semibold' to="/contact">Contact</Link>
                    </div>
                </div>
                <div className='flex flex-col px-10 space-y-6 pb-8 items-center md:items-start'>
                    <div className='bg-white w-16 h-16 rounded-full flex justify-center items-center'>
                        <img src={Icon3} alt="error" />
                    </div>
                    <div className='text-white font-semibold text-2xl'>Contacts</div>
                    <div>
                        <div className='text-white flex items-center space-x-2 font-semibold mb-4'>
                            <MdMailOutline />
                            <p>sba-issatm-wie@ieee.org</p>
                        </div>
                        <div className='text-white flex items-center space-x-2 font-semibold mb-4'>
                            <FiPhone/>
                            <p>+216 99 109 616</p>
                        </div>
                        <div className='text-white flex items-center space-x-2 font-semibold'>
                            <IoLocationOutline/>
                            <p>ISSATM Mater, Bizerte Tunisia</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="bg-[#9057F9] w-full text-white py-6 flex items-center justify-between px-2 md:px-10 lg:px-20">
            <p>© 2025 IEEE Tunisia Section. All Rights Reserved.</p>
            <p>Directed By Khawla Balti</p>
        </div>
    </>
  )
}

export default Footer
