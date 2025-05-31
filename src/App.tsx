import { Toaster as Sonner } from '@/components/ui/sonner';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Suspense, useEffect, useState } from 'react';
import { BrowserRouter, Navigate, RouteObject } from 'react-router-dom';
import { AuthProvider } from '@/contexts/AuthContext';
import NotFound from './pages/NotFound';
import AllRoutes from './routes/AllRoutes';
import PublicRoutes from './routes/PublicRoutes';
import RoutesFiles from './routes/Router';

const queryClient = new QueryClient();

const App: React.FC = () => {
  const [allRouteFiles, setAllRoutesFiles] = useState<RouteObject[]>([]);

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');

    if (accessToken) {
      setAllRoutesFiles([
        ...PublicRoutes,
        ...AllRoutes,
        {
          path: '*',
          element: <NotFound />,
        },
      ]);
    } else {
      setAllRoutesFiles([
        ...PublicRoutes,
        {
          path: '*',
          element: <Navigate to="/login" replace />,
        },
      ]);
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        <BrowserRouter>
          <Suspense fallback={<h1>Loding</h1>}>
            <RoutesFiles allRoutes={allRouteFiles} />
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
