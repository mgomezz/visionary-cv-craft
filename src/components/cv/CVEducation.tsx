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
    <section className="mb-5">
      <h2 className="text-xl font-bold text-gradient mb-4 text-center">
        Formación & Certificaciones
      </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
        {education.map((item, index) => {
          const IconComponent = getTypeIcon(item.type);
          const colorClass = getTypeColor(item.type);
          return (
            <div 
              key={index}
              className="p-3 fade-in-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex items-start gap-2">
                <div className={`p-1.5 rounded-lg bg-${colorClass}/10 flex-shrink-0`}>
                  <IconComponent className={`w-3 h-3 text-${colorClass}`} />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xs font-bold text-foreground mb-0.5">
                    {item.degree}
                  </h3>
                  <p className="text-primary font-semibold mb-0.5 text-xs">
                    {item.institution}
                  </p>
                  <p className="text-xs text-muted-foreground mb-1">
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
      <div className="mt-4 p-3">
        <h3 className="text-sm font-bold text-foreground mb-2 text-center">
          Idiomas & Otros
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="text-center">
            <h4 className="font-semibold text-foreground mb-1.5 text-xs">Idiomas</h4>
            <div className="space-y-0.5">
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
            <h4 className="font-semibold text-foreground mb-1.5 text-xs">Metodologías</h4>
            <div className="space-y-0.5">
              <span className="block text-xs text-muted-dark">Agile / Scrum</span>
              <span className="block text-xs text-muted-dark">Design Thinking</span>
              <span className="block text-xs text-muted-dark">TDD</span>
            </div>
          </div>
          
          <div className="text-center">
            <h4 className="font-semibold text-foreground mb-1.5 text-xs">Intereses</h4>
            <div className="space-y-0.5">
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