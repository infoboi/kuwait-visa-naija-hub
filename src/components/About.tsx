const About = () => {
  return (
    <section className="py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-light tracking-tight text-foreground">
                  About Our Agency
                </h2>
                <p className="text-lg text-muted-foreground font-light leading-relaxed">
                  For over a decade, we've been helping Nigerians discover the beauty of Kuwait while simplifying the complexities of international travel documentation.
                </p>
                <p className="text-lg text-muted-foreground font-light leading-relaxed">
                  Our team of experienced travel consultants combines deep local knowledge with professional passport processing services, ensuring your journey is smooth from start to finish.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8 pt-8">
                <div className="space-y-2">
                  <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                    Licensed
                  </div>
                  <div className="text-foreground font-light">
                    Fully certified travel agency
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                    Trusted
                  </div>
                  <div className="text-foreground font-light">
                    500+ satisfied clients
                  </div>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-6">
              {[
                {
                  title: "Expert Guidance",
                  description: "Professional consultants with in-depth Kuwait knowledge"
                },
                {
                  title: "Fast Processing",
                  description: "Streamlined passport and visa application handling"
                },
                {
                  title: "Transparent Pricing",
                  description: "No hidden fees, clear pricing structure"
                },
                {
                  title: "24/7 Support",
                  description: "Always available to answer your questions"
                }
              ].map((item, index) => (
                <div key={index} className="flex gap-4 p-6 bg-card rounded-xl border border-border shadow-subtle">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-medium text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground font-light">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
