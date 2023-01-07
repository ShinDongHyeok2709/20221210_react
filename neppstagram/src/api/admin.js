import axios from "axios";

export const ACCESS_TOKEN = "ACCESS_TOKEN";

const token = localStorage.getItem(ACCESS_TOKEN);

if (token) {
  axios.defaults.headers = {
    Authorization: `Bearer ${token}`,
  };
}
axios.defaults.baseURL = "http://101.101.218.43";
/*
 */
export const postUser = async (form) => {
  try {
    const result = await axios.post("/users", { ...form });
    return result;
  } catch (error) {
    console.log("error", error);
  }
};

export const signInUser = (form) => {
  const result = axios.post("/users/login", {
    ...form,
  });
  return result;
};

export const getCurrentUser = async () => {
  try {
    const result = await axios.get("/users/current");
    return result;
  } catch (error) {
    console.log("error", error);
  }
};

export const patchProfile = async (form) => {
  try {
    const result = await axios.patch("/users/profile", form);
    return result;
  } catch (error) {
    console.log("error", error);
  }
};

export const postContent = async (form) => {
  try {
    const result = await axios.post("/posts", form);
    return result;
  } catch (error) {
    console.log("error", error);
  }
};

export const getMyContent = async (authorId) => {
  try {
    const result = await axios.get("/posts/author/" + authorId);
    return result;
  } catch (error) {
    console.log("error", error);
  }
};
