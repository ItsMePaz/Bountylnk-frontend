import axios from "axios";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const apiClient = axios.create({
  baseURL: apiUrl,
  headers: {
    common: {
      "Content-Type": "application/json",
    },
  },
});

async function registerUser(newUser: any) {
  const response = await apiClient.post("/api/v1/user/register", newUser);
  return response.data;
}

export default { registerUser };
