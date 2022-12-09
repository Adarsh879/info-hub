import React, { useState, useEffect } from "react";
import QuestionWrapper from "../question/question-wrapper";
import QuestionStats from "../question/question-stats/question-stats";
import QuestionSummary from "../question/question-summary/question-summary";
import { Spinner } from "../icons";
import { publicFetch } from "../../../utils/fetcher";
import { useLocation, useParams } from "react-router-dom";
import PageTitle from "../page-title";
import ButtonGroup from "../button-group";

function Feeds() {
  const [questions, setQuestions] = useState(null);
  const [sortType, setSortType] = useState("Votes");
  let { tag } = useParams();

  useEffect(() => {
    const fetchQuestion = async () => {
      const { data } = await publicFetch.get("/question");
      setQuestions(data);
    };

    const fetchQuestionByTag = async () => {
      const { data } = await publicFetch.get(`/questions/${tag}`);
      setQuestions(data);
    };

    if (tag) {
      console.log("tag page");
      fetchQuestionByTag();
    } else {
      fetchQuestion();
    }
  }, [tag]);

  const handleSorting = () => {
    switch (sortType) {
      case "Votes":
        return (a, b) => b.score - a.score;
      case "Views":
        return (a, b) => b.views - a.views;
      case "Newest":
        return (a, b) => new Date(b.created) - new Date(a.created);
      case "Oldest":
        return (a, b) => new Date(a.created) - new Date(b.created);
      default:
        break;
    }
  };

  return (
    <div>
      <PageTitle
        title={!tag ? "All Questions" : `Questions tagged [${tag}]`}
        button
        borderBottom={false}
      />
      <ButtonGroup
        borderBottom
        buttons={["Votes", "Views", "Newest", "Oldest"]}
        selected={sortType}
        setSelected={setSortType}
      />
      {!questions && (
        <div className="loading">
          <Spinner />
        </div>
      )}
      {questions
        ?.sort(handleSorting())
        .map(
          ({
            id,
            votes,
            answers,
            views,
            title,
            text,
            tags,
            author,
            created,
          }) => (
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
