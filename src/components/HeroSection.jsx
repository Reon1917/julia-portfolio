"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section id="about" className="pt-32 pb-16 md:pt-40 md:pb-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Hi, I'm <span className="text-primary">Julia</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium mb-6">
              Software Developer
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Computer Science graduate with a focus on Software Development. 
              Passionate about creating efficient, user-friendly applications and 
              solving complex problems through clean, maintainable code.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <a href="#contact">Get In Touch</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#projects">View Projects</a>
              </Button>
            </div>
          </div>
          <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20">
              {/* Placeholder for profile image */}
              <div className="absolute inset-0 bg-neutral-100 flex items-center justify-center">
                <span className="text-6xl font-bold text-neutral-300">J</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
