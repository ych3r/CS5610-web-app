import { createSlice } from "@reduxjs/toolkit";
// import profile from "../profile/profile.json";

const profile = {
  _id: 123,
  firstName: "Yuchen",
  lastName: "Liu",
  handle: "@_liuyuchen",
  profilePicture: "lyc.jpeg",
  bannerPicture: "anime.jpeg",
  bio: 'Not sure how to implement the tuit number on the top. Used "style" to decorate the profilePicture, it works but I guess there\'s a better way to do it.',
  website: "",
  location: "Malden, MA",
  dateOfBirth: "x/x/1998",
  dateJoined: "3/2023",
  followingCount: 1,
  followersCount: 2,
};

const profileSlice = createSlice({
  name: "profile",
  initialState: profile,
  reuducers: {
    editProfile(state, action) {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.bio = action.payload.bio;
      state.location = action.payload.location;
      state.website = action.payload.website;
      state.dateOfBirth = action.payload.dateOfBirth;
    },
  },
});

export const { editProfile } = profileSlice.actions;
export default profileSlice.reducer;
