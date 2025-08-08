import React from "react";
import { motion } from "framer-motion";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  className = "",
  hover = true,
}) => {
  return (
    <motion.div
      className={`bg-dark-800 rounded-xl shadow-lg border border-dark-700 overflow-hidden ${className}`}
      whileHover={
        hover ? { y: -5, shadow: "0 20px 40px rgba(53, 94, 59, 0.3)" } : {}
      }
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

export default Card;
