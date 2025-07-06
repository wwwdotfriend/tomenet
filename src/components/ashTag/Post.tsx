import {
  ArrowUpTrayIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import { HeartIcon as HeartSolid } from "@heroicons/react/24/solid";
import {
  arrayRemove,
  arrayUnion,
  doc,
  DocumentData,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import {
  openCommentModal,
  openLoginModal,
  setCommentDetails,
} from "../../../redux/slices/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import { RootState } from "../../../redux/store";
import { db } from "../../../firebase";

dayjs.extend(relativeTime);

interface PostProps {
  data: DocumentData;
  id: string;
}

export default function Post({ data, id }: PostProps) {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);

  async function likePost() {
    if (!user.username) {
      dispatch(openLoginModal());
      return;
    }
    const postRef = doc(db, "posts", id);

    if (data.likes.includes(user.uid)) {
      await updateDoc(postRef, {
        likes: arrayRemove(user.uid),
      });
    } else {
      await updateDoc(postRef, {
        likes: arrayUnion(user.uid),
      });
    }
  }

  return (
    <div>
      <Link to={"./post/" + id}>
        <PostHeader
          username={data.username}
          name={data.name}
          timestamp={data.timestamp}
          text={data.text}
        />
      </Link>

      <div className="ml-16 flex space-x-18 p-3">
        <div className="relative">
          <ChatBubbleOvalLeftEllipsisIcon
            className="h-[22px] w-[22px] cursor-pointer transition hover:text-amber-600"
            onClick={() => {
              if (!user.username) {
                dispatch(openLoginModal());
                return;
              }

              dispatch(
                setCommentDetails({
                  name: data.name,
                  username: data.username,
                  id: id,
                  text: data.text,
                }),
              );
              dispatch(openCommentModal());
            }}
          />
          {data.comments.length > 0 && (
            <span className="absolute top-1 -right-4 text-xs">
              {data.comments.length}
            </span>
          )}
        </div>
        <div className="relative">
          {data.likes.includes(user.uid) ? (
            <HeartSolid
              className="h-[22px] w-[22px] cursor-pointer text-pink-500 transition"
              onClick={() => likePost()}
            />
          ) : (
            <HeartIcon
              className="h-[22px] w-[22px] cursor-pointer transition hover:text-pink-500"
              onClick={() => likePost()}
            />
          )}
          {data.likes.length > 0 && (
            <span className="absolute top-1 -right-3 text-xs">
              {data.likes.length}
            </span>
          )}
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
  timestamp?: Timestamp;
  text: string;
  replyTo?: string;
}

export function PostHeader({
  username,
  name,
  timestamp,
  text,
  replyTo,
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
        className="z-10 h-11 w-11"
      />

      <div className="flex flex-col space-y-1.5 text-[16px]">
        <div className="flex space-x-1.5 text-[#B3ACA9]">
          <span className="inline-block max-w-[60px] overflow-hidden font-semibold text-ellipsis whitespace-nowrap text-[#D7D1CD] min-[400px]:max-w-[100px] min-[500px]:max-w-[200px]">
            {name}
          </span>
          <span className="inline-block max-w-[60px] overflow-hidden text-ellipsis whitespace-nowrap min-[400px]:max-w-[100px] min-[500px]:max-w-[140px] sm:max-w-[160px]">
            @{username}
          </span>
          {timestamp && (
            <>
              <span>·</span>
              <span>{timeString}</span>
            </>
          )}
        </div>
        <span>{text}</span>

        {replyTo && (
          <span className="text-[15px] text-gray-400">
            Replying to <span className="text-amber-600">@{replyTo}</span>
          </span>
        )}
      </div>
    </div>
  );
}
