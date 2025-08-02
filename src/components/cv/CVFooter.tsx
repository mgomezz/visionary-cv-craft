import { Heart, Download, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const CVFooter = () => {
  const handleDownload = () => {
    window.print();
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'CV - María González',
        text: 'Desarrolladora Frontend Senior',
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <footer className="mt-8 mb-6">
      {/* Action Buttons */}
      <div className="flex justify-center gap-3 mb-6">
        <Button
          onClick={handleDownload}
          className="bg-primary hover:bg-primary-dark text-primary-foreground px-6 py-3 rounded-xl font-semibold shadow-medium hover:shadow-strong transition-all duration-300"
        >
          <Download className="w-5 h-5 mr-2" />
          Descargar PDF
        </Button>
        
        <Button 
          onClick={handleShare}
          variant="outline"
          className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 py-3 rounded-xl font-semibold transition-all duration-300"
        >
          <Share2 className="w-5 h-5 mr-2" />
          Compartir
        </Button>
      </div>

      {/* Footer Content */}
      <div className="card-glass rounded-lg p-4 text-center">
        <div className="flex items-center justify-center gap-2 text-muted-foreground mb-3">
          <span className="text-sm">Hecho con</span>
          <Heart className="w-3 h-3 text-red-500 fill-current animate-pulse" />
          <span className="text-sm">y mucho café ☕</span>
        </div>
        
        <p className="text-sm text-muted-dark mb-4">
          Curriculum Vitae - Actualizado en Agosto 2024
        </p>
        
        <div className="border-t border-border pt-4">
          <p className="text-xs text-muted-foreground">
            "El mejor momento para plantar un árbol fue hace 20 años. El segundo mejor momento es ahora." 
            <br />
            <span className="italic">- Proverbio chino</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default CVFooter;