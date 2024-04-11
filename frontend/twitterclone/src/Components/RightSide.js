import React from "react";
import CreatePost from "./CreatePost";
import { CiSearch } from "react-icons/ci";
import Avatar from "react-avatar";

const RightSide = () => {
  return (
    <div className="">
      <div className="flex items-center p-2 ml-4  mt-3 bg-gray-100 rounded-full outline-none">
        <CiSearch size={24} className="mx-2" />
        <input
          type="text"
          placeholder="search"
          className="px-2 bg-transparent outline-none "
        />
      </div>
      <div className="p-4 mt-6 bg-gray-100 mx-4 rounded-md outline-none gap-10">
        <h1 className="font-bold text-xl mb-6">Who to follow</h1>
        <div className="flex items-center justify-between my-3">
          <div className="flex items-center">
            <Avatar
              src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
              size="35"
              round={true}
            />
            <div className="items-center mx-2">
              <h1 className="font-bold">patel</h1>
              <p className="text-sm">patelmernstack</p>
            </div>
          </div>
          <div>
            <button className=" p-2 bg-black text-white rounded-full">
              Follow
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between my-3">
          <div className="flex items-center">
            <Avatar
              src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
              size="35"
              round={true}
            />
            <div className="items-center mx-2">
              <h1 className="font-bold">patel</h1>
              <p className="text-sm">patelmernstack</p>
            </div>
          </div>
          <div>
            <button className=" p-2 bg-black text-white rounded-full">
              Follow
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between my-3">
          <div className="flex items-center">
            <Avatar
              src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
              size="35"
              round={true}
            />
            <div className="items-center mx-2">
              <h1 className="font-bold">patel</h1>
              <p className="text-sm">patelmernstack</p>
            </div>
          </div>
          <div>
            <button className=" p-2 bg-black text-white rounded-full">
              Follow
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSide;
