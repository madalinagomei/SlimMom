import axios from 'axios';
axios.defaults.baseURL =
  'https://drive.google.com/file/d/1QNSOH55DTFNyKmG6e8s1rMD7IFC4lVVI/view?usp=sharing';
// const API_KEY = 'e8938dc969e4885481c1163e17374d0f';

const END_POINTS = {
  DailyCalorieIntake: '/api/products',
};

export const apiCalorieIntake = async body => {
  const res = await axios.post(END_POINTS.DailyCalorieIntake, body);
  console.log('resData', res.data);
  return res.data;
};
