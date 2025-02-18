import { tagTypes } from "../tag-type";
import { baseApi } from "./base-api";

const PRODUCT_CATEGORY_URL = "/categories";

export const productCategoryApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    create: build.mutation({
      query: (data) => ({
        url: `${PRODUCT_CATEGORY_URL}/create-product-category`,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.productCategory],
    }),
    getAll: build.query({
      query: (arg: Record<string, any>) => ({
        url: PRODUCT_CATEGORY_URL,
        method: "GET",
        params: arg,
      }),
      providesTags: [tagTypes.productCategory],
    }),
  }),
});

export const { useCreateMutation, useGetAllQuery } = productCategoryApi;
