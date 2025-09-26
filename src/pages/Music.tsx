import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Music = () => {
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
              Music
            </h1>
            <p className="text-xl text-muted-foreground font-helvetica">
              Listen to my latest tracks and releases
            </p>
          </div>

          {/* Platform Links */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            
            {/* SoundCloud */}
            <a 
              href="https://soundcloud.com/amseiko" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block group"
            >
              <Card className="p-6 bg-card/60 backdrop-blur-sm border-border/50 hover:bg-card/80 transition-all duration-300 hover:shadow-glow hover:scale-105 cursor-pointer">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">SoundCloud</h3>
                    <p className="text-muted-foreground">Stream my music collection</p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                </div>
              </Card>
            </a>

            {/* Bandcamp */}
            <a 
              href="https://amseiko.bandcamp.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block group"
            >
              <Card className="p-6 bg-card/60 backdrop-blur-sm border-border/50 hover:bg-card/80 transition-all duration-300 hover:shadow-glow hover:scale-105 cursor-pointer">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Bandcamp</h3>
                    <p className="text-muted-foreground">Support and download releases</p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                </div>
              </Card>
            </a>
            
          </div>

          {/* Bandcamp Releases */}
          <div className="space-y-8">
            
            <Card className="p-6 bg-card/60 backdrop-blur-sm border-border/50">
              <h3 className="text-xl font-semibold mb-4 text-center">Bandcamp Releases</h3>
              <div className="flex flex-col items-center space-y-6">
                
                <iframe 
                  style={{border: 0, width: '700px', height: '406px'}} 
                  src="https://bandcamp.com/EmbeddedPlayer/album=701429186/size=large/bgcol=333333/linkcol=ffffff/artwork=small/transparent=true/"
                  seamless
                  className="rounded-lg max-w-full"
                >
                  <a href="https://amseiko.bandcamp.com/album/in-venlo">In Venlo by amseiko</a>
                </iframe>

                <iframe 
                  style={{border: 0, width: '700px', height: '373px'}} 
                  src="https://bandcamp.com/EmbeddedPlayer/album=1140740819/size=large/bgcol=333333/linkcol=0f91ff/artwork=small/transparent=true/"
                  seamless
                  className="rounded-lg max-w-full"
                >
                  <a href="https://amseiko.bandcamp.com/album/things-must-change-depeche-mode-81-85-covers">things must change - depeche mode 81-85 covers by minimalnomad, sekret oktober, amseiko</a>
                </iframe>

                <iframe 
                  style={{border: 0, width: '700px', height: '340px'}} 
                  src="https://bandcamp.com/EmbeddedPlayer/album=2520545409/size=large/bgcol=333333/linkcol=e99708/artwork=small/transparent=true/"
                  seamless
                  className="rounded-lg max-w-full"
                >
                  <a href="https://amseiko.bandcamp.com/album/in-sollentuna">In Sollentuna by amseiko</a>
                </iframe>

                <iframe 
                  style={{border: 0, width: '700px', height: '274px'}} 
                  src="https://bandcamp.com/EmbeddedPlayer/album=2917317512/size=large/bgcol=333333/linkcol=0f91ff/artwork=small/transparent=true/"
                  seamless
                  className="rounded-lg max-w-full"
                >
                  <a href="https://amseiko.bandcamp.com/album/in-enoshima">In Enoshima by amseiko</a>
                </iframe>

              </div>
            </Card>
            
          </div>

        </div>
      </div>
    </div>
  );
};

export default Music;