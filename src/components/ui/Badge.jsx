export default function Badge({
  children,
  variant = 'default',
  className = '',
}) {
  const variantStyles = {
    default: 'bg-purple-100 text-purple-800',
    primary: 'bg-purple-600 text-white',
    secondary: 'bg-gray-100 text-gray-800',
    success: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800',
    error: 'bg-red-100 text-red-800',
    info: 'bg-blue-100 text-blue-800',
    cyan: 'bg-cyan-100 text-cyan-800',
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
