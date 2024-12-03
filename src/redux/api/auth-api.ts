import { tagTypes } from "../tag-type";
import { baseApi } from "./base-api";

const AUTH_URL = "/auth";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation({
      query: (data) => ({
        url: `${AUTH_URL}/login`,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.auth],
    }),
  }),
});

export const { useLoginMutation } = authApi;
