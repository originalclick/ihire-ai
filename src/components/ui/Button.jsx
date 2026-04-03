import { Link as RouterLink } from 'react-router-dom';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  to,
  onClick,
  disabled = false,
  className = '',
  ...props
}) {
  const baseStyles =
    'font-medium rounded-md transition-colors duration-200 inline-flex items-center justify-center whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variantStyles = {
    primary:
      'bg-[#0F766D] text-white hover:bg-[#0d6b63] focus:ring-[#0F766D] disabled:bg-gray-400 disabled:cursor-not-allowed',
    secondary:
      'bg-white text-[#29303D] border border-[#E3E5E8] hover:bg-[#F3F1ED] focus:ring-[#0F766D] disabled:border-gray-300 disabled:text-gray-400 disabled:cursor-not-allowed',
    accent:
      'bg-[#C2714F] text-white hover:bg-[#b36545] focus:ring-[#C2714F] disabled:bg-gray-400 disabled:cursor-not-allowed',
    ghost:
      'bg-transparent text-[#737B8C] hover:bg-[#F3F1ED] hover:text-[#29303D] focus:ring-[#0F766D] disabled:text-gray-400 disabled:cursor-not-allowed',
    outline:
      'bg-transparent text-[#0F766D] border border-[#0F766D] hover:bg-[rgba(15,118,109,0.1)] focus:ring-[#0F766D] disabled:border-gray-400 disabled:text-gray-400 disabled:cursor-not-allowed',
  };

  const sizeStyles = {
    sm: 'px-3 py-2 text-sm gap-1.5',
    md: 'px-4 py-2.5 text-base gap-2',
    lg: 'px-8 py-3 text-lg gap-2',
  };

  const cls = `${baseStyles} ${variantStyles[variant] || variantStyles.primary} ${sizeStyles[size]} ${className}`;

  if (to)
    return (
      <RouterLink to={to} className={cls} onClick={onClick} {...props}>
        {children}
      </RouterLink>
    );

  return (
    <button className={cls} onClick={onClick} disabled={disabled} {...props}>
      {children}
    </button>
  );
}
