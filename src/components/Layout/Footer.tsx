import { FC } from "react";
import SocialLinks from "../SocialLinks/SocialLinks";

const Footer: FC = () => {
  return (
    <footer className="bg-dark-900 border-t border-dark-700 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Stay in Touch</h3>
            <p className="text-gray-400">
              Open to exciting projects, creative ideas, and meaningful
              connections.
            </p>
          </div>
          <SocialLinks />
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center">
            Made with focus and determination
          </p>
          <p className="text-sm text-gray-500 mt-2">
            © 2024 YourNextPortfolio - All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
