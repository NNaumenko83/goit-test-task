import axios from "axios";

axios.defaults.baseURL = "https://641b2a469b82ded29d4bddd7.mockapi.io";

export const getUsers = async () => {
  const res = await axios.get("/users");
  return res.data;
};

export const increaseFollowers = async (user) => {
  await axios.put(`/users/${user.id}`, {
    followers: user.followers + 1,
  });
};

export const decreaseFollowers = async (user) => {
  await axios.put(`/users/${user.id}`, {
    followers: user.followers - 1,
  });
};
