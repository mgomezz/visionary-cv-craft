import { Mail, Phone, MapPin, Linkedin, Github, Globe } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const CVHeader = () => {
  return (
    <header className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/5" />
      
      <div className="relative card-glass rounded-xl p-6 md:p-8 mb-6 hover-glow">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6">
          {/* Profile Photo */}
          <div className="relative flex-shrink-0">
            <div className="w-28 h-28 md:w-32 md:h-32 rounded-2xl overflow-hidden border-4 border-white/50 shadow-medium">
              <img 
                src={profilePhoto} 
                alt="Foto de perfil" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-secondary rounded-full border-3 border-white shadow-soft" />
          </div>

          {/* Header Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl font-bold text-gradient mb-2">
              María González
            </h1>
            <h2 className="text-lg md:text-xl text-muted-foreground font-medium mb-4">
              Desarrolladora Frontend Senior
            </h2>
            
            <p className="text-base text-muted-dark leading-relaxed max-w-2xl mb-5">
              Desarrolladora apasionada con 5+ años de experiencia creando experiencias web 
              modernas e intuitivas. Especializada en React, TypeScript y diseño de interfaces 
              que conectan con los usuarios.
            </p>

            {/* Contact Info & Social Links */}
            <div className="flex flex-col lg:flex-row lg:items-center gap-4">
              <div className="grid grid-cols-2 gap-3 flex-1">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail className="w-4 h-4 text-primary" />
                  <span>maria.gonzalez@email.com</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Phone className="w-4 h-4 text-primary" />
                  <span>+34 666 123 456</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>Madrid, España</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Globe className="w-4 h-4 text-primary" />
                  <span>www.mariagonzalez.dev</span>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="flex justify-center lg:justify-end gap-3">
                <a href="#" className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors hover:scale-110 transform duration-200">
                  <Linkedin className="w-4 h-4 text-primary" />
                </a>
                <a href="#" className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors hover:scale-110 transform duration-200">
                  <Github className="w-4 h-4 text-primary" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default CVHeader;