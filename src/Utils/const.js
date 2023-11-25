export const VIDEO_API =
  "GET https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=" +
  process.env.REACT_APP_GOOGLE_API_KEY;
export const G_KEY = process.env.REACT_APP_GOOGLE_API_KEY;