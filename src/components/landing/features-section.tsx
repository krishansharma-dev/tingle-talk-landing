import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChatBubble } from "@/components/ui/chat-bubble";

export const FeaturesSection = () => {
  const features = [
    {
      icon: "fas fa-user-secret",
      title: "Anonymous Chatting",
      description: "Chat without revealing your identity. No usernames, no profiles visible to strangers.",
      color: "text-purple-500"
    },
    {
      icon: "fas fa-door-open",
      title: "Disposable Rooms",
      description: "Each conversation happens in a temporary room that disappears when you leave.",
      color: "text-blue-500"
    },
    {
      icon: "fas fa-shield-alt",
      title: "Safety First",
      description: "Advanced moderation, reporting system, and AI-powered content filtering.",
      color: "text-green-500"
    },
    {
      icon: "fas fa-globe",
      title: "Global Community",
      description: "Connect with people from around the world, break language barriers.",
      color: "text-orange-500"
    },
    {
      icon: "fas fa-zap",
      title: "Instant Matching",
      description: "Get matched with someone new in seconds. No waiting, no complex algorithms.",
      color: "text-yellow-500"
    },
    {
      icon: "fas fa-mobile-alt",
      title: "Cross-Platform",
      description: "Use TingleTalk on any device - desktop, mobile, or tablet. Always stay connected.",
      color: "text-pink-500"
    }
  ];

  return (
    <section id="features" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose 
            <span className="gradient-text"> TingleTalk</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We've designed TingleTalk with your privacy, safety, and genuine connection in mind. 
            Here's what makes us different.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-0 shadow-md"
            >
              <CardHeader className="text-center">
                <div className="mb-4 flex justify-center">
                  <ChatBubble className="w-16 h-16 flex items-center justify-center">
                    <i className={`${feature.icon} text-2xl text-white`}></i>
                  </ChatBubble>
                </div>
                <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};