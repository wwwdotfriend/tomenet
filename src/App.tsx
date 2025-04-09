import TomenetLogo from './components/TomenetLogo';
import ReturningStudents from './components/ReturningStudents'
import backgroundVideo from "/HomepageBackground.webm";
import MenuButton from './components/MenuButton';


function App() {
  return (
    <div className='relative w-screen h-screen overflow-hidden z-0'>
      <video className='fixed w-screen h-screen object-cover' autoPlay loop muted>
        <source src={backgroundVideo} type='video/webm' />
      </video>
      
      <div className='absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[120%] tomenetShadow'>
        <TomenetLogo />
      </div>

      <div className='absolute top-[50%] left-[48%] -translate-x-[50%] translate-y-[250%] max-w-[15%] drop-shadow-[0_0_15px_rgba(0,0,0,0.8)]'>
        <ReturningStudents />
      </div>
    </div>
  );
}

export default App;