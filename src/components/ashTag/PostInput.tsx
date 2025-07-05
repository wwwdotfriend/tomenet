import {
  CalendarIcon,
  ChartBarIcon,
  FaceSmileIcon,
  MapPinIcon,
  PhotoIcon,
} from "@heroicons/react/24/outline";

export default function PostInput() {
  return (
    <div className="flex space-x-5 p-3">
      <img
        className="h-11 w-11"
        src="Frey.png"
        width={44}
        height={44}
        alt="Avatar"
      />

      <div className="w-full text-white">
        <textarea
          className="min-h-[50px] resize-none outline-none"
          placeholder="What's happening?"
        />

        <div className="flex justify-between pt-5">
          <div className="flex space-x-1.5">
            <PhotoIcon className="h-[22px] w-[22px] text-amber-700" />
            <ChartBarIcon className="h-[22px] w-[22px] text-amber-700" />
            <FaceSmileIcon className="h-[22px] w-[22px] text-amber-700" />
            <CalendarIcon className="h-[22px] w-[22px] text-amber-700" />
            <MapPinIcon className="h-[22px] w-[22px] text-amber-700" />
          </div>

          <button
            className="bg-amber-700 text-white w-[80px] h-[36px] rounded-full text-sm cursor-pointer"
          >
            Fire!
          </button>
        </div>
      </div>
    </div>
  );
}
