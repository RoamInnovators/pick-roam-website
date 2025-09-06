import { Card, CardContent } from "@/components/ui/card";
import { Heart, Code, Smile } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Code,
      title: "Techy but human",
      description: "We speak code and plain English."
    },
    {
      icon: Smile,
      title: "Playful but serious",
      description: "We love emojis but take security seriously."
    },
    {
      icon: Heart,
      title: "Smart but simple",
      description: "If your grandma can't use it, we won't ship it."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-deep mb-6">
            About Us
          </h2>
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground">
            <p>
              👋 Hi there! We're the Roam Crew, and our mission is simple:
              <span className="font-semibold text-primary-deep block mt-2">
                Make field management effortless, transparent, and even a little fun.
              </span>
            </p>
            <p>
              We noticed too many companies were juggling WhatsApp groups, manual logbooks, and paper checklists just to know who showed up. Yikes.
            </p>
            <p>
              So, we built Roam — a playful but powerful system designed to keep things clear, accountable, and stress-free.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold text-primary-deep text-center mb-8">Our vibe?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-0 shadow-card hover:shadow-purple transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-12 h-12 mx-auto bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-primary-deep mb-2">
                    {value.title}
                  </h4>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center">
          <p className="text-lg text-muted-foreground italic">
            We roam with you, so your people stay safe, your sites stay secure, and your nights stay peaceful.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;