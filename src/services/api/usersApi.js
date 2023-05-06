import axios from "axios";

const instance = axios.create({
    baseURL: "https://64557e6ef803f3457643c769.mockapi.io/",
});

export const fetchUsers = async () => {
    const { data } = await instance.get("users");
    return data;
};