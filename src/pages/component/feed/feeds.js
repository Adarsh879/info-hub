import React, { useState, useEffect } from "react";
import QuestionWrapper from "../question/question-wrapper";
import QuestionStats from "../question/question-stats/question-stats";
import QuestionSummary from "../question/question-summary/question-summary";
import { Spinner } from "../icons";
import { publicFetch } from "../../../utils/fetcher";
// import QuoraBox from "./quoraBox";
// import Post from "./post";
// var text =
//   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mattis, ipsum in efficitur venenatis, nunc diam tristique ipsum, nec rhoncus est nunc et dolor";
// var questions = [
//   { id: 0, votes: 0, answers: 0, text: text },
//   { id: 3, votes: 0, answers: 0, text: text },
//   { id: 1, votes: 0, answers: 0, text: text },
//   { id: 2, votes: 0, answers: 0, text: text },
// ];

function Feeds() {
  const [questions, setQuestions] = useState(null);

  useEffect(() => {
    const fetchQuestion = async () => {
      const { data } = await publicFetch.get("/question");
      setQuestions(data);
    };
    fetchQuestion();
  }, []);
  return (
    <div style={{ borderLeft: "1px solid #dbbfbf" }}>
      {/* <QuoraBox /> */}
      {/* {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))} */}
      {/* <Post />
      <Post />
      <Post />
      <Post />
      <Post /> */}
      {!questions && (
        <div className="loading">
          <Spinner />
        </div>
      )}
      {questions?.map(
        ({ id, votes, answers, views, title, text, tags, author, created }) => (
          <QuestionWrapper key={id}>
            <QuestionStats
              voteCount={votes.length}
              answerCount={answers.length}
              view={views}
            />
            <QuestionSummary
              id={id}
              title={title}
              tags={tags}
              author={author}
              createdTime={created}
            >
              {text}
            </QuestionSummary>
          </QuestionWrapper>
        )
      )}
    </div>
  );
}

export default Feeds;
