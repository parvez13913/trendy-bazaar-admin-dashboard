import Button from "@/components/Forms/Button";
import React from "react";
import { IoHome } from "react-icons/io5";
import { Link } from "react-router-dom";

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground p-4">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold sm:text-6xl">404</h1>
        <h2 className="text-2xl font-semibold sm:text-3xl">Page Not Found</h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          Oops! The page you're looking for doesn't exist. It might have been
          moved or deleted.
        </p>
        <Button className="mt-8">
          <Link to="/" className="inline-flex items-center space-x-2">
            <IoHome className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
