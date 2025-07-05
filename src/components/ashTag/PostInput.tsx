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
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

export default function PostInput() {
  const [text, setText] = useState("");
  const user = useSelector((state: RootState) => state.user);

  async function sendPost() {
    await addDoc(collection(db, "posts"), {
      text: text,
      name: user.name,
      username: user.username,
      timestamp: serverTimestamp(),
      likes: [],
      comments: [],
    });

    setText('')
  }

  return (
    <div className="flex space-x-5 p-3">
      <img
        className="h-11 w-11"
        src="Frey.png"
        width={44}
        height={44}
        alt="Avatar"
      />

      <div className="w-full text-white">
        <textarea
          className="min-h-[50px] resize-none outline-none"
          placeholder="What's happening?"
          onChange={(event) => setText(event.target.value)}
          value={text}
        />

        <div className="flex justify-between pt-5">
          <div className="flex space-x-1.5">
            <PhotoIcon className="h-[22px] w-[22px] text-amber-700" />
            <ChartBarIcon className="h-[22px] w-[22px] text-amber-700" />
            <FaceSmileIcon className="h-[22px] w-[22px] text-amber-700" />
            <CalendarIcon className="h-[22px] w-[22px] text-amber-700" />
            <MapPinIcon className="h-[22px] w-[22px] text-amber-700" />
          </div>

          <button
            className="h-[36px] w-[80px] cursor-pointer rounded-full bg-amber-700 text-sm text-white disabled:border-2 disabled:border-amber-700/50 disabled:bg-amber-700/10"
            disabled={!text}
            onClick={() => sendPost()}
          >
            Fire!
          </button>
        </div>
      </div>
    </div>
  );
}
