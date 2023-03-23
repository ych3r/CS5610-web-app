import React from "react";
import TuitStats from "./tuit-stats";
import { deleteTuit } from "../../reducers/home-tuits-reducer";
import { useDispatch } from "react-redux";

const TuitItem = ({ tuit }) => {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuit(id));
  }
  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-auto">
          <img
            width={50}
            className="float-start rounded-circle"
            src={`/images/${tuit.avatarIcon}`}
          />
        </div>
        <div className="col-10">
          <div>
            <i className="bi bi-x-lg float-end" onClick={() => deleteTuitHandler(tuit._id)}></i>
            <span className="fw-bolder">{tuit.userName} </span>
            {tuit.handle} . {tuit.time}
          </div>
          <div>{tuit.tuit}</div>
          <TuitStats tuit={tuit} />
        </div>
      </div>
    </li>
  );
};

export default TuitItem;
