import { Calendar, MapPin, ExternalLink } from "lucide-react";

interface ExperienceItem {
  company: string;
  position: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: "TechCorp Solutions",
    position: "Senior Frontend Developer",
    period: "2022 - Presente",
    location: "Madrid, España",
    description: "Lidero el desarrollo de aplicaciones web escalables para clientes enterprise, colaborando con equipos multidisciplinarios.",
    achievements: [
      "Reduje el tiempo de carga de la aplicación principal en un 40%",
      "Implementé sistema de design tokens que mejoró la consistencia visual",
      "Mentoricé a 3 desarrolladores junior"
    ],
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS"]
  },
  {
    company: "Digital Innovation Hub",
    position: "Frontend Developer",
    period: "2020 - 2022",
    location: "Barcelona, España",
    description: "Desarrollé interfaces interactivas para startups tecnológicas, enfocándome en experiencia de usuario y performance.",
    achievements: [
      "Creé librería de componentes reutilizable usada en 5+ proyectos",
      "Incrementé conversión de landing pages en 25%",
      "Colaboré en arquitectura de micro-frontends"
    ],
    technologies: ["Vue.js", "JavaScript", "SCSS", "Figma"]
  },
  {
    company: "WebStudio Creative",
    position: "Junior Frontend Developer",
    period: "2019 - 2020",
    location: "Valencia, España",
    description: "Comencé mi carrera profesional desarrollando sitios web responsivos para pequeñas y medianas empresas.",
    achievements: [
      "Desarrollé 15+ sitios web desde cero",
      "Implementé técnicas de SEO que mejoraron el ranking orgánico",
      "Aprendí metodologías ágiles y trabajo en equipo"
    ],
    technologies: ["HTML", "CSS", "JavaScript", "WordPress"]
  }
];

const CVExperience = () => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold text-gradient mb-8 text-center">
        Experiencia Profesional
      </h2>
      
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent" />
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className={`relative flex flex-col md:flex-row ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } items-start gap-8 fade-in-up`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-medium z-10" />
              
              {/* Content card */}
              <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                <div className="card-glass rounded-xl p-6 hover-glow">
                  {/* Header */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-foreground mb-1">
                      {exp.position}
                    </h3>
                    <div className="flex items-center gap-2 text-primary font-semibold mb-2">
                      <ExternalLink className="w-4 h-4" />
                      <span>{exp.company}</span>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-dark mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-foreground mb-2">Logros destacados:</h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-dark">
                          <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CVExperience;