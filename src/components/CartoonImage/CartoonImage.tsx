import { Code, Palette, Zap } from "lucide-react";

const CartoonImage1 = () => {
  return (
    <div className="relative flex justify-center lg:justify-end">
      <div className="relative group">
        {/* Main image container */}
        <div className="relative w-80 h-80 lg:w-96 lg:h-96">
          {/* Animated border */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500 p-1 animate-spin-slow">
            <div className="w-full h-full rounded-full bg-black"></div>
          </div>

          {/* Image */}
          <div className="absolute inset-2 rounded-full overflow-hidden bg-gradient-to-br from-purple-900/50 to-blue-900/50 backdrop-blur-sm">
            <img
              src="/public/cartoon-img.png"
              alt="Kristo - Creative Developer"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating elements */}
          <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl rotate-12 animate-float flex items-center justify-center">
            <Code size={24} className="text-white" />
          </div>
          <div className="absolute -bottom-6 -left-6 w-14 h-14 bg-gradient-to-r from-blue-500 to-teal-500 rounded-2xl -rotate-12 animate-float-delayed flex items-center justify-center">
            <Palette size={20} className="text-white" />
          </div>
          <div className="absolute top-1/4 -left-8 w-12 h-12 bg-gradient-to-r from-teal-500 to-green-500 rounded-xl rotate-45 animate-pulse flex items-center justify-center">
            <Zap size={16} className="text-white" />
          </div>

          {/* Glow effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-2xl scale-110 group-hover:scale-125 transition-transform duration-500"></div>
        </div>
      </div>
    </div>
  );
};

const CartoonImage = () => {
  return (
    <div className="flex justify-center lg:justify-end">
      <div className="relative">
        <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 p-8 shadow-2xl">
          <img
            src="/public/cartoon-img.png"
            alt="Cartoon portrait"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        {/* Floating elements */}
        <div className="absolute -top-4 -right-4 w-12 h-12 bg-yellow-400 rounded-full animate-bounce"></div>
        <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-pink-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 -left-8 w-6 h-6 bg-green-400 rounded-full animate-ping"></div>
      </div>
    </div>
  );
};

export default CartoonImage;
