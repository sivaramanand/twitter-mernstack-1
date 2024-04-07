import React from "react";
import Avatar from "react-avatar";
import { CiImageOn } from "react-icons/ci";

const CreatePost = () => {
  return (
    <div className="w-[100%]">
      <div className="m-3">
        <div className="flex items-center justify-evenly border-b border-gray-200 ">
          <div className="cursor-pointer hover:bg-gray-200 w-full text-center px-4 py-3">
            <div className="font-semibold text-gray-700 text-lg">For You</div>
          </div>
          <div className="cursor-pointer hover:bg-gray-200 w-full text-center px-4 py-3">
            <div className="font-semibold text-gray-700 text-lg">Following</div>
          </div>
        </div>
        <div className="flex items-center m-4">
          <div>
            <Avatar
              src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
              size="45"
              round={true}
            />
          </div>
          <input
            className="w-full outline-none border-none text-lg ml-2"
            type="text"
            placeholder="What is Happenning?"
          />
        </div>
        <div className="flex items-center justify-between">
          <div>
            <CiImageOn />
          </div>
          <button className="bg-[#1d9BF0] px-3 py-2 border-none text-lg text-white text-center rounded-full px-4 py-1">
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
