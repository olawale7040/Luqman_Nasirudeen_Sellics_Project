import axios from "axios";
const myKey = "1QmRkbFCLwa1ZVncNxiyD9XdMk1cAHdnnawmsnk6Dx8";
const apiKey = process.env.REACT_APP_API_KEY
  ? process.env.REACT_APP_API_KEY
  : myKey;

export const getRandomPhotos = () =>
  axios.get(
    `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=30`
  );
