
import { Link } from "react-router-dom";
import { Hexagon } from "lucide-react";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

export function Logo({ 
  className, 
  size = "md", 
  showText = true 
}: LogoProps) {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-10 h-10"
  };
  
  const textSizeClasses = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl"
  };
  
  return (
    <Link to="/" className={cn("flex items-center gap-2", className)}>
      <div className="relative">
        <Hexagon className={cn("text-primary", sizeClasses[size])} />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-primary-foreground font-bold text-xs">Z</span>
        </div>
      </div>
      
      {showText && (
        <span className={cn("font-heading font-bold", textSizeClasses[size])}>
          ZenTasks
        </span>
      )}
    </Link>
  );
}
