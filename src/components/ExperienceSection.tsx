import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "AI Product Manager Intern",
      company: "Pyramid Systems Inc.",
      location: "Fairfax, VA",
      period: "Summer 2025",
      description: "Led development of AI prototypes for U.S. government clients, translating user needs into product requirements and running low-risk pilots that built trust and demonstrated value.",
      technologies: ["React", "Node.js", "AWS", "Docker", "PostgreSQL"],
      achievements: [
        "Facilitated cross-functional AI ideation workshop with 10+ stakeholders, generating 15+ use cases",
        "Built weighted evaluation framework to rank prototypes by ROI and strategic alignment.",
        "Pitched top 3 AI product concepts to the C-level executives"
      ]
    },
    {
      title: "Product Manager / Business Strategist",
      company: "Cathay Financial Holding",
      location: "Taipei, TW",
      period: "2022 - 2024",
      description: "Drove digital transformation in fintech by launching Taiwan’s first e-payment integration for investment accounts and aligning 30+ stakeholders to deliver secure, user-friendly financial products.",
      technologies: ["JavaScript", "Express.js", "MongoDB", "React", "Git"],
      achievements: [
        "Identified partnership opportunities in mobile payments, addressing low penetration despite high market share.",
        "Led cross-functional rollout of e-payment integration into mutual fund accounts, boosting order completion by 7%",
        "Aligned 30+ stakeholders across legal, marketing, and ops to deliver compliant, user-friendly products."
      ]
    },
    {
      title: "Associate Product Manager",
      company: "Groundhog Technologies",
      location: "Taipei, TW",
      period: "2020 - 2022",
      description: "A leading SaaS provider of telecom network analytics and geo-intelligence, where I advanced product adoption by leading development of a flagship geo-analysis tool and driving improvements in data efficiency and client usability.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      achievements: [
        "Directed end-to-end development of Covmo Geo-Analysis, driving 26% of clients to upgrade.",
        "Enhanced client data efficiency by reducing storage capacity 60%",
        "Improved engineering workflow by drafting test cases, debugging with Chrome DevTools, and managing task resolution."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              Work Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-hero mx-auto rounded-full"></div>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-hero hidden md:block"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-medium hidden md:block"></div>
                  
                  <div className="md:ml-16">
                    <Card className="p-8 bg-card border-0 shadow-soft hover:shadow-medium transition-shadow duration-300">
                      <div className="space-y-6">
                        {/* Header */}
                        <div className="space-y-2">
                          <h3 className="text-2xl font-heading font-bold text-foreground">
                            {exp.title}
                          </h3>
                          <h4 className="text-xl font-semibold text-primary">
                            {exp.company}
                          </h4>
                          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center space-x-2">
                              <Calendar className="w-4 h-4" />
                              <span>{exp.period}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <MapPin className="w-4 h-4" />
                              <span>{exp.location}</span>
                            </div>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-muted-foreground leading-relaxed">
                          {exp.description}
                        </p>



                        {/* Achievements */}
                        <div className="space-y-3">
                          <h5 className="font-semibold text-foreground">Key Achievements:</h5>
                          <ul className="space-y-2">
                            {exp.achievements.map((achievement, idx) => (
                              <li key={idx} className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-muted-foreground">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;