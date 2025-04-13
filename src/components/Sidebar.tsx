import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import logo from '/UniversityLogo.svg'

export default function SidebarMenu() {
    const [open, setOpen] = useState(false);
    const Menus = [
        { title: "Home"},
        { title: "Academics"},
        { title: "Campus Life"},
        { title: "Social"},
        { title: "My TomeNet"},
    ]

    return (
        <aside className="fixed left-0 top-0 z-1 flex flex-col">
            <div className='fixed top-[3%] left-[1%] z-10'>
                <button className="group relative inline-flex h-13 w-13 items-center justify-center rounded-[100%] bg-[#FBF5F1] transition-colors hover:bg-[#782F40] cursor-pointer" onClick={() => setOpen (!open)}>
                    <div>
                        <FontAwesomeIcon 
                            icon={faBars} 
                            className="text-[#782F40] transition-colors duration-300 group-hover:text-[#FBF5F1]"
                        />
                    </div>
                </button>
            </div>

            <div className={`pt-30 bg-[#FBF5F1] h-screen flex flex-col justify-between ${open ? "w-100" : "w-0"} duration-200 drop-shadow-[0_0_50px_rgba(0,0,0,0.8)]`}>
                <ul>
                    {Menus.map((menu, index) => (
                        <>
                            <li key={index} className='text-[#CEB888] flex items-center text-center justify-center gap-x-4 hover:text-black cursor-pointer'>
                                <span className={`font-[Aoboshi] text-[36px] ${!open && "hidden"}`}>{menu.title}</span>
                            </li>
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