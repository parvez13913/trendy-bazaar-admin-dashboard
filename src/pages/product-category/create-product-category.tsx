import { PlusIcon, XIcon } from "lucide-react";
import { useState } from "react";

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

  const addCategory = () => {
    if (newCategory.trim()) {
      setCategories([...categories, newCategory.trim()]);
      setNewCategory("");
      setIsModalOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Product Categories
          </h1>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out flex items-center"
          >
            <PlusIcon className="w-5 h-5 mr-2" />
            Add Category
          </button>
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
              <div className="w-16 h-1 bg-blue-500 rounded"></div>
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
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-600 hover:text-gray-800"
                >
                  <XIcon className="w-6 h-6" />
                </button>
              </div>
              <input
                type="text"
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
                placeholder="Enter category name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
              />
              <button
                onClick={addCategory}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out"
              >
                Add Category
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateProductCategoryPage;
