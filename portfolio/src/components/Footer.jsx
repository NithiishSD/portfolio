import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ink-900 text-parchment-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-6">
          {/* Social Links */}
          <div className="flex items-center space-x-6">
            <a
              href="https://github.com/NithiishSD"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold-400 transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/nithiish-s-d"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:nithiishdanasekar@gmail.com"
              className="hover:text-gold-400 transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center font-body text-sm text-parchment-200">
            <p className="flex items-center justify-center space-x-2">
              <span>© {currentYear} Nithiish S D. Built with</span>
              <Heart size={16} className="text-gold-400 fill-current" />
              <span>and React</span>
            </p>
          </div>

          {/* Tagline */}
          <div className="text-center">
            <p className="font-serif italic text-parchment-300 text-sm">
              Calm mind, disciplined builder
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
