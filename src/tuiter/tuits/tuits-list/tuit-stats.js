import React from "react";

const TuitStats = ({ tuit }) => {
  return (
    <div className="row">
      <div className="col">
        <i className="fa-regular fa-comment"></i> {tuit.replies}
      </div>
      <div className="col">
        <i className="fa-solid fa-retweet"></i> {tuit.retuits}
      </div>
      <div className="col">
        <i className={tuit.liked?"fa-solid fa-heart":"fa-regular fa-heart"} style={tuit.liked?{color: "red"}:{color: null}}></i> {tuit.likes}
      </div>
      <div className="col">
        <i class="fa-solid fa-share-nodes"></i>
      </div>
    </div>
  );
};

export default TuitStats;
