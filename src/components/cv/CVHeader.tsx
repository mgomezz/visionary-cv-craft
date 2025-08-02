import { Mail, Phone, MapPin, Linkedin, Github, Globe } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const CVHeader = () => {
  return (
    <header className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/5" />
      
      <div className="relative card-glass rounded-xl p-8 md:p-12 mb-8 hover-glow">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Profile Photo */}
          <div className="relative">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden border-4 border-white/50 shadow-medium">
              <img 
                src={profilePhoto} 
                alt="Foto de perfil" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-secondary rounded-full border-4 border-white shadow-soft" />
          </div>

          {/* Header Content */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-3">
              María González
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground font-medium mb-6">
              Desarrolladora Frontend Senior
            </h2>
            
            <p className="text-lg text-muted-dark leading-relaxed max-w-2xl mb-8">
              Desarrolladora apasionada con 5+ años de experiencia creando experiencias web 
              modernas e intuitivas. Especializada en React, TypeScript y diseño de interfaces 
              que conectan con los usuarios.
            </p>

            {/* Contact Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center justify-center md:justify-start gap-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-primary" />
                <span>maria.gonzalez@email.com</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary" />
                <span>+34 666 123 456</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Madrid, España</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3 text-muted-foreground">
                <Globe className="w-5 h-5 text-primary" />
                <span>www.mariagonzalez.dev</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center md:justify-start gap-4 mt-6">
              <a href="#" className="p-3 rounded-xl bg-primary/10 hover:bg-primary/20 transition-colors hover:scale-110 transform duration-200">
                <Linkedin className="w-5 h-5 text-primary" />
              </a>
              <a href="#" className="p-3 rounded-xl bg-primary/10 hover:bg-primary/20 transition-colors hover:scale-110 transform duration-200">
                <Github className="w-5 h-5 text-primary" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default CVHeader;