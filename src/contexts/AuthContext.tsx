import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react';
import { useQuery } from '@apollo/client';
import { GET_PROFILE_QUERY } from '@/graphql/mutations/profile';
import { jwtDecode } from 'jwt-decode'; // make sure this import is correct

interface DecodedToken {
  userId?: string;
  id?: string;
  sub?: string;
}

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  error: Error | null;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: false,
  error: null,
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [userId, setUserId] = useState<string | null>(null);
  const [shouldQuery, setShouldQuery] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    console.log('Token from localStorage:', token); // 🔥 Print token

    if (token) {
      try {
        const decoded: DecodedToken = jwtDecode(token);
        console.log('Decoded token:', decoded); // 🔥 Print decoded token

        const id = decoded.userId || decoded.id || decoded.sub || null;
        console.log('Extracted userId:', id); // 🔥 Print extracted userId

        setUserId(id);
        if (id) setShouldQuery(true);
      } catch (err) {
        console.error('Invalid token error:', err); // 🔥 Print error
        setUserId(null);
      }
    } else {
      console.warn('No token found in localStorage'); // 🔥 Warn no token
    }
  }, []);

  const { loading, data, error } = useQuery(GET_PROFILE_QUERY, {
    variables: { id: userId },
    skip: !shouldQuery,
  });

  console.log('Apollo useQuery loading:', loading); // 🔥 Print loading state
  console.log('Apollo useQuery data:', data); // 🔥 Print data
  console.log('Apollo useQuery error:', error); // 🔥 Print error if any

  return (
    <AuthContext.Provider
      value={{
        user: data?.getUser ?? null,
        loading,
        error: error ?? null,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
