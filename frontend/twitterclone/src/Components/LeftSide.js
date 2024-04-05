import React from "react";
import { CiHome } from "react-icons/ci";
import { CiHashtag } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";

const LeftSide = () => {
  return (
    <div className="w-[20%]">
      <div>
        <div>
          <img
            className="ml-2"
            width={"70px"}
            src="https://img.freepik.com/free-vector/twitter-new-2023-x-logo-white-background-vector_1017-45422.jpg?w=740&t=st=1711866115~exp=1711866715~hmac=45b4b3f9990872bf923087ad74e0b87f1a8f55acbd8c9dafc480c9208eeadebb"
            alt="twitter-logo"
          ></img>
        </div>
        <div className="my-4">
          <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-300 hover:cursor-pointer rounded-full">
            <div>
              <CiHome size={"35px"} />
            </div>
            <h1 className="font-bold text-lg ml-2">Home</h1>
          </div>

          <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-300 hover:cursor-pointer rounded-full">
            <div>
              <CiHashtag size={"35px"} />
            </div>
            <h1 className="font-bold text-lg ml-2">Explore</h1>
          </div>
          <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-300 hover:cursor-pointer rounded-full">
            <div>
              <IoIosNotificationsOutline size={"35px"} />
            </div>
            <h1 className="font-bold text-lg ml-2">Notification</h1>
          </div>
          <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-300 hover:cursor-pointer rounded-full">
            <div>
              <CiUser size={"35px"} />
            </div>
            <h1 className="font-bold text-lg ml-2">Profile</h1>
          </div>
          <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-300 hover:cursor-pointer rounded-full">
            <div>
              <CiBookmark size={"35px"} />
            </div>
            <h1 className="font-bold text-lg ml-2">Bookmarks</h1>
          </div>
          <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-300 hover:cursor-pointer rounded-full">
            <div>
              <CiLogout size={"35px"} />
            </div>
            <h1 className="font-bold text-lg ml-2">LogOut</h1>
          </div>
          <button className="px-4 py-3 mt-4 twitter-md bg-[#1D9BF0] w-full rounded-full text-white font-bold">
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
