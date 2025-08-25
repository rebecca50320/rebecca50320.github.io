import { Code, Database, Globe, Server, Smartphone, Cloud, GitBranch, Terminal } from 'lucide-react';

const TechStack = () => {
  const techItems = [
    { icon: Code, name: 'React', color: 'bg-blue-500', position: 'top-4 -right-4' },
    { icon: Globe, name: 'JavaScript', color: 'bg-yellow-500', position: 'top-16 right-16' },
    { icon: Database, name: 'Node.js', color: 'bg-green-500', position: 'top-32 -right-8' },
    { icon: Server, name: 'Express', color: 'bg-gray-600', position: 'bottom-32 -right-12' },
    { icon: Cloud, name: 'AWS', color: 'bg-orange-500', position: 'bottom-16 right-12' },
    { icon: Terminal, name: 'TypeScript', color: 'bg-blue-600', position: 'bottom-4 -right-2' },
    { icon: GitBranch, name: 'Git', color: 'bg-red-500', position: 'top-8 -left-8' },
    { icon: Smartphone, name: 'CSS', color: 'bg-blue-400', position: 'top-28 -left-16' },
    { icon: Database, name: 'SQL', color: 'bg-purple-500', position: 'bottom-28 -left-12' },
    { icon: Code, name: 'Python', color: 'bg-green-600', position: 'bottom-8 -left-4' }
  ];

  return (
    <div className="absolute inset-0 w-full h-full">
      {techItems.map((tech, index) => {
        const Icon = tech.icon;
        const isDelayed = index % 2 === 0;
        
        return (
          <div
            key={tech.name}
            className={`absolute ${tech.position} ${isDelayed ? 'float-delayed' : 'float-animation'}`}
          >
            <div className={`
              w-12 h-12 rounded-lg shadow-medium bg-card border border-border
              flex items-center justify-center tech-icon-hover
              group relative
            `}>
              <Icon className={`w-6 h-6 text-white`} />
              <div className={`absolute inset-0 rounded-lg ${tech.color} opacity-80`} />
              
              {/* Tooltip */}
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-foreground text-background text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-20">
                {tech.name}
              </div>
            </div>
          </div>
        );
      })}
      
      {/* Floating particles */}
      <div className="absolute top-12 right-8 w-2 h-2 bg-primary rounded-full opacity-60 float-animation" />
      <div className="absolute bottom-20 left-12 w-3 h-3 bg-accent rounded-full opacity-40 float-delayed" />
      <div className="absolute top-1/2 right-4 w-1 h-1 bg-primary rounded-full opacity-50 float-animation" />
    </div>
  );
};

export default TechStack;