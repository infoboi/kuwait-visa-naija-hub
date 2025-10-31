import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Plane, FileText, Shield } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Plane,
      title: "Kuwait Travel",
      description: "Curated travel experiences with complete support",
      features: ["Flight Bookings", "Hotel Reservations", "City Tours", "Visa Assistance"]
    },
    {
      icon: FileText,
      title: "Passport Services",
      description: "Fast processing for Nigerian citizens",
      features: ["New Applications", "Renewals", "Verification", "Express Processing"]
    },
    {
      icon: Shield,
      title: "Visa Support",
      description: "End-to-end visa application assistance",
      features: ["Applications", "Documentation", "Interview Prep", "Tracking"]
    }
  ];

  return (
    <section className="py-32 bg-background" id="services">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="max-w-2xl mb-20">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-foreground mb-6">
              What We Offer
            </h2>
            <p className="text-xl text-muted-foreground font-light">
              Comprehensive travel and documentation services tailored to your needs
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group border-2 hover:border-primary transition-all duration-300 bg-card shadow-subtle hover:shadow-medium"
              >
                <CardHeader className="space-y-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all">
                    <service.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-medium mb-2">{service.title}</CardTitle>
                    <CardDescription className="text-base font-light">{service.description}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="font-light">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
