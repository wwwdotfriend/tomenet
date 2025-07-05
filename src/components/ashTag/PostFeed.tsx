import PostInput from "./PostInput";
import Post from "./Post";

export default function PostFeed() {
  return (
    <div className="max-w-2xl flex-grow">
      <div className="sticky top-0 z-50 bg-[#0a0a0a] px-3 py-4 text-lg font-bold backdrop-blur-sm sm:text-xl">
        Home
      </div>
      <PostInput />
      <Post />
    </div>
  );
}
