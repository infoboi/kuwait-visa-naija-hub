import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Plane, FileText, Shield, Clock, MapPin, CheckCircle } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Plane,
      title: "Kuwait Travel Packages",
      description: "Curated travel experiences to explore the beauty and culture of Kuwait",
      features: ["Flight Bookings", "Hotel Reservations", "City Tours", "Visa Assistance"]
    },
    {
      icon: FileText,
      title: "International Passport",
      description: "Fast and reliable passport processing services for Nigerian citizens",
      features: ["New Passport Application", "Passport Renewal", "Document Verification", "Express Processing"]
    },
    {
      icon: Shield,
      title: "Visa Services",
      description: "Comprehensive visa support for Kuwait and other destinations",
      features: ["Visa Applications", "Document Preparation", "Interview Coaching", "Status Tracking"]
    }
  ];

  return (
    <section className="py-24 bg-background" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need for seamless travel to Kuwait
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-accent/50 bg-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-foreground">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="mt-24 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 rounded-3xl p-12">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">Why Choose Us?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Clock, title: "Fast Processing", desc: "Quick turnaround times" },
              { icon: Shield, title: "Trusted Service", desc: "Licensed and certified" },
              { icon: MapPin, title: "Local Expertise", desc: "Deep Kuwait knowledge" },
              { icon: CheckCircle, title: "Success Guaranteed", desc: "98% approval rate" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <h4 className="font-semibold mb-2 text-foreground">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
