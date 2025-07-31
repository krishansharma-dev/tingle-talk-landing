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

        <div className="text-center max-w-5xl mx-auto z-10">
          <div className="mb-12 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-400 to-pink-400 blur-2xl opacity-40 animate-pulse"></div>
              <img 
                src={chatLogo} 
                alt="TingleTalk Logo" 
                className="w-32 h-32 animate-float hero-glow rounded-3xl relative z-10"
              />
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight tracking-tight">
            Meet Someone
            <br />
            <span className="gradient-text">New Today</span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-muted-foreground mb-16 max-w-3xl mx-auto leading-relaxed font-medium">
            Swipe. Chat. Connect. Anonymous conversations with people worldwide.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="tinder-button text-white border-0 text-xl px-12 py-6"
              onClick={() => setIsRegistrationOpen(true)}
            >
              <i className="fas fa-heart mr-3"></i>
              Start Matching
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-12 py-6 text-xl font-bold border-4 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 rounded-full"
              onClick={() => scrollToSection("how-it-works")}
            >
              <i className="fas fa-play mr-3"></i>
              See How It Works
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