import React, { useEffect, useState } from "react";
import QuoraBox from "./quoraBox";
import Post from "./post";

function Feed() {
  //   const [posts, setPosts] = useState([]);
  //   useEffect(() => {
  //     fetch("/api/questions")
  //       .then((res) => {
  //         console.log(res.data.reverse());
  //         setPosts(res.data);
  //       })
  //       .catch((e) => {
  //         console.log(e);
  //       });
  //   }, []);
  return (
    <div
      style={{
        display: "flex",
        "flex-direction": "column",
        flex: "0.6",
      }}
    >
      <QuoraBox />
      {/* {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))} */}
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default Feed;
