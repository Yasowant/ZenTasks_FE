
import { useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const PaymentSuccess = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const planDetails = location.state?.plan;
  
  useEffect(() => {
    // If the user refreshes the page or directly visits this URL without 
    // completing payment, redirect them to the pricing page
    if (!planDetails) {
      navigate("/pricing");
    }
  }, [planDetails, navigate]);
  
  if (!planDetails) return null;

  return (
    <div className="container max-w-md py-16">
      <div className="text-center space-y-6">
        <div className="flex justify-center">
          <div className="rounded-full bg-primary/10 p-4">
            <CheckCircle className="h-12 w-12 text-primary" />
          </div>
        </div>
        
        <h1 className="text-3xl font-bold tracking-tight">Payment Successful!</h1>
        
        <div className="space-y-2">
          <p>
            Thank you for subscribing to the <span className="font-medium">{planDetails.name}</span> plan.
          </p>
          <p className="text-muted-foreground">
            Your subscription is now active. You'll be charged {planDetails.price} {planDetails.duration}.
          </p>
        </div>
        
        <div className="bg-muted p-4 rounded-lg text-left">
          <h3 className="font-medium mb-2">Order Summary</h3>
          <div className="flex justify-between text-sm">
            <span>Plan</span>
            <span>{planDetails.name}</span>
          </div>
          <div className="flex justify-between text-sm mt-1">
            <span>Amount</span>
            <span>{planDetails.price}</span>
          </div>
        </div>
        
        <div className="space-y-4 pt-4">
          <Link to="/">
            <Button className="w-full">Go to Dashboard</Button>
          </Link>
          <p className="text-sm text-muted-foreground">
            A receipt has been sent to your email.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
