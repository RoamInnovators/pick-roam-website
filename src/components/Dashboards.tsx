import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Users, Smartphone, Building2 } from "lucide-react";

const Dashboards = () => {
  const dashboards = [
    {
      icon: Shield,
      title: "Admin Dashboard",
      subtitle: "The nerve center for company-level managers",
      features: [
        "Manage sites, users, and workshifts",
        "Generate QR codes for attendance",
        "View live maps of all personnel",
        "Acknowledge incidents and generate reports",
        "Dive into analytics and compliance logs"
      ],
      description: "It's like mission control, but for your company's workforce.",
      color: "bg-gradient-to-br from-primary to-primary-deep"
    },
    {
      icon: Users,
      title: "Supervisor Dashboard",
      subtitle: "Designed for team leaders",
      features: [
        "Track and manage their assigned workers",
        "Approve or reject attendance logs",
        "Report and acknowledge incidents (with photo evidence)",
        "Monitor real-time checkpoints",
        "Record and review occurrences"
      ],
      description: "Think of it as the digital clipboard, replacing paper checklists with live data.",
      color: "bg-gradient-to-br from-professional-blue to-primary"
    },
    {
      icon: Smartphone,
      title: "Worker Dashboard",
      subtitle: "The on-the-ground companion for field personnel",
      features: [
        "Scan QR codes to check in/out",
        "Submit daily reports and log occurrences",
        "Report incidents (quickly, without attachments)",
        "View their assigned work plans and shifts",
        "Drop checkpoints during movement"
      ],
      description: "It's simple, mobile-friendly, and built for speed + ease of use.",
      color: "bg-gradient-to-br from-success-green to-professional-blue"
    },
    {
      icon: Building2,
      title: "Facilities Dashboard",
      subtitle: "Helps site managers focus on their specific locations",
      features: [
        "View who's on-site in real time",
        "Acknowledge incidents for their site",
        "Track occurrences and visitor logs",
        "Access site-specific work plans",
        "Monitor activity and compliance"
      ],
      description: "It's site-level clarity without the noise of other sites.",
      color: "bg-gradient-to-br from-warning-orange to-success-green"
    }
  ];

  return (
    <section id="dashboards" className="py-20 bg-gradient-card">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-deep mb-4">
            Powerful Dashboards for Every Role
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Each dashboard is tailored to specific roles and responsibilities, ensuring everyone has exactly what they need.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {dashboards.map((dashboard, index) => (
            <Card key={index} className="border-0 shadow-card hover:shadow-purple transition-all duration-300 overflow-hidden">
              <CardHeader className={`${dashboard.color} text-white p-8`}>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <dashboard.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl mb-2">{dashboard.title}</CardTitle>
                    <p className="text-white/90">{dashboard.subtitle}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                <ul className="space-y-3">
                  {dashboard.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-primary-deep font-medium italic border-l-4 border-primary-light pl-4">
                  {dashboard.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Dashboards;