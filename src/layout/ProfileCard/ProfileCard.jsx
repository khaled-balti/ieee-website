import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { AdvancedImage } from '@cloudinary/react';

const ProfileCard = ({ member }) => {
    const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    if (member?.email) {
      navigator.clipboard.writeText(member.email);
      setCopied(true);

      setTimeout(() => setCopied(false), 2000);
    }
  };
  return (
    <div className="relative rounded-xl overflow-hidden border-2 border-[#4A35A1] shadow-[0_8px_40px_#4A35A1] pb-4 flex flex-col">
      {/* Image */}
      <div className="p-6">
        <AdvancedImage
          cldImg={member?.image}
          alt="error"
          className="object-cover w-full rounded-lg h-80"
        />
      </div>

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

      {/* Card Content */}
      <div className="px-4 py-3 flex flex-col flex-grow">
        <div className="text-white font-semibold text-3xl mb-4 text-center">{`${member?.firstName} ${member?.lastName}`}</div>
        <div className="text-white font-semibold text-xl mb-4 text-center">
          {member?.post}
        </div>
        <hr className="border-0 h-[1px] bg-white opacity-50 my-4 mx-20" />
        <div className="text-xl text-white text-center">{member?.description}</div>

        {/* Push contacts to bottom */}
        <div className="flex justify-between mt-auto pt-6 px-8 md:px-16">
          <Link
            className="p-4 rounded-full text-white bg-[#4A35A1] shadow-[0_8px_40px_#4A35A1]"
            to={member?.facebook}
          >
            <FaFacebook className="text-3xl" />
          </Link>
          <button onClick={handleCopyEmail} className="cursor-pointer p-4 rounded-full text-white bg-[#4A35A1] shadow-[0_8px_40px_#4A35A1]">
            <SiGmail className="text-3xl" />
          </button>
          {member?.instagram && <Link
            className="p-4 rounded-full text-white bg-[#4A35A1] shadow-[0_8px_40px_#4A35A1]"
            to={member?.instagram}
          >
            <FaInstagram className="text-3xl" />
          </Link>}
          {member?.linkedin && <Link
            className="p-4 rounded-full text-white bg-[#4A35A1] shadow-[0_8px_40px_#4A35A1]"
            to={member?.linkedin}
          >
            <FaLinkedin className="text-3xl" />
          </Link>}
        </div>
      </div>
      {copied && (
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-[#4A35A1] text-white px-4 py-2 rounded-lg shadow-lg">
          Email copied!
        </div>
      )}
    </div>
  )
}

export default ProfileCard
