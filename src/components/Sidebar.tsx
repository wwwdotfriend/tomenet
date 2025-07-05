import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import logo from "/UniversityLogo.svg";

export default function SidebarMenu() {
  const [open, setOpen] = useState(false);
  const [openSubmenuIndex, setOpenSubmenuIndex] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  const Menus = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About ECU",
      path: "/about-ecu",
    },
    {
      title: "Academics",
      path: "/academics",
      submenu: true,
      submenuItems: [
        { title: "Our Five Colleges" },
        { title: "Programs & Degrees" },
        { title: "Course List" },
      ],
    },
    {
      title: "Campus Life",
      path: "/campus-life",
      submenu: true,
      submenuItems: [
        { title: "Student Housing" },
        { title: "Organizations & Clubs" },
        { title: "Student Services" },
        { title: "Code of Conduct" },
      ],
    },
    {
      title: "Research",
      path: "#",
    },
    {
      title: "Directories",
      path: "#",
      submenu: true,
      spacing: true,
      submenuItems: [
        { title: "Campus Directory" },
        { title: "Faculty Directory" },
      ],
    },
    {
      title: "My TomeNet",
      path: "/my-tomenet",
    },
  ];

  return (
    <aside className="fixed top-0 left-0 z-1 flex flex-col">
      <div className="fixed top-[3%] left-[1%] z-10">
        <button
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => setOpen(!open)}
          className={`group sticky inline-flex h-13 w-13 cursor-pointer items-center justify-center rounded-full transition-colors ${
            open
              ? "bg-[#782F40] hover:bg-[#000000]"
              : "bg-[#FBF5F1] drop-shadow-[0_0_10px_rgba(0,0,0,0.6)] hover:bg-[#782F40]"
          } `}
        >
          <div>
            <FontAwesomeIcon
              icon={open && isHovered ? faX : faBars}
              className={`transition-colors duration-300 ${
                open
                  ? "text-[#FBF5F1] group-hover:text-[#FBF5F1]"
                  : "text-[#782F40] group-hover:text-[#FBF5F1]"
              }`}
            />
          </div>
        </button>
      </div>

      <div
        className={`flex h-screen flex-col justify-between bg-[#FBF5F1] pt-30 ${open ? "w-100" : "w-0"} drop-shadow-[0_0_50px_rgba(0,0,0,0.8)] duration-200`}
      >
        <ul>
          {Menus.map((menu, index) => (
            <>
              <li
                key={index}
                className={`py-1/2 flex cursor-pointer items-center justify-center gap-x-4 text-center text-[#CEB888] hover:text-black ${menu.spacing ? "mt-7" : "mt-0"} `}
              >
                <Link to={menu.path}>
                  <span
                    className={`font-[Aoboshi] text-[36px] transition-colors duration-200 ${!open ? "hidden" : openSubmenuIndex === index ? "text-black" : "text [#CEB888]"}`}
                  >
                    {menu.title}
                  </span>
                </Link>
                {menu.submenu && open && (
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className={`-mb-2 -ml-2 origin-center transform text-xl transition-transform duration-300 ${openSubmenuIndex === index ? "rotate-180" : ""}`}
                    onClick={() =>
                      setOpenSubmenuIndex(
                        openSubmenuIndex === index ? null : index,
                      )
                    }
                  />
                )}
              </li>

              {menu.submenu && openSubmenuIndex === index && open && (
                <ul>
                  {menu.submenuItems.map((submenuItem, subIndex) => (
                    <li
                      key={subIndex}
                      className="flex cursor-pointer items-center justify-center gap-x-4 text-center font-[Aoboshi] text-[24px] text-[#CEB888] hover:text-black"
                    >
                      {submenuItem.title}
                    </li>
                  ))}
                </ul>
              )}
            </>
          ))}
        </ul>

        <div className={`p-4 ${!open && "hidden"}`}>
          <img src={logo} alt="University Logo" className="mx-auto w-45 pb-7" />
        </div>
      </div>
    </aside>
  );
}
