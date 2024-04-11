import React from "react";
import Avatar from "react-avatar";
import { FaRetweet } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";

const Tweet = () => {
  return (
    <div className="border-b border-gray-200">
      <div>
        <div className="flex p-4">
          <Avatar
            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
            size="45"
            round={true}
          />
          <div className="w-full ml-1">
            <div className="flex items-center ml-2">
              <h1 className="font-bold">Siva</h1>
              <p className="text-gray-500 text-sm ml-1">
                @Sivaramanandkumar. 1m
              </p>
            </div>
            <div className="ml-2">
              <p>Lets connect and grow together</p>
            </div>
            <div className="flex justify-between w-full my-3">
              <div className="flex items-center ">
                <div className=" flex items-center hover:text-green-700">
                  <FaRegComment size="24px"/>
                  <p className="m-1">0</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className=" flex items-center hover:text-red-700">
                  <CiHeart size="24px"/>
                  <p className="m-1">0</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className=" flex items-center  hover:text-blue-700">
                  <CiBookmark size="24px"/>
                  <p className="m-1">0</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
