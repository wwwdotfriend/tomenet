import AshTagSidebar from "../components/ashTag/AshTagSidebar";
import PostFeed from "../components/ashTag/PostFeed";
import Widgets from "../components/ashTag/Widgets";
import LoginPrompt from "../components/LoginPrompt";
import LoginModal from "../components/modals/LoginModal";

export default function AshTag() {
  return (
    <>
      <div className="mx-auto flex min-h-screen max-w-[1400px] justify-center text-white">
        <AshTagSidebar />
        <PostFeed />
        <Widgets />
      </div>
      <LoginPrompt />
      {/* <LoginModal /> */}
    </>
  );
}
