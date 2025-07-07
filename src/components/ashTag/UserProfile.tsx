import { Link, useParams } from "react-router";
import LoginPrompt from "../LoginPrompt";
import CommentModal from "../modals/CommentModal";
import AshTagSidebar from "./AshTagSidebar";
import PostFeed from "./PostFeed";
import Widgets from "./Widgets";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

export default function UserProfile() {
  const name = useSelector((state: RootState) => state.user.name);
  const username = useSelector((state: RootState) => state.user.username);
  console.log(username, ",", name);

  return (
    <>
      <div className="mx-auto flex min-h-screen max-w-[1400px] justify-center text-white">
        <AshTagSidebar />
        <div className="max-w-2xl flex-grow border-x border-[#696765]">
          <div className="sticky top-0 z-50 flex items-center border-b border-[#696765] bg-[#0a0a0a] px-3 py-4 font-[Aoboshi] backdrop-blur-sm">
            <Link to="/ashtag">
              <ArrowLeftIcon className="mr-5 flex h-5 w-5 cursor-pointer transition hover:text-amber-600" />
            </Link>
            <div className="flex flex-col">
              <span className="text-lg">{name}</span>
              <span className="text-gray-400">{username}</span>
            </div>
          </div>
          <div className="relative">
            <div className="h-[200px] overflow-hidden md:h-[250px]">
              <img
                src="https://i.imgur.com/dZpF0Wo.png"
                alt="Profile Banner"
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="absolute bottom-0 left-4 translate-y-1/2">
              <img
                src="https://i.imgur.com/RKBrYW9.png"
                className="h-35 w-35 rounded-full border-4 border-[#0a0a0a] object-cover object-center"
              />
            </div>
          </div>
          <div className="flex flex-col pt-20 pl-6">
            <span className="text-lg">{name}</span>
            <span className="text-gray-400">@{username}</span>
          </div>
          <div className="px-6 pt-4">
            <span>
              Hello I Am Hello I Am Hello I Am Hello I Am Hello I Am Hello I Am
              Hello I Am Hello I Am Hello I Am Hello I Am Hello I Am Hello I Am
              Hello I Am Hello I Am Hello I Am Hello I Am Hello I Am Hello I Am
              Hello I Am Hello I Am
            </span>
          </div>
          <PostFeed />
        </div>
        <Widgets />
      </div>

      <CommentModal />
      <LoginPrompt />
    </>
  );
}
