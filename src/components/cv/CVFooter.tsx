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
    <footer className="mt-5 mb-3">
      {/* Action Buttons */}
      <div className="flex justify-center gap-2 mb-4">
        <Button
          onClick={handleDownload}
          className="bg-primary hover:bg-primary-dark text-primary-foreground px-4 py-2 rounded-xl font-semibold shadow-medium hover:shadow-strong transition-all duration-300"
        >
          <Download className="w-4 h-4 mr-1.5" />
          Descargar PDF
        </Button>
        
        <Button 
          onClick={handleShare}
          variant="outline"
          className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-4 py-2 rounded-xl font-semibold transition-all duration-300"
        >
          <Share2 className="w-4 h-4 mr-1.5" />
          Compartir
        </Button>
      </div>

      {/* Footer Content */}
      <div className="p-3 text-center">
        <div className="flex items-center justify-center gap-2 text-muted-foreground mb-2">
          <span className="text-xs">Hecho con</span>
          <Heart className="w-2.5 h-2.5 text-red-500 fill-current animate-pulse" />
          <span className="text-xs">y mucho café ☕</span>
        </div>
        
        <p className="text-xs text-muted-dark mb-3">
          Curriculum Vitae - Actualizado en Agosto 2024
        </p>
        
        <div className="border-t border-border pt-3">
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