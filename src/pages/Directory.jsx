import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Search, ExternalLink, ChevronDown, Grid3X3, List } from 'lucide-react';
import Card from '@/components/ui/Card';

const mockTools = [
  { id: '1', slug: 'chatgpt', name: 'ChatGPT', category: 'Chatbot', pricing: 'Freemium', description: 'Advanced conversational AI for writing, analysis, and problem-solving.', url: 'https://chat.openai.com' },
  { id: '2', slug: 'midjourney', name: 'Midjourney', category: 'Image', pricing: 'Paid', description: 'AI image generation tool creating stunning visuals from text prompts.', url: 'https://midjourney.com' },
  { id: '3', slug: 'claude', name: 'Claude', category: 'Chatbot', pricing: 'Freemium', description: 'AI assistant built for safety and helpfulness in complex tasks.', url: 'https://claude.ai' },
  { id: '4', slug: 'notion-ai', name: 'Notion AI', category: 'Productivity', pricing: 'Paid', description: 'AI-powered workspace for notes, docs, and project management.', url: 'https://notion.so' },
  { id: '5', slug: 'jasper', name: 'Jasper', category: 'Content', pricing: 'Paid', description: 'AI marketing copilot for creating on-brand content at scale.', url: 'https://jasper.ai' },
  { id: '6', slug: 'runway', name: 'Runway ML', category: 'Video', pricing: 'Freemium', description: 'AI-powered creative tools for video editing and generation.', url: 'https://runwayml.com' },
  { id: '7', slug: 'stable-diffusion', name: 'Stable Diffusion', category: 'Image', pricing: 'Free', description: 'Open-source AI image generation model for text-to-image creation.', url: 'https://stability.ai' },
  { id: '8', slug: 'hubspot-ai', name: 'HubSpot AI', category: 'Marketing', pricing: 'Freemium', description: 'AI tools integrated across CRM, marketing, and sales platforms.', url: 'https://hubspot.com' },
  { id: '9', slug: 'github-copilot', name: 'GitHub Copilot', category: 'Development', pricing: 'Paid', description: 'AI pair programmer that suggests code completions in real-time.', url: 'https://github.com/features/copilot' },
];

export default function Directory() {
  const { slug } = useParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState('');
  const [pricing, setPricing] = useState('');
  const [viewMode, setViewMode] = useState('grid');

  const filteredTools = mockTools.filter((t) => {
    const matchesSearch =
      !searchQuery ||
      t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !category || t.category === category;
    const matchesPricing = !pricing || t.pricing === pricing;
    return matchesSearch && matchesCategory && matchesPricing;
  });

  // If a slug is provided, show detail view
  if (slug) {
    const tool = mockTools.find((t) => t.slug === slug);
    if (!tool) return <div className="p-8 text-center text-[#737B8C]">Tool not found</div>;

    return (
      <div className="min-h-screen py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/directory" className="text-sm text-[#0F766D] hover:underline mb-6 inline-block">
            &larr; Back to Directory
          </Link>
          <Card padding="lg">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h1 className="text-2xl md:text-3xl mb-1">{tool.name}</h1>
                <div className="flex gap-2">
                  <span className="px-2 py-0.5 bg-[rgba(15,118,109,0.1)] text-[#0F766D] text-xs rounded-md font-medium">
                    {tool.category}
                  </span>
                  <span className="px-2 py-0.5 bg-[#F3F1ED] text-[#737B8C] text-xs rounded-md font-medium">
                    {tool.pricing}
                  </span>
                </div>
              </div>
              <a
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-4 py-2 bg-[#0F766D] text-white rounded-md text-sm font-medium hover:bg-[#0d6b63] transition-colors"
              >
                Visit <ExternalLink size={14} />
              </a>
            </div>
            <p className="text-[#737B8C]">{tool.description}</p>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-12 border-b border-[#E3E5E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl mb-2">AI Directory</h1>
          <p className="text-[#737B8C]">
            Discover and compare the best AI tools and platforms.
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
                placeholder="Search tools..."
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
                <option value="Chatbot">Chatbot</option>
                <option value="Image">Image</option>
                <option value="Video">Video</option>
                <option value="Content">Content</option>
                <option value="Productivity">Productivity</option>
                <option value="Marketing">Marketing</option>
                <option value="Development">Development</option>
              </select>
              <ChevronDown size={14} className="absolute right-2.5 top-3 text-[#737B8C] pointer-events-none" />
            </div>
            <div className="relative">
              <select
                value={pricing}
                onChange={(e) => setPricing(e.target.value)}
                className="appearance-none bg-white border border-[#E3E5E8] rounded-md px-4 py-2 pr-8 text-sm text-[#29303D] focus:outline-none focus:border-[#0F766D]"
              >
                <option value="">All Pricing</option>
                <option value="Free">Free</option>
                <option value="Freemium">Freemium</option>
                <option value="Paid">Paid</option>
              </select>
              <ChevronDown size={14} className="absolute right-2.5 top-3 text-[#737B8C] pointer-events-none" />
            </div>
            <div className="ml-auto flex gap-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md ${viewMode === 'grid' ? 'bg-[#F3F1ED] text-[#29303D]' : 'text-[#737B8C]'}`}
              >
                <Grid3X3 size={16} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md ${viewMode === 'list' ? 'bg-[#F3F1ED] text-[#29303D]' : 'text-[#737B8C]'}`}
              >
                <List size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Grid/List */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={viewMode === 'grid' ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
            {filteredTools.map((tool) => (
              <Link
                key={tool.id}
                to={`/directory/${tool.slug}`}
                className={`block bg-white border border-[#E3E5E8] rounded-lg p-6 hover:border-[#0F766D]/30 hover:shadow-sm transition-all ${viewMode === 'list' ? 'flex items-center gap-6' : ''}`}
              >
                <div className={viewMode === 'list' ? 'flex-1' : ''}>
                  <h3 className="text-lg font-semibold text-[#29303D] mb-1">
                    {tool.name}
                  </h3>
                  <div className="flex gap-2 mb-2">
                    <span className="px-2 py-0.5 bg-[rgba(15,118,109,0.1)] text-[#0F766D] text-xs rounded-md font-medium">
                      {tool.category}
                    </span>
                    <span className="px-2 py-0.5 bg-[#F3F1ED] text-[#737B8C] text-xs rounded-md font-medium">
                      {tool.pricing}
                    </span>
                  </div>
                  <p className="text-sm text-[#737B8C] line-clamp-2">
                    {tool.description}
                  </p>
                </div>
                <ExternalLink size={16} className="text-[#737B8C] flex-shrink-0 hidden sm:block" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
