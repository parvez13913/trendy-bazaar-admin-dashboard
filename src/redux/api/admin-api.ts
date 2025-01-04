import { IAdmin, IMeta } from "@/types";
import { tagTypes } from "../tag-type";
import { baseApi } from "./base-api";

const ADMIN_URL = "/admins";

export const adminApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllAdmins: build.query({
      query: (arg: Record<string, any>) => ({
        url: ADMIN_URL,
        method: "GET",
        params: arg,
      }),
      transformResponse: (response: IAdmin[], meta: IMeta) => {
        return {
          admins: response,
          meta,
        };
      },
      providesTags: [tagTypes.admin],
    }),
  }),
});

export const { useGetAllAdminsQuery } = adminApi;
