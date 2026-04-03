import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, ChevronDown, DollarSign, Clock } from 'lucide-react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';

// Placeholder data
const PLACEHOLDER_JOBS = [
  {
    id: 1,
    title: 'Build AI Chatbot for Customer Support',
    type: 'Full-time',
    budget: { min: 5000, max: 8000 },
    skills: ['Python', 'LLM', 'API Integration'],
    postedDate: '2 days ago',
    source: 'Direct Post',
    description: 'Looking for experienced AI developer to build chatbot',
  },
  {
    id: 2,
    title: 'Create Email Automation Workflow',
    type: 'Gig',
    budget: { min: 200, max: 500 },
    skills: ['Make.com', 'Email Integration', 'Automation'],
    postedDate: '1 day ago',
    source: 'API',
    description: 'Need workflow for automated email campaigns',
  },
  {
    id: 3,
    title: 'Develop Data Analysis Automation',
    type: 'Contract',
    budget: { min: 2000, max: 4000 },
    skills: ['Python', 'Data Analysis', 'Pandas'],
    postedDate: '3 days ago',
    source: 'Direct Post',
    description: 'Build automated data processing system',
  },
  {
    id: 4,
    title: 'Design AI Voice Assistant Integration',
    type: 'Contract',
    budget: { min: 3000, max: 6000 },
    skills: ['Voice API', 'Node.js', 'NLP'],
    postedDate: '1 day ago',
    source: 'API',
    description: 'Integrate voice capabilities into mobile app',
  },
  {
    id: 5,
    title: 'Fix Python Script Performance Issues',
    type: 'Gig',
    budget: { min: 100, max: 300 },
    skills: ['Python', 'Optimization', 'Debugging'],
    postedDate: '4 hours ago',
    source: 'Direct Post',
    description: 'Optimize slow Python script for production',
  },
  {
    id: 6,
    title: 'Build REST API for SaaS Platform',
    type: 'Full-time',
    budget: { min: 6000, max: 12000 },
    skills: ['Node.js', 'MongoDB', 'REST API'],
    postedDate: '5 days ago',
    source: 'API',
    description: 'Develop complete REST API backend',
  },
];

const ALL_SKILLS = ['Python', 'JavaScript', 'Node.js', 'React', 'LLM', 'API Integration', 'Make.com', 'Email Integration', 'Automation', 'Data Analysis', 'Pandas', 'Voice API', 'NLP', 'MongoDB', 'REST API', 'Optimization', 'Debugging'];

export default function Jobs() {
  const [searchParams] = useSearchParams();
  const [jobs, setJobs] = useState(PLACEHOLDER_JOBS);
  const [filteredJobs, setFilteredJobs] = useState(PLACEHOLDER_JOBS);
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');
  const [selectedType, setSelectedType] = useState('');
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [budgetRange, setBudgetRange] = useState([0, 15000]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);

  const jobsPerPage = 6;

  // Filter jobs
  useEffect(() => {
    let filtered = jobs;

    // Search filter
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (job) =>
          job.title.toLowerCase().includes(q) ||
          job.description.toLowerCase().includes(q) ||
          job.skills.some((skill) => skill.toLowerCase().includes(q))
      );
    }

    // Type filter
    if (selectedType) {
      filtered = filtered.filter((job) => job.type === selectedType);
    }

    // Skills filter
    if (selectedSkills.length > 0) {
      filtered = filtered.filter((job) =>
        selectedSkills.some((skill) => job.skills.includes(skill))
      );
    }

    // Budget filter
    filtered = filtered.filter(
      (job) => job.budget.min >= budgetRange[0] && job.budget.max <= budgetRange[1]
    );

    setFilteredJobs(filtered);
    setCurrentPage(1);
  }, [searchQuery, selectedType, selectedSkills, budgetRange, jobs]);

  // Pagination
  C