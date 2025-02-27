"use client";

import { Card, CardContent } from "@/components/ui/card";

export default function EducationSection() {
  const courses = [
    "Algorithm Design",
    "Object-Oriented Programming",
    "Natural Language Processing",
    "Data Science"
  ];

  return (
    <section id="education" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
        
        <Card className="max-w-3xl mx-auto">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold">Assumption University of Thailand</h3>
                <p className="text-muted-foreground">Computer Science, Software Development</p>
              </div>
              <div className="mt-2 md:mt-0 md:text-right">
                <div className="inline-flex items-center justify-center px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  GPA: 3.84
                </div>
              </div>
            </div>
            
            <div className="mt-4">
              <h4 className="font-medium mb-2">Relevant Coursework:</h4>
              <div className="flex flex-wrap gap-2">
                {courses.map((course, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-neutral-100 rounded-full text-sm"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
