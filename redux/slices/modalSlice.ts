import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loginModalOpen: false,
  signUpModalOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openLoginModal: (state) => {
      state.loginModalOpen = true;
    },
    closeLoginModal: (state) => {
      state.loginModalOpen = false;
    },
    openSignUpModal: (state) => {
      state.signUpModalOpen = true;
    },
    closeSignUpModal: (state) => {
      state.signUpModalOpen = false;
    },
  },
});

export const { openLoginModal, closeLoginModal, openSignUpModal, closeSignUpModal } = modalSlice.actions;

export default modalSlice.reducer;
