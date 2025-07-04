// components //
import Header from "../components/Header";
import ReturningStudents from "../components/ReturningStudents";
// import TomenetLogo from "../components/TomenetLogo";
//import LoginButton from "../components/LoginButton";
// import DashboardButton from "../components/DashboardButton";

// assets //
import BackgroundVideo from "/HomepageBackground.webm";


function Home() {
  return (
    <div className="relative h-screen w-screen">
      <video
        className="fixed -z-3 h-screen w-screen object-cover"
        autoPlay
        loop
        muted
      >
        <source src={BackgroundVideo} type="video/webm" />
      </video>

      <Header />

      <main>
        <div className="flex h-screen flex-col items-center justify-center">
          <h1>TomeNet</h1>
          <p className="max-w-xl text-center text-white">
            Your gateway to campus life, academic resources, and student
            connections at Ember Coast University. Access your courses, connect
            with classmates, and navigate campus with ease.
          </p>
          <div className="mt-6">
            <ReturningStudents />
          </div>
        </div>
      
      <section className="min-h-screen bg-black/70 text-white flex items-center justify-center">
        <h2 className="text-4xl">Next Section Here</h2>
      </section>

      </main>
    </div>
  );
}

export default Home;
