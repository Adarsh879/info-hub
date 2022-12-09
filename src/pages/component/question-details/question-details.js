import React, { useState, useEffect } from "react";

import DetailPageContainer from "../detail-page-container";
import PageTitle from "../page-title";
import { Spinner } from "../icons";
import { useParams } from "react-router-dom";
import PostWrapper from "../post/post-wrapper";
import PostVote from "..//post/post-vote";
import PostSummary from "../post/post-summary";
import AnswerContainer from "../answer-container";
import { publicFetch } from "../../../utils/fetcher";
import AddAnswer from "../add-answer";

function QuestionDetails() {
  const [question, setQuestion] = useState(null);
  const [answerSortType, setAnswersSortType] = useState("Votes");
  let { questionId, title } = useParams();

  useEffect(() => {
    const fetchQuestion = async () => {
      const { data } = await publicFetch.get(`/question/${questionId}`);
      setQuestion(data);
    };

    fetchQuestion();
  }, []);

  const handleSorting = () => {
    switch (answerSortType) {
      case "Votes":
        return (a, b) => b.score - a.score;
      case "Newest":
        return (a, b) => new Date(b.created) - new Date(a.created);
      case "Oldest":
        return (a, b) => new Date(a.created) - new Date(b.created);
      default:
        break;
    }
  };

  return (
    <>
      <PageTitle title={title} />
      <DetailPageContainer>
        {!question && (
          <div className="loading">
            <Spinner />
          </div>
        )}

        {question && (
          <>
            <PostWrapper borderBottom={false}>
              <PostVote
                score={question.score}
                votes={question.votes}
                questionId={questionId}
                setQuestion={setQuestion}
              />
              <PostSummary
                tags={question.tags}
                author={question.author}
                created={question.created}
                questionId={questionId}
              >
                {question.text}
              </PostSummary>
              {/* <CommentList questionId={questionId} setQuestion={setQuestion}>
                {question.comments.map(({ id, author, created, body }) => (
                  <CommentItem
                    key={id}
                    commentId={id}
                    questionId={questionId}
                    author={author.username}
                    isOwner={author.username === question.author.username}
                    created={created}
                    setQuestion={setQuestion}
                  >
                    {body}
                  </CommentItem>
                ))}
              </CommentList> */}
            </PostWrapper>

            {question.answers.length > 0 && (
              <AnswerContainer
                answersCount={question.answers.length}
                answerSortType={answerSortType}
                setAnswerSortType={setAnswersSortType}
              >
                {question.answers.sort(handleSorting()).map((answer) => (
                  <PostWrapper key={answer.id}>
                    <PostVote
                      score={answer.score}
                      votes={answer.votes}
                      answerId={answer.id}
                      questionId={questionId}
                      setQuestion={setQuestion}
                    />
                    <PostSummary
                      author={answer.author}
                      created={answer.created}
                      questionId={questionId}
                      answerId={answer.id}
                      setQuestion={setQuestion}
                    >
                      {answer.text}
                    </PostSummary>
                    {/* <CommentList
                      questionId={questionId}
                      answerId={answer.id}
                      setQuestion={setQuestion}
                    >
                      {answer.comments.map(({ id, author, created, body }) => (
                        <CommentItem
                          key={id}
                          commentId={id}
                          questionId={questionId}
                          answerId={answer.id}
                          author={author.username}
                          isOwner={author.username === question.author.username}
                          created={created}
                          setQuestion={setQuestion}
                        >
                          {body}
                        </CommentItem>
                      ))}
                    </CommentList> */}
                  </PostWrapper>
                ))}
              </AnswerContainer>
            )}

            <AddAnswer id={questionId} setQuestion={setQuestion} />
          </>
        )}
      </DetailPageContainer>
    </>
  );
}

export default QuestionDetails;
