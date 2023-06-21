import axios from "axios";

axios.defaults.baseURL = "https://641b2a469b82ded29d4bddd7.mockapi.io";

export const getUsers = async () => {
  try {
    const res = await axios.get("/users");
    return res.data;
  } catch (error) {
    return error.message;
  }
};

export const increaseFollowers = async (user) => {
  console.log("user:", user);
  try {
    const res = await axios.put(`/users/${user.id}`, {
      followers: user.followers + 1,
    });
    console.log("res:", res.data);
    return res.data;
  } catch (error) {
    return error.message;
  }
};

export const decreaseFollowers = async (user) => {
  try {
    const res = await axios.put(`/users/${user.id}`, {
      followers: user.followers - 1,
    });
    return res.data;
  } catch (error) {
    return error.message;
  }
};
