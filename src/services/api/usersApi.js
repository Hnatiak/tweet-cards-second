import axios from "axios";

const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});

export const fetchUsers = async () => {
    const { data } = await instance.get("users");
    return data;
};