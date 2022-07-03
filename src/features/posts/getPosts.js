import axios from "axios";
import { apiBaseUrl } from "../../constants/api";

export const fetchPosts = () => axios.get(`${apiBaseUrl}/getPosts`);
