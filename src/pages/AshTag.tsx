import AshTagSidebar from "../components/ashTag/AshTagSidebar";
import CommentModal from "../components/modals/CommentModal";
import PostFeed from "../components/ashTag/PostFeed";
import Widgets from "../components/ashTag/Widgets";
import LoginPrompt from "../components/LoginPrompt";
import LoadingScreen from "../components/LoadingScreen";

export default function AshTag() {
  return (
    <>
      <div className="mx-auto flex min-h-screen max-w-[1400px] justify-center text-white">
        <AshTagSidebar />
        <PostFeed />
        <Widgets />
      </div>

      <CommentModal />
      <LoginPrompt />
      <LoadingScreen />
    </>
  );
}
