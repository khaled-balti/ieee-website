import React from 'react'
import HeaderImage from '../../assets/heading-bg.jpg'
import { GiQueenCrown } from "react-icons/gi";
import DarkBg from '../../assets/dark-bg.jpg'
import ProfileCard from '../../layout/ProfileCard/ProfileCard';
import { Cloudinary } from '@cloudinary/url-gen/index';
const Team = ({isHome}) => {
    const cld = new Cloudinary({ cloud: { cloudName: import.meta.env.VITE_API_URL } });
    const SalahKaroui = cld.image("docs/models");
    const Nidhal = cld.image("nidhal_sskj3h");
    const Iyed = cld.image("docs/models-51");
    const Maram = cld.image("maram_qak1c7");
    const Nour = cld.image("docs/models-62");
    const Hiba = cld.image("docs/models-44");

    const members = [
        {
            id: 2,
            firstName: "Nour",
            lastName: "Saidani",
            post: "CHAIRWOMAN",
            description: "Leading with vision and empowering women in engineering",
            facebook: "https://www.facebook.com/nour.saidani.161",
            image: Nour,
            email: "nour_saidani@ieee.org",
            instagram: "https://www.instagram.com/its_nooor__?igsh=MXJyOGFkY2JveWpoYg=="
        },
        {
            id: 3,
            firstName: "Iyed",
            lastName: "Mezlini",
            post: "VICE CHAIR",
            description: "Supporting leadership and driving innovation initiatives",
            facebook: "https://www.facebook.com/mohamed.iyad.mezlini",
            image: Iyed,
            email: "Mohamed_mezlini@ieee.org",
            instagram: "https://www.instagram.com/iyadmezlini?igsh=MWhqMDFlYXo0aDZ0MA=="
        },
        {
            id: 4,
            firstName: "Maram",
            lastName: "Ben Amara",
            post: "GENERAL SECRITARY",
            description: "Ensuring smooth operations and organizational efficiency",
            facebook: "https://www.facebook.com/maram.benamara.1088",
            image: Maram,
            email: "maramben_amara@ieee.org",
            instagram: "https://www.instagram.com/benamara.maram?igsh=MTRoc2xycGtoc3g4Mw=="
        },
        {
            id: 5,
            firstName: "Nidhal",
            lastName: "Sghaier",
            post: "WEBMASTER",
            description: "Crafting digital experiences and technical excellence",
            facebook: "https://www.facebook.com/nidhal.sgahair.5",
            image: Nidhal,
            email: "nidhal_sghair@ieee.org",
            instagram: "https://www.instagram.com/sgnidhall?igsh=MWk3aXpxbjRvdXBraw=="
        },
        {
            id: 6,
            firstName: "Hiba",
            lastName: "Bahri",
            post: "TREASURER",
            description: "Managing resources and financial sustainability",
            facebook: "https://www.facebook.com/hiba.bahri.620353",
            image: Hiba,
            email: "hiba_bahri@ieee.org",
            instagram: "https://www.instagram.com/fairyy__angell?igsh=YTducnZuaTAya2Jo"
        },
        {
            id: 1,
            firstName: "Dr.Mohamed Salah",
            lastName: "Karoui",
            post: "ADVISOR",
            description: "\"I am proud to support IEEE WIE ISSATM AG as they foster innovation and technical excellence among our students and women.\"",
            facebook: "https://www.facebook.com/mohamed.s.karoui",
            image: SalahKaroui,
            email: "mohamedsalah.karoui@ieee.org",
            linkedin: "https://www.linkedin.com/in/mohamed-salah-karoui-549a9018/"
        },
    ]
  return (
    <div>
        <div className={`relative w-full ${isHome ?  'py-20' : 'py-22'} ${isHome ? '' : 'pt-32'} ${isHome ? '' : '-mt-[140px]'} flex justify-center items-center`}>
                    <img src={HeaderImage} className="absolute inset-0 w-full h-full object-cover -z-10" alt="Background" />
                    <div className="absolute inset-0 bg-opacity-40"></div>
                    <div className='py-8'>
                        <div className='flex justify-center mb-6'>
                            <div className='flex justify-center items-center p-8 rounded-full bg-[#503EC8] shadow-[0_8px_40px_#503EC8]'>
                                <GiQueenCrown className='text-4xl text-white' />
                            </div>
                        </div>
                        <p className='text-4xl lg:text-6xl font-bold text-center text-white mb-10'>Executive Committee</p>
                        <p className=' text-xl lg:text-3xl text-center text-white px-4 md:px-20 lg:px-40'>Meet the brilliant minds driving IEEE ISSATM AG with passion, creativity and innovation</p>
                    </div>
                </div>
        <div className="relative w-full pt-32 flex justify-center items-center pb-10">
            <img src={DarkBg} className="absolute inset-0 w-full h-full object-cover -z-10" alt="Background" />
            <div className="absolute inset-0 bg-opacity-40"></div>
            <div className='w-full px-4 md:px-10 lg:px-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:gap-8 lg:gap-16 gap-y-8'>
                {members.map(member => <ProfileCard key={member?.id} member={member}/>)}
            </div>
        </div>
    </div>
  )
}

export default Team
