import React from "react";

import "./question-stats.css";

const QuestionStats = ({ voteCount, answerCount, view }) => {
  return (
    <div className="stats-container">
      <div className="vote">
        <span>{voteCount}</span>
        <p>votes</p>
      </div>
      <div className="answer">
        <span>{answerCount}</span>
        <p>answers</p>
      </div>
      <p className="view">{view} views</p>
    </div>
  );
};

export default QuestionStats;
