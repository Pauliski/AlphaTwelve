import React from "react";
import "./singlecard.css";
import CautionIcon from "../icons/CautionIcon";
import LossArrow from "../icons/LossArrow";
import ProfitArrow from "../icons/ProfitArrow";

const SingleCard = ({ cardData }: { cardData: CardData }) => {
  return (
    <div className="singlecard-wrapper">
      <h3 className="card-title">
        {cardData.title}
        <span>
          <CautionIcon />
        </span>
      </h3>
      <div className="trend">
        <h1 className="amount">{cardData.Amount.toLocaleString()}</h1>{" "}
        {cardData.trend < 0 ? (
          <>
            <span className="arrow-wrapper">
              <LossArrow />
            </span>
            <span className="trend-amount trend-loss">{cardData.trend.toFixed(1)}%</span>
          </>
        ) : (
          <>
            <span className="arrow-wrapper">
              <ProfitArrow />
            </span>
            <span className="trend-amount trend-profit">+{cardData.trend.toFixed(1)}%</span>
          </>
        )}
        
      </div>
    </div>
  );
};

export default SingleCard;
