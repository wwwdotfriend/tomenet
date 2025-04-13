// components
import TomenetLogo from '../components/TomenetLogo';
import Sidebar from '../components/Sidebar';

// assets
import BackgroundVideo from "/HomepageBackground.webm";

function Home() {
  return (
    <div className='flex relative w-screen h-screen overflow-hidden'>
      <video className='fixed w-screen h-screen object-cover -z-1' autoPlay loop muted>
        <source src={BackgroundVideo} type='video/webm' />
      </video>

      <div>
        <Sidebar />
      </div>

      <div className='absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[120%] tomenetShadow'>
        <TomenetLogo />
      </div>

      <div className='absolute top-[50%] left-[48%] -translate-x-[50%] translate-y-[250%] max-w-[15%] drop-shadow-[0_0_15px_rgba(0,0,0,0.8)]'>
        <button className="group relative inline-flex h-16 items-center justify-center overflow-hidden rounded-md bg-[#FBF5F1] px-6 
        duration-300 [transition-timing-function:cubic-bezier(0.175,0.885,0.32,1.275)] active:translate-y-1 active:scale-x-110 active:scale-y-90 
        text-[32px] font-[College] text-[#782F40] cursor-pointer">
          <span className="absolute h-0 w-0 rounded-full bg-[#782F40] transition-all duration-300 group-hover:h-64 group-hover:w-72"></span>
          <span className="relative group-hover:text-[#FBF5F1]">Returning Students</span>
        </button>
      </div>
    </div>
  );
}

export default Home;