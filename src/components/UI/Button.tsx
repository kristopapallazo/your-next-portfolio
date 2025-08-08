import React from "react";
import { motion } from "framer-motion";
import { DivideIcon as LucideIcon } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  icon?: LucideIcon;
  onClick?: () => void;
  href?: string;
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  icon: Icon,
  onClick,
  href,
  className = "",
  disabled = false,
}) => {
  const baseClasses =
    "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary:
      "bg-russian-green-600 text-white hover:bg-russian-green-700 focus:ring-russian-green-500 shadow-lg hover:shadow-xl",
    secondary:
      "bg-dark-700 text-white hover:bg-dark-600 focus:ring-dark-500 shadow-lg hover:shadow-xl",
    outline:
      "border-2 border-russian-green-500 text-russian-green-400 hover:bg-russian-green-600 hover:text-white focus:ring-russian-green-500",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = `${baseClasses} ${variants[variant]} ${
    sizes[size]
  } ${className} ${
    disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
  }`;

  const content = (
    <>
      {Icon && <Icon className="w-5 h-5 mr-2" />}
      {children}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        whileHover={{ scale: disabled ? 1 : 1.05 }}
        whileTap={{ scale: disabled ? 1 : 0.95 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      className={classes}
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
    >
      {content}
    </motion.button>
  );
};

export default Button;
