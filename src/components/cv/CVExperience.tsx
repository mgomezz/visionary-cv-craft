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
    <section className="mb-5">
      <h2 className="text-xl font-bold text-gradient mb-4 text-center">
        Experiencia Profesional
      </h2>
      
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent" />
        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="relative flex flex-col lg:flex-row items-start gap-4 fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Timeline dot */}
              <div className="absolute left-6 lg:left-1/2 transform lg:-translate-x-1/2 w-2.5 h-2.5 bg-primary rounded-full border-2 border-background shadow-medium z-10" />
              
              {/* Content */}
              <div className={`ml-12 lg:ml-0 lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-4' : 'lg:pl-4 lg:order-2'}`}> 
                <div>
                  {/* Header */}
                  <div className="mb-2">
                    <h3 className="text-base font-bold text-foreground mb-0.5">
                      {exp.position}
                    </h3>
                    <div className="flex items-center gap-2 text-primary font-semibold mb-1">
                      <ExternalLink className="w-2.5 h-2.5" />
                      <span className="text-xs">{exp.company}</span>
                    </div>
                    
                    <div className="flex gap-3 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-2.5 h-2.5" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-2.5 h-2.5" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-muted-dark mb-2 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-2">
                    <h4 className="font-semibold text-foreground mb-1 text-xs">Logros destacados:</h4>
                    <ul className="space-y-0.5">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-1.5 text-xs text-muted-dark">
                          <div className="w-0.5 h-0.5 bg-secondary rounded-full mt-1.5 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1">
                    {exp.technologies.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-1.5 py-0.5 bg-primary/10 text-primary text-xs font-medium rounded border border-primary/20"
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