"use client";

import { signOut } from "firebase/auth";
import { auth } from "../../../firebase";
import { useDispatch, useSelector } from "react-redux";
import { signOutUser } from "../../../redux/slices/userSlice";
import { AppDispatch, RootState } from "../../../redux/store";
import { closeLoginModal, closeSignUpModal } from "../../../redux/slices/modalSlice";

export default function SidebarUserInfo() {
  const dispatch: AppDispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user) 
 
  async function handleSignOut() {
    await signOut(auth);

    dispatch(signOutUser())

    dispatch(closeSignUpModal())
    dispatch(closeLoginModal())
  }

  return (
    <div className="absolute bottom-3 flex cursor-pointer items-center justify-center space-x-2 rounded-full transition hover:bg-gray-500 hover:text-black xl:p-3 xl:pe-6" onClick={() => handleSignOut()}>
      <img
        src={"/assets/User.png"}
        width={36}
        height={36}
        alt="Profile Picture"
        className="h-9 w-9"
      />

      <div className="hidden flex-col text-sm xl:flex">
        <span className="text-white font-bold">{user.name}</span>
        <span className="text-gray-500">@{user.username}</span>
      </div>
    </div>
  );
}
