import React from "react";

const Login = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="flex items-center">
        <div>
          <img
            className="ml-5"
            width={"300px"}
            src="https://img.freepik.com/free-vector/twitter-new-2023-x-logo-white-background-vector_1017-45422.jpg?w=740&t=st=1711866115~exp=1711866715~hmac=45b4b3f9990872bf923087ad74e0b87f1a8f55acbd8c9dafc480c9208eeadebb"
          />
        </div>
        <div>
          <div className="font-bold text-5xl mb-4">HAPPENING NOW</div>
          <from className="flex flex-col w-[50%]">
            <input type="text" placeholder="Name"  className=""/>
            <input type="text" placeholder="Username" />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Password" />
          </from>
        </div>
      </div>
    </div>
  );
};

export default Login;
