import {
  ArrowUpTrayIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import { DocumentData, Timestamp } from "firebase/firestore";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

interface PostProps {
  data: DocumentData;
}

export default function Post({ data }: PostProps) {
  return (
    <div>
      <PostHeader
        username={data.username}
        name={data.name}
        timestamp={data.timestamp}
        text={data.text}
      />

      <div className="ml-16 flex space-x-18 p-3">
        <div className="relative">
          <ChatBubbleOvalLeftEllipsisIcon className="h-[22px] w-[22px] cursor-pointer transition hover:text-amber-600" />
          <span className="absolute top-1 -right-4 text-xs">2</span>
        </div>
        <div className="relative">
          <HeartIcon className="h-[22px] w-[22px] cursor-pointer transition hover:text-amber-600" />
          <span className="absolute top-1 -right-3 text-xs">2</span>
        </div>
        <div className="relative">
          <ArrowUpTrayIcon className="h-[22px] w-[22px] cursor-pointer transition hover:text-amber-600" />
        </div>
      </div>
    </div>
  );
}

interface PostHeaderProps {
  username: string;
  name: string;
  timestamp: Timestamp;
  text: string;
}

export function PostHeader({
  username,
  name,
  timestamp,
  text,
}: PostHeaderProps) {
  let timeString = "";
  if (timestamp && typeof timestamp.toDate === "function") {
    timeString = dayjs(timestamp.toDate()).fromNow();
  }

  return (
    <div className="flex space-x-5 p-3">
      <img
        src="assets/User.png"
        width={44}
        height={44}
        alt="Profile Picture"
        className="h-11 w-11"
      />

      <div className="flex flex-col space-y-1.5 text-[16px]">
        <div className="flex space-x-1.5 text-[#B3ACA9]">
          <span className="inline-block max-w-[60px] overflow-hidden font-semibold text-ellipsis whitespace-nowrap text-[#D7D1CD] min-[400px]:max-w-[100px] min-[500px]:max-w-[140px]">
            {name}
          </span>
          <span className="inline-block max-w-[60px] overflow-hidden text-ellipsis whitespace-nowrap min-[400px]:max-w-[100px] min-[500px]:max-w-[140px] sm:max-w-[160px]">
            @{username}
          </span>
          <span>·</span>
          <span>{timeString}</span>
        </div>
        <span>{text}</span>
      </div>
    </div>
  );
}
