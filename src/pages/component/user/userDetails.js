import React, { useEffect, useState } from "react";

import Layout from "../layout";
import UserCard from "./user-card";
import AvatarCard from "./user-card/avatar-card";
import PostList from "./user-card/post-list";
import PostItem from "./user-card/post-list/post-item";
import { Spinner } from "../icons";
import { publicFetch } from "../../../utils/fetcher";

const UserDetail = ({ username }) => {
  const [posts, setPosts] = useState(null);
  const [postType, setPostType] = useState("Questions");

  useEffect(() => {
    const fetchQuestions = async () => {
      const { data } = await publicFetch.get(`/question/user/${username}`);
      setPosts(data);
    };
    fetchQuestions();
  }, [postType, username]);

  return (
    <Layout extra={false}>
      <UserCard>
        <AvatarCard username={username} />
        <PostList postType={postType} setPostType={setPostType}>
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
    </Layout>
  );
};

export async function getServerSideProps(context) {
  const username = context.params.username;
  return {
    props: {
      username,
    },
  };
}

export default UserDetail;
