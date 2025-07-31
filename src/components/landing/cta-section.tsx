import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChatBubble } from "@/components/ui/chat-bubble";
import { RegistrationDialog } from "@/components/registration-dialog";

export const CTASection = () => {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);

  return (
    <>
      <section className="py-20 px-4 bg-gradient-to-br from-primary/10 to-chat-secondary/10 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <ChatBubble className="absolute top-10 left-10 w-20 h-20 opacity-10" animate>
            <i className="fas fa-heart text-3xl"></i>
          </ChatBubble>
          <ChatBubble className="absolute bottom-10 right-10 w-16 h-16 opacity-15" animate>
            <i className="fas fa-star text-2xl"></i>
          </ChatBubble>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to 
            <span className="gradient-text"> Connect</span>?
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Join thousands of people having meaningful conversations right now. 
            Your next great connection is just one click away.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="tinder-button text-white border-0 text-2xl px-16 py-8"
              onClick={() => setIsRegistrationOpen(true)}
            >
              <i className="fas fa-heart mr-4"></i>
              Join TingleTalk Now
            </Button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold gradient-text mb-2">50K+</div>
              <div className="text-muted-foreground">Active Users</div>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text mb-2">1M+</div>
              <div className="text-muted-foreground">Conversations</div>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text mb-2">150+</div>
              <div className="text-muted-foreground">Countries</div>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text mb-2">24/7</div>
              <div className="text-muted-foreground">Support</div>
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