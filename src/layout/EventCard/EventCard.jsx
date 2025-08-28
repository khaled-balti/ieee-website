import React, { useEffect, useState } from 'react'
import { formatDate } from '../../helper/formatDate';
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FiUsers } from "react-icons/fi";
import Modal from '../Modal/Modal';
import { AdvancedImage, AdvancedVideo } from '@cloudinary/react';
const EventCard = ({event}) => {
    const [isOpen, setIsOpen] = useState(false)
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
      const checkScreen = () => setIsSmallScreen(window.innerWidth < 768);
      checkScreen();
      window.addEventListener("resize", checkScreen);
      return () => window.removeEventListener("resize", checkScreen);
    }, []);
  return (
    <div className="relative rounded-xl overflow-hidden border-2 border-[#4A35A1] shadow-[0_8px_40px_#4A35A1] flex">
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
            <h1 className="text-white font-semibold text-xl md:text-4xl text-center">{event?.title}</h1>
            <p className="text-white text-md md:text-xl mt-10 text-center">{event?.description}</p>

            {event?.gallery.length > 0 && (
                <div className="px-4 md:px-10 mt-10 flex flex-col gap-10">
                {event?.gallery.map((media) => (
                    <div key={media?.id} className="rounded-xl overflow-hidden">
                    {media?.type === "image" ? (
                        <a href={media?.media?.toURL()} target={isSmallScreen ? "_self" : "_blank"} rel="noopener noreferrer">
                        <AdvancedImage
                            cldImg={media?.media}
                            className={`rounded-xl w-full object-cover ${
                            media?.size
                                ? "h-auto md:h-[600px] lg:h-[800px]"
                                : "h-auto md:h-[400px] lg:h-[600px]"
                            }`}
                            style={{ maxHeight: "80vh" }}
                        />
                        </a>
                    ) : (
                        <div className="rounded-xl overflow-hidden border-2 border-white">
                            <AdvancedVideo
                                cldVid={media?.media}
                                controls
                                controlsList="nodownload"
                                playsInline
                                className="rounded-xl w-full h-[200px] md:h-[400px] lg:h-[600px] object-cover"
                                style={{ outline: "none" }}
                            />
                        </div>

                    )}

                    {media?.description && <p className="text-white text-md md:text-xl mt-4">{media?.description}</p>}
                    </div>
                ))}
                </div>
            )}

            {event?.gallery.length === 0 && (
                <div className="rounded-xl bg-[#444] flex justify-center items-center text-4xl text-white font-semibold mt-10 h-[70%]">
                No Images
                </div>
            )}
        </Modal>

      {/* Image */}
      <div className="w-1/3">
        <AdvancedImage
          cldImg={event?.image}
          alt="error"
          className="object-cover w-full h-full rounded-lg"
        />
      </div>

      {/* Card Content */}
      <div className=" relative px-4 md:px-8 py-2 md:py-6 flex flex-col w-2/3">
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
        <p className='text-white text-xl md:text-3xl font-semibold mb-4'>{event?.title}</p>
        {event?.description && <p className='text-white text-md mb-2 md:mb-8 line-clamp-2 md:line-clamp-3'>{event?.description}</p>}
        <div className='md:px-6'>
            <div className='flex space-x-2 md:space-x-6'>
                <FaRegCalendarAlt className='text-xl md:text-2xl text-white' />
                {event?.date ? <p className='text-white text-md md:text-lg'>{formatDate(event?.date[0])} {event?.date.length === 2 && '-'} {event?.date.length === 2 && formatDate(event?.date[1])}</p> : <p className='text-white text-lg'>coming soon ...</p>}
            </div>
            <div className='flex space-x-2 md:space-x-6 mt-3'>
                <FaLocationDot className='text-xl md:text-2xl text-white ' />
                <p className='text-white text-md md:text-lg'>{event?.place ? event?.place : "unmentioned"}</p>
            </div>
            {event?.participants && <div className='flex space-x-2 md:space-x-6 mt-3'>
                <FiUsers className='text-wl md:text-2xl text-white ' />
                <p className='text-white ttext-md md:text-lg'>+{event?.participants} <span className='hidden md:inline'>participants</span></p>
            </div>}
            {event?.date && new Date(event?.date[event?.date.length === 1 ? 0 : 1].split("/").reverse().join("-")) < new Date() && <button className="cursor-pointer rounded-3xl border border-[#7453FC] px-4 py-2 text-white text-sm md:text-md font-semibold bg-[#7453FC] mt-2 md:mt-4" onClick={() => setIsOpen(true)} >
                More Details
            </button>}
        </div>
      </div>
    </div>
  )
}

export default EventCard
