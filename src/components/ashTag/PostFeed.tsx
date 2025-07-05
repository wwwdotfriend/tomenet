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
} from "firebase/firestore";
import { db } from "../../../firebase";

export default function PostFeed() {
  const [posts, setPosts] = useState<
    QueryDocumentSnapshot<DocumentData, DocumentData>[]
  >([]);
  useEffect(() => {
    const q = query(collection(db, "posts"), orderBy("timestamp", "desc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const snapshotDocs = snapshot.docs;

      setPosts(snapshotDocs);
    });

    return unsubscribe;
  }, []);

  return (
    <div className="max-w-2xl flex-grow border-x border-[#696765]">
      <div className="sticky top-0 z-50 bg-[#0a0a0a] px-3 py-4 text-lg font-bold backdrop-blur-sm sm:text-xl">
        Home
      </div>
      <PostInput />

      {posts.map((post) => (
        <Post key={post.id} data={post.data()} />
      ))}
    </div>
  );
}
