"use client";

import { Modal } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { closeCommentModal } from "../../../redux/slices/modalSlice";
import { PostHeader } from "../ashTag/Post";
import PostInput from "../ashTag/PostInput";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function CommentModal() {
  const open = useSelector((state: RootState) => state.modals.commentModalOpen);
  const commentDetails = useSelector((state: RootState) => state.modals.commentPostDetails)
  const dispatch = useDispatch();

  return (
    <>
      <Modal
        open={open}
        onClose={() => dispatch(closeCommentModal())}
        className="flex items-center justify-center"
      >
        <div className="relative h-full w-full bg-[#1d1c1b] text-white outline-none sm:h-fit sm:w-[600px] sm:rounded-xl">
          <XMarkIcon
            className="mt-5 ml-5 w-7 cursor-pointer"
            onClick={() => dispatch(closeCommentModal())}
          />
          <div className="flex flex-col px-0 sm:px-5"></div>
          <PostHeader
            name={commentDetails.name}
            username={commentDetails.username}
            text={commentDetails.text}
            photoURL={commentDetails.photoURL}
            replyTo={commentDetails.username}
          />
          <div className="mt-4">
            <PostInput insideModal={true} />
          </div>

          <div className="absolute top-20 left-[33px] z-0 h-32 w-0.5 bg-gray-500 sm:left-[33px]"></div>
        </div>
      </Modal>
    </>
  );
}
