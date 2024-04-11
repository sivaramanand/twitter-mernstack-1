import React from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import Avatar from "react-avatar";
const Profile = () => {
  const navigate = useNavigate();
  return (
    <div className="w-[50%]">
      <div>
        <div className="flex items-center px-4 py-2">
          <div
            className="p-2 rounded-full hover:cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          >
            <IoArrowBackOutline size="24px" />
          </div>
          <div>
            <h1 className="font-bold text-lg"> Patel</h1>
            <p className="text-gray-500 text-sm">10 posts</p>
          </div>
        </div>
        <img
          src="https://pbs.twimg.com/profile_banners/1581707412922200067/1693248932/1080x360"
          alt="banner"
        />
      </div>
      <div className="flex justify-between">
        <div className="relative -top-16 ml-3">
          <Avatar
            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
            size="120"
            round={true}
          />
        </div>
        <div className="text-right m-4 ">
          <button className="px-4 py-1 rounded-full border border-gray-400 hover:bg-gray-200">
            Edit Profile
          </button>
        </div>
      </div>
      <div className="relative -top-16 ml-7">
        <h1 className="font-bold text-xl">Siva</h1>
        <p>Siva</p>
      </div>
      <div></div>
    </div>
  );
};

export default Profile;
