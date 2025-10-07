import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Linkedin, Facebook, Twitter, Instagram, Youtube, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const Social = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/stefanjanssens/",
      icon: <Linkedin className="w-6 h-6" />,
      description: "Professional network"
    },
    {
      name: "Facebook", 
      url: "https://www.facebook.com/stefan.janssens",
      icon: <Facebook className="w-6 h-6" />,
      description: "Personal updates"
    },
    {
      name: "X (Twitter)",
      url: "https://x.com/stefanjanssens", 
      icon: <Twitter className="w-6 h-6" />,
      description: "Quick thoughts and updates"
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/stefanjanssens",
      icon: <Instagram className="w-6 h-6" />,
      description: "Visual stories"
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/c/stefanjanssens",
      icon: <Youtube className="w-6 h-6" />,
      description: "Video content"
    },
    {
      name: "Goodreads",
      url: "https://www.goodreads.com/user/show/16588007-stefan-janssens",
      icon: <BookOpen className="w-6 h-6" />,
      description: "Reading and book reviews"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-subtle opacity-50"></div>
      
      <div className="relative z-10 container mx-auto px-6 py-16">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <Link to="/">
            <Button variant="ghost" className="flex items-center gap-2 hover:bg-secondary/50">
              <ArrowLeft className="w-4 h-4" />
              Back
            </Button>
          </Link>
        </div>

        <div className="max-w-4xl mx-auto">
          
          {/* Title */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-accent bg-clip-text text-transparent mb-4 font-helvetica">
              Social Media
            </h1>
            <p className="text-xl text-muted-foreground font-helvetica">
              Stay connected and collaborate
            </p>
          </div>

          {/* Social Links Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <Card className="p-6 bg-card/60 backdrop-blur-sm border-border/50 hover:bg-card/80 transition-all duration-300 hover:shadow-glow hover:scale-105 cursor-pointer h-full">
                <CardContent className="p-0">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-full bg-gradient-accent shadow-glow">
                      {social.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {social.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {social.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>

          {/* Footer */}
          <div className="text-center text-muted-foreground">
            <p className="text-sm font-helvetica">© 2025 Stefan Janssens</p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Social;