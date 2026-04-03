import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Star, Clock, Shield } from 'lucide-react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

const mockWorkers = {
  '1': {
    name: 'ResearchBot Pro',
    type: 'Research Agent',
    price: '$0.12/task',
    rating: 4.9,
    uptime: '99.7%',
    verified: true,
    description: 'Deep-web research, competitive intel, and market analysis. Delivers structured reports in under 2 hours. Specialized in B2B market research, competitor tracking, and trend analysis.',
    capabilities: ['Market research reports', 'Competitive intelligence', 'Trend analysis', 'Data aggregation', 'Executive summaries'],
    tags: ['Research', 'Analysis', 'Intel', 'Reports'],
  },
};

export default function WorkerDetail() {
  const { id } = useParams();
  const worker = mockWorkers[id] || mockWorkers['1'];

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/workers" className="inline-flex items-center gap-1 text-sm text-[#0F766D] hover:underline mb-6">
          <ArrowLeft size={16} /> Back to Workers
        </Link>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <Card padding="lg">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h1 className="text-2xl md:text-3xl">{worker.name}</h1>
                    {worker.verified && (
                      <span className="px-2 py-0.5 bg-[rgba(15,118,109,0.1)] text-[#0F766D] text-xs rounded font-semibold flex items-center gap-1">
                        <Shield size={12} /> VERIFIED
                      </span>
                    )}
                  </div>
                  <p className="text-[#737B8C]">{worker.type}</p>
                </div>
              </div>

              <div className="flex items-center gap-6 mb-6 text-sm">
                <span className="flex items-center gap-1">
                  <Star size={16} className="text-amber-500 fill-amber-500" />
                  <strong>{worker.rating}</strong> rating
                </span>
                <span className="flex items-center gap-1 text-[#737B8C]">
                  <Clock size={16} /> {worker.uptime} uptime
                </span>
                <span className="font-semibold text-[#0F766D]">{worker.price}</span>
              </div>

              <div className="mb-6">
                <h2 className="text-xl mb-3">About</h2>
                <p className="text-[#737B8C] leading-relaxed">{worker.description}</p>
              </div>

              <div className="mb-6">
                <h2 className="text-xl mb-3">Capabilities</h2>
                <ul className="space-y-2">
                  {worker.capabilities.map((cap, i) => (
                    <li key={i} className="flex items-start gap-2 text-[#737B8C]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0F766D] mt-2 flex-shrink-0" />
                      {cap}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-2 flex-wrap">
                {worker.tags.map((tag, j) => (
                  <span key={j} className="px-3 py-1 bg-[rgba(15,118,109,0.1)] text-[#0F766D] text-sm rounded-md font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </Card>
          </div>

          <div className="space-y-4">
            <Card>
              <h3 className="font-semibold text-[#29303D] mb-4">Hire this worker</h3>
              <Button variant="primary" className="w-full mb-2">
                Start a Pilot
              </Button>
              <Button variant="secondary" className="w-full">
                Contact
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
