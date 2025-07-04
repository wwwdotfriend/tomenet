function LoginButton() {
  return (
    <div className="fixed top-3 left-3 z-1 flex flex-col drop-shadow-[0_0_15px_rgba(0,0,0,0.8)]">
      <button className="size-14 group relative inline-flex cursor-pointer items-center justify-center overflow-hidden rounded-xl bg-[#FBF5F1] text-[30px] text-[#782F40] duration-300 [transition-timing-function:cubic-bezier(0.175,0.885,0.32,1.275)] active:translate-y-1 active:scale-x-110 active:scale-y-90">
        <span className="absolute h-0 w-0 rounded-full bg-[#782F40] transition-all duration-300 group-hover:h-64 group-hover:w-72"></span>
        <span className="relative group-hover:text-[#FBF5F1]">
          <i className="ra ra-key"></i>
        </span>
      </button>
    </div>
  );
}

export default LoginButton;
