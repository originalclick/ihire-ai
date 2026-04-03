import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, DollarSign, Clock, Filter, Briefcase } from 'lucide-react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Input from '@/components/ui/Input';
import Select from '@/components/ui/Select';
import Badge from '@/components/ui/Badge';

const mockJobs = [
  {
    id: 1,
    title: 'AI Content Generator - Full Stack',
    company: 'TechFlow AI',
    location: 'Remote',
    salaryMin: 45000,
    salaryMax: 65000,
    jobType: 'Full-time',
    category: 'Engineering',
    postedDate: '2 days ago'
  },
  {
    id: 2,
    title: 'Machine Learning Engineer',
    company: 'DataCraft Labs',
    location: 'San Francisco, CA',
    salaryMin: 120000,
    salaryMax: 160000,
    jobType: 'Full-time',
    category: 'Engineering',
    postedDate: '1 day ago'
  },
  {
    id: 3,
    title: 'AI Training Specialist',
    company: 'Neural Insights',
    location: 'Remote',
    salaryMin: 35000,
    salaryMax: 50000,
    jobType: 'Part-time',
    category: 'Support',
    postedDate: '3 days ago'
  },
  {
    id: 4,
    title: 'LLM Fine-tuning Contractor',
    company: 'ModelHub Inc',
    location: 'Austin, TX',
    salaryMin: 55000,
    salaryMax: 85000,
    jobType: 'Contract',
    category: 'Engineering',
    postedDate: '5 days ago'
  },
  {
    id: 5,
    title: 'AI Product Manager',
    company: 'CloudAI Systems',
    location: 'New York, NY',
    salaryMin: 90000,
    salaryMax: 130000,
    jobType: 'Full-time',
    category: 'Management',
    postedDate: '1 day ago'
  },
  {
    id: 6,
    title: 'Prompt Engineer - Part Time',
    company: 'CreativeAI Co',
    location: 'Remote',
    salaryMin: 25000,
    salaryMax: 40000,
    jobType: 'Part-time',
    category: 'Support',
    postedDate: '4 days ago'
  }
];

const categoryOptions = [
  { value: '', label: 'All Categories' },
  { value: 'Engineering', label: 'Engineering' },
  { value: 'Management', label: 'Management' },
  { value: 'Support', label: 'Support' }
];

const typeOptions = [
  { value: '', label: 'All Types' },
  { value: 'Full-time', label: 'Full-time' },
  { value: 'Part-time', label: 'Part-time' },
  { value: 'Contract', label: 'Contract' }
];

const locationOptions = [
  { value: '', label: 'All Locations' },
  { value: 'Remote', label: 'Remote' },
  { value: 'San Francisco, CA', label: 'San Francisco, CA' },
  { value: 'Austin, TX', label: 'Austin, TX' },
  { value: 'New York, NY', label: 'New York, NY' }
];

export default function Jobs() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');

  const filteredJobs = mockJobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || job.category === selectedCategory;
    const matchesType = !selectedType || job.jobType === selectedType;
    const matchesLocation = !selectedLocation || job.location === selectedLocation;

    return matchesSearch && matchesCategory && matchesType && matchesLocation;
  });

  const getJobTypeBadgeVariant = (jobType) => {
    if (jobType === 'Full-time') return 'success';
    if (jobType === 'Part-time') return 'warning';
    return 'info';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-2">AI Jobs & Opportunities</h1>
          <p className="text-purple-100">Find your next role in the AI revolution</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="mb-6">
            <Input
              label="Search jobs"
              placeholder="Job title, company, or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              helperText={`Found ${filteredJobs.length} job(s)`}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Select
              label="Category"
              options={categoryOptions}
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            />
            <Select
              label="Job Type"
              options={typeOptions}
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
            />
            <Select
              label="Location"
              options={locationOptions}
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
            />
            <div className="flex items-end">
              <Button
                variant="secondary"
                size="md"
                className="w-full flex items-center justify-center gap-2"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('');
                  setSelectedType('');
                  setSelectedLocation('');
                }}
              >
                <Filter size={18} />
                Reset Filters
              </Button>
            </div>
          </div>
        </div>

        {filteredJobs.length === 0 ? (
          <Card padding="md" className="text-center py-12">
            <Briefcase size={48} className="mx-auto text-gray-300 mb-4" />
            <p className="text-gray-600">No jobs found matching your filters</p>
          </Card>
        ) : (
          <div className="grid gap-4">
            {filteredJobs.map(job => (
              <Card key={job.id} hover padding="md" className="transition-all">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">
                      {job.title}
                    </h3>
                    <p className="text-gray-600 font-medium">{job.company}</p>
                  </div>
                  <Badge variant="default">{job.category}</Badge>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-cyan-500" />
                    {job.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign size={16} className="text-cyan-500" />
                    ${(job.salaryMin / 1000).toFixed(0)}k - ${(job.salaryMax / 1000).toFixed(0)}k
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} className="text-cyan-500" />
                    <Badge variant={getJobTypeBadgeVariant(job.jobType)} size="sm">
                      {job.jobType}
                    </Badge>
                  </div>
                  <div className="text-right">
                    {job.postedDate}
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button
                    variant="primary"
                    size="md"
                    className="flex-1"
                  >
                    Apply Now
                  </Button>
                  <Button
                    variant="ghost"
                    size="md"
                  >
                    Save Job
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
