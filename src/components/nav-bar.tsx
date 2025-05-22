import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';
import { Menu, X } from 'lucide-react';
import { Logo } from '@/components/logo';
import { useAuth } from '@/contexts/AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from '@/lib/firebase';

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { user } = useAuth();

  console.log(user);

  const isActive = (path: string) => location.pathname === path;

  // Links only shown when NOT logged in
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Pricing', path: '/pricing' },
  ];

  // Quotes to show a new one each day
  const quotes = [
    'Believe in yourself.',
    'Stay hungry, stay foolish.',
    'Every day is a second chance.',
    'You are capable of amazing things.',
    'Success is a journey, not a destination.',
  ];
  const quoteOfTheDay = quotes[new Date().getDate() % quotes.length];

  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-blur:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Logo />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {!user &&
            navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(link.path) ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {link.name}
              </Link>
            ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-4">
            {user ? (
              <>
                {/* Profile Picture + Name + Quote */}
                <div className="flex flex-col items-start gap-1 px-2">
                  <div className="flex items-center gap-2">
                    <img
                      src={
                        user.photoURL ||
                        `https://ui-avatars.com/api/?name=${encodeURIComponent(
                          user.displayName || user.email || 'User'
                        )}&background=random`
                      }
                      alt="Profile"
                      className="w-8 h-8 rounded-full object-cover border"
                    />
                    <span className="text-sm font-medium">
                      {user.displayName || user.email || 'User'}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground italic">
                    {quoteOfTheDay}
                  </p>
                </div>
                <Button variant="ghost" onClick={handleLogout}>
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="ghost">Login</Button>
                </Link>
                <Link to="/register">
                  <Button>Get Started</Button>
                </Link>
              </>
            )}
          </div>
          <ThemeToggle />

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
      {isOpen && (
        <div className="md:hidden border-t px-4 py-4 flex flex-col gap-4 bg-background">
          {!user &&
            navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`py-2 text-sm font-medium transition-colors hover:text-primary ${
                  isActive(link.path) ? 'text-primary' : 'text-muted-foreground'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}

          <div className="flex flex-col gap-2 pt-2 border-t">
            {user ? (
              <>
                <div className="flex flex-col gap-1 px-2">
                  <div className="flex items-center gap-2">
                    <img
                      src={
                        user.photoURL ||
                        `https://ui-avatars.com/api/?name=${encodeURIComponent(
                          user.displayName || user.email || 'User'
                        )}&background=random`
                      }
                      alt="Profile"
                      className="w-8 h-8 rounded-full object-cover border"
                    />
                    <span className="text-sm font-medium">
                      {user.displayName || user.email || 'User'}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground italic">
                    {quoteOfTheDay}
                  </p>
                </div>
                <Button
                  variant="ghost"
                  className="w-full"
                  onClick={() => {
                    handleLogout();
                    setIsOpen(false);
                  }}
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link to="/login" onClick={() => setIsOpen(false)}>
                  <Button variant="ghost" className="w-full">
                    Login
                  </Button>
                </Link>
                <Link to="/register" onClick={() => setIsOpen(false)}>
                  <Button className="w-full">Get Started</Button>
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
