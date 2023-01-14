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
  /*
  try {
    const result = await axios.post("/users", { ...form });
    return result;
  } catch (error) {
    console.log("error", error);
    throw new Error(error.message);
  }
  */
  const result = await axios.post("/users", { ...form });
  return result;
};

export const signInUser = async (form) => {
  const result = await axios.post("/users/login", {
    ...form,
  });

  const token = result.data.data.token;
  //axios.defaults.headers.Authorization = token;
  window.localStorage.setItem(ACCESS_TOKEN, token);

  axios.defaults.headers["Authorization"] = "Bearer " + token; //헤더명에 -이 포함된 경우 사용

  return token;
};

export const getCurrentUser = async () => {
  try {
    const { data } = await axios.get("/users/current");
    return data.data;
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
    const { data } = await axios.post("/posts", form);
    return data.data;
  } catch (error) {
    console.log("error", error);
  }
};

export const getContents = async (page = 1) => {
  try {
    //const result = await axios.get("/posts" + { params: { page: page } });
    const { data } = await axios.get(`/posts?page=${page}`);
    return data.data;
  } catch (error) {
    console.log("error", error);
  }
};

export const getComments = async (postId, page = 1) => {
  console.log(postId);
  try {
    const { data } = await axios.get("/comments", { params: { page, postId } });
    //const { data } = await axios.get("/comments");
    console.log("get getComments data : ", data);
    return data.data;
  } catch (error) {
    console.log("error", error);
  }
};

/*
export const postComment = async (form) => {
  try {
    //const { data } = await axios.post("/comments", {
    
    //const result = await axios.post("/comments", {
    //  params: { ...form },
    //});
    
    const result = await axios.post("/comments", {
      params: { postId: form.postId, content: form.content },
    });

    return result;
  } catch (error) {
    console.log("error", error);
  }
};
*/

export const postComment = async (form) => {
  try {
    //const { data } = await axios.post("/comments", {
    //console.log("form.postId : ", form.postId);
    //console.log("form.content : ", form.content);
    const { data } = await axios.post(
      `/comments?postId=${form.postId}&content=${form.content}`
    );
    //const { data } = await axios.get("/comments");

    return data.data;
  } catch (error) {
    console.log("error", error);
  }
};

export const deleteComment = async (commentId) => {
  try {
    const { data } = await axios.delete(`/comments/${commentId}`);

    return data;
  } catch (error) {
    console.log("error", error);
  }
};

export const getContentById = async (postId) => {
  console.log(postId);
  try {
    const { data } = await axios.get("/posts/" + postId);
    //const { data } = await axios.get("/comments");
    console.log("getContentById data : ", data);
    return data.data;
  } catch (error) {
    console.log("error", error);
  }
};

export const searchUser = async (name) => {
  try {
    const { data } = await axios.get("/users/search", { params: { name } });
    //const { data } = await axios.get("/comments");
    console.log("searchUser data : ", data);
    return data.data;
  } catch (error) {
    console.log("error", error);
  }
};

export const getUserbyId = async (id) => {
  try {
    const { data } = await axios.get("/users/" + id);
    //const { data } = await axios.get("/comments");
    console.log("getUserbyId data : ", data);
    return data.data;
  } catch (error) {
    console.log("error", error);
  }
};

export const getPostbyUserId = async (id) => {
  try {
    const { data } = await axios.get("/posts/author/" + id);
    //const { data } = await axios.get("/comments");
    console.log("getUserPost data : ", data);
    return data.data;
  } catch (error) {
    console.log("error", error);
  }
};

export const converURL = async (url) => {
  const result = await fetch(url);
  const data = await result.blob();
  const ext = url.split(".").pop();
  const filename = url.split("/").pop();
  const metadata = { type: `image/${ext}` };

  console.log("metadata : ", metadata);
  return new File([data], filename, metadata);
};
