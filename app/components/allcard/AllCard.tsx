import { cardData } from "@/app/lib/placeholder-data";
import React from "react";
import SingleCard from "../singlecard/SingleCard";
import "./allcard.css"

const AllCard = () => {
  return (
    <div className="card-wrapper">
      {cardData.map((item, index) => (
        <SingleCard key={index} cardData={item} />
      ))}
    </div>
  );
};

export default AllCard;
