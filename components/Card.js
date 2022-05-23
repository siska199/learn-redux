import React from "react";

const Card = ({ data }) => {
  console.log("data: ", data);
  return (
    <div className=" bg-white flex gap-3 ">
      <div>
        <img src={data.urlImage} className="object-cover w-[15rem] h-[15rem] " alt="" />
      </div>
      <div className="flex flex-col justify-center  p-4">
        <h1>
          {data.username} || <span>{data.name}</span>
        </h1>
        <h1>{data.email}</h1>
        <h1>{data.address}</h1>
      </div>
    </div>
  );
};
export default Card;
