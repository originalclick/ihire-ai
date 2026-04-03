import { forwardRef } from 'react';

const Input = forwardRef(function Input({ label, type = 'text', placeholder, error, helperText, className = '', ...props }, ref) {
  return (
    <div className="flex flex-col gap-2">
      {label && <label className="text-sm font-medium text-gray-700">{label}{props.required && <span className="text-red-500 ml-1">*</span>}</label>}
      <input ref={ref} type={type} placeholder={placeholder}
        className={`w-full px-3 py-2 border rounded-lg text-base transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent ${error ? 'border-red-500 bg-red-50 focus:ring-red-500' : 'border-gray-300 hover:border-gray-400'} ${className}`}
        {...props} />
      {helperText && !error && <p className="text-xs text-gray-500">{helperText}</p>}
      {error && <p className="text-xs text-red-600">{error}</p>}
    </div>
  );
});
Input.displayName = 'Input';
export default Input;
