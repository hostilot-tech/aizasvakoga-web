import { InputHTMLAttributes, forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, className = "", ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label htmlFor={props.id} className="block text-body-sm font-medium text-neutral-300 mb-1.5">
            {label}
            {props.required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
        <input
          ref={ref}
          id={props.id}
          className={`w-full px-4 py-3 border rounded-lg text-body-md placeholder:text-neutral-500 focus:ring-2 transition-colors duration-200 bg-neutral-800 border-neutral-700 text-white focus:border-primary-500 focus:ring-primary-900/50 ${
            error ? "border-red-500 focus:border-red-500 focus:ring-red-900/50" : ""
          } ${className}`}
          {...props}
        />
        {error && (
          <p className="text-body-sm text-red-400 mt-1" role="alert">{error}</p>
        )}
        {helperText && !error && (
          <p className="text-body-sm text-neutral-400 mt-1">{helperText}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
