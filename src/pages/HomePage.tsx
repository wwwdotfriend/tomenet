// components
import TomenetLogo from "../components/TomenetLogo";


// assets
import BackgroundVideo from "/HomepageBackground.webm";

function Home() {
  return (
    <div className="relative flex h-screen w-screen overflow-hidden">
      <video
        className="fixed -z-1 h-screen w-screen object-cover"
        autoPlay
        loop
        muted
      >
        <source src={BackgroundVideo} type="video/webm" />
      </video>

      <div className="tomenetShadow absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[120%]">
        <TomenetLogo />
      </div>
    </div>
  );
}

export default Home;
