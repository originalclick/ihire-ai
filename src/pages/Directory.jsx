import { useState } from 'react';
import { Search, ExternalLink, Star, Grid, List } from 'lucide-react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Input from '@/components/ui/Input';
import Badge from '@/components/ui/Badge';

const mockTools = [
  {
    id: 1,
    name: 'ChatGPT',
    description: 'Advanced conversational AI powered by GPT-4. Use it for writing, analysis, math, coding, and creative tasks.',
    category: 'Language Models',
    pricing: 'Freemium',
    rating: 4.9,
    reviews: 1250,
    website: 'https://openai.com/chatgpt'
  },
  {
    id: 2,
    name: 'Midjourney',
    description: 'AI image generation tool creating stunning visuals from text descriptions. Perfect for creative projects.',
    category: 'Image Generation',
    pricing: 'Paid',
    rating: 4.7,
    reviews: 856,
    website: 'https://midjourney.com'
  },
  {
    id: 3,
    name: 'Claude',
    description: 'Powerful AI assistant for research, analysis, coding, and creative writing with strong reasoning capabilities.',
    category: 'Language Models',
    pricing: 'Freemium',
    rating: 4.8,
    reviews: 924,
    website: 'https://claude.ai'
  },
  {
    id: 4,
    name: 'Notion AI',
    description: 'Integrated AI writing assistant within Notion workspace. Helps with documentation and content creation.',
    category: 'Productivity',
    pricing: 'Freemium',
    rating: 4.5,
    reviews: 532,
    website: 'https://notion.so'
  },
  {
    id: 5,
    name: 'Jasper',
    description: 'AI copywriting platform for marketing content, ads, emails, and social media posts with brand voice customization.',
    category: 'Content Generation',
    pricing: 'Paid',
    rating: 4.6,
    reviews: 687,
    website: 'https://jasper.ai'
  },
  {
    id: 6,
    name: 'Runway ML',
    description: 'Creative AI suite for video, image, and music generation. Professional-grade tools for creators.',
    category: 'Video & Media',
    pricing: 'Freemium',
    rating: 4.7,
    reviews: 445,
    website: 'https://runway.com'
  },
  {
    id: 7,
    name: 'Stable Diffusion',
    description: 'Open-source AI image generation model. Customizable and can be self-hosted or used via APIs.',
    category: 'Image Generation',
    pricing: 'Free',
    rating: 4.4,
    reviews: 523,
    website: 'https://stablediffusion.ai'
  },
  {
    id: 8,
    name: 'HubSpot AI',
    description: 'AI-powered CRM with content generation, email optimization, and sales forecasting integrated.',
    category: 'Business Tools',
    pricing: 'Freemium',
    rating: 4.6,
    reviews: 612,
    website: 'https://hubspot.com'
  },
  {
    id: 9,
    name: 'GitHub Copilot',
    description: 'AI code assistant helping developers write code faster with intelligent suggestions and completions.',
    category: 'Developer Tools',
    pricing: 'Paid',
    rating: 4.8,
    reviews: 934,
    website: 'https://github.com/features/copilot'
  }
];

const categories = [
  'All Categories',
  'Language Models',
  'Image Generation',
  'Content Generation',
  'Productivity',
  'Video & Media',
  'Business Tools',
  'Developer Tools'
];

const pricingFilter = [
  { value: '', label: 'All Pricing' },
  { value: 'Free', label: 'Free' },
  { value: 'Freemium', label: 'Freemium' },
  { value: 'Paid', label: 'Paid' }
];

const getPricingBadgeVariant = (pricing) => {
  if (pricing === 'Free') return 'success';
  if (pricing === 'Freemium') return 'info';
  return 'warning';
};

export default function Directory() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedPricing, setSelectedPricing] = useState('');
  const [viewMode, setViewMode] = useState('grid');

  const filteredTools = mockTools.filter(tool => {
    const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tool.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All Categories' || tool.category === selectedCategory;
    const matchesPricing = !selectedPricing || tool.pricing === selectedPricing;

    return matchesSearch && matchesCategory && matchesPricing;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-2">AI Tools Directory</h1>
          <p className="text-purple-100">Explore the best AI tools and platforms for your workflow</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search */}
        <Card padding="lg" className="mb-8">
          <Input
            label="Search tools"
            placeholder="Search by name, category, or description..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            helperText={`Found ${filteredTools.length} tool(s)`}
          />
        </Card>

        {/* Category Tabs */}
        <div className="mb-8 overflow-x-auto">
          <div className="flex gap-2 pb-4">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all ${
                  selectedCategory === category
                    ? 'bg-purple-600 text-white shadow-md'
                    : 'bg-white text-gray-700 border border-gray-200 hover:border-purple-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Pricing Filter */}
        <Card padding="md" className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Filter by Pricing
              </label>
              <select
                value={selectedPricing}
                onChange={(e) => setSelectedPricing(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                {pricingFilter.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex items-end">
              <Button
                variant="secondary"
                size="md"
                className="w-full"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All Categories');
                  setSelectedPricing('');
                }}
              >
                Reset Filters
              </Button>
            </div>
          </div>
        </Card>

        {/* Tools List/Grid */}
        {filteredTools.length === 0 ? (
          <Card padding="lg" className="text-center py-12">
            <Search size={48} className="mx-auto text-gray-300 mb-4" />
            <p className="text-gray-600">No tools found matching your criteria</p>
          </Card>
        ) : (
          <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'grid gap-4'}>
            {filteredTools.map(tool => (
              <Card
                key={tool.id}
                hover
                padding="lg"
                className={`flex flex-col h-full transition-all ${viewMode === 'list' ? 'md:flex-row md:items-start' : ''}`}
              >
                <div className={viewMode === 'list' ? 'md:flex-1' : ''}>
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {tool.name}
                      </h3>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <Badge variant="default" size="sm">{tool.category}</Badge>
                        <Badge variant={getPricingBadgeVariant(tool.pricing)} size="sm">
                          {tool.pricing}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {tool.description}
                  </p>

                  <div className="flex items-center gap-2 mb-6">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={i < Math.floor(tool.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">
                      {tool.rating} ({tool.reviews})
                    </span>
                  </div>
                </div>

                <div className={`pt-4 border-t ${viewMode === 'list' ? 'md:border-t-0 md:border-l md:pl-6 md:pt-0 md:w-auto' : ''}`}>
                  <Button
                    variant="primary"
                    size="md"
                    className="w-full md:w-auto flex items-center justify-center gap-2"
                    onClick={() => window.open(tool.website, '_blank')}
                  >
                    <ExternalLink size={18} />
                    Visit
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
