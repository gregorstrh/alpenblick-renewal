import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Bed, Wifi, Coffee, Tv, Phone } from "lucide-react";
import zimmerImage from "@/assets/alpenblick-zimmer.jpg";
import suiteImage from "@/assets/alpenblick-suite.jpg";

const Zimmer = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden mt-20">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${zimmerImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/85 to-primary/60" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto text-primary-foreground">
          <Bed className="h-16 w-16 mx-auto mb-6" />
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">
            Unsere Zimmer
          </h1>
          <p className="text-xl md:text-2xl font-light">
            Komfort und Erholung in alpiner Atmosphäre
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Introduction */}
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold mb-6 text-primary">
              Wohlfühlen im Alpenblick
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Unsere gemütlichen Zimmer bieten Ihnen den perfekten Rückzugsort nach einem erlebnisreichen Tag. 
              Genießen Sie die ruhige Lage, moderne Ausstattung und den herrlichen Ausblick auf die umliegende 
              Landschaft.
            </p>
          </div>

          {/* Amenities Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Wifi className="h-8 w-8 mx-auto mb-3 text-primary" />
              <h3 className="font-semibold mb-1">WLAN</h3>
              <p className="text-sm text-muted-foreground">Kostenlos</p>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Tv className="h-8 w-8 mx-auto mb-3 text-primary" />
              <h3 className="font-semibold mb-1">TV</h3>
              <p className="text-sm text-muted-foreground">Flachbildschirm</p>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Coffee className="h-8 w-8 mx-auto mb-3 text-primary" />
              <h3 className="font-semibold mb-1">Frühstück</h3>
              <p className="text-sm text-muted-foreground">Täglich frisch</p>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Bed className="h-8 w-8 mx-auto mb-3 text-primary" />
              <h3 className="font-semibold mb-1">Komfort</h3>
              <p className="text-sm text-muted-foreground">Gemütlich</p>
            </Card>
          </div>

          {/* Room Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="relative space-y-4">
              <img 
                src={zimmerImage} 
                alt="Zimmer im Gasthof Alpenblick" 
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
              <img 
                src={suiteImage} 
                alt="Suite im Gasthof Alpenblick" 
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
            </div>
            
            <div>
              <h3 className="font-display text-3xl font-bold mb-6 text-primary">
                Zimmerausstattung
              </h3>
              <div className="space-y-4 text-muted-foreground">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-accent mr-3 mt-1">✓</span>
                    <span>Komfortable Betten mit hochwertiger Bettwäsche</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-3 mt-1">✓</span>
                    <span>Modernes Badezimmer mit Dusche/WC</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-3 mt-1">✓</span>
                    <span>Flachbild-TV mit Satellitenempfang</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-3 mt-1">✓</span>
                    <span>Kostenloses WLAN</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-3 mt-1">✓</span>
                    <span>Schreibtisch und Sitzgelegenheit</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-3 mt-1">✓</span>
                    <span>Herrlicher Ausblick auf die Umgebung</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-3 mt-1">✓</span>
                    <span>Reichhaltiges Frühstücksbuffet inklusive</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Breakfast Info */}
          <Card className="p-8 bg-muted/30 mb-12">
            <div className="text-center max-w-3xl mx-auto">
              <Coffee className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="font-display text-2xl font-bold mb-4 text-primary">
                Frühstück im Alpenblick
              </h3>
              <p className="text-muted-foreground mb-4">
                Starten Sie Ihren Tag mit unserem reichhaltigen Frühstücksbuffet. 
                Wir bieten eine Auswahl an frischen, regionalen Produkten für einen genussvollen Start in den Tag.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="text-center">
                  <p className="font-semibold text-foreground mb-1">Montag - Freitag</p>
                  <p className="text-muted-foreground">ab 6:30 Uhr</p>
                </div>
                <div className="text-center">
                  <p className="font-semibold text-foreground mb-1">Samstag - Sonntag</p>
                  <p className="text-muted-foreground">ab 7:30 Uhr</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Booking CTA */}
          <div className="bg-primary text-primary-foreground rounded-lg p-12 text-center">
            <h3 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Zimmer anfragen
            </h3>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Kontaktieren Sie uns für Verfügbarkeiten und Preise. 
              Wir freuen uns auf Ihren Besuch!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <a href="tel:+4372592552">
                  <Phone className="mr-2 h-5 w-5" />
                  Jetzt anrufen: 07259/2552
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                asChild 
                className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <a href="/kontakt">
                  Kontaktformular
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Zimmer;
