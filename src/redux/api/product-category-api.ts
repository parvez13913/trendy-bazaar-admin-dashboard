import { tagTypes } from "../tag-type";
import { baseApi } from "./base-api";

const AUTH_URL = "/categories";

export const productCategoryApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    create: build.mutation({
      query: (data) => ({
        url: `${AUTH_URL}/create-product-category`,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.productCategory],
    }),
  }),
});

export const { useCreateMutation } = productCategoryApi;
