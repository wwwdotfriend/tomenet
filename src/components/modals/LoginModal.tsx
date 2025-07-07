"use client";

import { Modal } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";
import {
  closeLoginModal,
  openLoginModal,
} from "../../../redux/slices/modalSlice";
import { EyeIcon, EyeSlashIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";
import { signInUser } from "../../../redux/slices/userSlice";

export default function LoginModal() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isOpen = useSelector((state: RootState) => state.modals.loginModalOpen);

  const dispatch: AppDispatch = useDispatch();

  async function handleLogIn() {
    const userCredentials = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    );
    const currentUser = userCredentials.user;

    dispatch(
      signInUser({
        name: currentUser.displayName,
        username: currentUser.email!.split("@")[0],
        email: currentUser.email,
        uid: currentUser.uid,
        photoURL: currentUser.photoURL || "",
      }),
    );
  }

  async function handleGuestLogIn() {
    const userCredentials = await signInWithEmailAndPassword(
      auth,
      "guest1496@gmail.com",
      "12345678",
    );
    const currentUser = userCredentials.user;

    dispatch(
      signInUser({
        name: currentUser.displayName,
        username: currentUser.email!.split("@")[0],
        email: currentUser.email,
        uid: currentUser.uid,
        photoURL: currentUser.photoURL || "",
      }),
    );
  }

  return (
    <>
      <button
        onClick={() => dispatch(openLoginModal())}
        className="text-md hover h-[48px] w-full cursor-pointer rounded-full border-2 border-gray-100 font-bold text-white transition hover:bg-white hover:text-black md:h-[40px] md:w-[88px] md:text-sm"
      >
        Log In
      </button>

      <Modal
        open={isOpen}
        onClose={() => dispatch(closeLoginModal())}
        className="flex items-center justify-center"
      >
        <div className="h-full w-full bg-[#1d1c1b] text-white outline-none sm:h-fit sm:w-[600px] sm:rounded-xl">
          <XMarkIcon
            className="mt-5 ml-5 w-7 cursor-pointer"
            onClick={() => dispatch(closeLoginModal())}
          />
          <div className="px-4 pt-10 pb-20 sm:px-20">
            <h2 className="mb-10 text-3xl font-bold">Log in</h2>
            <div className="mb-10 w-full space-y-5">
              <input
                className="flex h-[54px] w-full items-center overflow-hidden rounded-[4px] border border-gray-300 pr-3 pl-3 transition outline-none focus:border-amber-600"
                placeholder="Email"
                type="email"
                onChange={(event) => setEmail(event.target.value)}
                value={email}
              />
              <div className="flex h-[54px] w-full items-center overflow-hidden rounded-[4px] border border-gray-300 pr-3 transition outline-none focus-within:border-amber-600">
                <input
                  className="h-full w-full ps-3 outline-none"
                  placeholder="Password"
                  type={showPassword ? "text" : "password"}
                  onChange={(event) => setPassword(event.target.value)}
                  value={password}
                />
                <div
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-gray h-7 w-7 cursor-pointer"
                >
                  {showPassword ? <EyeSlashIcon /> : <EyeIcon />}
                </div>
              </div>
            </div>
            <button
              className="mb-5 h-[48px] w-full cursor-pointer rounded-full bg-amber-600 text-white"
              onClick={() => handleLogIn()}
            >
              Log In
            </button>
            <span className="mb-5 block text-center text-sm">Or</span>
            <button
              className="h-[48px] w-full cursor-pointer rounded-full bg-amber-600 text-white"
              onClick={() => handleGuestLogIn()}
            >
              Log In as Guest
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}
