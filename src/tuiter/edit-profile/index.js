import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { editProfile } from "../reducers/profile-reducer";

const EditProfile = () => {
  const profile = useSelector((state) => state.profile);
  let [firstName, setFirstName] = useState(profile.firstName);
  let [lastName, setLastName] = useState(profile.lastName);
  let [bio, setBio] = useState(profile.bio);
  let [location, setLocation] = useState(profile.location);
  let [website, setWebsite] = useState(profile.website);
  let [dateOfBirth, setDateOfBirth] = useState(profile.dateOfBirth);

  const dispatch = useDispatch();

  const saveProfileHandler = () => {
    const newProfileInfo = {
      firstName: firstName,
      lastName: lastName,
      bio: bio,
      location: location,
      website: website,
      dateOfBirth: dateOfBirth,
    };
    dispatch(editProfile(newProfileInfo));
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
          <Link
            to="/tuiter/profile"
            className="btn btn-dark fw-bolder rounded-pill float-end"
            onClick={saveProfileHandler}
          >
            Save
          </Link>
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
        <form className="form-floating">
          <textarea className="form-control">{`${profile.firstName} ${profile.lastName}`}</textarea>
          <label>Name</label>
        </form>
        <br />
        <form className="form-floating">
          <textarea
            className="form-control"
            style={{ height: 100 }}
            value={bio}
            onChange={(event) => {
              console.log(event.target.value);
              setBio(event.target.value);
            }}
          />
          <label>Bio</label>
        </form>
        <br />
        <form className="form-floating">
          <textarea className="form-control">{`${profile.location}`}</textarea>
          <label>Location</label>
        </form>
        <br />
        <form className="form-floating">
          <textarea className="form-control">{`${profile.website}`}</textarea>
          <label>Website</label>
        </form>
        <br />
        <form className="form-floating">
          <textarea className="form-control">{`${profile.dateOfBirth}`}</textarea>
          <label>Birth date</label>
        </form>
      </div>
    </>
  );
};

export default EditProfile;
