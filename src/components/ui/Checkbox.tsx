import { InputHTMLAttributes, forwardRef } from "react";

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label: React.ReactNode;
  error?: string;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, error, className = "", ...props }, ref) => {
    return (
      <div className="w-full">
        <div className="flex items-start">
          <div className="flex items-center h-6">
            <input
              ref={ref}
              type="checkbox"
              className={`w-5 h-5 border-2 border-neutral-700 bg-neutral-800 rounded text-primary-600 focus:ring-2 focus:ring-primary-900/50 transition-colors duration-200 ${className}`}
              {...props}
            />
          </div>
          <div className="ml-3">
            <label htmlFor={props.id} className="text-body-sm text-neutral-700 cursor-pointer">
              {label}
            </label>
          </div>
        </div>
        {error && (
          <p className="text-body-sm text-red-400 mt-1">{error}</p>
        )}
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";

export default Checkbox;
