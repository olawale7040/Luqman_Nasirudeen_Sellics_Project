// import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";
import { APPROVED_PHOTO } from "src/constant";

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
export const { updatePhotos, fetchRandomPhotos } = slice.actions;

export default slice;
