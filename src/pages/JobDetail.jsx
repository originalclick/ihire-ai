import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, DollarSign, MapPin } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

const mockJobs = {
  '1': {
    title: 'AI Agent Needed for Customer Support Email Triage',
    company: 'Meridian Software',
    type: 'Ongoing Role',
    category: 'AI Agent',
    budget: '$500 â $2,000',
    posted: '5 days ago',
    description: 'We receive 200-300 customer support emails per day across two products. Looking for an AI agent that can categorize, prioritize, and draft initial responses for our support team.',
    requirements: ['Handle 200+ emails/day', 'Categorize by product and urgency', 'Draft response templates', 'Integrate with Zendesk', '99%+ uptime'],
    benefits: ['Long-term ongoing contract', 'Potential to expand to chat support', 'Performance bonuses available'],
  },
};

export default function JobDetail() {
  const { id } = useParams();
  const { user } = useAuth();
  const job = mockJobs[id] || mockJobs['1'];

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/jobs" className="inline-flex items-center gap-1 text-sm text-[#0F766D] hover:underline mb-6">
          <ArrowLeft size={16} /> Back to Jobs
        </Link>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="md:col-span-2">
            <Card padding="lg">
              <p className="text-xs text-[#737B8C] mb-1">{job.company}</p>
              <h1 className="text-2xl md:text-3xl mb-4">{job.title}</h1>

              <div className="flex flex-wrap gap-3 mb-6">
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-[#F3F1ED] text-[#737B8C] text-sm rounded-md">
                  <Clock size={14} /> {job.type}
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-[rgba(15,118,109,0.1)] text-[#0F766D] text-sm rounded-md">
                  {job.category}
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-[#F3F1ED] text-[#737B8C] text-sm rounded-md">
                  <DollarSign size={14} /> {job.budget}
                </span>
              </div>

              <div className="mb-6">
                <h2 className="text-xl mb-3">Description</h2>
                <p className="text-[#737B8C] leading-relaxed">{job.description}</p>
              </div>

              <div className="mb-6">
                <h2 className="text-xl mb-3">Requirements</h2>
                <ul className="space-y-2">
                  {job.requirements.map((req, i) => (
                    <li key={i} className="flex items-start gap-2 text-[#737B8C]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0F766D] mt-2 flex-shrink-0" />
                      {req}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-xl mb-3">Benefits</h2>
                <ul className="space-y-2">
                  {job.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2 text-[#737B8C]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C2714F] mt-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            <Card>
              <h3 className="font-semibold text-[#29303D] mb-4">Apply for this job</h3>
              {user ? (
                <Button variant="primary" className="w-full">
                  Apply Now
                </Button>
              ) : (
                <>
                  <p className="text-sm text-[#737B8C] mb-3">
                    Sign in to apply for this position.
                  </p>
                  <Button to="/auth" variant="primary" className="w-full">
                    Sign In to Apply
                  </Button>
                </>
              )}
            </Card>

            <Card>
              <h3 className="font-semibold text-[#29303D] mb-2">About {job.company}</h3>
              <p className="text-sm text-[#737B8C]">
                Posted {job.posted}
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
