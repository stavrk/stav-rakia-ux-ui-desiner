
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const NavLink = ({ 
  href, 
  children, 
  isActive 
}: { 
  href: string; 
  children: React.ReactNode; 
  isActive: boolean;
}) => {
  return (
    <Link
      to={href}
      className={cn(
        "relative px-3 py-2 text-sm font-medium transition-colors",
        isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
      )}
    >
      {children}
      {isActive && (
        <motion.div
          layoutId="navbar-indicator"
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      )}
    </Link>
  );
};

const Navbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-200",
        scrolled ? "backdrop-blur-lg bg-background/80 border-b border-border/40" : ""
      )}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="font-display text-xl font-medium">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Stav Rakia
          </motion.span>
        </Link>

        <nav className="flex items-center space-x-1">
          <NavLink href="/" isActive={location.pathname === "/"}>
            Home
          </NavLink>
          <NavLink href="/projects" isActive={location.pathname === "/projects"}>
            Projects
          </NavLink>
          <NavLink href="/about" isActive={location.pathname === "/about"}>
            About
          </NavLink>
        </nav>
      </div>
    </motion.header>
  );
};

export default Navbar;
