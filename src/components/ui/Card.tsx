import { HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

export default function Card({ children, hover = false, className = "", ...props }: CardProps) {
  const hoverClass = hover ? "card-hover cursor-pointer" : "";
  
  return (
    <div className={`card ${hoverClass} ${className}`} {...props}>
      {children}
    </div>
  );
}
