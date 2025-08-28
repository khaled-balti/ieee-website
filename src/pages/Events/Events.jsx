import React, { useState } from 'react'
import HeaderImage from '../../assets/heading-bg.jpg'
import DarkBg from '../../assets/dark-bg.jpg'
import { BiParty } from "react-icons/bi";
import EventCard from '../../layout/EventCard/EventCard'
//import LunahackVideo from '../../assets/lunahack-video.mp4'
//import ValentinesVideo2 from '../../assets/valentines-video1.mp4'
import { Cloudinary } from '@cloudinary/url-gen/index';
const Events = ({isHome}) => {
    const cld = new Cloudinary({ cloud: { cloudName: import.meta.env.VITE_API_URL } });
    const FieldsOfHope = cld.image("docs/models-28");
    const WameedPresent = cld.image("docs/models-77");
    const Therapy = cld.image("docs/models-64");
    const BootcampWissem = cld.image("bootcamp-wissem_wsyfbe");
    const UIUXDesign = cld.image("docs/models-68");
    const WebSession = cld.image("docs/models-92");
    const WameedOnline = cld.image("docs/models-87");
    const EducationalWeek = cld.image("edweek_qhy0sm");
    const Firewalls = cld.image("firewalls-presentiel_kq1uae");
    const FirewallsOnline = cld.image("firewall-online_ezjyjt");
    const IEEEFtar = cld.image("ieeeftar_k7ftim");
    const Wiechill = cld.image("wiechill_egmbae");
    const Lunahack = cld.image("lunahack_pvaqvq");
    const Techtour = cld.image("techtour_b9hsfy");
    const ValentinesDay = cld.image("valentines_b3ka9b");
    const Tkahwija = cld.image("tkahwija_flmc2z");
    const Enertech = cld.image("enertech_nvqwrz");
    const Wiechill1 = cld.image("docs/models-48");
    const Wiechill2 = cld.image("wiechill2_be816e");
    const Wiechill3 = cld.image("wiechill3_j5ki3x");
    const Valentines1 = cld.image("valentines1_fwinrd");
    const Valentines2 = cld.image("valentines2_cwwfqi");
    const Valentines3 = cld.image("valentines3_wnicxb");
    const Valentines4 = cld.image("valentines4_ufetpz");
    const Valentines5 = cld.image("valentines5_mjjatn");
    const Lunahack1 = cld.image("lunahack1_ynmgrj");
    const Lunahack2 = cld.image("lunahack2_jxy6kh");
    const Lunahack3 = cld.image("lunahack3_p6uwud");
    const Lunahack4 = cld.image("lunahack4_osbggo");
    const Wameed1 = cld.image("wameed1_i6bdub");
    const Wameed2 = cld.image("wameed2_p9gbpr");
    const Wameed3 = cld.image("wameed3_rqaoix");
    const Wameed4 = cld.image("wameed4_xwva0s");
    const Wameed5 = cld.image("wameed5_yv424o");
    const Wameed6 = cld.image("wameed6_yl0ltz");
    const Wameed7 = cld.image("wameed7_m2vbnr");
    const Wameed8 = cld.image("wameed8_mfqe3o");
    const WameedArticle = cld.image("wameed-article_bpudf7");
    const EdWeek1 = cld.image("edweek1_ilbez3");
    const EdWeek2 = cld.image("edweek2_noupij");
    const EdWeek3 = cld.image("edweek3_v08r94");
    const EdWeek4 = cld.image("edweek4_yxukt5");
    const EdWeek5 = cld.image("edweek5_otmri0");
    const Firewalls1 = cld.image("firewalls1_rjxze7");
    const Firewalls2 = cld.image("firewalls2_xdrehz");
    const Firewalls3 = cld.image("docs/models-32");
    const Firewalls4 = cld.image("firewalls4_d1f2jd");
    const Firewalls5 = cld.image("firewalls5_awwkmh");
    const Firewalls6 = cld.image("firewalls6_mgsagm");
    const Firewalls7 = cld.image("firewalls7_kuqjyv");
    const FirewallsBootcamp1 = cld.image("firewalls-bootcamp1_njxbve")
    const FirewallsBootcamp2 = cld.image("firewalls-bootcamp2_bybcvz");
    const FirewallsBootcamp3 = cld.image("firewalls-bootcamp3_m8icne");
    const FirewallsBootcamp4 = cld.image("firewalls-bootcamp4_hhi8tb");
    const Enertech1 = cld.image("docs/models-101-5")
    const Enertech2 = cld.image("enertech2_wtba1v");
    const Enertech3 = cld.image("enertech3_mzh7xc");
    const Enertech4 = cld.image("enertech4_t6zf7a");
    const WieTechTour1 = cld.image("wietechtour1_obo4xv");
    const BootcampWissem1 = cld.image("bootcamp-wissem1_n7vxzr");
    const BootcampWissem2 = cld.image("bootcamp-wissem2_q4om8a");
    const BootcampWissem3 = cld.image("bootcamp-wissem3_e0vhpw");
    const BootcampWissem4 = cld.image("bootcamp-wissem4_pbfcmm");
    const BootcampWissem5 = cld.image("bootcamp-wissem5_ybs8ls");
    const Therapy1 = cld.image("therapy1_kinnvk");
    const Therapy2 = cld.image("therapy2_ykqhmq");
    const WameedTraining1 = cld.image("wameed-training1_odpgzw");
    const WameedTraining2 = cld.image("docs/models-89");
    const WameedTraining3 = cld.image("wameed-training3_akuk83");
    const WameedTraining4 = cld.image("wameed-training4_txoqkn");
    const ValentinesVideo1 = cld.video("valentines-video_ytr1yn");
    const WiechillVideo = cld.video("wiechill-video_u7q7gm");
    const EdweekVideo = cld.video("edweek-video_qicctt");
    const BootcampWissemVideo = cld.video("bootcamp-wissem-video_g79ogr");
    const IeeeftarVideo = cld.video("ieeeftar-video_vmpitr")
    const events = [
        {
            id: 1,
            title: "WieChill",
            description: "WIEChill is a team-building event by WIE ISSATM SAG, fostering connections and breaking barriers through fun, collaborative activities.",
            date: ["05/02/2025"],
            place: "North Park, Mater",
            participants: 18,
            type: "past",
            image: Wiechill,
            gallery: [
                {
                    id: 1,
                    media: Wiechill1,
                    type: "image"
                },
                {
                    id: 2,
                    media: Wiechill2,
                    type: "image"
                },
                {
                    id: 3,
                    media: Wiechill3,
                    type: "image"
                },
                {
                    id: 4,
                    media: WiechillVideo,
                    type: "video"
                }
            ]
        },
        {
            id: 2,
            title: "Valentines Day",
            description: "The Valentine’s Day Event gathered 29 participants for games, team activities, and a movie, celebrating connection and community.",
            date: ["14/02/2025"],
            place: "ISSATM",
            participants: 30,
            type: "celebrations",
            image: ValentinesDay,
            gallery: [
                {
                    id: 1,
                    media: Valentines1,
                    type: "image"
                },
                {
                    id: 2,
                    media: Valentines2,
                    type: "image"
                },
                {
                    id: 3,
                    media: Valentines3,
                    type: "image"
                },
                {
                    id: 4,
                    media: Valentines4,
                    type: "image"
                },
                {
                    id: 5,
                    media: Valentines5,
                    type: "image"
                },
                {
                    id: 6,
                    media: ValentinesVideo1,
                    type: "video"
                },
                // {
                //     id: 7,
                //     media: ValentinesVideo2,
                //     type: "video"
                // },
            ]
        },
        {
            id: 3,
            title: "IEEEftar",
            description: "IEEEftar, organized by the WIE Community of IEEE ISSATM SB during Ramadan, brought together 22 participants for an Iftar meal and discussions on engineering and innovation in a warm, communal setting..",
            date: ["05/03/2025"],
            place: "Foyer",
            participants: 22,
            type: "past",
            image: IEEEFtar,
            gallery: [
                    {
                    id: 1,
                    media: IeeeftarVideo,
                    type: "video"
                },
            ]
        },
        {
            id: 4,
            title: "LunaHack",
            description: "LunaHack, organized by WIE ISSATM SB and ISET Radès SB, brought together 160+ participants for a day filled with AI and IoT workshops and an inspiring astronomy session. In the evening, teams participated in a 12-hour hackathon on “Women in Astronomy and Space Science”, followed by Jupiter observation and the release of Chinese lanterns.",
            date: ["19/04/2025"],
            place: "Iset Rades",
            participants: 160,
            type: "past",
            image: Lunahack,
            gallery: [
                {
                    id: 1,
                    media: Lunahack1,
                    type: "image"
                },
                {
                    id: 2,
                    media: Lunahack2,
                    type: "image"
                },
                {
                    id: 3,
                    media: Lunahack3,
                    type: "image"
                },
                {
                    id: 4,
                    media: Lunahack4,
                    type: "image"
                },
                // {
                //     id: 5,
                //     media: LunahackVideo,
                //     type: "video"
                // }
            ]
        },
        {
            id: 5,
            title: "Wameed Tunisian National Event",
            description: "Wameed, organized by lEEE WIE ISSATM SB and IEEE WIE Region 8, is a storytelling platform uniting student branches from Egypt (IEEE EUI SB), Jordan (IEEE Hashemite University SB), and Saudi Arabia (IEEE KFUPM SB). Participants create 7-10 minute films on culture, identity, innovation, and women's roles. After online training in storytelling and filmmaking, teams compete in two phases: a National Round (top 2 films per country) and a Regional Round (online showcase).",
            date: ["15/07/2025"],
            place: "UTICA Tunisia",
            participants: 50,
            type: "past",
            image: WameedPresent,
            gallery: [
                {
                    id: 1,
                    media: WameedArticle,
                    type: "image"
                },
                {
                    id: 2,
                    media: Wameed1,
                    type: "image"
                },
                {
                    id: 3,
                    media: Wameed2,
                    type: "image"
                },
                {
                    id: 4,
                    media: Wameed3,
                    type: "image"
                },
                {
                    id: 5,
                    media: Wameed4,
                    type: "image"
                },
                {
                    id: 6,
                    media: Wameed5,
                    type: "image"
                },
                {
                    id: 7,
                    media: Wameed6,
                    type: "image"
                },
                {
                    id: 8,
                    media: Wameed7,
                    type: "image"
                },
                {
                    id: 9,
                    media: Wameed8,
                    type: "image",
                    size: true
                },
            ]
        },
        {
            id: 6,
            title: "IEEE Educational Week",
            description: "As part of IEEE Education Week, the WIE Community led a robotics workshop for 40 primary school students, guiding them through a fun smart trash project that sparked interest in STEM through creativity and teamwork.",
            date: ["11/04/2025"],
            place: "Palmares School",
            participants: 40,
            type: "celebrations",
            image: EducationalWeek,
            gallery: [
                {
                    id: 1,
                    media: EdWeek1,
                    type: "image"
                },
                {
                    id: 2,
                    media: EdWeek2,
                    type: "image"
                },
                {
                    id: 3,
                    media: EdWeek3,
                    type: "image"
                },
                {
                    id: 4,
                    media: EdWeek4,
                    type: "image"
                },
                {
                    id: 5,
                    media: EdWeek5,
                    type: "image"
                },
                {
                    id: 6,
                    media: EdweekVideo,
                    type: "video"
                },
            ]
        },
        {
            id: 7,
            title: "Firewalls",
            description: "Firewalls is a two-week hybrid campaign by WIE ISSATM SB and WIE EPS SB, blending cybersecurity training, leadership development, and team-building. It begins with four online workshops, each followed by a real-time challenge. The event wraps up with an in-person day for scouts, featuring hands-on workshops, collaborative activities, and interactive sessions to enhance both technical and soft skills.",
            date: ["06/07/2025"],
            place: "EPS",
            participants: 75,
            type: "celebrations",
            image: Firewalls,
            gallery: [
                {
                    id: 1,
                    media: Firewalls1,
                    type: "image"
                },
                {
                    id: 2,
                    media: Firewalls2,
                    type: "image"
                },
                {
                    id: 3,
                    media: Firewalls3,
                    type: "image"
                },
                {
                    id: 4,
                    media: Firewalls4,
                    type: "image"
                },
                {
                    id: 5,
                    media: Firewalls5,
                    type: "image"
                },
                {
                    id: 6,
                    media: Firewalls6,
                    type: "image"
                },
                {
                    id: 7,
                    media: Firewalls7,
                    type: "image"
                },
            ]
        },
        {
            id: 8,
            title: "Firewalls Bootcamp",
            description: "Firewalls is a two-week hybrid campaign by WIE ISSATM SB and WIE EPS SB, blending cybersecurity training, leadership development, and team-building. It begins with four online workshops, each followed by a real-time challenge. The event wraps up with an in-person day for scouts, featuring hands-on workshops, collaborative activities, and interactive sessions to enhance both technical and soft skills.",
            date: ["24/06/2025", "03/07/2025"],
            place: "Online",
            participants: 75,
            type: "bootcamps",
            image: FirewallsOnline,
            gallery: [
                {
                    id: 1,
                    media: FirewallsBootcamp1,
                    type: "image",
                    description: "Speaker: Ms. Hend Hassen Head of GFI Incubator, Expert in Entrepreneurship and Business Planning, and University Teacher in Entrepreneurship and Soft Skills at Polytechnique Sousse & GFI University The session provided valuable insights into the role of Design Thinking in addressing challenges with creativity and practical solutions."
                },
                {
                    id: 2,
                    media: FirewallsBootcamp2,
                    type: "image",
                    description: "Speaker: Mr. Badis Issaoui Engineer specialized in Networks, Infrastructure, and Data Security, with a focus on strengthening the protection of IT systems. The session highlighted how Artificial Intelligence and automation are reshaping cyber defence strategies and enhancing the resilience of digital infrastructures."
                },
                {
                    id: 3,
                    media: FirewallsBootcamp3,
                    type: "image",
                    description: "Speaker: Mr. Oussama Ben Hadj Dahman Co-founder of Imedra Sphere, an IT consulting firm in Cybersecurity - Cybersecurity Specialist at UCG Group - Certified in: Penetration Testing, Digital Forensics, ISO 27001 Lead Implementer (CREST UK), JBLT (Blue Team) & CC (ISC³) - Active contributor to the Tunisian tech community through Engineers Spark and Securinets. The session explored the latest developments in cybersecurity, shedding light on emerging threats, industry trends, and the skills needed to stay ahead in an evolving digital landscape."
                },
                {
                    id: 4,
                    media: FirewallsBootcamp4,
                    type: "image",
                    description: "Cybersecurity Engineering Student, CompTIA Security+ Instructor at GoMyCode, and IEEE WIE Tunisia Student Affinity Groups Coordinator. She is passionate about empowering youth through technical education and raising cybersecurity awareness. The session focused on the principles and best practices of designing and implementing secure network architectures, highlighting both technical and educational perspectives."
                },
            ]
        },
        {
            id: 9,
            title: "ENERTECH Conference",
            description: "The EnerTech Online Conference, taking place this August, will focus on Climate Change Mitigation through three technical sessions: Green Hydrogen Management & Systems Energy Management & Carbon Neutralization Climate Change Mitigation Strategies A highlight of the event is the Women in Power Panel, moderated by Ms. Fatma Alzamel (WIE Region8 Board, Saudi Arabia), featuring: Ms. Wafa Ben Hamida – Former Chair, WIE Region8 Ms. Nadine Abbas – Chair, WIE Lebanon Section Ms. Baya Bouchaala – Chair, WIE Tunisia Section The conference aims to foster dialogue, share expertise, and explore innovative solutions for a sustainable future",
            date: ["03/08/2025", "14/08/2025"],
            place: "Online",
            participants: null,
            type: "past",
            image: Enertech,
            gallery: [
                {
                    id: 1,
                    media: Enertech1,
                    type: "image",
                    description: "The first session of the EnerTech Online Conference, held on August 3rd at 9:00 PM, was led by Mr. Ayoub Madyouni, Chair of IEEE IAS PES ENSIT SBJC. He spoke on Climate Change Mitigation, stressing the urgent need to act against human-driven environmental damage and highlighting the role of sustainable technologies in protecting the planet."
                },
                {
                    id: 2,
                    media: Enertech2,
                    type: "image",
                    description: "The Women in Power Panel was a highlight of the EnerTech Online Conference, moderated by Ms. Fatma Alzamel (WIE Region 8 Board, Saudi Arabia). It brought together: Ms. Wafa Ben Hamida – Former Chair, WIE Region 8 Ms. Nadine Abbas – Chair, WIE Lebanon Section Ms. Baya Bouchaala – Chair, WIE Tunisia Section The session celebrated women’s leadership in energy and inspired participants with insights on resilience, inclusion, and sustainable innovation. "
                },
                {
                    id: 3,
                    media: Enertech3,
                    type: "image",
                    description: "The third session of the EnerTech Online Conference, held on August 10th at 8:00 PM, was presented by Ms. Ibtihel Trabelsi (Secretary, IEEE PES Tunisia Section; PES SYP R8 Tunisia Zone Representative). She discussed Green Hydrogen Management Systems, highlighting its role in sustainable energy, technological innovations, and the path toward carbon neutrality."
                },
                {
                    id: 4,
                    media: Enertech4,
                    type: "image",
                    description: "On August 14th at 8:00 PM, the EnerTech Online Conference featured Mr. Hamza Khalfallah, an Energy & Climate Change Engineer at Marquardt Group and ENIM graduate. His session on Energy Management and Carbon Neutralization focused on sustainable solutions, energy efficiency, carbon reduction strategies, and advancing climate resilience. Participants gained practical insights into implementing effective measures for a low-carbon future."
                }
            ]
        },
        {
            id: 10,
            title: "WIE TechTour",
            description: "The EnerTech Online Conference, taking place this August, will focus on Climate Change Mitigation through three technical sessions: Green Hydrogen Management & Systems Energy Management & Carbon Neutralization Climate Change Mitigation Strategies A highlight of the event is the Women in Power Panel, moderated by Ms. Fatma Alzamel (WIE Region8 Board, Saudi Arabia), featuring: Ms. Wafa Ben Hamida – Former Chair, WIE Rbootcampsegion8 Ms. Nadine Abbas – Chair, WIE Lebanon Section Ms. Baya Bouchaala – Chair, WIE Tunisia Section The conference aims to foster dialogue, share expertise, and explore innovative solutions for a sustainable future",
            date: ["08/08/2025"],
            place: "ODC",
            participants: 12,
            type: "past",
            image: Techtour,
            gallery: [{
                id: 1,
                media: WieTechTour1,
                type: "image"
            },]
        },
        {
            id: 11,
            title: "Graphic Design Bootcamp",
            description: "The Graphic Design Bootcamp, led by the IEEE RAS Tunisia Webmaster, trained 19 participants in design basics, Photoshop, social media visuals, and AI tools like ComfyUI across three sessions.",
            date: ["15/04/2025", "22/04/2025"],
            place: "Online",
            participants: 20,
            type: "bootcamps",
            image: BootcampWissem,
            gallery: [
                {
                    id: 1,
                    media: BootcampWissem1,
                    type: "image"
                },
                {
                    id: 2,
                    media: BootcampWissem2,
                    type: "image"
                },
                {
                    id: 3,
                    media: BootcampWissem3,
                    type: "image"
                },
                {
                    id: 4,
                    media: BootcampWissem4,
                    type: "image"
                },
                {
                    id: 5,
                    media: BootcampWissem5,
                    type: "image"
                },
                {
                    id: 6,
                    media: BootcampWissemVideo,
                    type: "video"
                }
            ]
        },
        {
            id: 12,
            title: "UI/UX Design Bootcamp",
            description: "The UI/UX Design Bootcamp introduced 19 participants to UI/UX fundamentals, covering design thinking, wireframing, prototyping, and tools like Figma. Organized with ODC, the bootcamp provided hands-on skills to create user-centered digital designs.",
            date: ["04/07/2025", "06/07/2025"],
            place: "Online",
            participants: 19,
            type: "bootcamps",
            image: UIUXDesign,
            gallery: []
        },
        {
            id: 13,
            title: "Web Development Bootcamp",
            description: "The Web Development Bootcamp introduced participants to HTML, CSS, and JavaScript, covering responsive design and hands-on exercises. Organized with ODC, the bootcamp provided a solid foundation in front-end development and boosted confidence to start web projects.",
            date: ["09/07/2025", "10/07/2025"],
            place: "Online",
            participants: 13,
            type: "bootcamps",
            image: WebSession,
            gallery: []
        },

        {
            id: 14,
            title: "Therapy Threads",
            description: "IEEE WIE ISSATM SAG, IEEE WIE ISI SAG, and IEEE WIE ENICAR SAG join forces to launch an online series of sessions with professional therapists, dedicated to mental well-being. This initiative isn’t just another talk — it’s a safe space for open conversations, a source of empowerment, and a step toward breaking the stigma around mental health.",
            date: ["24/05/2025", "01/06/2025"],
            place: "Online",
            participants: 20,
            type: "sessions",
            image: Therapy,
            gallery: [
                {
                    id: 1,
                    media: Therapy1,
                    type: "image",
                    description: "As part of our Therapy Threads series, we held a special session on Managing Stress & Anxiety with Dr. Marwen Riehi. The session offered participants a safe space to pause, reflect, and explore practical ways to care for their well-being. Together, we opened a meaningful conversation on how to cope with everyday challenges and move toward a healthier mindset. 💙"
                },
                {
                    id: 2,
                    media: Therapy2,
                    type: "image",
                    description: "In our latest Therapy Threads session, we explored this often misunderstood experience with Ms. Hanen Belaiba Guerfali, Psychologist and graduate of the Faculty of Human and Social Sciences of Tunis (FSHST). Together, we uncovered what impostor syndrome really is, how to recognize its signs, and most importantly, how to overcome it. The session offered tools to reclaim confidence and begin reshaping the way we see ourselves. It was an inspiring reminder that we’re not alone in these feelings — and that every step toward self-acceptance matters. 💙"
                },
            ]
        },
        {
            id: 15,
            title: "Fields Of Hope",
            description: null,
            date: null,
            place: null,
            participants: null,
            type: "upcoming",
            image: FieldsOfHope,
            gallery: []
        },
        {
            id: 16,
            title: "Wameed Training Sessions",
            description: "The Wameed training sessions, led by expert speakers from different countries, guided first-time filmmakers through the creative process and fostered cross-border collaboration. Topics included: Filmmaking & Visual Style – Led by a speaker from Jordan Film Direction & Scriptwriting – Led by a speaker from Tunisia Color Grading Basics – Led by a speaker from Lebanon Live Q&As with Scene Breakdowns – Led by a speaker from Saudi Arabia",
            date: ["19/06/2025", "25/06/2025"],
            place: "Online",
            participants: 50,
            type: "sessions",
            image: WameedOnline,
            gallery: [
                {
                    id: 1,
                    media: WameedTraining1,
                    type: "image"
                },
                {
                    id: 2,
                    media: WameedTraining2,
                    type: "image"
                },
                {
                    id: 3,
                    media: WameedTraining3,
                    type: "image"
                },
                {
                    id: 4,
                    media: WameedTraining4,
                    type: "image"
                }
            ]
        },
        {
            id: 17,
            title: "TkahWIEja",
            description: "This event is designed to bring our members closer while exploring new places, creating unforgettable memories, and enjoying unique experiences outside our usual setting. From group activities to relaxing moments, this trip will be the perfect balance of learning, bonding, and entertainment. Pack your bags, bring your energy, and join us for a journey you won’t forget!",
            date: ["30/08/2025"],
            place: "La TOURNELLE, Sidi Bou Said",
            participants: null,
            type: "upcoming",
            image: Tkahwija,
            gallery: []
        },
    ]
    const [currentRoute, setCurrentRoute] = useState("all")
    const [data, setData] = useState(events)
    const swicthEvents = (e, name) => {
        e.preventDefault();
        setCurrentRoute(name);
        if (name === "all") {
            setData(events);
        } else {
            setData(events.filter(event => event?.type === name));
        }
    };

    return (
        <div>
            <div className={`relative w-full ${isHome ?  'py-20' : 'py-22'} ${isHome ? '' : 'pt-32'} ${isHome ? '' : '-mt-[140px]'} flex justify-center items-center`}>
                        <img src={HeaderImage} className="absolute inset-0 w-full h-full object-cover -z-10" alt="Background" />
                        <div className="absolute inset-0 bg-opacity-40"></div>
                        <div className='py-8'>
                            <div className='flex justify-center mb-6'>
                                <div className='flex justify-center items-center p-8 rounded-full bg-[#503EC8] shadow-[0_8px_40px_#503EC8]'>
                                    <BiParty className='text-4xl text-white' />
                                </div>
                            </div>
                            <p className='text-4xl lg:text-6xl font-bold text-center text-white mb-10'>Our Events</p>
                            <p className=' text-xl lg:text-3xl text-center text-white px-4 md:px-20 lg:px-40'>Meet the brilliant minds driving IEEE WIE ISSATM AG with passion, creativity and innovation</p>
                        </div>
                    </div>
            <div className="relative w-full pt-10 flex flex-col justify-center items-center pb-10">
                <img src={DarkBg} className="absolute inset-0 w-full h-full object-cover -z-10" alt="Background" />
                <div className='px-4 md:px-20 lg:px-40 mb-10 flex space-x-2 md:justify-center w-full md:space-x-4 overflow-x-auto pb-4'>
                    <div
                        className={`rounded-3xl text-white flex justify-center items-center px-4 py-3 text-xl font-semibold hover:bg-[#8359FC] transition-colors duration-300 ease-in-out cursor-pointer ${currentRoute === "all" ? 'bg-[#8359FC]' : 'bg-transparent'}`}
                        onClick={(e) => swicthEvents(e, "all")}
                    >
                        All
                    </div>
                    <div
                        className={`rounded-3xl text-white flex justify-center items-center px-4 py-3 text-xl font-semibold hover:bg-[#8359FC] cursor-pointer transition-colors duration-300 ease-in-out ${currentRoute === "celebrations" ? 'bg-[#8359FC]' : 'bg-transparent'}`}
                        onClick={(e) => swicthEvents(e, "celebrations")}
                    >
                        Celebrations
                    </div>
                    <div
                        className={`rounded-3xl text-white flex justify-center items-center px-4 py-3 text-xl font-semibold hover:bg-[#8359FC] cursor-pointer transition-colors duration-300 ease-in-out ${currentRoute === "upcoming" ? 'bg-[#8359FC]' : 'bg-transparent'}`}
                        onClick={(e) => swicthEvents(e, "upcoming")}
                    >
                        Upcoming
                    </div>
                    <div
                        className={`rounded-3xl text-white flex justify-center items-center px-4 py-3 text-xl font-semibold hover:bg-[#8359FC] cursor-pointer transition-colors duration-300 ease-in-out ${currentRoute === "past" ? 'bg-[#8359FC]' : 'bg-transparent'}`}
                        onClick={(e) => swicthEvents(e, "past")}
                    >
                        Past
                    </div>
                    <div
                        className={`rounded-3xl text-white flex justify-center items-center px-4 py-3 text-xl font-semibold hover:bg-[#8359FC] cursor-pointer transition-colors duration-300 ease-in-out ${currentRoute === "bootcamps" ? 'bg-[#8359FC]' : 'bg-transparent'}`}
                        onClick={(e) => swicthEvents(e, "bootcamps")}
                    >
                        Bootcamps
                    </div>
                    <div
                        className={`cursor-pointer rounded-3xl text-white flex justify-center items-center px-4 py-3 text-xl font-semibold hover:bg-[#8359FC] cursor-pointertransition-colors duration-300 ease-in-out  ${currentRoute === "sessions" ? 'bg-[#8359FC]' : 'bg-transparent'}`}
                        onClick={(e) => swicthEvents(e, "sessions")}
                    >
                        Sessions
                    </div>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 md:gap-8 lg:gap-16 gap-y-8 px-4 lg:px-20'>
                    {data.map(event => <EventCard key={event?.id} event={event} />)}
                </div>
            </div>
        </div>
    )
}

export default Events
