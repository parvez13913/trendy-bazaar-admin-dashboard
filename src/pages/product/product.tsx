import Button from "@/components/Forms/Button";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import FormTextArea from "@/components/Forms/FormTextArea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProductSchema } from "@/utils/zood-schemas/product-validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Plus } from "lucide-react";
import type React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
  const form = useForm<z.infer<typeof ProductSchema>>({
    resolver: zodResolver(ProductSchema),
    defaultValues: {
      name: "",
    },
  });

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
          <Form submitHandler={onSubmit} {...form} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <FormInput name="productName" label="Product Name" />
              </div>

              <div className="space-y-2">
                <FormInput name="price" label="Price" />
              </div>

              <div className="space-y-2">
                <FormInput name="quantity" label="Quantity" />
              </div>
            </div>

            <div className="space-y-2">
              <FormTextArea name="description" />
            </div>

            <Button type="submit" className="w-full">
              <Plus className="mr-2 h-4 w-4" /> Create Product
            </Button>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CreateProductPage;
