// components //
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import tomenetLogo from "/TomenetLogo.svg"

// assets //
import BackgroundVideo from "/HomepageBackground.webm";

function Home() {
  return (
    <div className="relative w-screen">
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
        <div className="flex min-h-screen -translate-y-15 flex-col items-center justify-center">
          <div className="tomenetShadow pb-10">
            <img src={tomenetLogo} alt="TomeNet Logo" />
          </div>
          <p className="my-6 max-w-[40rem] text-center text-white text-shadow-lg/40">
            Your gateway to campus life, academic resources, and student
            connections at Ember Coast University. Access your courses, connect
            with classmates, and navigate campus with ease.
          </p>
          <div className="mt-10 lg:mr-15 max-w-[400px]">
            <a href="#student-portals">
            <button className="group relative inline-flex h-16 items-center justify-center overflow-hidden rounded-md bg-[#FBF5F1] px-6 font-[College] text-[28px] text-[#782F40] duration-300 [transition-timing-function:cubic-bezier(0.175,0.885,0.32,1.275)] active:translate-y-1 active:scale-x-110 active:scale-y-90">
              <span className="absolute h-0 w-0 rounded-full bg-[#782F40] transition-all duration-300 group-hover:h-64 group-hover:w-72"></span>
              <span className="relative group-hover:text-[#FBF5F1]">
                Explore
              </span>
            </button>
            </a>
          </div>
        </div>

        <section className="flex min-h-100 flex-col items-center bg-black/20 px-10 py-30 text-white backdrop-blur-lg">
          <h1 id="student-portals" className="text-center text-4xl">Student Portals</h1>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-6 px-20 sm:max-w-250 md:grid-cols-2 lg:max-w-300 lg:grid-cols-3">
            <ServiceCard
              href="#student-portals"
              icon="/IronCladArms.svg"
              title="Academics"
              description="View your course schedule, track grades, and access syllabi. Stay on top of your magical studies with academic tools and tracking."
            />
            <ServiceCard
              href="#student-portals"
              icon="/IronCladArms.svg"
              title="Campus Navigator"
              description="Interactive maps of university grounds, building directories, and location-based services for navigating our expansive campus."
            />
            <ServiceCard
              href="#student-portals"
              icon="/IronCladArms.svg"
              title="Student Life"
              description="Connect with fellow students, join study groups, participate in campus organizations, and connect through university-sponsored events."
            />
            <ServiceCard
              href="#student-portals"
              icon="/IronCladArms.svg"
              title="Quest Board"
              description="Track your academic projects, research opportunities, and extracurricular activities. Manage deadlines and collaborate with peers."
            />
            <ServiceCard
              href="/ashtag"
              icon="/IronCladArms.svg"
              title="AshTag™"
              description="Connect with classmates, study groups, and campus organizations. Stay connected and build lasting friendships with fellow scholars."
            />
            <ServiceCard
              href="#student-portals"
              icon="/IronCladArms.svg"
              title="My TomeNet"
              description="Document your academic journey, track relationships with faculty and peers, and maintain records of your magical development."
            />
          </div>
        </section>

        <section className="flex flex-col items-center bg-[#1d1b1b] px-10 py-20 text-white backdrop-blur-lg">
          <div className="max-w-screen">
            <h1 className="text-center text-4xl">Ember Coast University</h1>
            <p className="mt-7 max-w-200 text-center">
              At Ember Coast University, academics are the foundation of every
              student's journey. With five distinct colleges offering
              specialized areas of study, ECU provides a comprehensive education
              that blends magical and non-magical disciplines. Each student is
              encouraged to explore their passions while mastering the core
              skills needed to make a lasting impact on the world.
            </p>
          </div>
          <div className="mt-10 flex flex-row gap-30">
            <div className="flex flex-col text-center">
              <span className="font-[Alegreya] text-[64px] font-extrabold text-red-500">
                4,356
              </span>
              <span>Active Students</span>
            </div>
            <div className="flex flex-col text-center">
              <span className="font-[Alegreya] text-[64px] font-extrabold text-red-500">
                89
              </span>
              <span>Faculty Members</span>
            </div>
            <div className="flex flex-col text-center">
              <span className="font-[Alegreya] text-[64px] font-extrabold text-red-500">
                59
              </span>
              <span>Academic Programs</span>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex h-20 items-center justify-center bg-[#0a0a0a] text-white backdrop-blur-lg">
        <p className="text-sm">
          &copy; 1496 Ember Coast University. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default Home;
