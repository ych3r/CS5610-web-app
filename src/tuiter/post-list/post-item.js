import React from "react";

const PostItem = ({
  post = {
    avatarIcon: "spacex.jpeg",
    userName: "SpaceX",
    handle: "SpaceX",
    time: "23h",
    content:
      "Dennis and Akiko Tito are the first two crew members on Starship's second commercial spaceflight around the Moon",
    image: "",
    comment: "595",
    retuit: "1,168",
    likes: "11.1K",
  },
}) => {
  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-2">
          <img
            width={50}
            className="rounded-5"
            src={`/images/${post.avatarIcon}`}
          />
        </div>
        <div className="col-10">
          <div>
            <span className="fw-bolder">{post.userName}</span> @{post.handle} . {post.time}
          </div>
          <div>{post.content}</div>
          <img
            width={400}
            className="rounded-3"
            src={`/images/${post.image}`}
          />
          <div className="row">
            <div className="col">
              <i className="fa-regular fa-comment"></i> {post.comment}
            </div>
            <div className="col">
              <i className="fa-solid fa-retweet"></i> {post.retuit}
            </div>
            <div className="col">
              <i className="fa-regular fa-heart"></i> {post.likes}
            </div>
            <div className="col">
              <i className="fa-solid fa-arrow-up-from-bracket"></i>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default PostItem;
