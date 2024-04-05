import React from "react";
import Avatar from "react-avatar";

const Tweet = () => {
  return (
    <div>
      <div>
        <div className="flex">
          <Avatar
            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
            size="50"
            round={true}
          />
          <div className="flex items-center ml-2">
            <h1 className="font-bold">Siva</h1>
            <p className="text-gray-500 text-sm ml-1">@Sivaramanandkumar</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
