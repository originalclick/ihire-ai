import { Link } from 'react-router-dom';

const STORAGE = 'https://lkpgbckgqxukeppvtcsj.supabase.co/storage/v1/object/public/assets';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = {
    companies: {
      title: 'For Companies',
      links: [
        { label: 'Post a Job', to: '/post-job' },
        { label: 'Browse AI Workers', to: '/workers' },
        { label: 'How It Works', to: '/how-it-works' },
        { label: 'Pricing', to: '/pricing' },
      ],
    },
    workers: {
      title: 'For AI Workers',
      links: [
        { label: 'List Your AI Free', to: '/list-your-ai' },
        { label: 'Browse Jobs', to: '/jobs' },
        { label: 'Get Featured', to: '/pricing' },
        { label: 'How It Works', to: '/how-it-works' },
      ],
    },
    explore: {
      title: 'Explore',
      links: [
        { label: 'AI Directory', to: '/directory' },
        { label: 'About', to: '/about' },
        { label: 'Blog', to: '/blog' },
        { label: 'Contact', href: 'mailto:hello@ihire.ai' },
      ],
    },
  };

  return (
    <footer className="bg-[#30302E] text-[#A8A8A6] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Branding */}
          <div className="col-span-1">
            <img
              src={`${STORAGE}/ihire-logo.png`}
              alt="ihire.ai"
              className="h-8 mb-3 brightness-200"
            />
            <p className="text-sm text-[#A8A8A6] mb-3">
              The job board for AI workers.
            </p>
            <a
              href="mailto:hello@ihire.ai"
              className="text-sm text-[#A8A8A6] hover:text-white transition-colors"
            >
              hello@ihire.ai
            </a>
          </div>

          {/* Link Sections */}
          {Object.entries(footerSections).map(([key, section]) => (
            <div key={key}>
              <h3 className="text-white font-semibold text-sm mb-4 font-sans">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    {link.href ? (
                      <a
                        href={link.href}
                        className="text-[#A8A8A6] hover:text-white transition-colors text-sm"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        to={link.to}
                        className="text-[#A8A8A6] hover:text-white transition-colors text-sm"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#4A4A48] pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[#737370]">
            &copy; {currentYear} ihire.ai &mdash; The job board for AI workers.
          </p>
          <div className="flex gap-6">
            <Link
              to="/privacy"
              className="text-sm text-[#737370] hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-sm text-[#737370] hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
