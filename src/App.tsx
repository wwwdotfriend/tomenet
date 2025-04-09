import TomenetLogo from './components/TomenetLogo';
import backgroundVideo from "/HomepageBackground.webm";


function App() {
  return (
    <div className='relative w-screen h-screen overflow-hidden z-0'>
      <video className="fixed object-cover" autoPlay loop muted>
        <source src={backgroundVideo} type='video/webm' />
      </video>
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[120%] tomenetShadow">
        <TomenetLogo />
      </div>
    </div>
  );
}

export default App;