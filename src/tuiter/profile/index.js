import React from "react";
import { useSelector } from "react-redux";

const ProfileComponent = () => {
  const profile = useSelector((state) => state.profile);
  return (
    <>
      <div className="row">
        <div className="col-1">
          <i class="fa-solid fa-arrow-left"></i>
        </div>
        <div className="col-auto">
          <span className="fw-bolder">
            {profile.firstName} {profile.lastName}
          </span>
        </div>
      </div>
      <img width="100%" height={200} src={`/images/${profile.bannerPicture}`} />
      <div className="row">
        <div className="col">
          <img
            width={100}
            className="position-absolute ms-3 float-start rounded-circle"
            style={{ top: "180px" }}
            src={`/images/${profile.profilePicture}`}
          />
        </div>
        <div className="col">
          <button className="rounded-pill btn btn-outline-secondary float-end mt-2 ps-3 pe-3 me-2 fw-bolder">
            Edit profile
          </button>
        </div>
      </div>
      <div>
        <br />
        <span className="fw-bolder">
          {profile.firstName} {profile.lastName}
        </span>
        <br />
        {profile.handle}
        <br />
        <br />
        {profile.bio}
        <div className="row">
          <div className="col-3">
            <i class="fa-solid fa-location-dot"></i> {profile.location}
          </div>
          <div className="col-3">
            <i class="fa-solid fa-lightbulb"></i> {profile.dateOfBirth}
          </div>
          <div className="col-auto">
            <i class="fa-solid fa-calendar-days"></i> {profile.dateJoined}
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <span className="fw-bolder">{profile.followingCount}</span>{" "}
            following
          </div>
          <div className="col-auto">
            <span className="fw-bolder">{profile.followersCount}</span>{" "}
            followers
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileComponent;
