"use client";

import PostInput from "./PostInput";
import Post from "./Post";
import { useEffect, useState } from "react";
import {
  collection,
  DocumentData,
  onSnapshot,
  orderBy,
  query,
  QueryDocumentSnapshot,
  where,
} from "firebase/firestore";
import { db } from "../../../firebase";
import { useDispatch } from "react-redux";
import { closeLoadingScreen } from "../../../redux/slices/loadingSlice";
import { useParams } from "react-router";

export default function PostFeed() {
  const dispatch = useDispatch();
  const { username } = useParams();
  const [posts, setPosts] = useState<
    QueryDocumentSnapshot<DocumentData, DocumentData>[]
  >([]);

  useEffect(() => {
    let q;

    if (username) {
      q = query(
        collection(db, "posts"),
        orderBy("timestamp", "desc"),
        where("username", "==", username),
      );
    } else {
      q = query(collection(db, "posts"), orderBy("timestamp", "desc"));
    }

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const snapshotDocs = snapshot.docs;

      setPosts(snapshotDocs);

      dispatch(closeLoadingScreen());
    });

    return unsubscribe;
  }, []);

  const isProfile = location.pathname.includes("/user/");
  return (
    <div
      className={`max-w-2xl flex-grow ${isProfile ? "" : "border-x border-[#696765]"}`}
    >
      <div className="sticky top-0 z-50 border-b border-[#696765] bg-[#0a0a0a] px-3 py-4 font-[Aoboshi] text-lg backdrop-blur-sm sm:text-xl">
        {!isProfile && "Home"}
      </div>
      {!isProfile && <PostInput />}

      {posts.map((post) => (
        <Post key={post.id} data={post.data()} id={post.id} />
      ))}
    </div>
  );
}
