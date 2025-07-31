import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChatBubble } from "@/components/ui/chat-bubble";
import { RegistrationDialog } from "@/components/registration-dialog";
import chatLogo from "@/assets/chat-logo.png";

export const HeroSection = () => {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        {/* Animated background bubbles */}
        <div className="absolute inset-0 pointer-events-none">
          <ChatBubble 
            className="absolute top-20 left-10 w-16 h-16 opacity-20" 
            animate 
          >
            <i className="fas fa-comment text-2xl"></i>
          </ChatBubble>
          <ChatBubble 
            className="absolute top-32 right-20 w-12 h-12 opacity-15" 
            animate 
          >
            <i className="fas fa-heart text-lg"></i>
          </ChatBubble>
          <ChatBubble 
            className="absolute bottom-40 left-20 w-20 h-20 opacity-10" 
            animate 
          >
            <i className="fas fa-users text-2xl"></i>
          </ChatBubble>
          <ChatBubble 
            className="absolute bottom-20 right-10 w-14 h-14 opacity-25" 
            animate 
          >
            <i className="fas fa-globe text-xl"></i>
          </ChatBubble>
        </div>

        <div className="text-center max-w-4xl mx-auto z-10">
          <div className="mb-8 flex justify-center">
            <img 
              src={chatLogo} 
              alt="TingleTalk Logo" 
              className="w-24 h-24 animate-float hero-glow rounded-2xl"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Connect with 
            <span className="gradient-text"> Strangers</span>
            <br />
            <span className="gradient-text">Anonymously</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Experience genuine conversations without the pressure. 
            TingleTalk offers safe, anonymous chatting in disposable rooms.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 hero-glow hover:scale-105 transition-transform"
              onClick={() => setIsRegistrationOpen(true)}
            >
              <i className="fas fa-comments mr-2"></i>
              Start Chatting
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6 hover:scale-105 transition-transform"
              onClick={() => scrollToSection("how-it-works")}
            >
              <i className="fas fa-question-circle mr-2"></i>
              How It Works
            </Button>
          </div>
          
          <div className="mt-16 flex justify-center items-center gap-8 text-muted-foreground">
            <div className="flex items-center gap-2">
              <i className="fas fa-shield-alt text-green-500"></i>
              <span>100% Anonymous</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fas fa-clock text-blue-500"></i>
              <span>Instant Connect</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fas fa-lock text-purple-500"></i>
              <span>Secure & Safe</span>
            </div>
          </div>
        </div>
      </section>

      <RegistrationDialog 
        open={isRegistrationOpen} 
        onClose={() => setIsRegistrationOpen(false)} 
      />
    </>
  );
};