import Logo from "./Logo";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-[#3f1921b6] to-[#813a2293] backdrop-blur">
      <div className="mx-5 py-4 flex max-w-screen items-center justify-between p-3">
        
        <div className="flex items-center gap-5">
            <Logo />
            <div className="flex flex-col items-start gap-3">
                <span className="font-[Alegreya] text-3xl font-extrabold text-white">
                    Ember Coast University
                </span>
                <span className="text-md font-[Inika] -mt-2 text-white">
                    Est. 996 AC • Lux et Magia
                </span>
            </div>
        </div>
        
        <button className="rounded-md px-5 py-2 font-[Aoboshi] font-bold text-white">
          Sign In
        </button>

      </div>
    </header>
  );
}
