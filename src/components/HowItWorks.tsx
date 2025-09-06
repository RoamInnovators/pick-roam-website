import { Card, CardContent } from "@/components/ui/card";
import { QrCode, MapPin, FileText, Coffee } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: QrCode,
      title: "Check-in",
      description: "Workers scan a unique QR code at their site or use GPS geofencing. Snap — attendance logged with photo proof.",
      color: "text-primary"
    },
    {
      icon: MapPin,
      title: "Track",
      description: "Supervisors and admins see real-time maps, knowing exactly who's active, late, or missing.",
      color: "text-professional-blue"
    },
    {
      icon: FileText,
      title: "Report",
      description: "Incidents? Occurrences? Daily logs? Done digitally with instant notifications and audit trails.",
      color: "text-success-green"
    },
    {
      icon: Coffee,
      title: "Relax",
      description: "With reports, dashboards, and compliance logs auto-generated, all you do is sip your coffee ☕ and let Roam handle the stress.",
      color: "text-warning-orange"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-card">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-deep mb-4">
            How Roam Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            It's as easy as Check, Track, Report, Relax:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="relative h-full border-0 shadow-card hover:shadow-purple transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 text-center space-y-4">
                <div className="relative">
                  <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-full flex items-center justify-center mb-6">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary-light rounded-full flex items-center justify-center text-sm font-bold text-primary-deep">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-primary-deep mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;