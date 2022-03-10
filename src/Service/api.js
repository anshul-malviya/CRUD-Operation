import axios from "axios";

const url = "http://localhost:3003/useres"
const getUsers = async () => {
  return await axios.get(url);
}

const addUser = async (user) => {
  return await axios.post(url, user)
}

const getUpdate = async(id) => {
  id = id || "";
  return await axios.get("http://localhost:3003/useres/" + [id]);
}
const editUser = async(id, user) => {
    return await axios.put("http://localhost:3003/useres/" + [id], user);
}
const deleteUser = async(id) => {
  return await axios.delete("http://localhost:3003/useres/" + [id]);
}
export { getUsers, addUser , getUpdate , editUser,deleteUser};