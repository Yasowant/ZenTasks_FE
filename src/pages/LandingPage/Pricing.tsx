
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, HelpCircle } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const Pricing = () => {
  const tiers = [
    {
      name: "Free",
      description: "Great for individuals and small projects",
      price: "$0",
      duration: "forever",
      features: [
        "5 projects",
        "Up to 3 team members",
        "Basic task management",
        "1GB storage",
        "Email support"
      ],
      cta: "Get Started",
      ctaLink: "/register",
      popular: false,
    },
    {
      name: "Pro",
      description: "Perfect for growing teams and businesses",
      price: "$12",
      duration: "per user/month",
      features: [
        "Unlimited projects",
        "Unlimited team members",
        "Advanced task management",
        "10GB storage",
        "Time tracking",
        "Priority support",
        "Custom fields"
      ],
      cta: "Start Free Trial",
      ctaLink: "/payment",
      popular: true,
    },
    {
      name: "Enterprise",
      description: "For large organizations with advanced needs",
      price: "$29",
      duration: "per user/month",
      features: [
        "Everything in Pro",
        "Unlimited storage",
        "Advanced analytics",
        "SSO integration",
        "Custom permissions",
        "24/7 phone support",
        "Dedicated account manager"
      ],
      cta: "Contact Sales",
      ctaLink: "/payment",
      popular: false,
    }
  ];
  
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Simple, transparent pricing
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground text-lg">
              Choose the plan that's right for your team. All plans come with a 14-day free trial.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-8 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tiers.map((tier, i) => (
              <Card key={i} className={`flex flex-col relative overflow-hidden ${tier.popular ? 'border-primary shadow-lg shadow-primary/20 scale-105' : 'border'}`}>
                {tier.popular && (
                  <div className="absolute top-0 right-0">
                    <div className="bg-primary text-primary-foreground px-3 py-1 text-xs font-medium">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <CardHeader>
                  <CardTitle>{tier.name}</CardTitle>
                  <CardDescription>{tier.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{tier.price}</span>
                    <span className="text-muted-foreground ml-2">{tier.duration}</span>
                  </div>
                </CardHeader>
                
                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    {tier.features.map((feature, j) => (
                      <li key={j} className="flex items-center">
                        <Check className="h-4 w-4 mr-2 text-primary" />
                        <span>{feature}</span>
                        {feature.includes("Custom") && (
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <HelpCircle className="h-4 w-4 ml-2 text-muted-foreground" />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="w-[200px]">
                                  Create custom fields for your tasks to track specific information relevant to your workflow.
                                </p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        )}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                
                <CardFooter>
                  {tier.name === "Enterprise" ? (
                    <Link to={tier.ctaLink} state={{ plan: tier }} className="w-full">
                      <Button 
                        className={`w-full ${tier.popular ? 'bg-gradient-to-r from-zen-blue to-zen-purple hover:opacity-90' : ''}`}
                        variant={tier.popular ? "default" : "outline"}
                      >
                        {tier.cta}
                      </Button>
                    </Link>
                  ) : (
                    <Link to={tier.ctaLink} state={{ plan: tier }} className="w-full">
                      <Button 
                        className={`w-full ${tier.popular ? 'bg-gradient-to-r from-zen-blue to-zen-purple hover:opacity-90' : ''}`}
                        variant={tier.popular ? "default" : "outline"}
                      >
                        {tier.cta}
                      </Button>
                    </Link>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Frequently asked questions
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Find answers to common questions about ZenTasks.
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:gap-12">
            {[
              {
                question: "Can I change my plan later?",
                answer: "Yes, you can upgrade or downgrade your plan at any time. If you upgrade, the new features will be available immediately. If you downgrade, the changes will take effect at the end of your current billing cycle."
              },
              {
                question: "Is there a limit to the number of tasks?",
                answer: "No, all plans include unlimited tasks. The difference is in the number of projects and team members you can have."
              },
              {
                question: "Do you offer discounts for non-profits or educational institutions?",
                answer: "Yes, we offer special pricing for non-profits, educational institutions, and open source projects. Please contact our sales team for more information."
              },
              {
                question: "What happens when my trial ends?",
                answer: "At the end of your 14-day trial, you'll need to choose a plan to continue using ZenTasks. If you don't choose a plan, your account will be downgraded to the Free plan with limited features."
              },
              {
                question: "Can I cancel my subscription anytime?",
                answer: "Yes, you can cancel your subscription at any time. If you cancel, you'll still have access to your paid features until the end of your current billing cycle."
              },
              {
                question: "How secure is my data?",
                answer: "We take security seriously. All data is encrypted both in transit and at rest. We also offer two-factor authentication and regular security audits to ensure your data is protected."
              }
            ].map((faq, i) => (
              <div key={i} className="space-y-2">
                <h3 className="text-xl font-bold">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="rounded-lg border bg-card p-8 shadow-sm">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">Ready to get started?</h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground">
                Join thousands of teams who use ZenTasks to streamline their workflow.
              </p>
              <div className="flex justify-center gap-4">
                <Link to="/register">
                  <Button className="bg-gradient-to-r from-zen-blue to-zen-purple hover:opacity-90">
                    Start Your Free Trial
                  </Button>
                </Link>
                <Link to="#contact">
                  <Button variant="outline">Contact Sales</Button>
                </Link>
              </div>
              <p className="text-sm text-muted-foreground">
                No credit card required. 14-day free trial.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
