import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const client = axios.create({
  baseURL: "https://university-app.azurewebsites.net/mapi",
});
client.interceptors.request.use(async (config: any) => {
  const user = await AsyncStorage.getItem("user");
  if (user) {
    config.headers.Authorization = `Bearer ${user}`;
  }
  return config;
});
export default client;
