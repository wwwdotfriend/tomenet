function ReturningStudents() {
    return (
    <button className="group relative inline-flex h-16 items-center justify-center overflow-hidden rounded-md bg-[#FBF5F1] px-6 font-[College] text-[28px] text-[#782F40] duration-300 [transition-timing-function:cubic-bezier(0.175,0.885,0.32,1.275)] active:translate-y-1 active:scale-x-110 active:scale-y-90">
      <span className="absolute h-0 w-0 rounded-full bg-[#782F40] transition-all duration-300 group-hover:h-64 group-hover:w-72"></span>
      <span className="relative group-hover:text-[#FBF5F1]">
        Returning Students
      </span>
    </button>
  );
}

export default ReturningStudents;
