import { forwardRef } from 'react';
import { ChevronDown } from 'lucide-react';

const Select = forwardRef(function Select({ label, options = [], error, placeholder = 'Select an option', className = '', ...props }, ref) {
  return (
    <div className="flex flex-col gap-2">
      {label && <label className="text-sm font-medium text-gray-700">{label}{props.required && <span className="text-red-500 ml-1">*</span>}</label>}
      <div className="relative">
        <select ref={ref}
          className={`w-full px-3 py-2 border rounded-lg text-base appearance-none bg-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent cursor-pointer ${error ? 'border-red-500 bg-red-50 focus:ring-red-500' : 'border-gray-300 hover:border-gray-400'} ${className}`}
          {...props}>
          <option value="" disabled>{placeholder}</option>
          {options.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>
        <ChevronDown size={18} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
      </div>
      {error && <p className="text-xs text-red-600">{error}</p>}
    </div>
  );
});
Select.displayName = 'Select';
export default Select;
