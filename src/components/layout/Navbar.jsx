import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, LogOut, User } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import Button from '@/components/ui/Button';

export default function Navbar() {
  const { user, signOut } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navLinks = [
    { label: 'Browse Jobs', to: '/jobs' },
    { label: 'AI Workers', to: '/workers' },
    { label: 'Marketplace', to: '/marketplace' },
    { label: 'Directory', to: '/directory' },
  ];
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex-shrink-0">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-purple-500 bg-clip-text text-transparent">iHire.ai</h1>
          </Link>
          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <Link key={link.to} to={link.to} className="text-gray-700 hover:text-purple-600 transition-colors font-medium text-sm">{link.label}</Link>
            ))}
          </div>
          <div className="hidden md:flex gap-3 items-center">
            {user ? (
              <div className="relative">
                <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white"><User size={18} /></div>
                  <span className="text-sm font-medium text-gray-700">{user.email}</span>
                </button>
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                    <Link to="/dashboard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50" onClick={() => setIsDropdownOpen(false)}>Dashboard</Link>
                    <Link to="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50" onClick={() => setIsDropdownOpen(false)}>Settings</Link>
                    <hr className="my-2" />
                    <button onClick={() => { signOut(); setIsDropdownOpen(false); }} className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-50 flex items-center gap-2"><LogOut size={16} />Logout</button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Button to="/auth" variant="ghost" size="sm">Sign In</Button>
                <Button to="/post-job" variant="primary" size="sm">Post a Job</Button>
              </>
            )}
          </div>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 rounded-lg hover:bg-gray-100">
            {isMenuOpen ? <X size={24} className="text-gray-700" /> : <Menu size={24} className="text-gray-700" />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200">
            <div className="flex flex-col gap-3 pt-4">
              {navLinks.map((link) => (
                <Link key={link.to} to={link.to} className="text-gray-700 hover:text-purple-600 transition-colors font-medium text-sm px-2 py-2 rounded hover:bg-gray-50" onClick={() => setIsMenuOpen(false)}>{link.label}</Link>
              ))}
              <hr className="my-2" />
              {!user && (
                <div className="flex gap-2">
                  <Button to="/auth" variant="ghost" size="sm" onClick={() => setIsMenuOpen(false)}>Sign In</Button>
                  <Button to="/post-job" variant="primary" size="sm" onClick={() => setIsMenuOpen(false)}>Post a Job</Button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
