
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ExternalLink, Mail, Linkedin, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-border/40 py-10 mt-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-lg font-medium mb-4">Stav Rakia</h3>
            <p className="text-muted-foreground text-sm mb-4 max-w-md">
              UX/UI Designer and Instructional Designer focused on 
              creating intuitive and engaging digital experiences that solve real problems.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Connect</h3>
            <div className="flex space-x-4">
              <motion.a 
                href="mailto:stavsim282@gmail.com" 
                className="p-2 rounded-full hover:bg-secondary transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/in/stav-rakia/" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-secondary transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
              <motion.a 
                href="tel:+9725476764647" 
                className="p-2 rounded-full hover:bg-secondary transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Phone"
              >
                <Phone className="h-5 w-5" />
              </motion.a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border/40 mt-10 pt-6 flex justify-between items-center">
          <p className="text-xs text-muted-foreground">
            © {currentYear} Stav Rakia. All rights reserved.
          </p>
          <Link 
            to="/about" 
            className="text-xs text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors"
          >
            Get in touch <ExternalLink className="h-3 w-3" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
