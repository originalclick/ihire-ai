import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Star, Filter, ShoppingCart } from 'lucide-react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Input from '@/components/ui/Input';
import Select from '@/components/ui/Select';
import Badge from '@/components/ui/Badge';

const mockProducts = [
  {
    id: 1,
    name: 'AI Email Automator Pro',
    creator: 'Tech Innovations Lab',
    price: 49.99,
    originalPrice: 79.99,
    rating: 4.8,
    reviews: 234,
    category: 'Automation',
    description: 'Automate your email workflow with AI-powered responses and scheduling',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=500&h=300&fit=crop'
  },
  {
    id: 2,
    name: 'Content Spinner Template',
    creator: 'Creative AI Studios',
    price: 29.99,
    originalPrice: null,
    rating: 4.6,
    reviews: 156,
    category: 'Templates',
    description: 'Multi-platform content template with AI enhancement hooks',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop'
  },
  {
    id: 3,
    name: 'AI Workflow Builder',
    creator: 'Automation Masters',
    price: 99.99,
    originalPrice: 149.99,
    rating: 4.9,
    reviews: 487,
    category: 'Workflows',
    description: 'Complete workflow automation platform with AI integration',
    image: 'https://images.unsplash.com/photo-1551434678-e076afc38bcc?w=500&h=300&fit=crop'
  },
  {
    id: 4,
    name: 'SEO Optimizer Suite',
    creator: 'Digital Growth Co',
    price: 39.99,
    originalPrice: null,
    rating: 4.5,
    reviews: 312,
    category: 'Marketing',
    description: 'AI-powered SEO analysis and optimization tools',
    image: 'https://images.unsplash.com/photo-1460925895917-adf4b0540fac?w=500&h=300&fit=crop'
  },
  {
    id: 5,
    name: 'Customer Support AI',
    creator: 'Support Systems Inc',
    price: 79.99,
    originalPrice: 119.99,
    rating: 4.7,
    reviews: 198,
    category: 'Customer Service',
    description: 'Intelligent customer support automation and ticket routing',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop'
  },
  {
    id: 6,
    name: 'Data Analysis Dashboard',
    creator: 'Analytics Experts',
    price: 59.99,
    originalPrice: 99.99,
    rating: 4.8,
    reviews: 421,
    category: 'Analytics',
    description: 'Real-time analytics dashboard powered by AI insights',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop'
  }
];

const categories = [
  { value: '', label: 'All Categories' },
  { value: 'Automation', label: 'Automation' },
  { value: 'Templates', label: 'Templates' },
  { value: 'Workflows', label: 'Workflows' },
  { value: 'Marketing', label: 'Marketing' },
  { value: 'Customer Service', label: 'Customer Service' },
  { value: 'Analytics', label: 'Analytics' }
];

const sortOptions = [
  { value: 'newest', label: 'Newest' },
  { value: 'popular', label: 'Most Popular' },
  { value: 'rating', label: 'Highest Rated' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' }
];

export default function Marketplace() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [viewMode, setViewMode] = useState('grid');

  let filteredProducts = mockProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.creator.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  if (sortBy === 'popular') {
    filteredProducts.sort((a, b) => b.reviews - a.reviews);
  } else if (sortBy === 'rating') {
    filteredProducts.sort((a, b) => b.rating - a.rating);
  } else if (sortBy === 'price-low') {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high') {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-purple-600 to-cyan-500 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-2">AI Tools & Templates Marketplace</h1>
          <p className="text-purple-100">Discover premium AI solutions from expert creators</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filters */}
        <Card padding="lg" className="mb-8">
          <div className="mb-6">
            <Input
              label="Search products"
              placeholder="Search by name, creator, or feature..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              helperText={`Found ${filteredProducts.length} product(s)`}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <Select
              label="Category"
              options={categories}
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            />
            <Select
              label="Sort By"
              options={sortOptions}
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            />
            <div className="flex items-end gap-2">
              <Button
                variant="secondary"
                size="md"
                className="flex-1"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('');
                  setSortBy('newest');
                }}
              >
                <Filter size={18} />
                Reset
              </Button>
            </div>
          </div>
        </Card>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <Card padding="lg" className="text-center py-12">
            <ShoppingCart size={48} className="mx-auto text-gray-300 mb-4" />
            <p className="text-gray-600">No products found matching your search</p>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map(product => (
              <Card key={product.id} hover padding="md" className="flex flex-col h-full transition-all">
                <div className="relative mb-4 overflow-hidden rounded-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                  {product.originalPrice && (
                    <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      Save {Math.round((1 - product.price / product.originalPrice) * 100)}%
                    </div>
                  )}
                </div>

                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="info" size="sm">{product.category}</Badge>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-1 line-clamp-2">
                    {product.name}
                  </h3>

                  <p className="text-sm text-gray-600 mb-3">{product.creator}</p>

                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {product.description}
                  </p>

                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-2xl font-bold text-purple-600">
                        ${product.price}
                      </p>
                      {product.originalPrice && (
                        <p className="text-sm text-gray-500 line-through">
                          ${product.originalPrice}
                        </p>
                      )}
                    </div>
                  </div>

                  <Button
                    variant="primary"
                    size="md"
                    className="w-full flex items-center justify-center gap-2"
                  >
                    <ShoppingCart size={18} />
                    Add to Cart
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
