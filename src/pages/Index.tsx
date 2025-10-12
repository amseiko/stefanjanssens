import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink, Music, Briefcase, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-subtle opacity-50"></div>
      
      <div className="relative z-10 container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
            
            {/* Hero Section */}
            <div className="mb-16 space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-accent bg-clip-text text-transparent font-helvetica">
                Stefan Janssens
              </h1>
              <div className="flex items-center justify-center">
                <p className="text-xl md:text-2xl text-muted-foreground font-helvetica">
                  Musician & Digital Creator
                </p>
              </div>
            </div>

            {/* Navigation Cards */}
            <div className="grid md:grid-cols-3 gap-8 w-full">
              
              {/* Music Card */}
              <Link to="/music">
                <Card className="group p-8 bg-card/60 backdrop-blur-sm border-border/50 hover:bg-card/80 transition-all duration-300 hover:shadow-glow hover:scale-105 cursor-pointer h-full">
                  <div className="flex flex-col items-center space-y-4 h-full justify-center min-h-[200px]">
                    <div className="p-4 rounded-full bg-gradient-accent shadow-glow">
                      <Music className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h2 className="text-2xl font-semibold font-helvetica">Music</h2>
                    <p className="text-muted-foreground text-center font-helvetica">
                      Listen to my latest tracks, collaborations and remixes
                    </p>
                  </div>
                </Card>
              </Link>

              {/* Work Card */}
              <a 
                href="https://2nd.digital" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block group"
              >
                <Card className="p-8 bg-card/60 backdrop-blur-sm border-border/50 hover:bg-card/80 transition-all duration-300 hover:shadow-glow hover:scale-105 cursor-pointer h-full">
                  <div className="flex flex-col items-center space-y-4 h-full justify-center min-h-[200px]">
                    <div className="p-4 rounded-full bg-gradient-accent shadow-glow">
                      <Briefcase className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h2 className="text-2xl font-semibold flex items-center gap-2 font-helvetica">
                      Work
                      <ExternalLink className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                    </h2>
                    <p className="text-muted-foreground text-center font-helvetica">
                      2nd.digital<br />
                      a network of agencies
                    </p>
                  </div>
                </Card>
              </a>

              {/* Social Card */}
              <Link to="/social">
                <Card className="group p-8 bg-card/60 backdrop-blur-sm border-border/50 hover:bg-card/80 transition-all duration-300 hover:shadow-glow hover:scale-105 cursor-pointer h-full">
                  <div className="flex flex-col items-center space-y-4 h-full justify-center min-h-[200px]">
                    <div className="p-4 rounded-full bg-gradient-accent shadow-glow">
                      <Users className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h2 className="text-2xl font-semibold font-helvetica">Social</h2>
                    <p className="text-muted-foreground text-center font-helvetica">
                      Connect with me on social media
                    </p>
                  </div>
                </Card>
              </Link>
              
            </div>

            {/* Footer */}
            <div className="mt-16 text-muted-foreground">
              <p className="text-sm font-helvetica">© 2025 Stefan Janssens</p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;