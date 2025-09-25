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

          {/* Embedded Players */}
          <div className="space-y-12">
            
            {/* SoundCloud Embed */}
            <Card className="p-6 bg-card/60 backdrop-blur-sm border-border/50">
              <h3 className="text-xl font-semibold mb-4 text-center">Latest from SoundCloud</h3>
              <div className="w-full">
                <iframe 
                  width="100%" 
                  height="300" 
                  scrolling="no" 
                  frameBorder="no" 
                  allow="autoplay"
                  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/soundcloud%253Aplaylists%253A1694036040&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                  className="rounded-lg"
                ></iframe>
                <div style={{fontSize: '10px', color: '#cccccc', lineBreak: 'anywhere', wordBreak: 'normal', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', fontFamily: 'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif', fontWeight: 100}}>
                  <a href="https://soundcloud.com/amseiko" title="amseiko" target="_blank" style={{color: '#cccccc', textDecoration: 'none'}}>amseiko</a> · <a href="https://soundcloud.com/amseiko/sets/amseiko-in-venlo" title="In Venlo EP" target="_blank" style={{color: '#cccccc', textDecoration: 'none'}}>In Venlo EP</a>
                </div>
              </div>
            </Card>

            {/* Bandcamp Embed */}
            <Card className="p-6 bg-card/60 backdrop-blur-sm border-border/50">
              <h3 className="text-xl font-semibold mb-4 text-center">Latest from Bandcamp</h3>
              <div className="w-full">
                <iframe 
                  style={{border: 0, width: '100%', height: '120px'}} 
                  src="https://bandcamp.com/EmbeddedPlayer/album=2520545409/size=large/bgcol=333333/linkcol=e99708/tracklist=false/artwork=small/transparent=true/"
                  seamless
                  className="rounded-lg"
                >
                  <a href="https://amseiko.bandcamp.com/album/in-sollentuna">In Sollentuna by amseiko</a>
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