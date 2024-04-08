import axios from "axios";

export const BASE_URL = "https://api.github.com";

export function findByName(name: string) {
    return axios.get(`${BASE_URL}/users/${name}`);
}