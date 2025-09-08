import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Lightbulb, 
  Heart, 
  Trophy, 
  Globe, 
  Coffee, 
  Laptop, 
  BookOpen,
  Briefcase,
  Target,
  Zap,
  Shield
} from "lucide-react";

const Careers = () => {
  const benefits = [
    {
      icon: Laptop,
      title: "Remote-First Culture",
      description: "Work from anywhere in the world. We believe in flexibility and work-life balance."
    },
    {
      icon: Coffee,
      title: "Flexible Hours",
      description: "Set your own schedule. We care about results, not when you work."
    },
    {
      icon: BookOpen,
      title: "Learning Budget",
      description: "Annual budget for courses, conferences, and professional development."
    },
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health coverage and wellness programs for you and your family."
    },
    {
      icon: Trophy,
      title: "Performance Bonuses",
      description: "Recognition and rewards for outstanding contributions and achievements."
    },
    {
      icon: Globe,
      title: "Global Team",
      description: "Work with talented individuals from diverse backgrounds and cultures."
    }
  ];

  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We encourage creative thinking and embrace new ideas that push boundaries."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in the power of teamwork and open communication."
    },
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for the highest quality in everything we do."
    },
    {
      icon: Zap,
      title: "Agility",
      description: "We move fast, adapt quickly, and embrace change as an opportunity."
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "We operate with honesty, transparency, and ethical principles."
    },
    {
      icon: Briefcase,
      title: "Growth",
      description: "We invest in our people's development and career advancement."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-deep text-white py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Join Our Mission
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Help us revolutionize workforce monitoring and create the future of mobile team management.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="text-lg px-4 py-2">
                Remote-First
              </Badge>
              <Badge variant="secondary" className="text-lg px-4 py-2">
                Global Team
              </Badge>
              <Badge variant="secondary" className="text-lg px-4 py-2">
                Innovation-Driven
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-deep mb-6">
              Current Openings
            </h2>
            <Card className="border-2 border-dashed border-gray-300">
              <CardContent className="py-16">
                <div className="text-center">
                  <Briefcase className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold text-gray-600 mb-4">
                    No Open Positions at the Moment
                  </h3>
                  <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
                    We're not actively hiring right now, but we're always interested in connecting with talented individuals who share our vision. 
                    Feel free to reach out and introduce yourself!
                  </p>
                  <Button size="lg" className="bg-primary hover:bg-primary-deep">
                    Get in Touch
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-deep mb-6">
                Why Work With Us?
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We're building something revolutionary, and we need passionate people to help us get there.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gradient-card">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-deep mb-6">
                Our Values
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                These principles guide everything we do and shape our company culture.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What We're Building */}
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-deep mb-6">
              What We're Building
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Roam is revolutionizing how companies manage their mobile workforce. We're creating a comprehensive platform that makes workforce monitoring simple, powerful, and built for teams that move.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary-deep">The Problem</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Traditional workforce management systems are outdated, complex, and don't work for mobile teams. 
                    Companies struggle with attendance tracking, incident reporting, and real-time visibility of their field personnel.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary-deep">Our Solution</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    A modern, intuitive platform with role-specific dashboards that make workforce monitoring effortless. 
                    From QR code check-ins to real-time incident reporting, we're making mobile workforce management simple and powerful.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary-deep text-white">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Join Our Journey?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Even though we're not actively hiring, we'd love to hear from you. 
              Send us your resume and tell us why you're excited about what we're building.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-primary-deep hover:bg-gray-100">
                Send Your Resume
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-deep">
                Learn More About Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
