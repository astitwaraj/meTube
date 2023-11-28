export const VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=" +
  process.env.REACT_APP_GOOGLE_API_KEY;
export const G_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
