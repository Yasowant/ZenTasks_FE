import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  Plus,
  Calendar,
  Users,
  Clock,
  MoreHorizontal,
  Moon,
  Sun,
} from "lucide-react";
import { CreateProjectModal } from "@/components/CreateProjectModal";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { SidebarProvider } from "@/components/ui/sidebar";
import { SidebarInset } from "@/components/ui/sidebar";
import { useAuth } from "@/contexts/AuthContext";

const Dashboard = () => {
  const { user } = useAuth();
  const [isCreateProjectOpen, setIsCreateProjectOpen] = useState(false);
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "Website Redesign",
      description: "Complete overhaul of company website",
      color: "bg-purple-500",
      tasks: 8,
      completed: 3,
      members: 4,
      dueDate: "2024-02-15",
    },
    {
      id: 2,
      name: "Mobile App",
      description: "iOS and Android app development",
      color: "bg-blue-500",
      tasks: 12,
      completed: 7,
      members: 6,
      dueDate: "2024-03-20",
    },
  ]);

  const { toast } = useToast();

  const handleCreateProject = (projectData: any) => {
    const newProject = {
      id: projects.length + 1,
      name: projectData.title,
      description: projectData.description,
      color: projectData.color,
      tasks: projectData.tasks?.length || 0,
      completed: 0,
      members: 1,
      dueDate: new Date().toISOString().split("T")[0],
    };
    setProjects([...projects, newProject]);
    toast({
      title: "Project created successfully!",
      description: `${projectData.title} has been added to your projects.`,
    });
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen transition-colors duration-300 flex w-full ">
        <SidebarInset>
          {/* Main Content */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  Welcome back, {user.displayName} 👋
                </h1>
                <p className="text-gray-600 dark:text-gray-300">
                  Here's what's happening with your projects today.
                </p>
              </div>
              <Button
                onClick={() => setIsCreateProjectOpen(true)}
                className="mt-4 sm:mt-0 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Project
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Active Projects
                  </CardTitle>
                  <CheckCircle className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{projects.length}</div>
                  <p className="text-xs text-muted-foreground">
                    +2 from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Completed Tasks
                  </CardTitle>
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {projects.reduce((acc, p) => acc + p.completed, 0)}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    +12 from yesterday
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Team Members
                  </CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {Math.max(...projects.map((p) => p.members))}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Across all projects
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Projects */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Your Projects
              </h2>

              {projects.length === 0 ? (
                <Card className="text-center py-12">
                  <CardContent>
                    <CheckCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      No projects yet
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Get started by creating your first project
                    </p>
                    <Button
                      onClick={() => setIsCreateProjectOpen(true)}
                      className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      Create Project
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projects.map((project) => (
                    <Card
                      key={project.id}
                      className="hover:shadow-lg transition-shadow duration-200"
                    >
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <div
                            className={`w-3 h-3 rounded-full ${project.color}`}
                          ></div>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </div>
                        <CardTitle className="text-lg">
                          {project.name}
                        </CardTitle>
                        <CardDescription>{project.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600 dark:text-gray-300">
                              Progress
                            </span>
                            <span className="font-medium">
                              {project.completed}/{project.tasks} tasks
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                            <div
                              className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full transition-all duration-300"
                              style={{
                                width: `${
                                  (project.completed / project.tasks) * 100
                                }%`,
                              }}
                            ></div>
                          </div>
                          <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-300">
                            <div className="flex items-center">
                              <Users className="h-4 w-4 mr-1" />
                              {project.members} members
                            </div>
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              Due{" "}
                              {new Date(project.dueDate).toLocaleDateString()}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          </div>

          <CreateProjectModal
            isOpen={isCreateProjectOpen}
            onClose={() => setIsCreateProjectOpen(false)}
            onSubmit={handleCreateProject}
          />
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;
