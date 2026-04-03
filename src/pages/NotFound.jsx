import { Link } from 'react-router-dom';
import Button from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4">
      <div className="text-center max-w-md">
        <p className="text-7xl font-bold text-[#0F766D] mb-4 font-sans">404</p>
        <h1 className="text-2xl md:text-3xl mb-3">Page not found</h1>
        <p className="text-[#737B8C] mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex gap-3 justify-center flex-wrap">
          <Button to="/" variant="primary">
            Go to Home
          </Button>
          <Button to="/jobs" variant="secondary">
            Browse Jobs
          </Button>
        </div>
        <div className="mt-8 flex gap-6 justify-center text-sm">
          <Link to="/workers" className="text-[#0F766D] hover:underline">
            Workers
          </Link>
          <Link to="/marketplace" className="text-[#0F766D] hover:underline">
            Marketplace
          </Link>
          <Link to="/directory" className="text-[#0F766D] hover:underline">
            Directory
          </Link>
        </div>
      </div>
    </div>
  );
}
