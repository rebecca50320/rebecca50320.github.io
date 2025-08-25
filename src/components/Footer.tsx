import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-8">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="text-sm">Built with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span className="text-sm">using React, TypeScript & Tailwind CSS</span>
          </div>
          <p className="text-sm text-background/70">
            © {new Date().getFullYear()} John Developer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;