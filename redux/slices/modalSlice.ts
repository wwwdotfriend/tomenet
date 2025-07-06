import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loginModalOpen: false,
  signUpModalOpen: false,
  commentModalOpen: false,
  commentPostDetails: {
    name: "",
    username: "",
    id: "",
    text: "",
  }
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
    openCommentModal: (state) => {
      state.commentModalOpen = true;
    },
    closeCommentModal: (state) => {
      state.commentModalOpen = false;
    },
    setCommentDetails: (state, action) => {
      state.commentPostDetails.name = action.payload.name
      state.commentPostDetails.username = action.payload.username
      state.commentPostDetails.id = action.payload.id
      state.commentPostDetails.text = action.payload.text
    }
  },
});

export const {
  openLoginModal,
  closeLoginModal,
  openSignUpModal,
  closeSignUpModal,
  openCommentModal,
  closeCommentModal,
  setCommentDetails,
} = modalSlice.actions;

export default modalSlice.reducer;
