import React from "react";
import { updateTuitThunk } from "../../../services/tuits-thunks";
import { useDispatch } from "react-redux";

const TuitStats = ({ tuit }) => {
  const dispatch = useDispatch();
  return (
    <div className="row">
      <div className="col">
        <i className="fa-regular fa-comment"></i> {tuit.replies}
      </div>
      <div className="col">
        <i className="fa-solid fa-retweet"></i> {tuit.retuits}
      </div>
      <div className="col">
        <i
          className="bi bi-heart-fill me-2 text-danger"
          onClick={() =>
            dispatch(
              updateTuitThunk({
                ...tuit,
                likes: tuit.likes + 1,
              })
            )
          }
        ></i>{" "}
        {tuit.likes}
      </div>
      <div className="col">
        <i
          class="fa-solid fa-thumbs-down"
          onClick={() =>
            dispatch(
              updateTuitThunk({
                ...tuit,
                dislikes: tuit.dislikes + 1,
              })
            )
          }
        ></i>{" "}
        {tuit.dislikes}
      </div>
      <div className="col">
        <i className="fa-solid fa-share-nodes"></i>
      </div>
    </div>
  );
};

export default TuitStats;
