import { Avatar } from "@material-ui/core";
import {
  ArrowDownwardOutlined,
  ArrowUpwardOutlined,
  ChatBubbleOutlined,
  MoreHorizOutlined,
  RepeatOneOutlined,
  ShareOutlined,
} from "@material-ui/icons";
import React, { useState } from "react";
import "../../static/css/post.css";
// import "react-responsive-modal/styles.css";
// import ReactTimeAgo from "react-time-ago";
import ReactHtmlParser from "html-react-parser";

var answer =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mattis, ipsum in efficitur venenatis, nunc diam tristique ipsum, nec rhoncus est nunc et dolor. Suspendisse elit lorem, mollis vitae tempus vitae, cursus et felis. Morbi volutpat quis est vulputate rhoncus. Nullam tristique nisl nec felis dignissim tristique. Quisque euismod, erat a fringilla molestie, metus sapien faucibus arcu, in iaculis lacus diam sit amet enim. Cras a est sit amet leo ornare dictum.";

function LastSeen({ date }) {
  return (
    <div>
      {/* <ReactTimeAgo date={date} locale="en-US" timeStyle="round" /> */}
      10 days ago
    </div>
  );
}
function Post({ post }) {
  return (
    <div className="post">
      <div className="post__info">
        <Avatar />
        <h4>Asked by user</h4>

        <small>
          <LastSeen date={Date.now()} />
        </small>
      </div>
      <div className="post__body">
        <div className="post__question">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            mattis, ipsum in efficitur venenatis, nunc diam tristique ipsum, nec
            rhoncus est nunc et dolor
          </p>
          <button className="post__btnAnswer">Answer</button>
        </div>
      </div>
      <div className="post__footer">
        <div className="post__footerAction">
          <ArrowUpwardOutlined />
          <ArrowDownwardOutlined />
        </div>
        <RepeatOneOutlined />
        <ChatBubbleOutlined />
        <div className="post__footerLeft">
          <ShareOutlined />
          <MoreHorizOutlined />
        </div>
      </div>
      <p
        style={{
          color: "rgba(0,0,0,0.5)",
          fontSize: "12px",
          fontWeight: "bold",
          margin: "10px 0",
        }}
      >
        1 Answer
      </p>

      <div
        style={{
          margin: "5px 0px 0px 0px ",
          padding: "5px 0px 0px 20px",
          borderTop: "1px solid lightgray",
        }}
        className="post__answer"
      >
        <>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              padding: "10px 5px",
              borderTop: "1px solid lightgray",
            }}
            className="post-answer-container"
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "10px",
                fontSize: "12px",
                fontWeight: 600,
                color: "#888",
              }}
              className="post-answered"
            >
              <Avatar />
              <div
                style={{
                  margin: "0px 10px",
                }}
                className="post-info"
              >
                <p>Jhon</p>
                <span>
                  <LastSeen date={Date.now()} />
                </span>
              </div>
            </div>
            <div className="post-answer">{ReactHtmlParser(answer)}</div>
          </div>
        </>
      </div>
    </div>
  );
}

export default Post;
