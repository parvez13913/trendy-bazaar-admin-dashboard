import Button from "@/components/Forms/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus, Upload } from "lucide-react";
import type React from "react";
import { Controller, useForm } from "react-hook-form";

interface ProductFormData {
  name: string;
  price: number;
  description: string;
  quantity: number;
  productCategoryId: string;
  productImage: FileList;
  additionalImages: FileList;
}

const CreateProductPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ProductFormData>();

  const onSubmit = (data: ProductFormData) => {
    // Here you would typically send the data to your API
    console.log(data);
  };

  return (
    <div className="mx-auto px-4 py-8 bg-gray-100">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
            Create New Product
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name">Product Name</label>
                <Input
                  id="name"
                  {...register("name", {
                    required: "Product name is required",
                  })}
                  placeholder="Enter product name"
                />
                {errors.name && (
                  <p className="text-sm text-red-500">{errors.name.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="price">Price</label>
                <Input
                  id="price"
                  type="number"
                  step="0.01"
                  {...register("price", {
                    required: "Price is required",
                    min: 0,
                  })}
                  placeholder="0.00"
                />
                {errors.price && (
                  <p className="text-sm text-red-500">{errors.price.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="quantity">Quantity</label>
                <Input
                  id="quantity"
                  type="number"
                  {...register("quantity", {
                    required: "Quantity is required",
                    min: 0,
                  })}
                  placeholder="Enter quantity"
                />
                {errors.quantity && (
                  <p className="text-sm text-red-500">
                    {errors.quantity.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="productCategoryId">Category</label>
                <Controller
                  name="productCategoryId"
                  control={control}
                  rules={{ required: "Category is required" }}
                  render={({ field }) => (
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">Category 1</SelectItem>
                        <SelectItem value="2">Category 2</SelectItem>
                        <SelectItem value="3">Category 3</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors.productCategoryId && (
                  <p className="text-sm text-red-500">
                    {errors.productCategoryId.message}
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                {...register("description", {
                  required: "Description is required",
                })}
                placeholder="Enter product description"
                className="h-32"
              />
              {errors.description && (
                <p className="text-sm text-red-500">
                  {errors.description.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="productImage">Main Product Image</label>
              <div className="flex items-center space-x-2">
                <Input
                  id="productImage"
                  type="file"
                  accept="image/*"
                  {...register("productImage", {
                    required: "Main product image is required",
                  })}
                  className="hidden"
                />
                <label htmlFor="productImage" className="cursor-pointer">
                  <div className="flex items-center space-x-2 px-4 py-2 rounded-md">
                    <Upload className="h-5 w-5" />
                    <span>Upload Image</span>
                  </div>
                </label>
                <span className="text-sm text-muted-foreground">
                  {errors.productImage
                    ? errors.productImage.message
                    : "No file chosen"}
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="additionalImages">Additional Images</label>
              <div className="flex items-center space-x-2">
                <Input
                  id="additionalImages"
                  type="file"
                  accept="image/*"
                  multiple
                  {...register("additionalImages")}
                  className="hidden"
                />
                <label htmlFor="additionalImages" className="cursor-pointer">
                  <div className="flex items-center space-x-2 px-4 py-2  rounded-md">
                    <Upload className="h-5 w-5" />
                    <span>Upload Images</span>
                  </div>
                </label>
                <span className="text-sm text-muted-foreground">
                  {errors.additionalImages
                    ? errors.additionalImages.message
                    : "No files chosen"}
                </span>
              </div>
            </div>

            <Button type="submit" className="w-full">
              <Plus className="mr-2 h-4 w-4" /> Create Product
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CreateProductPage;
