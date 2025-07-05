"use client";

import { useEffect, useState } from "react";
import { Modal } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";
import {
  closeSignUpModal,
  openSignUpModal,
} from "../../../redux/slices/modalSlice";
import { EyeIcon, EyeSlashIcon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../../firebase";
import { signInUser } from "../../../redux/slices/userSlice";

export default function SignUpModal() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const isOpen = useSelector(
    (state: RootState) => state.modals.signUpModalOpen,
  );

  const dispatch: AppDispatch = useDispatch();

  async function handleGuestLogIn() {
    await signInWithEmailAndPassword(auth, "guest1496@gmail.com", "12345678");
  }
  async function handleSignUp() {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );

    console.log(userCredentials);

    await updateProfile(userCredentials.user, {
      displayName: name,
    });

    dispatch(
      signInUser({
        name: userCredentials.user.displayName,
        username: userCredentials.user.email!.split("@")[0],
        email: userCredentials.user.email,
        uid: userCredentials.user.uid,
      }),
    );
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) return;

      // Handle Redux Actions
      dispatch(
        signInUser({
          name: currentUser.displayName,
          username: currentUser.email!.split("@")[0],
          email: currentUser.email,
          uid: currentUser.uid,
        }),
      );
    });

    return unsubscribe;
  }, []);

  return (
    <>
      <button
        onClick={() => dispatch(openSignUpModal())}
        className="text-md hover h-[48px] w-full cursor-pointer rounded-full border-2 border-gray-100 font-bold text-white transition hover:bg-white hover:text-black md:h-[40px] md:w-[88px] md:text-sm"
      >
        Sign Up
      </button>

      <Modal
        open={isOpen}
        onClose={() => dispatch(closeSignUpModal())}
        className="flex items-center justify-center"
      >
        <div className="h-full w-full bg-[#292827] text-white sm:h-fit sm:w-[600px] sm:rounded-xl">
          <XMarkIcon
            className="mt-5 ml-5 w-7 cursor-pointer"
            onClick={() => dispatch(closeSignUpModal())}
          />
          <div className="px-4 pt-10 pb-20 sm:px-20">
            <h2 className="mb-10 text-3xl font-bold">Create your account</h2>
            <div className="mb-10 w-full space-y-5">
              <input
                className="flex h-[54px] w-full items-center overflow-hidden rounded-[4px] border border-gray-300 pr-3 pl-3 transition outline-none focus:border-amber-600"
                placeholder="Name"
                type="text"
                onChange={(event) => setName(event.target.value)}
                value={name}
              />
              <input
                className="flex h-[54px] w-full items-center overflow-hidden rounded-[4px] border border-gray-300 pr-3 pl-3 transition outline-none focus:border-amber-600"
                placeholder="Email"
                type="text"
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
              onClick={() => handleSignUp()}
              className="mb-5 h-[48px] w-full cursor-pointer rounded-full bg-amber-600 text-white"
            >
              Sign Up
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
