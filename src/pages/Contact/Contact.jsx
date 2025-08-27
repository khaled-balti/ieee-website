import React from 'react'
import HeaderImage from '../../assets/heading-bg.jpg'
import DarkBg from '../../assets/dark-bg.jpg'
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaMailBulk, FaPhone } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
const Contact = ({isHome}) => {
  return (
        <div>
            <div className={`relative w-full ${isHome ?  'py-20' : 'py-22'} ${isHome ? '' : 'pt-32'} ${isHome ? '' : '-mt-[130px]'} flex justify-center items-center`}>
                                    <img src={HeaderImage} className="absolute inset-0 w-full h-full object-cover -z-10" alt="Background" />
                                    <div className="absolute inset-0 bg-opacity-40"></div>
                                    <div className='py-8'>
                                        <div className='flex justify-center mb-6'>
                                            <div className='flex justify-center items-center p-8 rounded-full bg-[#503EC8] shadow-[0_8px_40px_#503EC8]'>
                                                <FaPhone className='text-4xl text-white' />
                                            </div>
                                        </div>
                                        <p className='text-4xl lg:text-6xl font-bold text-center text-white mb-10'>Contact Us</p>
                                        <p className=' text-xl lg:text-3xl text-center text-white px-4 md:px-20 lg:px-40'>Do you have questions?  Would you like to join IEEE WIE ISSATM? Feel free to contact us, we would be happy to help you.</p>
                                    </div>
                                </div>
                                <div className="relative w-full py-16 flex justify-center items-center">
  <img
    src={DarkBg}
    className="absolute inset-0 w-full h-full object-cover -z-10"
    alt="Background"
  />
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 w-full px-4 md:px-10 lg:px-40 gap-y-20">
    {/* Contacts */}
    <div className="flex flex-col items-center md:block">
  {/* Title */}
  <div className="text-white mb-8 text-3xl font-semibold">
    Our Contacts
  </div>

  {/* Contact Info */}
  <div className="flex flex-col items-center md:block w-full max-w-md space-y-6">
  {/* Email */}
  <div className="flex flex-col md:flex-row items-center space-y-2 space-x-3">
    <div className="p-4 rounded-full bg-[#8359FC] text-white shadow-[0_8px_40px_#8359FC]">
      <FaEnvelope className="text-2xl" />
    </div>
    <div className="text-white font-semibold text-lg md:text-xl text-center break-words">
      sba-issatm-wie@ieee.org
    </div>
  </div>

  {/* Phone */}
  <div className="flex flex-col md:flex-row items-center space-y-2 space-x-3">
    <div className="p-4 rounded-full bg-[#8359FC] text-white shadow-[0_8px_40px_#8359FC]">
      <FaPhone className="text-2xl" />
    </div>
    <div className="text-white font-semibold text-lg md:text-xl text-center">
      +216 99 109 616
    </div>
  </div>

  {/* Location */}
  <div className="flex flex-col md:flex-row items-center space-y-2 space-x-3">
    <div className="p-4 rounded-full bg-[#8359FC] text-white shadow-[0_8px_40px_#8359FC]">
      <FaLocationDot className="text-2xl" />
    </div>
    <div className="text-white font-semibold text-lg md:text-xl text-center break-words">
      ISSATM Mater, Bizerte Tunisia
    </div>
  </div>

    {/* Social Media */}
    <div className="text-white mb-6 text-3xl font-semibold text-center md:text-start mt-6">
      Our Social Media
    </div>
    <div className="flex flex-wrap justify-center md:justify-start gap-6">
      <a
        href="https://www.facebook.com/profile.php?id=61556801021082&sk=about"
        target="_blank"
        rel="noopener noreferrer"
        className="p-4 rounded-full bg-[#8359FC] text-white shadow-[0_8px_40px_#8359FC]"
      >
        <FaFacebook className="text-2xl" />
      </a>
      <a
        href="https://www.instagram.com/wie.issatm/"
        target="_blank"
        rel="noopener noreferrer"
        className="p-4 rounded-full bg-[#8359FC] text-white shadow-[0_8px_40px_#8359FC]"
      >
        <FaInstagram className="text-2xl" />
      </a>
      <a
        href="https://www.linkedin.com/company/ieee-women-in-engineering-issatm-student-branch-affinity-group/"
        target="_blank"
        rel="noopener noreferrer"
        className="p-4 rounded-full bg-[#8359FC] text-white shadow-[0_8px_40px_#8359FC]"
      >
        <FaLinkedin className="text-2xl" />
      </a>
    </div>
  </div>
</div>


    {/* Location */}
    <div className="flex flex-col items-center lg:items-start">
      <div className="text-white mb-6 text-3xl font-semibold text-center lg:text-left">
        Our Location
      </div>
      <div className="rounded-xl overflow-hidden w-full h-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1833.6530775022695!2d9.644510902276805!3d37.04514948646331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e330c578772e8f%3A0x663e0b2d2dd68273!2sInstitut%20Sup%C3%A9rieur%20des%20Sciences%20Appliqu%C3%A9es%20et%20Technologiques%20de%20Mateur!5e0!3m2!1sfr!2stn!4v1756119775917!5m2!1sfr!2stn"
          className="w-full h-[600px] lg:h-full"
          width="700"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </div>
</div>
</div>

  )
}

export default Contact
