import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faX, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import logo from '/UniversityLogo.svg'

export default function SidebarMenu() {
    const [open, setOpen] = useState(false);
    const [openSubmenuIndex, setOpenSubmenuIndex] = useState<number | null>(null);
    const [isHovered, setIsHovered] = useState(false);
    
    const Menus = [
        { 
            title: "Home", path: "/"
        },
        { 
            title: "About ECU", path: "/about-ecu"
        },
        { 
            title: "Academics", path: "/academics",
            submenu: true,
            submenuItems: [
                {title: "Our Five Colleges"},
                {title: "Programs & Degrees"},
                {title: "Course List"},
            ]
        },
        { 
            title: "Campus Life", path: "/campus-life",
            submenu: true,
            submenuItems: [
                {title: "Student Housing"},
                {title: "Organizations & Clubs"},
                {title: "Student Services"},
                {title: "Code of Conduct"},
            ]
        },
        { 
            title: "Research", path: "#"
        },
        { 
            title: "Directories", path: "#",
            submenu: true,
            spacing: true, 
            submenuItems: [
                {title: "Campus Directory"},
                {title: "Faculty Directory"},
            ]
        },
        { 
            title: "My TomeNet", path:"/my-tomenet"
        },
    ]

    return (
        <aside className="fixed left-0 top-0 z-1 flex flex-col">
            <div className='fixed top-[3%] left-[1%] z-10'>
            <button 
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => setOpen(!open)}
                className={`sticky group inline-flex h-13 w-13 items-center justify-center rounded-full cursor-pointer
                transition-colors ${open 
                    ? "bg-[#782F40] hover:bg-[#000000]"
                    : "bg-[#FBF5F1] hover:bg-[#782F40] drop-shadow-[0_0_10px_rgba(0,0,0,0.6)]"} `} >
                        <div>
                            <FontAwesomeIcon 
                                icon={open && isHovered ? faX : faBars}
                                className={`transition-colors duration-300 
                                    ${ open 
                                        ? "text-[#FBF5F1] group-hover:text-[#FBF5F1]"
                                        : "text-[#782F40] group-hover:text-[#FBF5F1]" }`}
                            />
                        </div>
            </button>
            </div>

            <div className={`pt-30 bg-[#FBF5F1] h-screen flex flex-col justify-between ${open ? "w-100" : "w-0"} duration-200 drop-shadow-[0_0_50px_rgba(0,0,0,0.8)]`}>
                <ul>
                    {Menus.map((menu, index) => (
                        <>
                            <li key={index} 
                                className={`py-1/2 text-[#CEB888] flex items-center text-center justify-center gap-x-4 hover:text-black cursor-pointer ${menu.spacing ? "mt-7" : "mt-0"} `}>
                                <Link to={menu.path}>
                                    <span className={`font-[Aoboshi] text-[36px] transition-colors duration-200 ${!open ? "hidden" : openSubmenuIndex === index ? "text-black" : "text [#CEB888]"}`}>
                                        {menu.title}
                                    </span>
                                </Link>
                                {menu.submenu && open && (
                                    <FontAwesomeIcon 
                                        icon={faChevronDown}
                                        className={`-ml-2 -mb-2 text-xl transform transition-transform duration-300 origin-center ${openSubmenuIndex === index ? "rotate-180" : ""}`}
                                        onClick={() => setOpenSubmenuIndex(openSubmenuIndex === index ? null : index)} />
                                )}
                            </li>

                            {menu.submenu && openSubmenuIndex === index && open && (
                                <ul>
                                    {menu.submenuItems.map((submenuItem, subIndex) => (
                                        <li key={subIndex} className='font-[Aoboshi] text-[24px] text-[#CEB888] flex items-center text-center justify-center gap-x-4 hover:text-black cursor-pointer'>
                                            {submenuItem.title}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </>
                    ))}
                </ul>

                <div className={`p-4 ${!open && "hidden"}`}>
                    <img src={logo} alt="University Logo" className="pb-7 mx-auto w-45" />
                </div>
            </div>
        </aside>
    );
}