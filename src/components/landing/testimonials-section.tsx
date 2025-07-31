import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah M.",
      location: "Canada",
      text: "TingleTalk gave me the confidence to open up without fear of judgment. I've had some of the most genuine conversations here.",
      rating: 5,
      avatar: "SM"
    },
    {
      name: "Alex R.",
      location: "UK",
      text: "The anonymity is perfect. I can be myself without worrying about social media pressure or expectations.",
      rating: 5,
      avatar: "AR"
    },
    {
      name: "Maria L.",
      location: "Spain",
      text: "I love how safe I feel here. The moderation is excellent and I've never encountered inappropriate behavior.",
      rating: 5,
      avatar: "ML"
    },
    {
      name: "James K.",
      location: "Australia",
      text: "Made friends from different cultures and learned so much about the world. TingleTalk breaks down barriers.",
      rating: 5,
      avatar: "JK"
    },
    {
      name: "Priya S.",
      location: "India",
      text: "The instant matching is amazing. Within seconds, I'm talking to someone new and interesting.",
      rating: 5,
      avatar: "PS"
    },
    {
      name: "David W.",
      location: "USA",
      text: "Clean interface, great features, and most importantly - real human connections. Highly recommended!",
      rating: 5,
      avatar: "DW"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Our 
            <span className="gradient-text"> Users Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of people who have discovered meaningful connections through TingleTalk.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-md"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Avatar className="mr-3">
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
                
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <i key={i} className="fas fa-star text-yellow-500 text-sm"></i>
                  ))}
                </div>
                
                <p className="text-muted-foreground leading-relaxed italic">
                  "{testimonial.text}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};