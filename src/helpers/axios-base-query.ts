import { IMeta } from "@/types";
import { BaseQueryFn } from "@reduxjs/toolkit/query";
import { AxiosError, AxiosRequestConfig } from "axios";
import { instance as axiosInstance } from "./axios-instance";

export const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = { baseUrl: "" }
  ): BaseQueryFn<
    {
      url: string;
      method: AxiosRequestConfig["method"];
      data?: AxiosRequestConfig["data"];
      params?: AxiosRequestConfig["params"];
      meta?: IMeta;
      contentType?: string;
    },
    unknown,
    unknown
  > =>
  async ({ url, method, data, params, contentType }) => {
    try {
      const result = await axiosInstance({
        url: baseUrl + url,
        method,
        data,
        params,
        headers: {
          "Content-Type": contentType || "application/json",
        },
        withCredentials: true,
      });
      return result;
    } catch (axiosError) {
      let error = axiosError as AxiosError;
      return {
        error: {
          status: error.response?.status,
          data: error.response?.data || error.message,
        },
      };
    }
  };
