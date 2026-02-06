import { useState } from "react";
import { ChevronLeft, ChevronRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

import kalender01 from "@/assets/kalender/kalender-01.png";
import kalender02 from "@/assets/kalender/kalender-02.png";
import kalender03 from "@/assets/kalender/kalender-03.png";
import kalender04 from "@/assets/kalender/kalender-04.png";
import kalender05 from "@/assets/kalender/kalender-05.png";
import kalender06 from "@/assets/kalender/kalender-06.png";
import kalender07 from "@/assets/kalender/kalender-07.png";
import kalender08 from "@/assets/kalender/kalender-08.png";
import kalender09 from "@/assets/kalender/kalender-09.png";
import kalender10 from "@/assets/kalender/kalender-10.png";
import kalender11 from "@/assets/kalender/kalender-11.png";
import kalender12 from "@/assets/kalender/kalender-12.png";
import kalender13 from "@/assets/kalender/kalender-13.png";
import kalender14 from "@/assets/kalender/kalender-14.png";

const kalenderImages = [
  kalender01,
  kalender02,
  kalender03,
  kalender04,
  kalender05,
  kalender06,
  kalender07,
  kalender08,
  kalender09,
  kalender10,
  kalender11,
  kalender12,
  kalender13,
  kalender14,
];

export const KulinarischerKalender = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? kalenderImages.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === kalenderImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="mt-12">
      <h3 className="font-display text-3xl font-bold mb-6 text-center text-primary">
        Kulinarischer Kalender
      </h3>
      <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
        Entdecken Sie unsere saisonalen Spezialitäten und kulinarischen Höhepunkte das ganze Jahr über.
      </p>
      
      <div className="relative max-w-4xl mx-auto">
        {/* Main Image Display */}
        <div className="relative bg-white rounded-lg shadow-xl overflow-hidden">
          <img
            src={kalenderImages[currentIndex]}
            alt={`Kulinarischer Kalender Seite ${currentIndex + 1}`}
            className="w-full h-auto"
          />
          
          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
            aria-label="Vorheriges Bild"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
            aria-label="Nächstes Bild"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          
          {/* Page Indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded-full text-sm">
            {currentIndex + 1} / {kalenderImages.length}
          </div>
        </div>
        
        {/* Thumbnail Navigation */}
        <div className="flex gap-2 mt-4 overflow-x-auto pb-2 px-2 justify-center flex-wrap">
          {kalenderImages.map((img, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                index === currentIndex
                  ? "border-primary shadow-lg scale-105"
                  : "border-transparent opacity-60 hover:opacity-100"
              }`}
            >
              <img
                src={img}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
        
        {/* PDF Download Button */}
        <div className="text-center mt-6">
          <Button variant="outline" asChild>
            <a 
              href="/downloads/kulinarischer-kalender-2024.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Download className="mr-2 h-4 w-4" />
              Als PDF herunterladen
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};
