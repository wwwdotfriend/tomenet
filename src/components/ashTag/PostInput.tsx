"use client";

import {
  CalendarIcon,
  ChartBarIcon,
  FaceSmileIcon,
  MapPinIcon,
  PhotoIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import { db } from "../../../firebase";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import {
  closeCommentModal,
  openLoginModal,
} from "../../../redux/slices/modalSlice";
import { getAuth } from "firebase/auth";

interface PostInputProps {
  insideModal?: boolean;
}

export default function PostInput({ insideModal }: PostInputProps) {
  const [text, setText] = useState("");
  const user = useSelector((state: RootState) => state.user);
  const commentDetails = useSelector(
    (state: RootState) => state.modals.commentPostDetails,
  );
  const dispatch = useDispatch();
  const auth = getAuth();
  const currentUser = auth.currentUser;
  let photoURL = user.photoURL;

  if (currentUser) {
    photoURL = currentUser.photoURL || "";
  } else {
  }

  async function sendPost() {
    if (!user.username) {
      dispatch(openLoginModal());
      return;
    }

    await addDoc(collection(db, "posts"), {
      text: text,
      name: user.name,
      username: user.username,
      timestamp: serverTimestamp(),
      likes: [],
      comments: [],
      photoURL: currentUser?.photoURL || "https://i.imgur.com/zKbL9ih.png"
    });

    setText("");
  }

  async function sendComment() {
    const postRef = doc(db, "posts", commentDetails.id);

    await updateDoc(postRef, {
      comments: arrayUnion({
        name: user.name,
        username: user.username,
        text: text,
        photoURL: user.photoURL
      }),
    });

    setText("");
    dispatch(closeCommentModal());
  }

  return (
    <div className="flex space-x-5 border-b border-[#696765] px-3 pt-5 pb-4">
      <img
        className="z-10 h-11 w-11 rounded-full object-cover"
        src={photoURL || "https://i.imgur.com/zKbL9ih.png"}
        width={44}
        height={44}
        alt="Profile Picture"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.src = "https://i.imgur.com/zKbL9ih.png";
        }}
      />

      <div className="w-full text-white">
        <textarea
          className="min-h-[50px] w-full resize-none outline-none"
          placeholder={insideModal ? "Send your reply" : "What's happening?"}
          onChange={(event) => setText(event.target.value)}
          value={text}
        />

        <div className="flex items-center justify-between pt-5">
          <div className="flex space-x-1.5">
            <PhotoIcon className="h-[22px] w-[22px] cursor-not-allowed text-amber-700" />
            <ChartBarIcon className="h-[22px] w-[22px] cursor-not-allowed text-amber-700" />
            <FaceSmileIcon className="h-[22px] w-[22px] cursor-not-allowed text-amber-700" />
            <CalendarIcon className="h-[22px] w-[22px] cursor-not-allowed text-amber-700" />
            <MapPinIcon className="h-[22px] w-[22px] cursor-not-allowed text-amber-700" />
          </div>

          <button
            className="h-[36px] w-[80px] cursor-pointer rounded-full bg-amber-700 text-sm text-white disabled:border-2 disabled:border-amber-700/50 disabled:bg-amber-700/10"
            disabled={!text}
            onClick={() => (insideModal ? sendComment() : sendPost())}
          >
            Fire!
          </button>
        </div>
      </div>
    </div>
  );
}
