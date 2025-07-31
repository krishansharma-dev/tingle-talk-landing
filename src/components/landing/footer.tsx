import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export const Footer = () => {
  return (
    <footer className="bg-muted/50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-text">TingleTalk</h3>
            <p className="text-muted-foreground">
              Connect with strangers anonymously through secure, disposable chat rooms.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="p-2">
                <i className="fab fa-twitter text-lg"></i>
              </Button>
              <Button variant="ghost" size="sm" className="p-2">
                <i className="fab fa-facebook text-lg"></i>
              </Button>
              <Button variant="ghost" size="sm" className="p-2">
                <i className="fab fa-instagram text-lg"></i>
              </Button>
              <Button variant="ghost" size="sm" className="p-2">
                <i className="fab fa-discord text-lg"></i>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Quick Links</h4>
            <div className="space-y-2">
              <a href="#features" className="block text-muted-foreground hover:text-primary transition-colors">
                Features
              </a>
              <a href="#how-it-works" className="block text-muted-foreground hover:text-primary transition-colors">
                How It Works
              </a>
              <a href="#testimonials" className="block text-muted-foreground hover:text-primary transition-colors">
                Testimonials
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Download App
              </a>
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Legal</h4>
            <div className="space-y-2">
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Cookie Policy
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Community Guidelines
              </a>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Support</h4>
            <div className="space-y-2">
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Help Center
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Contact Us
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Report Issue
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Safety Tips
              </a>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="bg-card rounded-2xl p-8 mb-8">
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="text-xl font-semibold mb-2">Stay Updated</h4>
            <p className="text-muted-foreground mb-6">
              Get the latest news and updates about TingleTalk features.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                placeholder="Enter your email" 
                className="flex-1"
                type="email"
              />
              <Button className="hero-glow">
                <i className="fas fa-paper-plane mr-2"></i>
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <Separator className="mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-muted-foreground">
          <p>© 2024 TingleTalk. All rights reserved.</p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <span className="flex items-center gap-2">
              <i className="fas fa-shield-alt text-green-500"></i>
              SSL Secured
            </span>
            <span className="flex items-center gap-2">
              <i className="fas fa-user-shield text-blue-500"></i>
              GDPR Compliant
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};