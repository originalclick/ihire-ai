import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Star, ChevronDown, ShoppingCart } from 'lucide-react';
import Card from '@/components/ui/Card';

const mockProducts = [
  {
    id: '1',
    name: 'Email Automator Pro',
    category: 'Automation',
    price: '$49',
    rating: 4.8,
    reviews: 124,
    description: 'Complete email automation toolkit with templates, scheduling, and analytics.',
    tags: ['Email', 'Automation'],
  },
  {
    id: '2',
    name: 'Content Spinner Template',
    category: 'Templates',
    price: '$29',
    rating: 4.5,
    reviews: 89,
    description: 'AI-powered content repurposing template that turns one piece into 10+ formats.',
    tags: ['Content', 'Templates'],
  },
  {
    id: '3',
    name: 'AI Workflow Builder',
    category: 'Tools',
    price: '$99',
    rating: 4.9,
    reviews: 203,
    description: 'Visual workflow builder for connecting AI services with your existing tools.',
    tags: ['Workflow', 'Integration'],
  },
  {
    id: '4',
    name: 'SEO Optimizer Suite',
    category: 'Marketing',
    price: '$79',
    rating: 4.6,
    reviews: 156,
    description: 'AI-driven SEO analysis and optimization suite with keyword research and content scoring.',
    tags: ['SEO', 'Marketing'],
  },
  {
    id: '5',
    name: 'Customer Support AI',
    category: 'Support',
    price: '$149',
    rating: 4.7,
    reviews: 67,
    description: 'Drop-in AI support agent that handles L1 tickets and escalates complex issues.',
    tags: ['Support', 'Chatbot'],
  },
  {
    id: '6',
    name: 'Data Analysis Dashboard',
    category: 'Analytics',
    price: '$59',
    rating: 4.4,
    reviews: 45,
    description: 'Pre-built analytics dashboard template with AI-powered insights and reporting.',
    tags: ['Analytics', 'Dashboard'],
  },
];

export default function Marketplace() {
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState('');
  const [sort, setSort] = useState('popular');

  const filteredProducts = mockProducts.filter((p) => {
    const matchesSearch =
      !searchQuery ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !category || p.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-12 border-b border-[#E3E5E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl mb-2">Marketplace</h1>
          <p className="text-[#737B8C]">
            AI tools, templates, and workflows to supercharge your operations.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-4 border-b border-[#E3E5E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-2.5 text-[#737B8C]" size={16} />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-sm border border-[#E3E5E8] rounded-md bg-white text-[#29303D] focus:outline-none focus:border-[#0F766D]"
              />
            </div>
            <div className="relative">
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="appearance-none bg-white border border-[#E3E5E8] rounded-md px-4 py-2 pr-8 text-sm text-[#29303D] focus:outline-none focus:border-[#0F766D]"
              >
                <option value="">All Categories</option>
                <option value="Automation">Automation</option>
                <option value="Templates">Templates</option>
                <option value="Tools">Tools</option>
                <option value="Marketing">Marketing</option>
                <option value="Support">Support</option>
                <option value="Analytics">Analytics</option>
              </select>
              <ChevronDown size={14} className="absolute right-2.5 top-3 text-[#737B8C] pointer-events-none" />
            </div>
            <div className="relative ml-auto">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="appearance-none bg-white border border-[#E3E5E8] rounded-md px-4 py-2 pr-8 text-sm text-[#29303D] focus:outline-none focus:border-[#0F766D]"
              >
                <option value="popular">Most Popular</option>
                <option value="newest">Newest</option>
                <option value="rating">Highest Rated</option>
                <option value="price-low">Price: Low to High</option>
              </select>
              <ChevronDown size={14} className="absolute right-2.5 top-3 text-[#737B8C] pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <Link
                key={product.id}
                to={`/marketplace/${product.id}`}
                className="block"
              >
                <Card hover className="h-full flex flex-col">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-[#29303D]">
                        {product.name}
                      </h3>
                      <p className="text-xs text-[#737B8C]">{product.category}</p>
                    </div>
                    <span className="text-lg font-bold text-[#0F766D]">
                      {product.price}
                    </span>
                  </div>
                  <p className="text-sm text-[#737B8C] mb-4 flex-1">
                    {product.description}
                  </p>
                  <div className="flex items-center gap-2 mb-3">
                    <Star size={14} className="text-amber-500 fill-amber-500" />
                    <span className="text-sm font-medium text-[#29303D]">
                      {product.rating}
                    </span>
                    <span className="text-sm text-[#737B8C]">
                      ({product.reviews} reviews)
                    </span>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    {product.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="px-2 py-1 bg-[#F3F1ED] text-[#737B8C] text-xs rounded-md font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
