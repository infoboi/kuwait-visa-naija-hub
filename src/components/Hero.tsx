import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import kuwaitHero from "@/assets/kuwait-hero.jpg";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Hero = () => {
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation({ threshold: 0.2 });
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background pt-20">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in-left">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-foreground">
                Your Gateway to
                <span className="block font-semibold text-primary mt-2">Kuwait</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-xl font-light leading-relaxed">
                Expert travel planning and seamless International Passport services for Nigerians
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('services')}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8 h-14 text-base"
              >
                Explore Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => scrollToSection('contact')}
                className="border-2 font-medium px-8 h-14 text-base"
              >
                Get in Touch
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div>
                <div className="text-3xl font-semibold text-foreground mb-1">500+</div>
                <div className="text-sm text-muted-foreground font-light">Clients Served</div>
              </div>
              <div>
                <div className="text-3xl font-semibold text-foreground mb-1">10+</div>
                <div className="text-sm text-muted-foreground font-light">Years Active</div>
              </div>
              <div>
                <div className="text-3xl font-semibold text-foreground mb-1">98%</div>
                <div className="text-sm text-muted-foreground font-light">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Image with Lazy Loading */}
          <div 
            ref={imageRef}
            className={`relative lg:h-[600px] h-[400px] rounded-2xl overflow-hidden shadow-medium transition-all duration-[1200ms] ease-out ${
              imageVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <img 
              src={kuwaitHero} 
              alt="Kuwait City skyline with modern towers at sunset" 
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
