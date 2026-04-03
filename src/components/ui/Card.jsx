export default function Card({
  children,
  hover = false,
  padding = 'md',
  className = '',
  ...props
}) {
  const paddingStyles = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  const hoverStyles = hover
    ? 'hover:shadow-md hover:border-[#0F766D]/30 transition-all duration-200 cursor-pointer'
    : '';

  return (
    <div
      className={`bg-white rounded-lg border border-[#E3E5E8] ${paddingStyles[padding]} ${hoverStyles} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
