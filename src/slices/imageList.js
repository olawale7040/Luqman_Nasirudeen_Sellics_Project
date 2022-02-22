import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";
import { APPROVED_PHOTO } from "src/constant";

const myKey = "1QmRkbFCLwa1ZVncNxiyD9XdMk1cAHdnnawmsnk6Dx8";
const apiKey = process.env.REACT_APP_API_KEY
  ? process.env.REACT_APP_API_KEY
  : myKey;

const initialState = {
  randomPhotos: [],
  approvedPhotos: [],
};

const slice = createSlice({
  name: "imageList",
  initialState,
  reducers: {
    fetchRandomPhotos(state, action) {
      state.randomPhotos = action.payload;
    },
    updatePhotos(state, action) {
      let { payload } = action;
      const approvedPhoto = state.randomPhotos.find(
        (photo) => photo.id === payload.id
      );
      if (payload.type === APPROVED_PHOTO) {
        state.approvedPhotos.push(approvedPhoto);
      }
      const updatedPhotos = state.randomPhotos.filter(
        (item) => item.id !== payload.id
      );
      state.randomPhotos = updatedPhotos;
    },
  },
});

export const reducer = slice.reducer;
export const { updatePhotos } = slice.actions;

export default slice;

// Fetch Random Photos
export const fetchRandomPhotos = () => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=30`
    );
    if (response.status === 200) {
      dispatch(slice.actions.fetchRandomPhotos(response.data));
    }
  } catch (err) {
    return err.message;
  }
};
