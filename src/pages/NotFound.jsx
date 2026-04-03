import { useNavigate } from 'react-router-dom';
import { AlertCircle, Home, Search } from 'lucide-react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-12 text-center">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <AlertCircle size={80} className="text-red-500 opacity-20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-4xl font-bold text-red-600">404</span>
            </div>
          </div>
        </div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Page Not Found</h1>
        <p className="text-slate-600 mb-8">Sorry, the page you are looking for does not exist or has been moved.</p>
        <div className="space-y-3">
          <Button onClick={() => navigate('/')} className="w-full gap-2"><Home size={18} />Go to Home</Button>
          <Button onClick={() => navigate('/jobs')} variant="secondary" className="w-full gap-2"><Search size={18} />Browse Jobs</Button>
        </div>
        <div className="mt-8 pt-8 border-t border-slate-200">
          <p className="text-xs text-slate-600 mb-4">Quick Links:</p>
          <div className="flex gap-2 justify-center flex-wrap">
            <button onClick={() => navigate('/workers')} className="text-blue-600 hover:text-blue-700 text-sm font-semibold">Workers</button>
            <span className="text-slate-300">&bull;</span>
            <button onClick={() => navigate('/marketplace')} className="text-blue-600 hover:text-blue-700 text-sm font-semibold">Marketplace</button>
            <span className="text-slate-300">&bull;</span>
            <button onClick={() => navigate('/directory')} className="text-blue-600 hover:text-blue-700 text-sm font-semibold">Directory</button>
          </div>
        </div>
      </Card>
    </div>
  );
}
