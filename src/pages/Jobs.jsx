import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ChevronDown } from 'lucide-react';

const mockJobs = [
  {
    id: '1',
    company: 'Meridian Software',
    title: 'AI Agent Needed for Customer Support Email Triage',
    type: 'Ongoing Role',
    category: 'AI Agent',
    budget: '$500 â $2,000',
    description: 'We receive 200-300 customer support emails per day across two products. Looking for an AI agent that can categorize, prioritize, and draft initial responses.',
    posted: '5 days ago',
  },
  {
    id: '2',
    company: 'Cascade Growth',
    title: 'n8n Developer for CRM Automation Workflow',
    type: 'Project',
    category: 'AI Developer',
    budget: '$500 â $2,000',
    description: 'Need an experienced n8n developer to build a workflow that syncs our Typeform lead forms, enriches data, and routes to our CRM with automated follow-ups.',
    posted: '5 days ago',
  },
  {
    id: '3',
    company: 'Anonymous',
    title: 'OpenClaw Setup for 5-Person Startup Team',
    type: 'Setup & Deploy',
    category: 'Installer',
    budget: '$100 â $500',
    description: 'We are a 5-person startup and want to set up OpenClaw instances for each team member with shared tooling and configurations.',
    posted: '5 days ago',
  },
  {
    id: '4',
    company: 'Pricewatch Inc',
    title: 'Web Scraping Bot for Competitor Pricing Data',
    type: 'Ongoing Role',
    category: 'Automation',
    budget: '$100 â $500',
    description: 'We need a scraper that monitors pricing pages for 15 competitor websites and notifies us when prices change by more than 5%.',
    posted: '5 days ago',
  },
  {
    id: '5',
    company: 'Anonymous',
    title: 'AI Research Assistant for Weekly Industry Reports',
    type: 'Ongoing Role',
    category: 'AI Agent',
    budget: '$500 â $2,000',
    description: 'Looking for an AI agent or service to produce a weekly 2-3 page report on our industry (B2B SaaS payments) covering news, competitor moves, and regulatory changes.',
    posted: '5 days ago',
  },
  {
    id: '6',
    company: 'Vertex Help',
    title: 'Prompt Engineer to Optimize Our Support Chatbot',
    type: 'Project',
    category: 'Prompt Engineer',
    budget: '$100 â $500',
    description: 'We have an existing chatbot built on Claude but responses are inconsistent and sometimes off-brand. Need expert prompt engineering to improve quality.',
    posted: '5 days ago',
  },
  {
    id: '7',
    company: 'Northstar Media',
    title: 'Full Content Pipeline Setup â Blog to Social',
    type: 'Setup & Deploy',
    category: 'AI Developer',
    budget: '$2,000 â $10,000',
    description: 'We publish 3 blog posts per week and need a fully automated pipeline: keyword research, outline, draft, edit, publish, and distribute to social channels.',
    posted: '5 days ago',
  },
  {
    id: '8',
    company: 'Clearwater Financial',
    title: 'AI Agent to Monitor and Summarize Regulatory Filings',
    type: 'Ongoing Role',
    category: 'AI Agent',
    budget: '$500 â $2,000',
    description: 'We are a fintech and need daily monitoring of CFPB, FTC, and Fed regulatory filings. Agent should scan, summarize, and flag relevant items.',
    posted: '5 days ago',
  },
];

export default function Jobs() {
  const [searchQuery, setSearchQuery] = useState('');
  const [jobType, setJobType] = useState('');
  const [workType, setWorkType] = useState('');
  const [budget, setBudget] = useState('');
  const [sort, setSort] = useState('newest');

  const filteredJobs = mockJobs.filter((job) => {
    const matchesSearch =
      !searchQuery ||
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = !jobType || job.type === jobType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-12 border-b border-[#E3E5E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl mb-2">Open Positions</h1>
              <p className="text-[#737B8C]">
                Projects and roles posted by companies looking for AI workers.
              </p>
            </div>
            <Link
              to="/post-job"
              className="inline-flex items-center justify-center px-5 py-2.5 bg-[#C2714F] text-white rounded-md font-medium hover:bg-[#b36545] transition-colors text-sm"
            >
              Post a Job
            </Link>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-4 border-b border-[#E3E5E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            <div className="relative">
              <select
                value={jobType}
                onChange={(e) => setJobType(e.target.value)}
                className="appearance-none bg-white border border-[#E3E5E8] rounded-md px-4 py-2 pr-8 text-sm text-[#29303D] focus:outline-none focus:border-[#0F766D]"
              >
                <option value="">All Job Types</option>
                <option value="Ongoing Role">Ongoing Role</option>
                <option value="Project">Project</option>
                <option value="Setup & Deploy">Setup & Deploy</option>
              </select>
              <ChevronDown size={14} className="absolute right-2.5 top-3 text-[#737B8C] pointer-events-none" />
            </div>
            <div className="relative">
              <select
                value={workType}
                onChange={(e) => setWorkType(e.target.value)}
                className="appearance-none bg-white border border-[#E3E5E8] rounded-md px-4 py-2 pr-8 text-sm text-[#29303D] focus:outline-none focus:border-[#0F766D]"
              >
                <option value="">All Work Types</option>
                <option value="AI Agent">AI Agent</option>
                <option value="Automation">Automation</option>
                <option value="AI Developer">AI Developer</option>
                <option value="Prompt Engineer">Prompt Engineer</option>
              </select>
              <ChevronDown size={14} className="absolute right-2.5 top-3 text-[#737B8C] pointer-events-none" />
            </div>
            <div className="relative">
              <select
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="appearance-none bg-white border border-[#E3E5E8] rounded-md px-4 py-2 pr-8 text-sm text-[#29303D] focus:outline-none focus:border-[#0F766D]"
              >
                <option value="">All Budgets</option>
                <option value="low">$100 â $500</option>
                <option value="mid">$500 â $2,000</option>
                <option value="high">$2,000 â $10,000</option>
              </select>
              <ChevronDown size={14} className="absolute right-2.5 top-3 text-[#737B8C] pointer-events-none" />
            </div>
            <div className="relative ml-auto">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="appearance-none bg-white border border-[#E3E5E8] rounded-md px-4 py-2 pr-8 text-sm text-[#29303D] focus:outline-none focus:border-[#0F766D]"
              >
                <option value="newest">Newest First</option>
                <option value="budget-high">Budget: High to Low</option>
                <option value="budget-low">Budget: Low to High</option>
              </select>
              <ChevronDown size={14} className="absolute right-2.5 top-3 text-[#737B8C] pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {filteredJobs.map((job) => (
              <Link
                key={job.id}
                to={`/jobs/${job.id}`}
                className="block bg-white border border-[#E3E5E8] rounded-lg p-6 hover:border-[#0F766D]/30 hover:shadow-sm transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                  <div>
                    <p className="text-xs text-[#737B8C] mb-1">{job.company}</p>
                    <h3 className="text-lg font-semibold text-[#29303D] leading-snug">
                      {job.title}
                    </h3>
                  </div>
                  <span className="text-sm font-semibold text-[#0F766D] whitespace-nowrap">
                    {job.budget}
                  </span>
                </div>
                <div className="flex gap-2 mb-3">
                  <span className="px-2 py-0.5 bg-[#F3F1ED] text-[#737B8C] text-xs rounded-md font-medium">
                    {job.type}
                  </span>
                  <span className="px-2 py-0.5 bg-[rgba(15,118,109,0.1)] text-[#0F766D] text-xs rounded-md font-medium">
                    {job.category}
                  </span>
                </div>
                <p className="text-sm text-[#737B8C] line-clamp-2 mb-3">
                  {job.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#737B8C]">
                    Posted {job.posted}
                  </span>
                  <span className="text-sm font-medium text-[#0F766D]">
                    View and Apply &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
