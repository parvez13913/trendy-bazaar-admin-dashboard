import { Separator } from "@/components/ui/separator";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-background text-foreground py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Trendy Bazer Admin</h3>
            <p className="text-sm text-muted-foreground">
              Manage your e-commerce platform with ease and efficiency.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm hover:underline">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:underline">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:underline">
                  Orders
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:underline">
                  Customers
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-foreground hover:text-primary">
                <FaGithub size={24} />
              </a>
              <a href="#" className="text-foreground hover:text-primary">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-foreground hover:text-primary">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>
        <Separator className="my-8" />
        <div className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Trendy Bazer. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
