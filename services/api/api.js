import axios from 'axios';
axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
axios.defaults.headers.common[
  'Authorization'
] = `Bearer ${process.env.REACT_APP_API_KEY}`;

const END_POINTS = {
  DailyCalorieIntake: '/api/products',
};

export const apiCalorieIntake = async body => {
  const res = await axios.post(END_POINTS.DailyCalorieIntake, body);
  console.log('resData', res.data);
  return res.data;
};
