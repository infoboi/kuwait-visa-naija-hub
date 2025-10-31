const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Consultation",
      description: "Share your travel plans or passport needs with our team"
    },
    {
      number: "02",
      title: "Documentation",
      description: "We guide you through required documents and paperwork"
    },
    {
      number: "03",
      title: "Processing",
      description: "Our experts handle applications and bookings efficiently"
    },
    {
      number: "04",
      title: "Delivery",
      description: "Receive your documents and travel itinerary"
    }
  ];

  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="max-w-2xl mb-20">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-foreground mb-6">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground font-light">
              A simple, transparent process designed around you
            </p>
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-4 gap-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-[calc(100%-24px)] w-[calc(100%-48px)] h-px bg-border" />
                )}
                
                <div className="space-y-4">
                  <div className="relative">
                    <div className="text-6xl font-light text-primary/20">{step.number}</div>
                    <div className="absolute top-0 left-0 w-12 h-12 rounded-full border-2 border-primary bg-background flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-medium text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
