
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreditCard, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().email("Invalid email address"),
  cardNumber: z.string().min(16, "Card number must be at least 16 digits"),
  expiryDate: z.string().min(5, "Expiry date is required (MM/YY)"),
  cvv: z.string().min(3, "CVV must be 3 or 4 digits")
});

const Payment = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);
  
  // Get the plan details from location state or default to Pro
  const planDetails = location.state?.plan || {
    name: "Pro",
    price: "$12",
    duration: "per user/month"
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      cardNumber: "",
      expiryDate: "",
      cvv: ""
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      toast({
        title: "Payment successful",
        description: `You have successfully subscribed to the ${planDetails.name} plan.`,
      });
      
      setIsProcessing(false);
      navigate("/payment-success", { state: { plan: planDetails } });
    }, 2000);
  };

  return (
    <div className="container max-w-3xl py-12">
      <div className="space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Complete Your Purchase</h1>
          <p className="text-muted-foreground">Enter your payment details to subscribe to the {planDetails.name} plan</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Payment Form */}
          <Card>
            <CardHeader>
              <CardTitle>Payment Details</CardTitle>
              <CardDescription>Enter your card information securely</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="john@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="cardNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Card Number</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input 
                              placeholder="4242 4242 4242 4242" 
                              {...field} 
                              onChange={e => {
                                // Format card number with spaces
                                const val = e.target.value.replace(/\s/g, "");
                                const formattedVal = val.replace(/(.{4})/g, "$1 ").trim();
                                field.onChange(formattedVal);
                              }}
                              maxLength={19} 
                            />
                            <CreditCard className="absolute right-3 top-2.5 h-5 w-5 text-muted-foreground" />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="expiryDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Expiry Date</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="MM/YY" 
                              {...field} 
                              onChange={e => {
                                let val = e.target.value.replace(/\D/g, "");
                                if (val.length > 2) {
                                  val = val.substring(0, 2) + "/" + val.substring(2, 4);
                                }
                                field.onChange(val);
                              }}
                              maxLength={5} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="cvv"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>CVV</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="123" 
                              {...field} 
                              onChange={e => {
                                field.onChange(e.target.value.replace(/\D/g, ""));
                              }}
                              maxLength={4} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full mt-6 bg-gradient-to-r from-zen-blue to-zen-purple hover:opacity-90"
                    disabled={isProcessing}
                  >
                    {isProcessing ? "Processing..." : `Pay ${planDetails.price}`}
                  </Button>
                </form>
              </Form>
              
              <div className="mt-6 text-center text-sm text-muted-foreground">
                <p>Your payment information is encrypted and secure.</p>
              </div>
            </CardContent>
          </Card>

          {/* Order Summary */}
          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
              <CardDescription>Review your subscription details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span>Plan</span>
                <span className="font-medium">{planDetails.name}</span>
              </div>
              <div className="flex justify-between">
                <span>Price</span>
                <span className="font-medium">{planDetails.price} {planDetails.duration}</span>
              </div>
              <div className="flex justify-between border-t border-border pt-4">
                <span>Total</span>
                <span className="font-bold">{planDetails.price}</span>
              </div>
              
              <div className="rounded-lg bg-muted p-4 mt-6">
                <h4 className="font-medium mb-2">What's included:</h4>
                <ul className="space-y-2">
                  {planDetails.name === "Pro" && (
                    <>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Unlimited projects</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Unlimited team members</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Advanced task management</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>10GB storage</span>
                      </li>
                    </>
                  )}
                  {planDetails.name === "Enterprise" && (
                    <>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Everything in Pro</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Unlimited storage</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Advanced analytics</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Dedicated support</span>
                      </li>
                    </>
                  )}
                  {planDetails.name === "Free" && (
                    <>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>5 projects</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Up to 3 team members</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Basic task management</span>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-2">
              <p className="text-sm text-muted-foreground">
                By proceeding with the payment, you agree to our Terms of Service and Privacy Policy.
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Payment;
