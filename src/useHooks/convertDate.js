const formatdate = (date) => {
  const givenDate = new Date(date);
  const currDate = new Date();
  const diffDate = currDate - givenDate;
  const dayDiff = Math.floor(diffDate / (1000 * 60 * 60 * 24));


  if (dayDiff === 0) return "Just now";
  else if (dayDiff < 7) return dayDiff + " days ago";
  else if (dayDiff < 30) return Math.floor(dayDiff / 7) + "weeks ago";
  else if (dayDiff < 365) return Math.floor(dayDiff / 30) + "months ago";
  else return Math.floor(dayDiff / 365) + "years ago";
};

export default formatdate;
