import { Code, Palette, Database, Globe, Wrench, Users } from "lucide-react";

interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools' | 'soft';
}

interface SkillCategory {
  title: string;
  icon: React.ElementType;
  skills: Skill[];
  color: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: Code,
    color: "primary",
    skills: [
      { name: "React", level: 95, category: 'frontend' },
      { name: "TypeScript", level: 90, category: 'frontend' },
      { name: "Next.js", level: 85, category: 'frontend' },
      { name: "Tailwind CSS", level: 92, category: 'frontend' },
      { name: "Vue.js", level: 80, category: 'frontend' },
    ]
  },
  {
    title: "Diseño & UX",
    icon: Palette,
    color: "secondary",
    skills: [
      { name: "Figma", level: 88, category: 'tools' },
      { name: "UI/UX Design", level: 85, category: 'soft' },
      { name: "Design Systems", level: 90, category: 'frontend' },
      { name: "Responsive Design", level: 95, category: 'frontend' },
    ]
  },
  {
    title: "Backend & Database",
    icon: Database,
    color: "primary",
    skills: [
      { name: "Node.js", level: 75, category: 'backend' },
      { name: "PostgreSQL", level: 70, category: 'backend' },
      { name: "MongoDB", level: 65, category: 'backend' },
      { name: "REST APIs", level: 85, category: 'backend' },
    ]
  },
  {
    title: "Herramientas & DevOps",
    icon: Wrench,
    color: "secondary",
    skills: [
      { name: "Git", level: 90, category: 'tools' },
      { name: "Docker", level: 70, category: 'tools' },
      { name: "Webpack", level: 80, category: 'tools' },
      { name: "Jest", level: 85, category: 'tools' },
    ]
  }
];

const SkillBar = ({ skill }: { skill: Skill }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-foreground">{skill.name}</span>
        <span className="text-xs text-muted-foreground">{skill.level}%</span>
      </div>
      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-primary to-primary-light rounded-full skill-bar"
          style={{ 
            '--progress-width': `${skill.level}%`,
            width: `${skill.level}%`
          } as React.CSSProperties}
        />
      </div>
    </div>
  );
};

const CVSkills = () => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold text-gradient mb-8 text-center">
        Habilidades Técnicas
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category, index) => {
          const IconComponent = category.icon;
          return (
            <div 
              key={category.title}
              className="card-glass rounded-xl p-6 hover-glow fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-xl bg-${category.color}/10`}>
                  <IconComponent className={`w-6 h-6 text-${category.color}`} />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <SkillBar key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Additional Skills */}
      <div className="mt-8 card-glass rounded-xl p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-xl bg-secondary/10">
            <Users className="w-6 h-6 text-secondary" />
          </div>
          <h3 className="text-xl font-bold text-foreground">
            Habilidades Blandas
          </h3>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "Liderazgo de equipos",
            "Comunicación efectiva", 
            "Resolución de problemas",
            "Trabajo colaborativo",
            "Gestión de proyectos",
            "Mentoría técnica",
            "Pensamiento crítico",
            "Adaptabilidad"
          ].map((softSkill, index) => (
            <div 
              key={softSkill}
              className="p-3 bg-muted/50 rounded-lg text-center text-sm font-medium text-muted-dark hover:bg-secondary/10 hover:text-secondary transition-colors"
            >
              {softSkill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CVSkills;