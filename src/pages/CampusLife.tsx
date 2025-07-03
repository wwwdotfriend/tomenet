import Sidebar from "../components/Sidebar";

export default function CampusLife() {
  return (
    <div className="h-screen w-screen bg-[#FBF5F1]">
      <div>
        <Sidebar />
      </div>

      <div className="flex justify-center pt-15">
        <h1>Campus Life</h1>
      </div>
    </div>
  );
}
