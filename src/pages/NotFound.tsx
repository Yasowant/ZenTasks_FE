
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-13rem)] text-center px-4">
      <h1 className="text-9xl font-bold text-primary">404</h1>
      <h2 className="text-2xl md:text-3xl font-bold mt-4 mb-2">Page not found</h2>
      <p className="text-muted-foreground mb-8 max-w-md">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link to="/">
          <Button>Return to Home</Button>
        </Link>
        <Link to="/login">
          <Button variant="outline">Sign In</Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
