import { TextareaHTMLAttributes, forwardRef } from "react";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, helperText, className = "", ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label htmlFor={props.id} className="block text-body-sm font-medium text-neutral-300 mb-1.5">
            {label}
            {props.required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
        <textarea
          ref={ref}
          className={`w-full px-4 py-3 border rounded-lg text-body-md placeholder:text-neutral-500 focus:ring-2 transition-colors duration-200 bg-neutral-800 border-neutral-700 text-white focus:border-primary-500 focus:ring-primary-900/50 resize-none ${error ? "border-red-500 focus:border-red-500 focus:ring-red-900/50" : ""} ${className}`}
          {...props}
        />
        {error && (
          <p className="text-body-sm text-red-400 mt-1">{error}</p>
        )}
        {helperText && !error && (
          <p className="mt-1.5 text-body-sm text-neutral-500">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

export default Textarea;
