export default function DashboardButton() {
    function handleClick () {
        alert('eat a dick');
    }
    
  return (
    <button className="size-18 group relative inline-flex cursor-pointer items-center justify-center overflow-hidden rounded-xl bg-[#FBF5F1] text-[30px] text-[#782F40] duration-300 [transition-timing-function:cubic-bezier(0.175,0.885,0.32,1.275)] active:translate-y-1 active:scale-x-110 active:scale-y-90">
      <span className="absolute h-0 w-0 rounded-full bg-[#782F40] transition-all duration-300 group-hover:h-64 group-hover:w-72"></span>
      <span className="absolute group-hover:text-[#FBF5F1]">
        <i className="ra ra-key"></i>
      </span>
    </button>
  );
}