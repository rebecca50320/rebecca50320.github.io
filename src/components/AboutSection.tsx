import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import mitLogo from '@/assets/mit-logo.png';
import ntuLogo from '@/assets/ntu-logo.jpg';

const AboutSection = () => {
  const skills = [
    'Product Strategy','Cross-functional Collaboration', 'Stakeholder Alignment', 'Agile Methodology', 'Data Analysis','AI/ML' ,'Python', 'SQL', 'Figma', 'Jira', 'Chrome DevTools', 'AWS','n8n', 'Cursor'
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-hero mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* About Content */}
            <div className="space-y-6">
              <Card className="p-8 bg-gradient-card border-0 shadow-soft">
                <div className="space-y-4">
                  <h3 className="text-2xl font-heading font-semibold text-foreground">
                    Compassionate AI Product Manager
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                  I’m an experienced product manager who has led cross-functional teams to ship platforms ranging from data visualization tools to electronic payments. My focus is translating technical specifications into real business outcomes, and ensuring strong collaboration across engineering, design, and stakeholders.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                  I’m especially excited about building trustworthy AI products — whether for fraud prevention in fintech or intelligent enterprise tools that empower human workflows.
                  </p>
                </div>
              </Card>

              <Card className="p-8 bg-gradient-card border-0 shadow-soft">
                <div className="space-y-4">
                  <h3 className="text-xl font-heading font-semibold text-foreground">
                    What I Do
                  </h3>
                  <ul className="space-y-3">
                                          <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                        <span className="text-muted-foreground"><strong>AI Product Strategy</strong> — Shape product direction through fast discovery cycles, aligning user insight with engineering reality</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                        <span className="text-muted-foreground"><strong>Cross-functional Leadership</strong> — Align engineers, designers, and business stakeholders to move fast without breaking trust.</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                        <span className="text-muted-foreground"><strong>Data-driven Decisions</strong> — Translate metrics and analytics into product trade-offs, from A/B testing to adoption dashboards.</span>
                      </li>
                  
                  </ul>
                </div>
              </Card>
            </div>

            {/* Skills */}
            <div className="space-y-8">
              <Card className="p-8 bg-gradient-card border-0 shadow-soft">
                <div className="space-y-4">
                  <h3 className="text-xl font-heading font-semibold text-foreground">
                    Education
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-4">
                      <div className="h-[50px] w-[50px] shrink-0 flex items-center justify-center">
                        <img src={mitLogo} alt="MIT logo" className="h-full w-full object-contain" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">
                          System Design and Management, M.S.
                        </h4>
                        <p className="text-muted-foreground text-sm">
                          Massachusetts Institute of Technology • 2024-2026
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="h-[50px] w-[50px] shrink-0 flex items-center justify-center">
                        <img src={ntuLogo} alt="NTU logo" className="h-full w-full object-contain" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">
                          International Business, B.A.
                        </h4>
                        <p className="text-muted-foreground text-sm">
                          National Taiwan University • 2016-2020
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-gradient-card border-0 shadow-soft">
                <div className="space-y-6">
                  <h3 className="text-2xl font-heading font-semibold text-foreground">
                    Skills
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="px-4 py-2 text-sm font-medium bg-primary-soft text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;