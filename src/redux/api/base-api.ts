import { axiosBaseQuery } from "@/helpers/axios/axios-base-query";
import { getBaseUrl } from "@/helpers/config/env-config";
import { createApi } from "@reduxjs/toolkit/query/react";
import { tagsTypesList } from "../tag-type";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({ baseUrl: getBaseUrl() }),
  endpoints: () => ({}),
  tagTypes: tagsTypesList,
});
