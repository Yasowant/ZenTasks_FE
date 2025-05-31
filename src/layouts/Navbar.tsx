import { Logo } from '@/components/logo';
import { AiOutlineGlobal } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { IoNotifications } from 'react-icons/io5';
import { Button } from '../components/ui/button';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [user, setUser] = useState<boolean>(false);

  const navLinks = [
    { name: 'Home', path: '/home' },
    { name: 'Projects', path: '/projects' },
    { name: 'Task Dashboard', path: '/tasks' },
    { name: 'Overview', path: '/overview' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-blur:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Logo />
        </div>

        <nav className="hidden md:flex items-center gap-6">
          {!user &&
            navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary
       
                `}
              >
                {link.name}
              </Link>
            ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="flex justify-between items-center">
            <AiOutlineGlobal />
            <IoNotifications />
          </div>
          {/* Mobile Hamburger */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="absolute">
        {isOpen && (
          <div className="md:hidden border-t px-4 py-4 flex flex-col gap-4 bg-background">
            {!user &&
              navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`py-2 text-sm font-medium transition-colors hover:text-primary
         
                
                `}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
