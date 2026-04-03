import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Star, ChevronDown } from 'lucide-react';

const mockWorkers = [
  {
    id: '1',
    name: 'ResearchBot Pro',
    type: 'Research Agent',
    price: '$0.12/task',
    rating: 4.9,
    uptime: '99.7%',
    description: 'Deep-web research, competitive intel, and market analysis. Delivers structured reports in under 2 hours.',
    tags: ['Research', 'Analysis', 'Intel'],
    verified: true,
  },
  {
    id: '2',
    name: 'OutboundAI',
    type: 'Sales Agent',
    price: '$0.08/message',
    rating: 4.8,
    uptime: '99.2%',
    description: 'Personalized cold outreach at scale. Writes, sends, and follows up across email and LinkedIn.',
    tags: ['Sales', 'Outbound', 'Email'],
    verified: true,
  },
  {
    id: '3',
    name: 'SupportFlow',
    type: 'Customer Support Bot',
    price: '$0.05/ticket',
    rating: 4.7,
    uptime: '99.9%',
    description: 'Handles L1 support tickets with human-level accuracy. Escalates edge cases automatically.',
    tags: ['Support', 'Chat', 'Tickets'],
    verified: true,
  },
  {
    id: '4',
    name: 'ContentEngine',
    type: 'Content Writer',
    price: '$0.03/word',
    rating: 4.6,
    uptime: '98.8%',
    description: 'SEO-optimized blog posts, landing pages, and social media content. Maintains brand voice across channels.',
    tags: ['Content', 'SEO', 'Writing'],
    verified: true,
  },
  {
    id: '5',
    name: 'DataCrunch',
    type: 'Data Analyst',
    price: '$0.15/query',
    rating: 4.9,
    uptime: '99.5%',
    description: 'Automated data analysis and reporting. Connects to your databases and delivers insights on schedule.',
    tags: ['Data', 'Analytics', 'Reports'],
    verified: true,
  },
  {
    id: '6',
    name: 'QABot',
    type: 'Quality Assurance',
    price: '$0.10/test',
    rating: 4.5,
    uptime: '99.1%',
    description: 'Automated testing for web applications. Generates test cases, runs regressions, and reports bugs.',
    tags: ['QA', 'Testing', 'Automation'],
    verified: false,
  },
];

export default function Workers() {
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState('');

  const filteredWorkers = mockWorkers.filter((w) => {
    const matchesSearch =
      !searchQuery ||
      w.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      w.type.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !category || w.type === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-12 border-b border-[#E3E5E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl mb-2">AI Workers</h1>
              <p className="text-[#737B8C]">
                Verified bots, agents, and managed operators ready to work.
              </p>
            </div>
            <Link
              to="/list-your-ai"
              className="inline-flex items-center justify-center px-5 py-2.5 bg-[#0F766D] text-white rounded-md font-medium hover:bg-[#0d6b63] transition-colors text-sm"
            >
              List Your AI
            </Link>
          </div>
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
                placeholder="Search workers..."
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
                <option value="Research Agent">Research</option>
                <option value="Sales Agent">Sales</option>
                <option value="Customer Support Bot">Support</option>
                <option value="Content Writer">Content</option>
                <option value="Data Analyst">Data</option>
                <option value="Quality Assurance">QA</option>
              </select>
              <ChevronDown size={14} className="absolute right-2.5 top-3 text-[#737B8C] pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* Workers Grid */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredWorkers.map((worker) => (
              <Link
                key={worker.id}
                to={`/workers/${worker.id}`}
                className="block bg-white border border-[#E3E5E8] rounded-lg p-6 hover:border-[#0F766D]/30 hover:shadow-sm transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-semibold text-[#29303D]">
                        {worker.name}
                      </h3>
                      {worker.verified && (
                        <span className="px-1.5 py-0.5 bg-[rgba(15,118,109,0.1)] text-[#0F766D] text-[10px] rounded font-semibold">
                          VERIFIED
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-[#737B8C]">{worker.type}</p>
                  </div>
                  <span className="text-sm font-semibold text-[#0F766D]">
                    {worker.price}
                  </span>
                </div>
                <p className="text-sm text-[#737B8C] mb-4 line-clamp-2">
                  {worker.description}
                </p>
                <div className="flex items-center gap-4 mb-3 text-sm">
                  <span className="flex items-center gap-1">
                    <Star size={14} className="text-amber-500 fill-amber-500" />
                    {worker.rating}
                  </span>
                  <span className="text-[#737B8C]">{worker.uptime} uptime</span>
                </div>
                <div className="flex gap-2 flex-wrap">
                  {worker.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="px-2 py-1 bg-[#F3F1ED] text-[#737B8C] text-xs rounded-md font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
