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

    logout: build.mutation({
      query: (data) => ({
        url: `${AUTH_URL}/logout`,
        method: "POST",
        data,
      }),
    }),

    requestAdminRegister: build.mutation({
      query: (data) => ({
        url: `${AUTH_URL}/request-admin-register`,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.admin],
    }),

    createAdmin: build.mutation({
      query: (data) => ({
        url: `${AUTH_URL}/admin-register`,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.admin],
    }),

    forgotPassword: build.mutation({
      query: (data) => ({
        url: `${AUTH_URL}/forgot-password`,
        method: "POST",
        data,
      }),
    }),

    resetPassword: build.mutation({
      query: (data) => ({
        url: `${AUTH_URL}/reset-password`,
        method: "POST",
        data,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useCreateAdminMutation,
  useRequestAdminRegisterMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
} = authApi;
