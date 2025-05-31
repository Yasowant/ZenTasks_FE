import { Button } from '@/components/ui/button';
import { RootState } from '@/store/Store';
import { setSelectedGroup } from '@/store/slice/groupSlice';
import { Moon, Sun, User } from 'lucide-react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HiOutlineLogout } from 'react-icons/hi';
import { useNavigate, Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { FaCircleDot } from 'react-icons/fa6';
import { useMutation } from '@apollo/client';
import { useToast } from '@/hooks/use-toast';
import { LOGOUT_MUTATION } from '@/graphql/mutations/logout';

const Sidebar = () => {
  const dispatch = useDispatch();
  const [isDark, setIsDark] = useState<boolean>(false);
  const navigate = useNavigate();
  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const { toast } = useToast();
  const [logout] = useMutation(LOGOUT_MUTATION);
  const handleLogout = async () => {
    try {
      const refreshToken = localStorage.getItem('refreshToken');
      if (!refreshToken) throw new Error('No refresh token found');

      // Call your GraphQL logout mutation
      await logout({ variables: { refreshToken } });

      // Sign out from Firebase auth
      await signOut(auth);

      // Clear tokens from localStorage
      localStorage.removeItem('token');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('accessToken');

      // Show success toast
      toast({
        title: 'Logged out successfully',
        description: 'You have been logged out of your account.',
      });

      // Navigate to home or login page
      navigate('/');
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : 'Something went wrong';

      // Show error toast
      toast({
        title: 'Logout failed',
        description: errorMessage,
        variant: 'destructive',
      });
    }
  };

  return (
    <aside className="w-[250px] fixed border-r h-[calc(100vh-66px)] overflow-y-auto pt-4 flex flex-col justify-between">
      <div className="p-4">
        <h3
          className={`text-xs font-semibold mb-3 ${
            isDark ? 'text-gray-500' : 'text-gray-700'
          }`}
        >
          Groups
        </h3>
        <ul className="flex flex-col gap-2">
          <li className="flex items-center gap-2 text-sm cursor-pointer hover:text-[#52357B] transition-colors">
            <FaCircleDot className="text-[#52357B]" />
            Project 1
          </li>
          <li className="flex items-center gap-2 text-sm cursor-pointer hover:text-[#AF3E3E] transition-colors">
            <FaCircleDot className="text-[#AF3E3E]" />
            Project 2
          </li>
        </ul>
      </div>

      <div className="border-t py-3 px-4 flex items-center justify-between">
        <Button
          variant="ghost"
          onClick={toggleTheme}
          size="icon"
          className="rounded border hover:scale-110 transition-transform"
          aria-label="Toggle Dark Mode"
        >
          {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </Button>

        <Link to="/profile" aria-label="Go to Profile">
          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
          >
            <User className="h-5 w-5 text-gray-600 dark:text-gray-300" />
          </Button>
        </Link>

        <button
          onClick={handleLogout}
          className="bg-red-600 border border-red-700 rounded p-2 hover:bg-red-700 transition-colors"
          aria-label="Logout"
        >
          <HiOutlineLogout className="h-5 w-5 text-white" />
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
