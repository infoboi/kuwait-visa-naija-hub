import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Adebayo Johnson",
      role: "Business Traveler",
      content: "Exceptional service from start to finish. They handled my Kuwait visa and made the entire process stress-free.",
      rating: 5
    },
    {
      name: "Chioma Okafor",
      role: "First-time Applicant",
      content: "Got my international passport in record time. The team was professional and kept me informed throughout.",
      rating: 5
    },
    {
      name: "Ibrahim Musa",
      role: "Tourism",
      content: "The Kuwait travel package exceeded my expectations. Great hotels, seamless logistics, wonderful experience.",
      rating: 5
    }
  ];

  return (
    <section className="py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="max-w-2xl mb-20">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-foreground mb-6">
              Client Stories
            </h2>
            <p className="text-xl text-muted-foreground font-light">
              What our clients say about their experience
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-2 bg-card shadow-subtle hover:shadow-medium transition-shadow">
                <CardContent className="p-8 space-y-6">
                  {/* Stars */}
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-foreground font-light leading-relaxed">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="pt-6 border-t border-border">
                    <div className="font-medium text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground font-light">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
