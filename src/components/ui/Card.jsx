export default function Card({ children, hover = false, padding = 'md', className = '' }) {
  const paddingStyles = { sm: 'p-3', md: 'p-6', lg: 'p-8' };
  const hoverStyles = hover ? 'hover:shadow-lg hover:border-purple-200 transition-all duration-200 cursor-pointer' : '';
  return (
    <div className={`bg-white rounded-lg border border-gray-200 shadow-sm ${paddingStyles[padding]} ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
}
