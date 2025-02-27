"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ProjectsSection() {
  const projects = [
    {
      title: "AI-Powered Task Manager",
      description: "A task management application that uses natural language processing to categorize and prioritize tasks automatically.",
      technologies: ["Python", "React", "MongoDB", "NLP"],
      demoLink: "#",
      repoLink: "#"
    },
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce platform with product management, user authentication, and payment processing.",
      technologies: ["Next.js", "PostgreSQL", "Stripe API", "Tailwind CSS"],
      demoLink: "#",
      repoLink: "#"
    },
    {
      title: "Data Visualization Dashboard",
      description: "An interactive dashboard for visualizing and analyzing large datasets with customizable charts and filters.",
      technologies: ["JavaScript", "D3.js", "Express", "SQL"],
      demoLink: "#",
      repoLink: "#"
    },
    {
      title: "Mobile Fitness App",
      description: "A cross-platform mobile application for tracking workouts, nutrition, and fitness progress.",
      technologies: ["React Native", "Firebase", "TypeScript"],
      demoLink: "#",
      repoLink: "#"
    }
  ];

  return (
    <section id="projects" className="py-16 bg-neutral-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="h-full flex flex-col">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Button variant="outline" size="sm" asChild>
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
