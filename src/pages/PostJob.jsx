import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

export default function PostJob() {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    title: '',
    company: '',
    description: '',
    category: '',
    type: '',
    budgetMin: '',
    budgetMax: '',
    timeline: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center py-12 px-4">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 bg-[rgba(15,118,109,0.1)] rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={32} className="text-[#0F766D]" />
          </div>
          <h1 className="text-2xl md:text-3xl mb-3">Job Posted Successfully</h1>
          <p className="text-[#737B8C] mb-8">
            Your job listing is now live. AI workers will start applying shortly.
          </p>
          <div className="flex gap-3 justify-center">
            <Button to="/jobs" variant="primary">View Jobs</Button>
            <Button to="/dashboard" variant="secondary">Dashboard</Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl mb-2">Post a Job</h1>
          <p className="text-[#737B8C]">
            Describe your project and we'll match you with verified AI workers.
          </p>
        </div>

        <Card padding="lg">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-[#29303D] mb-1.5">
                Job Title *
              </label>
              <input
                type="text"
                name="title"
                value={form.title}
                onChange={handleChange}
                placeholder="e.g. AI Agent for Customer Support"
                required
                className="w-full px-3 py-2.5 border border-[#E3E5E8] rounded-md bg-white text-[#29303D] focus:outline-none focus:border-[#0F766D] focus:ring-1 focus:ring-[#0F766D]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#29303D] mb-1.5">
                Company Name
              </label>
              <input
                type="text"
                name="company"
                value={form.company}
                onChange={handleChange}
                placeholder="Your company name (or Anonymous)"
                className="w-full px-3 py-2.5 border border-[#E3E5E8] rounded-md bg-white text-[#29303D] focus:outline-none focus:border-[#0F766D] focus:ring-1 focus:ring-[#0F766D]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#29303D] mb-1.5">
                Description *
              </label>
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                placeholder="Describe what you need done, requirements, and expected deliverables..."
                required
                rows={5}
                className="w-full px-3 py-2.5 border border-[#E3E5E8] rounded-md bg-white text-[#29303D] focus:outline-none focus:border-[#0F766D] focus:ring-1 focus:ring-[#0F766D] resize-y"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-[#29303D] mb-1.5">
                  Category *
                </label>
                <select
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2.5 border border-[#E3E5E8] rounded-md bg-white text-[#29303D] focus:outline-none focus:border-[#0F766D]"
                >
                  <option value="">Select category</option>
                  <option value="ai-agent">AI Agent</option>
                  <option value="automation">Automation</option>
                  <option value="ai-developer">AI Developer</option>
                  <option value="prompt-engineer">Prompt Engineer</option>
                  <option value="data-analysis">Data Analysis</option>
                  <option value="content">Content</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#29303D] mb-1.5">
                  Job Type *
                </label>
                <select
                  name="type"
                  value={form.type}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2.5 border border-[#E3E5E8] rounded-md bg-white text-[#29303D] focus:outline-none focus:border-[#0F766D]"
                >
                  <option value="">Select type</option>
                  <option value="ongoing">Ongoing Role</option>
                  <option value="project">Project</option>
                  <option value="setup">Setup & Deploy</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-[#29303D] mb-1.5">
                  Budget Min ($)
                </label>
                <input
                  type="number"
                  name="budgetMin"
                  value={form.budgetMin}
                  onChange={handleChange}
                  placeholder="100"
                  className="w-full px-3 py-2.5 border border-[#E3E5E8] rounded-md bg-white text-[#29303D] focus:outline-none focus:border-[#0F766D] focus:ring-1 focus:ring-[#0F766D]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#29303D] mb-1.5">
                  Budget Max ($)
                </label>
                <input
                  type="number"
                  name="budgetMax"
                  value={form.budgetMax}
                  onChange={handleChange}
                  placeholder="2000"
                  className="w-full px-3 py-2.5 border border-[#E3E5E8] rounded-md bg-white text-[#29303D] focus:outline-none focus:border-[#0F766D] focus:ring-1 focus:ring-[#0F766D]"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#29303D] mb-1.5">
                Timeline
              </label>
              <select
                name="timeline"
                value={form.timeline}
                onChange={handleChange}
                className="w-full px-3 py-2.5 border border-[#E3E5E8] rounded-md bg-white text-[#29303D] focus:outline-none focus:border-[#0F766D]"
              >
                <option value="">Select timeline</option>
                <option value="asap">ASAP</option>
                <option value="1-week">Within 1 week</option>
                <option value="2-weeks">Within 2 weeks</option>
                <option value="1-month">Within 1 month</option>
                <option value="ongoing">Ongoing</option>
              </select>
            </div>

            <Button variant="accent" className="w-full">
              Post Job
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
}
