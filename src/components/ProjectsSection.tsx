import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Eye } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "RecruitGenie: AI-powered recruiting tool",
      description: "RecruitGenie is a modular, semi-automated recruiting assistant built in n8n that helps users track full-time job applications, research companies, summarize product and market data, update a Google Sheet tracker, and generate a formatted Google Doc for each company.",
      image: "/src/assets/n8n.png",
      technologies: ["n8n", "Google Cloud OAuth", "OpenAI API", "SerpAPI"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Harry Potter Wizarding Simulation",
      description: "Wizard Spellcasting Simulation combines gesture recognition and voice recognition to let users cast spells with hand motions and spoken commands, triggering immersive visual and sound effects.",
      image: "/src/assets/hp.png",
      technologies: ["PyAudio", "OpenCV", "Whisper", "MediaPipe","Pygame","Tkinter"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Weather Analytics App",
      description: "Real-time weather data visualization with historical trends, forecasting, and location-based alerts using modern web technologies.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop",
      technologies: ["Vue.js", "D3.js", "Python", "FastAPI"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Social Media Analytics",
      description: "Comprehensive social media analytics platform with sentiment analysis, engagement tracking, and automated reporting features.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      technologies: ["React", "Python", "TensorFlow", "Docker"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Real Estate Portal",
      description: "Modern real estate platform with advanced search filters, virtual tours, and integrated CRM for property management.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&h=300&fit=crop",
      technologies: ["Next.js", "Prisma", "PostgreSQL", "Mapbox"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Fitness Tracking App",
      description: "Personal fitness tracking application with workout planning, progress monitoring, and social features for motivation.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop",
      technologies: ["React Native", "Node.js", "MongoDB", "Chart.js"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-hero mx-auto rounded-full"></div>
            <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills in full-stack development,
              UI/UX design, and modern web technologies.
            </p>
          </div>

          {/* Featured Projects */}
          <div className="space-y-16 mb-20">
            {featuredProjects.map((project, index) => (
              <Card key={index} className="overflow-hidden border-0 shadow-large hover:shadow-glow transition-all duration-500">
                <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={`relative overflow-hidden ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <img
                      src={project.image}
                      alt={`${project.title} - Project Screenshot`}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-primary/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="space-y-6">
                      <div className="space-y-4">
                        <h3 className="text-2xl lg:text-3xl font-heading font-bold text-foreground">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="bg-primary-soft text-primary"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex space-x-4">
                        <Button
                          asChild
                          className="bg-gradient-hero hover:shadow-medium transition-all duration-300"
                        >
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <Eye className="w-4 h-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                        <Button
                          variant="outline"
                          asChild
                          className="hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                        >
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Other Projects Grid - Hidden */}
          {/* <div className="space-y-12">
            <div className="text-center">
              <h3 className="text-3xl font-heading font-bold text-foreground mb-4">
                More Projects
              </h3>
              <div className="w-16 h-1 bg-gradient-hero mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
              {otherProjects.map((project, index) => (
                <Card key={index} className="overflow-hidden border-0 shadow-soft hover:shadow-medium transition-all duration-300 group">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={`${project.title} - Project Screenshot`}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                      <Button
                        size="sm"
                        asChild
                        className="bg-background text-foreground hover:bg-background/90"
                      >
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                      <Button
                        size="sm"
                        asChild
                        className="bg-background text-foreground hover:bg-background/90"
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="space-y-4">
                      <h4 className="text-xl font-heading font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                        {project.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="text-xs bg-accent-soft text-accent border-accent/20"
                          >
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{project.technologies.length - 3}
                        </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
