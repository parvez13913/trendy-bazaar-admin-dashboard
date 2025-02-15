import Button from "@/components/Forms/Button";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { useCreateMutation } from "@/redux/api/product-category-api";
import { ProductCategorySchema } from "@/utils/zood-schemas/product-category.validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { PlusIcon, XIcon } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast, Toaster } from "sonner";
import { z } from "zod";

const CreateProductCategoryPage = () => {
  const [categories, setCategories] = useState([
    "Electronics",
    "Clothing",
    "Books",
    "Home & Garden",
    "Toys",
  ]);
  const [newCategory, setNewCategory] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const form = useForm<z.infer<typeof ProductCategorySchema>>({
    resolver: zodResolver(ProductCategorySchema),
  });

  const [create] = useCreateMutation();

  const onSubmit = async (data: any) => {
    try {
      const response = await create(data);
      if (response?.data?.success) {
        toast.success(response?.data?.message);
        setIsModalOpen(false);
      }

      if (newCategory.trim()) {
        setCategories([...categories, newCategory.trim()]);
        setNewCategory("");
      }
    } catch (error) {
      toast.error("Something went wrong.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <Toaster />
      <div className="max-w-6xl mx-auto">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Product Categories
          </h1>
          <Button
            onClick={() => setIsModalOpen(true)}
            className="bg-gradient-to-r from-primary to-secondary hover:from-primary-foreground hover:to-secondary-foreground text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out flex items-center"
          >
            <PlusIcon className="w-5 h-5 mr-2" />
            Add Category
          </Button>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {category}
              </h2>
              <div className="w-16 h-1 bg-primary rounded"></div>
            </div>
          ))}
        </div>

        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg p-8 max-w-md w-full">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">
                  Add New Category
                </h2>
                <Button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-600 hover:text-gray-800"
                >
                  <XIcon className="w-6 h-6" />
                </Button>
              </div>
              <Form submitHandler={onSubmit} {...form}>
                <FormInput
                  type="text"
                  value={newCategory}
                  label="Category Name"
                  required
                  name="name"
                  placeholder="Enter category name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary mb-4 text-black"
                />
                <Button
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary-foreground hover:to-secondary-foreground text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out"
                  type="submit"
                >
                  Add Category
                </Button>
              </Form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateProductCategoryPage;
