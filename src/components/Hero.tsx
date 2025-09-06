import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
      <div className="container px-4 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-deep leading-tight">
                Welcome to Roam – The Future of Workforce Monitoring 🚀
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Keeping track of teams in the field has always been a headache. Who's on shift? Who's late? Where exactly are they?
              </p>
              <p className="text-lg text-muted-foreground">
                Roam takes that stress away by giving you a real-time view of your people, sites, and incidents — all in one place.
              </p>
            </div>
            
            <div className="space-y-4">
              <p className="text-lg font-medium text-primary-deep">Think of Roam as your digital command center:</p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Spot check-ins with QR scans</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Know where everyone is with GPS geofencing</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Stay ahead of issues with incident reporting</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Keep everything neat with digital occurrence books</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-opacity shadow-purple">
                Start Free Trial
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white">
                Watch Demo
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              Whether you run a security company, a construction site, or manage field personnel, Roam is the ultimate sidekick you didn't know you needed.
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-3xl opacity-20 transform rotate-6"></div>
            <img 
              src={heroImage} 
              alt="Roam Workforce Monitoring Dashboard" 
              className="relative rounded-2xl shadow-purple w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;