import React from "react";
import { useSelector } from "react-redux";
import TuitItem from "./tuit-item";

const TuitsList = () => {
    const tuitsArray = useSelector(state => state.hometuits);
    return (
        <ul className="list-group">
            {
                tuitsArray.map(
                    tuit => <TuitItem key={tuitsArray._id} tuit={tuit} />
                )
            }
        </ul>
    );
};

export default TuitsList;