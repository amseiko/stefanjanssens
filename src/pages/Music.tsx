import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink, ArrowLeft, Music as MusicIcon } from "lucide-react";
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
          <div className="mb-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* SoundCloud */}
              <a 
                href="https://soundcloud.com/amseiko" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block group"
              >
                <Card className="p-6 bg-card/60 backdrop-blur-sm border-border/50 hover:bg-card/80 transition-all duration-300 hover:shadow-glow hover:scale-105 cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <MusicIcon className="w-6 h-6 text-primary" />
                      <div>
                        <h3 className="text-xl font-semibold mb-2 font-helvetica">SoundCloud</h3>
                        <p className="text-muted-foreground font-helvetica">Latest Releases</p>
                      </div>
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
                    <div className="flex items-center gap-3">
                      <MusicIcon className="w-6 h-6 text-primary" />
                      <div>
                        <h3 className="text-xl font-semibold mb-2 font-helvetica">Bandcamp</h3>
                        <p className="text-muted-foreground font-helvetica">Support and download releases</p>
                      </div>
                    </div>
                    <ExternalLink className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                </Card>
              </a>

              {/* Apple Music */}
              <a 
                href="https://music.apple.com/gb/playlist/take-me-to-the-stars-sj-projects/pl.u-xlyNAVdIRpbqV" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block group"
              >
                <Card className="p-6 bg-card/60 backdrop-blur-sm border-border/50 hover:bg-card/80 transition-all duration-300 hover:shadow-glow hover:scale-105 cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <MusicIcon className="w-6 h-6 text-primary" />
                      <div>
                        <h3 className="text-xl font-semibold mb-2 font-helvetica">Apple Music</h3>
                        <p className="text-muted-foreground font-helvetica">A playlist of music projects I have been involved in</p>
                      </div>
                    </div>
                    <ExternalLink className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                </Card>
              </a>

              {/* YouTube Music */}
              <a 
                href="https://music.youtube.com/playlist?list=PLSA8iHViFJXQFoBjbgy9DXGijiLxvLxg_&si=eGpytTg7aFx3JDw2" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block group"
              >
                <Card className="p-6 bg-card/60 backdrop-blur-sm border-border/50 hover:bg-card/80 transition-all duration-300 hover:shadow-glow hover:scale-105 cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <MusicIcon className="w-6 h-6 text-primary" />
                      <div>
                        <h3 className="text-xl font-semibold mb-2 font-helvetica">YouTube Music</h3>
                        <p className="text-muted-foreground font-helvetica">YouTube music playlist</p>
                      </div>
                    </div>
                    <ExternalLink className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                </Card>
              </a>

              {/* Spotify */}
              <a 
                href="https://open.spotify.com/playlist/2BslxR98tATE0IlIHJTvQg" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block group"
              >
                <Card className="p-6 bg-card/60 backdrop-blur-sm border-border/50 hover:bg-card/80 transition-all duration-300 hover:shadow-glow hover:scale-105 cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <MusicIcon className="w-6 h-6 text-primary" />
                      <div>
                        <h3 className="text-xl font-semibold mb-2 font-helvetica">Spotify</h3>
                        <p className="text-muted-foreground font-helvetica">A playlist of music projects I have been involved in</p>
                      </div>
                    </div>
                    <ExternalLink className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                </Card>
              </a>

              {/* TKO Bandcamp */}
              <a 
                href="https://tko-hongkong.bandcamp.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block group"
              >
                <Card className="p-6 bg-card/60 backdrop-blur-sm border-border/50 hover:bg-card/80 transition-all duration-300 hover:shadow-glow hover:scale-105 cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <MusicIcon className="w-6 h-6 text-primary" />
                      <div>
                        <h3 className="text-xl font-semibold mb-2 font-helvetica">Bandcamp (TKO)</h3>
                        <p className="text-muted-foreground font-helvetica">TKO - former band</p>
                      </div>
                    </div>
                    <ExternalLink className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                </Card>
              </a>
              
            </div>
          </div>

          {/* In Sollentuna Widget */}
          <div className="mb-16">
            <Card className="p-6 bg-card/60 backdrop-blur-sm border-border/50">
              <h3 className="text-xl font-semibold mb-4 text-center font-helvetica">In Sollentuna</h3>
              <div className="flex justify-center">
                <iframe
                  style={{border: 0, width: '700px', height: '340px'}} 
                  src="https://bandcamp.com/EmbeddedPlayer/album=2520545409/size=large/bgcol=333333/linkcol=e99708/artwork=small/transparent=true/"
                  seamless
                  className="rounded-lg max-w-full"
                >
                  <a href="https://amseiko.bandcamp.com/album/in-sollentuna">In Sollentuna by amseiko</a>
                </iframe>
              </div>
            </Card>
          </div>

          {/* Things Must Change Widget */}
          <div className="mb-16">
            <Card className="p-6 bg-card/60 backdrop-blur-sm border-border/50">
              <h3 className="text-xl font-semibold mb-4 text-center font-helvetica">Things Must Change - Depeche Mode Covers</h3>
              <div className="flex justify-center">
                <iframe
                  style={{border: 0, width: '700px', height: '373px'}} 
                  src="https://bandcamp.com/EmbeddedPlayer/album=1140740819/size=large/bgcol=333333/linkcol=0f91ff/artwork=small/transparent=true/"
                  seamless
                  className="rounded-lg max-w-full"
                >
                  <a href="https://amseiko.bandcamp.com/album/things-must-change-depeche-mode-81-85-covers">things must change - depeche mode 81-85 covers by minimalnomad, sekret oktober, amseiko</a>
                </iframe>
              </div>
            </Card>
          </div>

          {/* Featured Quote - Boys Say Go */}
          <div className="mb-12">
            <Card className="p-6 bg-card/60 backdrop-blur-sm border-border/50">
              <blockquote className="mb-4">
                <p className="text-lg italic text-muted-foreground mb-2">
                  "The refreshing spin that minimalnomad and amseiko bring to this song is practically freaking crucial in regards to the longterm survival of "Boys Say Go" and introducing it to a whole new generation of listeners. I'd also argue that they flex a bit more of their own identity here too…it speaks incredibly strongly on behalf of the excitement that amseiko can create with his music, and also for the bold & beautiful mix of dark angelic sound minimalnomad is capable of as well. To me, what you'll hear on "Boys Say Go" is one of the biggest wins on this record."
                </p>
                <cite className="text-sm text-muted-foreground">— On "Boys Say Go"</cite>
              </blockquote>
              <a 
                href="https://sleepingbagstudios.ca/things-must-change-81-85-depeche-mode-remake/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:underline"
              >
                <span>Read full review</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </Card>
          </div>

          {/* More Bandcamp Releases */}
          <div className="mb-16">
            <Card className="p-6 bg-card/60 backdrop-blur-sm border-border/50">
              <h3 className="text-xl font-semibold mb-4 text-center font-helvetica">More Releases</h3>
              <div className="flex flex-col items-center space-y-6">
                
                <iframe
                  style={{border: 0, width: '700px', height: '406px'}} 
                  src="https://bandcamp.com/EmbeddedPlayer/album=701429186/size=large/bgcol=333333/linkcol=0f91ff/artwork=small/transparent=true/"
                  seamless
                  className="rounded-lg max-w-full"
                >
                  <a href="https://amseiko.bandcamp.com/album/in-venlo">In Venlo by amseiko</a>
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

          {/* Press & Reviews */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-6 text-center font-helvetica">Press & Reviews</h2>
            <div className="space-y-6">
              
              {/* Review 1 */}
              <Card className="p-6 bg-card/60 backdrop-blur-sm border-border/50">
                <blockquote className="mb-4">
                  <p className="text-lg italic text-muted-foreground mb-2">
                    "TKO makes their ambient-electro grooves with real emotional depth... The beat is inviting, the singing is enchanting"
                  </p>
                </blockquote>
                <a 
                  href="https://sleepingbagstudios.ca/tko-moving-out/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:underline"
                >
                  <span>Read full review - TKO Moving Out</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Card>

              {/* Review 3 */}
              <Card className="p-6 bg-card/60 backdrop-blur-sm border-border/50">
                <blockquote className="mb-4">
                  <p className="text-lg italic text-muted-foreground mb-2">
                    "This is music made without regard for the mainstream…ideas unfiltered and as pure as they come"
                  </p>
                </blockquote>
                <a 
                  href="https://sleepingbagstudios.ca/tko-tung-chung-may-day/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:underline"
                >
                  <span>Read full review - TKO Tung Chung May Day</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Card>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Music;