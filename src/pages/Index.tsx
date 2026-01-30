import Snowfall from '@/components/Snowfall';
import SantaHat from '@/components/SantaHat';
import SVLogo from '@/components/SVLogo';
import PWLogo from '@/components/PWLogo';
import { Send } from 'lucide-react';

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/30" />
      
      {/* Snowfall effect */}
      <Snowfall />

      {/* Main content */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-4 py-8">
        
        {/* ScholarVerse Title with Santa Hat */}
        <div className="relative mb-8 animate-float">
          {/* Santa Hat on title */}
          <SantaHat 
            size="lg" 
            className="absolute -top-14 left-4 md:left-8 -rotate-12 z-10" 
          />
          
          <div className="flex items-center gap-3 md:gap-5">
            {/* SV Logo */}
            <SVLogo className="w-14 h-14 md:w-20 md:h-20 logo-glow" />
            
            {/* Title */}
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-black title-gradient tracking-tight">
              ScholarVerse
            </h1>
          </div>
        </div>

        {/* Coming Soon text */}
        <p className="text-muted-foreground text-lg md:text-xl mb-12 tracking-widest uppercase">
          Coming Soon
        </p>

        {/* Physics Wallah Button with Santa Hat */}
        <div className="relative mb-12">
          {/* Santa Hat on button */}
          <SantaHat 
            size="md" 
            className="absolute -top-10 -left-2 -rotate-[25deg] z-10" 
          />
          
          <a
            href="#"
            className="btn-pw animate-pulse-glow flex items-center gap-4 px-8 py-5 md:px-12 md:py-6 rounded-2xl text-foreground font-bold text-xl md:text-2xl"
          >
            <PWLogo className="w-12 h-12 md:w-14 md:h-14" />
            <span>Physics Wallah</span>
          </a>
        </div>

        {/* Join Community Button */}
        <a
          href="https://telegram.me/scholarversepro_network"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-telegram flex items-center gap-3 px-6 py-3 md:px-8 md:py-4 rounded-xl text-foreground font-semibold text-base md:text-lg"
        >
          <Send className="w-5 h-5 md:w-6 md:h-6" />
          <span>Join Community</span>
        </a>

        {/* Footer */}
        <p className="absolute bottom-6 text-muted-foreground text-sm">
          © 2025 ScholarVerse. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Index;
