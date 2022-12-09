import React, { useEffect, useState } from "react";
import UserCard from "./user-card";
import AvatarCard from "./user-card/avatar-card";
import PostList from "./user-card/post-list";
import PostItem from "./user-card/post-list/post-item";
import { Spinner } from "../icons";
import { publicFetch } from "../../../utils/fetcher";
import { useParams } from "react-router-dom";

const UserDetail = () => {
  const [posts, setPosts] = useState(null);
  const { userid } = useParams();

  useEffect(() => {
    const fetchQuestions = async () => {
      const { data } = await publicFetch.get(`/question/user/${userid}`);
      setPosts(data);
    };
    fetchQuestions();
  }, []);

  return (
    <>
      <UserCard>
        <AvatarCard userid={userid} />
        <PostList>
          {!posts && (
            <div className="loading">
              <Spinner />
            </div>
          )}

          {posts?.map(({ id, title, score, created }) => (
            <PostItem
              key={id}
              title={title}
              vote={score}
              created={created}
              id={id}
            />
          ))}

          {posts?.length == 0 && (
            <p className="not-found-questions">
              Don&apos;t have any questions yet.
            </p>
          )}
        </PostList>
      </UserCard>
    </>
  );
};

export default UserDetail;
