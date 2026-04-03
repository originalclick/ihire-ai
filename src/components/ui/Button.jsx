import { Link as RouterLink } from 'react-router-dom';

export default function Button({ children, variant = 'primary', size = 'md', to, onClick, disabled = false, className = '', ...props }) {
  const baseStyles = 'font-medium rounded-lg transition-colors duration-200 inline-flex items-center justify-center whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-offset-2';
  const variantStyles = {
    primary: 'bg-purple-600 text-white hover:bg-purple-700 focus:ring-purple-500 disabled:bg-gray-400 disabled:cursor-not-allowed',
    secondary: 'bg-white text-purple-600 border-2 border-purple-600 hover:bg-purple-50 focus:ring-purple-500 disabled:border-gray-400 disabled:text-gray-400 disabled:cursor-not-allowed',
    accent: 'bg-cyan-500 text-white hover:bg-cyan-600 focus:ring-cyan-400 disabled:bg-gray-400 disabled:cursor-not-allowed',
    ghost: 'bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-purple-500 disabled:text-gray-400 disabled:cursor-not-allowed',
  };
  const sizeStyles = { sm: 'px-3 py-2 text-sm gap-1.5', md: 'px-4 py-2.5 text-base gap-2', lg: 'px-6 py-3 text-lg gap-2' };
  const cls = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;
  if (to) return <RouterLink to={to} className={cls} onClick={onClick} {...props}>{children}</RouterLink>;
  return <button className={cls} onClick={onClick} disabled={disabled} {...props}>{children}</button>;
}
