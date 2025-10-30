import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    children, 
    variant = "primary", 
    size = "md", 
    fullWidth = false,
    className = "",
    ...props 
  }, ref) => {
    const baseClasses = "btn-base";
    
    const variantClasses = {
      primary: "bg-primary-600 text-white hover:bg-primary-700 focus-visible:outline-primary-600 shadow-sm hover:shadow-md",
      secondary: "bg-neutral-100 text-neutral-900 hover:bg-neutral-200 focus-visible:outline-neutral-600",
      outline: "border-2 border-primary-600 text-primary-600 hover:bg-primary-50 focus-visible:outline-primary-600",
    };
    
    const sizeClasses = {
      sm: "px-4 py-2 text-body-sm",
      md: "px-6 py-3 text-body-md",
      lg: "px-8 py-4 text-body-lg",
    };
    
    const widthClass = fullWidth ? "w-full" : "";
    
    return (
      <button
        ref={ref}
        className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
