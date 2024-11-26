import { axiosBaseQuery } from "@/helpers/axios-base-query";
import { getBaseUrl } from "@/helpers/config/env-config";
import { createApi } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({ baseUrl: getBaseUrl() }),
  endpoints: () => ({}),
});
