
import React, { useCallback } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play, ArrowRight } from "lucide-react";

interface Slide {
  image: string;
  title: string;
  description: string;
}

const slides: Slide[] = [
  {
    image: "https://videos.openai.com/vg-assets/assets%2Ftask_01jtg50p80ecf9bbvxfkg9f0pm%2F1746446431_img_0.webp?st=2025-05-24T08%3A33%3A15Z&se=2025-05-30T09%3A33%3A15Z&sks=b&skt=2025-05-24T08%3A33%3A15Z&ske=2025-05-30T09%3A33%3A15Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=3d249c53-07fa-4ba4-9b65-0bf8eb4ea46a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=9Py%2Fv8g7eYmO2VxWcjdJ9erKUPjccKaQpcNX55ydGWg%3D&az=oaivgprodscus",
    title: "One-on-One Learning",
    description: "Personalized attention tailored to each student's unique learning needs"
  },
  {
    image: "https://videos.openai.com/vg-assets/assets%2Ftask_01jw0w2gw7f7sv59farbxb60xk%2F1748081209_img_0.webp?st=2025-05-24T08%3A35%3A16Z&se=2025-05-30T09%3A35%3A16Z&sks=b&skt=2025-05-24T08%3A35%3A16Z&ske=2025-05-30T09%3A35%3A16Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=3d249c53-07fa-4ba4-9b65-0bf8eb4ea46a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=ZpCHkgnU4zzp0BCrLWJlmDCv538Fg2uNZptd9p6puB4%3D&az=oaivgprodscus",
    title: "Interactive Sessions",
    description: "Engaging learning experiences with real-time problem solving"
  },
  {
    image: "https://videos.openai.com/vg-assets/assets%2Ftask_01jw0w7ywzfakvxxe2g1pmc49x%2F1748081423_img_1.webp?st=2025-05-24T08%3A34%3A29Z&se=2025-05-30T09%3A34%3A29Z&sks=b&skt=2025-05-24T08%3A34%3A29Z&ske=2025-05-30T09%3A34%3A29Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=3d249c53-07fa-4ba4-9b65-0bf8eb4ea46a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=zQdKGJmW51tRQzqIueB09gMu%2FWf3BjEnqG8hM3YuJa4%3D&az=oaivgprodscus",
    title: "Advanced Teaching Methods",
    description: "Using modern pedagogical approaches to enhance understanding"
  },
  {
    image: "https://videos.openai.com/vg-assets/assets%2Ftask_01jw0vvar7esnr9htd0avc65b1%2F1748080972_img_2.webp?st=2025-05-24T08%3A14%3A28Z&se=2025-05-30T09%3A14%3A28Z&sks=b&skt=2025-05-24T08%3A14%3A28Z&ske=2025-05-30T09%3A14%3A28Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=3d249c53-07fa-4ba4-9b65-0bf8eb4ea46a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=1lGx%2FcKSh87KRDFgMHcBVQJLbG46T5LKOP3N6ezACGg%3D&az=oaivgprodscus",
    title: "Focused Environment",
    description: "Creating the perfect setting for academic growth and development"
  }
];

const WorkShowcase: React.FC = React.memo(() => {
  const handleBookClass = useCallback(() => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSd6ZEd1ASrDU65ypNz_BwEkPNG8nK1NViIGkC2kd_XPzZStow/viewform?usp=sharing', '_blank');
  }, []);

  const handleWatchVideo = useCallback(() => {
    window.open('https://drive.google.com/file/d/1K5l8nziszocoxTu3vQH5nnGLNxk9eLg_/view?usp=sharing', '_blank');
  }, []);

  return (
    <section className="section-padding bg-gradient-to-b from-gradechamp-yellow/20 to-white">
      <div className="content-wrapper">
        <h2 className="section-title text-center">How GradeChamp Works</h2>
        <p className="section-subtitle text-center">
          See how we're transforming education through personalized learning and expert mentorship
        </p>
        
        <div className="relative px-4 md:px-12 mb-16">
          <Carousel className="w-full">
            <CarouselContent>
              {slides.map((slide, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4 md:pl-6">
                  <Card className="h-full border border-gray-100 hover:border-gradechamp-purple/20 transition-all overflow-hidden rounded-xl">
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                        <div className="p-4 md:p-6 w-full">
                          <h3 className="text-xl font-bold text-white">{slide.title}</h3>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-4 md:p-6">
                      <p className="text-gray-600">{slide.description}</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="border-gradechamp-purple text-gradechamp-purple hover:bg-gradechamp-purple hover:text-white" />
            <CarouselNext className="border-gradechamp-purple text-gradechamp-purple hover:bg-gradechamp-purple hover:text-white" />
          </Carousel>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-12">
          <Button onClick={handleBookClass} className="btn-primary text-lg group relative overflow-hidden w-full md:w-auto">
            <span className="relative z-10 flex items-center">
              Book a Free Demo Class 
              <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
            </span>
          </Button>
          <Button 
            variant="outline" 
            onClick={handleWatchVideo} 
            className="border-2 border-gradechamp-purple rounded-full text-gradechamp-purple hover:bg-gradechamp-purple hover:text-white transition-colors shadow-sm text-lg flex items-center w-full md:w-auto justify-center"
          >
            <Play className="mr-2 h-4 w-4" />
            Watch How It Works
          </Button>
        </div>
      </div>
    </section>
  );
});

export default WorkShowcase;
