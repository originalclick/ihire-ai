import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, LogOut, User } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import Button from '@/components/ui/Button';

export default function Navbar() {
  const { user, signOut } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navLinks = [
    { label: 'For Companies', to: '/for-companies' },
    { label: 'For AI Workers', to: '/for-ai-workers' },
    { label: 'Browse Jobs', to: '/jobs' },
    { label: 'AI Workers', to: '/workers' },
    { label: 'Directory', to: '/directory' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#FAF9F5]/80 backdrop-blur-md border-b border-[#E3E5E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              src="/ihire-logo.png"
              alt="ihire.ai"
              className="h-9"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-[#737B8C] hover:text-[#29303D] transition-colors font-medium text-sm"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex gap-3 items-center">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 rounded-md text-[#737B8C] hover:text-[#29303D] hover:bg-[#F3F1ED] transition-colors"
            >
              <Search size={18} />
            </button>

            {user ? (
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-[#F3F1ED] transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-[#0F766D] flex items-center justify-center text-white">
                    <User size={18} />
                  </div>
                  <span className="text-sm font-medium text-[#29303D]">
                    {user.email?.split('@')[0]}
                  </span>
                </button>
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-[#E3E5E8] py-2">
                    <Link
                      to="/dashboard"
                      className="block px-4 py-2 text-sm text-[#29303D] hover:bg-[#F3F1ED]"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Dashboard
                    </Link>
                    <Link
                      to="/settings"
                      className="block px-4 py-2 text-sm text-[#29303D] hover:bg-[#F3F1ED]"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Settings
                    </Link>
                    <hr className="my-2 border-[#E3E5E8]" />
                    <button
                      onClick={() => {
                        signOut();
                        setIsDropdownOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-[#F3F1ED] flex items-center gap-2"
                    >
                      <LogOut size={16} />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link
                  to="/auth"
                  className="text-[#737B8C] hover:text-[#29303D] text-sm font-medium px-3 py-2 rounded-md hover:bg-[#F3F1ED] transition-colors"
                >
                  Sign In
                </Link>
                <Button to="/post-job" variant="accent" size="sm">
                  Post a Job
                </Button>
              </>
            )}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md hover:bg-[#F3F1ED] text-[#29303D]"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="pb-4">
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-3 top-3 text-[#737B8C]" size={18} />
              <input
                type="text"
                placeholder="Search jobs, workers, tools..."
                className="w-full pl-10 pr-4 py-2.5 rounded-md border border-[#E3E5E8] bg-white text-[#29303D] focus:outline-none focus:border-[#0F766D] focus:ring-1 focus:ring-[#0F766D]"
                autoFocus
              />
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-[#E3E5E8]">
            <div className="flex flex-col gap-1 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-[#737B8C] hover:text-[#29303D] font-medium text-sm px-3 py-2.5 rounded-md hover:bg-[#F3F1ED] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <hr className="my-2 border-[#E3E5E8]" />
              {!user && (
                <div className="flex gap-2 px-3">
                  <Button to="/auth" variant="ghost" size="sm" onClick={() => setIsMenuOpen(false)}>
                    Sign In
                  </Button>
                  <Button to="/post-job" variant="accent" size="sm" onClick={() => setIsMenuOpen(false)}>
                    Post a Job
                  </Button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
