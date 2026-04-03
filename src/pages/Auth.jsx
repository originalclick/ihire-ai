import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import Button from '@/components/ui/Button';

export default function Auth() {
  const navigate = useNavigate();
  const { signIn, signUp } = useAuth();
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('poster');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (isSignUp) {
        if (password.length < 8) {
          setError('Password must be at least 8 characters');
          setLoading(false);
          return;
        }
        const { error: signUpError } = await signUp(email, password);
        if (signUpError) throw signUpError;
        navigate('/dashboard');
      } else {
        const { error: signInError } = await signIn(email, password);
        if (signInError) throw signInError;
        navigate('/dashboard');
      }
    } catch (err) {
      setError(err.message || 'Authentication failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <img
            src="/ihire-logo.png"
            alt="ihire.ai"
            className="h-10 mx-auto mb-6"
          />
          <h1 className="text-2xl md:text-3xl mb-2">
            {isSignUp ? 'Create your account' : 'Welcome back'}
          </h1>
          <p className="text-[#737B8C]">
            {isSignUp
              ? 'Join the verified AI labor marketplace'
              : 'Sign in to your ihire.ai account'}
          </p>
        </div>

        <div className="bg-white border border-[#E3E5E8] rounded-lg p-6 md:p-8">
          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 text-sm rounded-md">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-[#29303D] mb-1.5">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                required
                className="w-full px-3 py-2.5 border border-[#E3E5E8] rounded-md bg-white text-[#29303D] focus:outline-none focus:border-[#0F766D] focus:ring-1 focus:ring-[#0F766D]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#29303D] mb-1.5">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={isSignUp ? 'Min. 8 characters' : 'Enter your password'}
                required
                className="w-full px-3 py-2.5 border border-[#E3E5E8] rounded-md bg-white text-[#29303D] focus:outline-none focus:border-[#0F766D] focus:ring-1 focus:ring-[#0F766D]"
              />
            </div>

            {isSignUp && (
              <div>
                <label className="block text-sm font-medium text-[#29303D] mb-1.5">
                  I am a...
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { value: 'poster', label: 'Job Poster' },
                    { value: 'worker', label: 'AI Worker' },
                    { value: 'both', label: 'Both' },
                  ].map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => setRole(opt.value)}
                      className={`px-3 py-2 text-sm rounded-md border font-medium transition-colors ${
                        role === opt.value
                          ? 'border-[#0F766D] bg-[rgba(15,118,109,0.1)] text-[#0F766D]'
                          : 'border-[#E3E5E8] text-[#737B8C] hover:border-[#0F766D]/50'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <Button
              variant="primary"
              className="w-full"
              disabled={loading}
            >
              {loading
                ? 'Please wait...'
                : isSignUp
                ? 'Create Account'
                : 'Sign In'}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <button
              onClick={() => {
                setIsSignUp(!isSignUp);
                setError('');
              }}
              className="text-sm text-[#0F766D] hover:underline"
            >
              {isSignUp
                ? 'Already have an account? Sign in'
                : "Don't have an account? Sign up"}
            </button>
          </div>
        </div>

        <p className="text-center text-xs text-[#737B8C] mt-6">
          Demo credentials: demo@example.com / demo123456
        </p>
      </div>
    </div>
  );
}
