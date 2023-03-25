import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { editProfile } from "../reducers/profile-reducer";

const EditProfile = () => {
  const profile = useSelector((state) => state.profile);
  let [userName, setUserName] = useState(
    profile.firstName + " " + profile.lastName
  );
  let [bio, setBio] = useState(profile.bio);
  let [location, setLocation] = useState(profile.location);
  let [website, setWebsite] = useState(profile.website);
  let [dateOfBirth, setDateOfBirth] = useState(profile.dateOfBirth);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const saveProfileHandler = () => {
    const firstName = userName.split(" ")[0];
    const lastName = userName.split(" ")[1];
    const newProfileInfo = {
      firstName: firstName,
      lastName: lastName,
      bio: bio,
      location: location,
      website: website,
      dateOfBirth: dateOfBirth,
    };
    dispatch(editProfile(newProfileInfo));
    navigate("/tuiter/profile");
  };

  return (
    <>
      <div className="row mb-1">
        <div className="col-1">
          <Link to="/tuiter/profile">
            <i className="bi bi-x-lg text-secondary"></i>
          </Link>
        </div>
        <div className="col-9">
          <span className="fw-bolder">Edit profile</span>
        </div>
        <div className="col-2">
          <button
            className="btn btn-dark fw-bolder rounded-pill float-end"
            onClick={saveProfileHandler}
          >
            Save
          </button>
        </div>
      </div>
      <div>
        <img
          width="100%"
          height={200}
          src={`/images/${profile.bannerPicture}`}
        />
      </div>
      <div>
        <img
          width={100}
          className="position-absolute ms-3 float-start rounded-circle"
          style={{ top: "200px" }}
          src={`/images/${profile.profilePicture}`}
        />
      </div>
      <div>
        <br />
        <br />
        <br />
        <div className="form-floating">
          <textarea
            className="form-control"
            value={userName}
            onChange={(event) => {
              setUserName(event.target.value);
            }}
          ></textarea>
          <label>Name</label>
        </div>
        <br />
        <div className="form-floating">
          <textarea
            className="form-control"
            style={{ height: 100 }}
            value={bio}
            onChange={(event) => {
              setBio(event.target.value);
            }}
          />
          <label>Bio</label>
        </div>
        <br />
        <div className="form-floating">
          <textarea
            className="form-control"
            value={location}
            onChange={(event) => {
              setLocation(event.target.value);
            }}
          ></textarea>
          <label>Location</label>
        </div>
        <br />
        <div className="form-floating">
          <textarea
            className="form-control"
            value={website}
            onChange={(event) => {
              setWebsite(event.target.value);
            }}
          ></textarea>
          <label>Website</label>
        </div>
        <br />
        <div className="form-floating">
          <textarea
            className="form-control"
            value={dateOfBirth}
            onChange={(event) => {
              setDateOfBirth(event.target.value);
            }}
          ></textarea>
          <label>Birth date</label>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
