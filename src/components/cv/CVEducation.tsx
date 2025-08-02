import { GraduationCap, Award, BookOpen } from "lucide-react";

interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  description?: string;
  type: 'degree' | 'certification' | 'course';
}

const education: EducationItem[] = [
  {
    institution: "Universidad Politécnica de Madrid",
    degree: "Grado en Ingeniería Informática",
    period: "2015 - 2019",
    description: "Especialización en Tecnologías Web y Desarrollo de Software",
    type: 'degree'
  },
  {
    institution: "Google Cloud",
    degree: "Professional Cloud Developer",
    period: "2023",
    type: 'certification'
  },
  {
    institution: "Meta",
    degree: "React Advanced Developer",
    period: "2022",
    type: 'certification'
  },
  {
    institution: "Udemy",
    degree: "Advanced TypeScript & Modern JavaScript",
    period: "2021",
    type: 'course'
  },
  {
    institution: "Coursera",
    degree: "UX/UI Design Specialization",
    period: "2020",
    type: 'course'
  }
];

const getTypeIcon = (type: string) => {
  switch (type) {
    case 'degree':
      return GraduationCap;
    case 'certification':
      return Award;
    case 'course':
      return BookOpen;
    default:
      return BookOpen;
  }
};

const getTypeColor = (type: string) => {
  switch (type) {
    case 'degree':
      return 'primary';
    case 'certification':
      return 'secondary';
    case 'course':
      return 'accent';
    default:
      return 'primary';
  }
};

const CVEducation = () => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-gradient mb-6 text-center">
        Formación & Certificaciones
      </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {education.map((item, index) => {
          const IconComponent = getTypeIcon(item.type);
          const colorClass = getTypeColor(item.type);
          
          return (
            <div 
              key={index}
              className="card-glass rounded-lg p-4 hover-glow fade-in-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex items-start gap-3">
                <div className={`p-2 rounded-lg bg-${colorClass}/10 flex-shrink-0`}>
                  <IconComponent className={`w-4 h-4 text-${colorClass}`} />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-sm font-bold text-foreground mb-1">
                    {item.degree}
                  </h3>
                  <p className="text-primary font-semibold mb-1 text-xs">
                    {item.institution}
                  </p>
                  <p className="text-xs text-muted-foreground mb-2">
                    {item.period}
                  </p>
                  {item.description && (
                    <p className="text-xs text-muted-dark">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Additional Info */}
      <div className="mt-6 card-glass rounded-lg p-4">
        <h3 className="text-base font-bold text-foreground mb-3 text-center">
          Idiomas & Otros
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center">
            <h4 className="font-semibold text-foreground mb-2 text-sm">Idiomas</h4>
            <div className="space-y-1">
              <div className="flex justify-between">
                <span className="text-xs text-muted-dark">Español</span>
                <span className="text-xs text-primary font-medium">Nativo</span>
              </div>
              <div className="flex justify-between">
                <span className="text-xs text-muted-dark">Inglés</span>
                <span className="text-xs text-primary font-medium">C1</span>
              </div>
              <div className="flex justify-between">
                <span className="text-xs text-muted-dark">Francés</span>
                <span className="text-xs text-primary font-medium">B2</span>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <h4 className="font-semibold text-foreground mb-2 text-sm">Metodologías</h4>
            <div className="space-y-1">
              <span className="block text-xs text-muted-dark">Agile / Scrum</span>
              <span className="block text-xs text-muted-dark">Design Thinking</span>
              <span className="block text-xs text-muted-dark">TDD</span>
            </div>
          </div>
          
          <div className="text-center">
            <h4 className="font-semibold text-foreground mb-2 text-sm">Intereses</h4>
            <div className="space-y-1">
              <span className="block text-xs text-muted-dark">Open Source</span>
              <span className="block text-xs text-muted-dark">Tech Blogging</span>
              <span className="block text-xs text-muted-dark">Fotografía</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CVEducation;