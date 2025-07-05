import React from "react";
import {
  HomeIcon,
  HashtagIcon,
  BellIcon,
  InboxIcon,
  BookmarkIcon,
  CalendarIcon,
  UserIcon,
  EllipsisHorizontalCircleIcon,
} from "@heroicons/react/24/outline";
import Logo from "../Logo";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase";
import { useDispatch } from "react-redux";
import SidebarUserInfo from "./SidebarUserInfo";

export default function AshTagSidebar() {
  const dispatch = useDispatch();

  async function handleSignOut() {
    signOut(auth);
  }

  return (
    <nav className="sticky top-0 hidden h-screen flex-col p-3 sm:flex xl:mr-10 xl:ml-20">
      <div className="relative h-full">
        <div className="py-5">
          <Logo />
        </div>
        <ul>
          <SidebarLink Icon={HomeIcon} text="Home" />
          <SidebarLink Icon={HashtagIcon} text="Explore" />
          <SidebarLink Icon={BellIcon} text="Notifications" />
          <SidebarLink Icon={InboxIcon} text="Messages" />
          <SidebarLink Icon={BookmarkIcon} text="Bookmarks" />
          <SidebarLink Icon={CalendarIcon} text="Events" />
          <SidebarLink Icon={UserIcon} text="Profile" />
          <SidebarLink Icon={EllipsisHorizontalCircleIcon} text="More" />
          <button className="mt-5 hidden h-[52px] w-[200px] cursor-pointer rounded-full bg-amber-700 font-medium xl:block">
            Fire!
          </button>
        </ul>

        <SidebarUserInfo />
      </div>
    </nav>
  );
}

interface SidebarLinkProps {
  text: string;
  Icon: React.ForwardRefExoticComponent<
    Omit<React.SVGProps<SVGSVGElement>, "ref"> & {
      title?: string;
      titleId?: string;
    } & React.RefAttributes<SVGSVGElement>
  >;
}

function SidebarLink({ text, Icon }: SidebarLinkProps) {
  return (
    <li className="p2.5 mb-4 flex items-center space-x-3 text-xl">
      <Icon className="h-7" />
      <span className="hidden xl:block">{text}</span>
    </li>
  );
}
