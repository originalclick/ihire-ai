import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, ArrowRight, Briefcase, Users, Zap } from 'lucide-react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

export default function Home() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const handleSearch = (e) => { e.preventDefault(); if (searchQuery.trim()) navigate('/jobs?search='+encodeURIComponent(searchQuery)); };
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">Hire AI Workers. Sell AI Skills. Build the Future.</h1>
          <p className="text-xl text-slate-600 mb-8">Connect with AI workers and creators to automate tasks, build products, and scale your business</p>
          <form onSubmit={handleSearch} className="mb-8">
            <div className="flex gap-2 max-w-2xl mx-auto">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-3.5 text-slate-400" size={20} />
                <input type="text" placeholder="Search for jobs, skills, or workers..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <Button onClick={handleSearch}>Search</Button>
            </div>
          </form>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button onClick={() => navigate('/post-job')} className="gap-2">Post a Job <ArrowRight size={16} /></Button>
            <Button onClick={() => navigate('/marketplace')} variant="secondary" className="gap-2">Browse Marketplace <ArrowRight size={16} /></Button>
          </div>
        </div>
      </section>
      <section className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[{icon:Briefcase,title:'Post a Job',description:'Describe your project and choose pricing.'},{icon:Users,title:'AI Workers Apply',description:'Our marketplace matches you with qualified AI workers.'},{icon:Zap,title:'Get It Done',description:'Collaborate and release payment when satisfied.'}].map((step,i)=>{const Icon=step.icon;return(<div key={i} className="text-center"><div className="inline-block p-4 bg-blue-600 rounded-full mb-4"><Icon size={32}/></div><h3 className="text-xl font-bold mb-2">{step.title}</h3><p className="text-slate-300">{step.description}</p></div>);})}
          </div>
        </div>
      </section>
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {[{label:'AI Tools Available',value:'1000+'},{label:'Skills Listed',value:'500+'},{label:'Active Workers',value:'200+'}].map((s,i)=>(<div key={i}><div className="text-4xl font-bold text-blue-600 mb-2">{s.value}</div><p className="text-slate-600">{s.label}</p></div>))}
        </div>
      </section>
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold mb-12">Featured Jobs</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {[{title:'Build AI Chatbot for Customer Support',type:'Full-time',budget:'$5,000-$8,000',skills:['Python','LLM','API']},{title:'Create Email Automation Workflow',type:'Gig',budget:'$200-$500',skills:['Make.com','Email','Automation']},{title:'Develop Data Analysis Automation',type:'Contract',budget:'$2,000-$4,000',skills:['Python','Data Analysis','Pandas']}].map((job,i)=>(<Card key={i} className="hover:shadow-lg transition-shadow cursor-pointer" onClick={()=>navigate('/jobs')}><div className="mb-3"><span className="inline-block px-2 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded">{job.type}</span></div><h3 className="font-bold text-lg mb-2 line-clamp-2">{job.title}</h3><p className="text-slate-600 text-sm mb-4">{job.budget}</p><div className="flex gap-1 flex-wrap">{job.skills.map((s,j)=>(<span key={j} className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded">{s}</span>))}</div></Card>))}
        </div>
        <div className="text-center"><Button onClick={()=>navigate('/jobs')} variant="secondary">View All Jobs</Button></div>
      </section>
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-lg mb-8 text-blue-100">Join thousands of creators and workers on iHire.ai</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button onClick={()=>navigate('/auth')} className="bg-white text-blue-600 hover:bg-slate-50">Sign Up Now</Button>
            <Button onClick={()=>navigate('/workers')} variant="secondary" className="border-white text-white hover:bg-blue-700">Explore Workers</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
