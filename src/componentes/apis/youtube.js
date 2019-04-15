import axios from "axios";

const KEY = "AIzaSyC4ZIyrfm8BzbnLwNJxv-fBzhawOJ_hrM8";

export default axios.create( {
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});

