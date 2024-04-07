import React from "react";
import Avatar from "react-avatar";
import { FaRetweet } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";

const Tweet = () => {
  return (
    <div>
      <div>
        <div className="flex p-4">
          <Avatar
            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
            size="45"
            round={true}
          />
          <div className="ml-1">
            <div className="flex items-center ml-2">
              <h1 className="font-bold">Siva</h1>
              <p className="text-gray-500 text-sm ml-1">
                @Sivaramanandkumar. 1m
              </p>
            </div>
            <div className="ml-2">
              <p>Lets connect and grow together</p>
            </div>
            <div className="flex justify-between ml-1 mt-1">
              <div>
                <FaRegComment />
              </div>
              <div>
                <FaRetweet />
              </div>
              <div>
                <CiHeart />
              </div>

              <div>
                <CiBookmark />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
