export default function Badge({
  children,
  variant = 'default',
  className = '',
}) {
  const variantStyles = {
    default: 'bg-[rgba(15,118,109,0.1)] text-[#0F766D]',
    primary: 'bg-[#0F766D] text-white',
    secondary: 'bg-[#F3F1ED] text-[#737B8C]',
    success: 'bg-green-50 text-green-700',
    warning: 'bg-amber-50 text-amber-700',
    error: 'bg-red-50 text-red-700',
    info: 'bg-blue-50 text-blue-700',
    accent: 'bg-[rgba(194,113,79,0.1)] text-[#C2714F]',
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${variantStyles[variant] || variantStyles.default} ${className}`}
    >
      {children}
    </span>
  );
}
