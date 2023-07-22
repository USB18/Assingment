import axios from "axios";
import { STATUS_CODE } from "../api-constant";

const axiosInstance = axios.create({
    baseURL: "https://api.stackexchange.com/2.3/",
    timeout: 30000,
    headers: {
        'Accept': 'Application/json',
        'Content-Type': 'Application/json',
    },
});


axiosInstance.interceptors.request.use(
    async function (config: any) {
        return config;
    },
    error => {
        Promise.reject(error);
    },
);

axiosInstance.interceptors.response.use(
    async function (result) {
        return result;
    },
    async function (error) {
        return Promise.reject(error);
    },
);

export const GET = async (url: string, params?: any) => {
    let getRes = await axiosInstance.get(url, {
      params: params,
    });
  
    if (
      getRes.status === STATUS_CODE.SUCCESS_CODE_201 ||
      getRes.status === STATUS_CODE.SUCCESS_CODE_200
    ) {
      return { data: getRes.data, status: true };
    } else {
      return { message: getRes.data.message, status: false };
    }
  };
  