import { Link, useParams } from "react-router-dom";
import AshTagSidebar from "./AshTagSidebar";
import Widgets from "./Widgets";
import LoginPrompt from "../LoginPrompt";
import {
  ArrowLeftIcon,
  ArrowUpTrayIcon,
  ChartBarIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  EllipsisHorizontalIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import { PostHeader } from "./Post";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../../firebase";
import { useEffect, useState } from "react";
import type { DocumentData } from "firebase/firestore";

export default function PostDetail() {
  const { postid } = useParams();
  const [post, setPost] = useState<DocumentData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPost() {
      try {
        if (!postid) {
          setError("Invalid post ID.");
          setLoading(false);
          return;
        }
        const docRef = doc(db, "posts", postid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setPost(docSnap.data());
        } else {
          setError("Post not found.");
        }
      } catch (err) {
        console.error("Error fetching post:", err);
        setError("Failed to load post.");
      } finally {
        setLoading(false);
      }
    }

    if (postid) {
      fetchPost();
    }
  }, [postid]);

  return (
    <>
      <div className="mx-auto flex min-h-screen max-w-[1400px] justify-center text-white">
        <AshTagSidebar />
        <div className="max-w-2xl flex-grow border-x border-[#696765]">
          <div className="sticky top-0 z-50 flex items-center border-b border-[#696765] bg-[#0a0a0a] px-3 py-4 font-[Aoboshi] text-lg backdrop-blur-sm sm:text-xl">
            <Link to="/ashtag">
              <ArrowLeftIcon className="mr-5 flex h-5 w-5 cursor-pointer hover:text-amber-600 transition" />
            </Link>
            AshTag
          </div>

          {loading ? (
            <div className="p-5">Loading...</div>
          ) : error ? (
            <div className="p-5 text-red-500">{error}</div>
          ) : (
            <div className="flex flex-col space-y-5 border-b border-[#696765] p-3">
              <div className="mb-5 flex items-center justify-between">
                <div className="flex space-x-3">
                  <img
                    src={post?.photoURL || "/assets/User.png"}
                    width={44}
                    height={44}
                    alt="Profile Picture"
                    className="h-11 w-11 rounded-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/assets/User.png";
                    }}
                  />
                  <div className="flex flex-col text-[15px]">
                    <span className="font-bold">{post?.name || "Unknown"}</span>
                    <span className="text-[#939fa8]">
                      @{post?.username || "unknown"}
                    </span>
                  </div>
                </div>
                <EllipsisHorizontalIcon className="h-5 w-5" />
              </div>

              <span className="pl-3 text-[15px]">
                {post?.text || "No content"}
              </span>

              <div className="border-b border-[#696765] p-3 text-[15px]">
                <span className="font-bold">{post?.likes?.length || 0}</span> Likes
              </div>

              <div className="flex h-11 items-center justify-evenly border-b border-[#696765] px-3 pb-5 text-[15px]">
                <ChatBubbleOvalLeftEllipsisIcon className="h-[22px] w-[22px] cursor-not-allowed text-[#696765]" />
                <HeartIcon className="h-[22px] w-[22px] cursor-not-allowed text-[#696765]" />
                <ChartBarIcon className="h-[22px] w-[22px] cursor-not-allowed text-[#696765]" />
                <ArrowUpTrayIcon className="h-[22px] w-[22px] cursor-not-allowed text-[#696765]" />
              </div>
            </div>
          )}
          <div>
            {post?.comments?.map((comment: Comment, idx: number) => (
              <Comment key={idx} comment={comment} />
            ))}
          </div>
        </div>
        <Widgets />
      </div>

      <LoginPrompt />
    </>
  );
}

interface Comment {
  name: string;
  text: string;
  username: string;
}

function Comment({ comment }: { comment: Comment }) {
  return (
    <div className="border-b border-[#696765]">
      <PostHeader
        name={comment.name}
        username={comment.username}
        text={comment.text}
      />

      <div className="ms-16 flex space-x-14 p-3">
        <ChatBubbleOvalLeftEllipsisIcon className="h-[22px] w-[22px] cursor-not-allowed" />
        <HeartIcon className="h-[22px] w-[22px] cursor-not-allowed" />
        <ChartBarIcon className="h-[22px] w-[22px] cursor-not-allowed" />
        <ArrowUpTrayIcon className="h-[22px] w-[22px] cursor-not-allowed" />
      </div>
    </div>
  );
}