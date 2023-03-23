import React from "react";
import TuitStats from "./tuit-stats";

const TuitItem = ({ tuit }) => {
  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-2">
          <img
            width={48}
            className="float-start rounded-circle"
            src={`/images/${tuit.avatarIcon}`}
          />
        </div>
        <div className="col-10">
          <div>
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
