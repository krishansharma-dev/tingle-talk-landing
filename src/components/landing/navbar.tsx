import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { RegistrationDialog } from "@/components/registration-dialog";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold gradient-text">TingleTalk</h1>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection("features")}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection("how-it-works")}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                How It Works
              </button>
              <button 
                onClick={() => scrollToSection("testimonials")}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Testimonials
              </button>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost"
                onClick={() => setIsRegistrationOpen(true)}
              >
                Sign In
              </Button>
              <Button 
                onClick={() => setIsRegistrationOpen(true)}
                className="hero-glow"
              >
                <i className="fas fa-rocket mr-2"></i>
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <RegistrationDialog 
        open={isRegistrationOpen} 
        onClose={() => setIsRegistrationOpen(false)} 
      />
    </>
  );
};