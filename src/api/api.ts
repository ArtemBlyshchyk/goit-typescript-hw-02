import axios, { AxiosInstance, AxiosResponse } from "axios";

// interface requestPhotosInterface {

// }

const instance: AxiosInstance = axios.create({
  baseURL: "https://api.unsplash.com/",
});
const accessKey: string = "yavGcAFrlnMu2OlPo-KVjsSI2RlSDF7PFdxSLkp_G7k";

export const requestPhotos = async <T>(query: string = "", page: number = 1): Promise<T> => {
  const { data }: AxiosResponse<T>  = await instance.get(
    `search/photos/?client_id=${accessKey}&per_page=12&query=${query}&page=${page}`
  );
  return data;
};
