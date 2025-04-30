"use client"; // Keep "use client" at the top

import * as React from "react";
import { ProfileCard } from "@/components/profile-card";
import { ProjectShowcase } from "@/components/project-showcase";
import { AboutSection } from "@/components/about-section";
import { ExperienceSection } from "@/components/experience-section";
import { BusinessVenturesSection } from "@/components/business-ventures-section";
import { SkillsEducationSection } from "@/components/skills-education-section";
import { Mail, Linkedin, Github, Store, Film, Phone } from 'lucide-react';

export default function Home() {
  const email = "oedzernamkha@gmail.com";
  const phone = "917-460-5688";
  const github = "https://github.com/Namkha-yolo";
  const linkedin = "https://www.linkedin.com/in/namkha-oedzer-717882221/";
  const rigdenLink = "https://rigden.store";
  const dallayKewaLink = "https://soundcloud.com/dallay-kewa";

  const [currentYear, setCurrentYear] = React.useState<number | null>(null);
  React.useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <main className="container mx-auto max-w-4xl px-4 py-12 md:py-16 lg:py-20 space-y-16 md:space-y-20">
      {/* Sections with updated animation delays */}
      <ProfileCard />
      <AboutSection />
      <ExperienceSection />
      <ProjectShowcase />
      <BusinessVenturesSection />
      <SkillsEducationSection />

      {/* Minimal Footer */}
      <footer className="text-center text-muted-foreground mt-16 pt-8 border-t border-border">
        <p className="text-xs mb-4">
          © {currentYear ?? new Date().getFullYear()} Namkha Tashi Oedzer. All rights reserved.
        </p>
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 text-xs">
          <a href={`mailto:${email}`} className="flex items-center gap-1.5 hover:text-primary transition-colors"> {/* Increased gap */}
            <Mail size={16} /> {/* Adjusted size to match text slightly better */}
            <span className="hidden sm:inline">Email</span>
          </a>
           <a href={`tel:${phone}`} className="flex items-center gap-1.5 hover:text-primary transition-colors"> {/* Increased gap */}
            <Phone size={16} /> {/* Adjusted size */}
            <span className="hidden sm:inline">Phone</span>
          </a>
          <a href={github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-primary transition-colors"> {/* Increased gap */}
            <Github size={16} /> {/* Adjusted size */}
            <span className="hidden sm:inline">GitHub</span>
          </a>
          <a href={linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-primary transition-colors"> {/* Increased gap */}
            <Linkedin size={16} /> {/* Adjusted size */}
            <span className="hidden sm:inline">LinkedIn</span>
          </a>
          <a href={rigdenLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-primary transition-colors"> {/* Increased gap */}
            <Store size={16} /> {/* Adjusted size */}
            <span className="hidden sm:inline">Rigden Store</span>
          </a>
          <a href={dallayKewaLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-primary transition-colors"> {/* Increased gap */}
            <Film size={16} /> {/* Adjusted size */}
            <span className="hidden sm:inline">dallayKewa</span>
          </a>
        </div>
      </footer>
    </main>
  );
}
