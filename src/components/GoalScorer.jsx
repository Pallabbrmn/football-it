import React from "react";

const GoalScorer = ({ time, scorer, justifyStart, textStart }) => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center ${justifyStart} justify-end sm:justify-start gap-1">
        <p className="text-xs font-bold">{time}'</p>
        <div className="h-[15px] w-[15px] rounded-[50%] overflow-hidden">
          <img src="https://media.istockphoto.com/id/610241662/photo/soccer-ball-isolated-on-the-white-background.jpg?b=1&s=612x612&w=0&k=20&c=7VSWLYTMd-V9wPI5ENADdG4bnED2f4z78-yMcc1Ltrc=" />
        </div>
      </div>
      <p className="text-sm font-semibold ${textStart} text-end">{scorer}</p>
    </div>
  );
};

export default GoalScorer;
