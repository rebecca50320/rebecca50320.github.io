import { Button } from '@/components/ui/button';
import TechStack from './TechStack';
import profilePhoto from '@/assets/profile-photo.jpg';
import cvPdf from '@/assets/cv.pdf';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-section py-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Profile & Tech Stack */}
          <div className="relative flex justify-center">
            <div className="relative">
              {/* Profile Photo */}
              <div className="relative z-10 w-80 h-80 rounded-full overflow-hidden shadow-large">
                <img 
                  src={profilePhoto} 
                  alt="Rebecca Chen - AI Product Manager Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating Tech Stack */}
              <TechStack />
            </div>
            
            <div className="max-w-lg space-y-4">

          
            </div>


          </div>

          {/* Right Content */}
          <div className="space-y-8 fade-in-up">
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground font-body">My name is</p>
              <h1 className="text-5xl lg:text-7xl font-heading font-bold text-foreground leading-tight">
                Rebecca (ChiuFang) <span className="text-primary">Chen</span>
              </h1>
              <div className="flex items-baseline space-x-3">
                <p className="text-xl text-muted-foreground">I'm a</p>
                <span className="text-2xl font-semibold text-accent">AI Product Manager</span>
              </div>
            </div>
            
            <div className="max-w-lg space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I excel in building scalable and robust software products.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I've led cross-functional teams to ship platforms ranging from data visualization tools to electronic payments, focusing on technical specs, engineering alignment, and workflow optimization.
              </p>
            </div>

            <div className="flex space-x-4">
              <Button 
                asChild
                size="lg" 
                className="bg-gradient-hero hover:shadow-glow transition-all duration-300 px-8 py-3 text-lg"
              >
                <a href={cvPdf} download>Download CV</a>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 text-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                View Projects
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;