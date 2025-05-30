import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 -z-10"></div>
        <div
          className="absolute -top-24 -right-24 w-96 h-96 bg-accent/20 rounded-full blur-3xl -z-10"
          aria-hidden="true"
        ></div>
        <div
          className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-10"
          aria-hidden="true"
        ></div>

        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-zen-blue to-zen-purple animate-fade-in">
                  Streamline Your Workflow with ZenTasks
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl animate-fade-in" style={{ animationDelay: '0.1s' }}>
                  The simple, intuitive project management tool that helps teams collaborate efficiently and deliver results on time.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <Link to="/register">
                  <Button size="lg" className="bg-gradient-to-r from-zen-blue to-zen-purple hover:opacity-90">
                    Get Started for Free
                  </Button>
                </Link>
              </div>
              <div className="flex items-center space-x-4 text-sm animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <div className="flex items-center">
                  <CheckCircle className="mr-1 h-4 w-4 text-zen-blue" />
                  <span>Free 14-day trial</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="mr-1 h-4 w-4 text-zen-blue" />
                  <span>No credit card required</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-full h-[300px] md:h-[400px] animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-r from-zen-blue to-zen-purple rounded-lg opacity-50 blur-2xl"></div>
                <div className="relative w-full h-full bg-card rounded-lg overflow-hidden border shadow-xl">
                  <div className="p-4">
                    <div className="h-4 w-24 bg-muted rounded mb-4"></div>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <div className="w-4 h-4 bg-zen-blue rounded mr-2"></div>
                        <div className="h-4 w-48 bg-muted rounded"></div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-4 h-4 bg-zen-purple rounded mr-2"></div>
                        <div className="h-4 w-40 bg-muted rounded"></div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-4 h-4 bg-zen-pink rounded mr-2"></div>
                        <div className="h-4 w-56 bg-muted rounded"></div>
                      </div>
                    </div>
                    <div className="mt-6 border-t pt-4">
                      <div className="space-y-2">
                        <div className="h-4 w-32 bg-muted rounded"></div>
                        <div className="h-4 w-full bg-muted rounded"></div>
                        <div className="h-4 w-3/4 bg-muted rounded"></div>
                      </div>
                    </div>
                    <div className="mt-6 flex">
                      <div className="w-8 h-8 bg-muted rounded-full"></div>
                      <div className="w-8 h-8 bg-muted rounded-full -ml-2"></div>
                      <div className="w-8 h-8 bg-muted rounded-full -ml-2"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-12 border-y bg-muted/40">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-2 mb-8">
            <h2 className="text-xl font-medium text-muted-foreground">
              Trusted by innovative teams worldwide
            </h2>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
            {['Brand 1', 'Brand 2', 'Brand 3', 'Brand 4', 'Brand 5'].map((brand, i) => (
              <div key={i} className="grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all">
                <div className="h-8 w-24 bg-muted rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Powerful features to boost your productivity
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              ZenTasks combines simplicity and power to give you the tools you need to manage projects of any size.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Task Management",
                description: "Create, assign, and track tasks with ease. Keep everything organized and accessible.",
                icon: "📋"
              },
              {
                title: "Team Collaboration",
                description: "Real-time collaboration with your team members. Comment, share files, and stay connected.",
                icon: "👥"
              },
              {
                title: "Time Tracking",
                description: "Monitor time spent on tasks and projects. Generate reports to optimize your workflow.",
                icon: "⏱️"
              },
              {
                title: "Project Templates",
                description: "Start new projects quickly with customizable templates for different workflows.",
                icon: "📝"
              },
              {
                title: "Analytics Dashboard",
                description: "Visualize your team's progress with beautiful charts and actionable insights.",
                icon: "📊"
              },
              {
                title: "Integrations",
                description: "Connect with your favorite tools like Slack, GitHub, and Google Drive for seamless workflow.",
                icon: "🔄"
              }
            ].map((feature, i) => (
              <Card key={i} className="border card-hover">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="font-heading text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              What our customers say
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Don't take our word for it. See what teams using ZenTasks have to say.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "ZenTasks transformed how our team works. We're more organized and productive than ever before.",
                author: "Sarah J.",
                role: "Product Manager at TechCorp"
              },
              {
                quote: "The intuitive interface makes project management a breeze. I can't imagine going back to our old system.",
                author: "Michael T.",
                role: "Team Lead at CreativeStudio"
              },
              {
                quote: "The analytics dashboard gives us insights that have completely changed how we allocate resources.",
                author: "Priya K.",
                role: "CEO at StartupX"
              }
            ].map((testimonial, i) => (
              <Card key={i} className="border card-hover">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="text-4xl mb-4">"</div>
                  <p className="flex-1 italic mb-4">{testimonial.quote}</p>
                  <div>
                    <p className="font-bold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="relative overflow-hidden rounded-lg border bg-gradient-to-b from-background to-muted p-8 md:p-12">
            <div className="grid gap-6 md:grid-cols-2 md:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                    Ready to streamline your workflow?
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Join thousands of teams who trust ZenTasks to manage their projects efficiently.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link to="/register">
                    <Button size="lg" className="bg-gradient-to-r from-zen-blue to-zen-purple hover:opacity-90">
                      Start Free Trial
                    </Button>
                  </Link>
                  <Link to="/pricing">
                    <Button size="lg" variant="outline">
                      View Pricing
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="opacity-90">
                  <div className="h-40 w-40 rounded-full bg-gradient-to-r from-zen-blue to-zen-purple blur-3xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
