import { IMeta, IProfile } from "@/types";
import { tagTypes } from "../tag-type";
import { baseApi } from "./base-api";

const PROFILE_URL = "/profile";

export const profileApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getProfile: build.query({
      query: () => ({
        url: `${PROFILE_URL}`,
        method: "GET",
      }),
      transformResponse: (response: IProfile, meta: IMeta) => {
        return {
          profile: response,
          meta,
        };
      },
      providesTags: [tagTypes.profile],
    }),

    updateProfile: build.mutation({
      query: (data) => ({
        url: `${PROFILE_URL}`,
        method: "PATCH",
        data,
        contentType: "multipart/form-data",
      }),
    }),
  }),
});

export const { useGetProfileQuery, useUpdateProfileMutation } = profileApi;
