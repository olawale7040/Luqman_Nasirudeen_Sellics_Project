import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { reducer as imageList } from "src/slices/imageList";

const persistConfig = {
  key: "root",
  storage,
};

const reducers = combineReducers({
  imageList,
});

const rootReducer = persistReducer(persistConfig, reducers);
export default rootReducer;
