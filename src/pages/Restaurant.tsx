import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { UtensilsCrossed, Award, Download, Wine } from "lucide-react";
import restaurantImage from "@/assets/bachus-lounge.jpg";
import foodImage from "@/assets/kulinarischer-kalender.jpg";
import bachusLogo from "@/assets/bachus-lounge-logo.jpg";

const Restaurant = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden mt-20">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${restaurantImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/85 to-primary/60" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto text-primary-foreground">
          <UtensilsCrossed className="h-16 w-16 mx-auto mb-6" />
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">
            Restaurant
          </h1>
          <p className="text-xl md:text-2xl font-light">
            Regionale Köstlichkeiten in gemütlicher Atmosphäre
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="font-display text-4xl font-bold mb-6 text-primary">
                Kulinarische Genüsse
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Im Restaurant Alpenblick verwöhnen wir Sie mit traditioneller österreichischer Küche 
                  und regionalen Spezialitäten. Unsere Küche legt großen Wert auf frische, saisonale 
                  Zutaten aus der Region.
                </p>
                <p>
                  Genießen Sie klassische Gerichte wie Wiener Schnitzel, Tafelspitz und hausgemachte 
                  Knödel in unserem gemütlichen Gastraum mit rustikalem Ambiente und herrlichem Ausblick.
                </p>
                <p>
                  Für die Verwendung von Produkten aus umliegenden Regionen bzw. aus Österreich wurden 
                  wir mit dem <strong className="text-foreground">AMA-Gastrosiegel</strong> ausgezeichnet!
                </p>
              </div>
              
              <div className="mt-8 p-6 bg-accent/10 rounded-lg border-2 border-accent/20">
                <div className="flex items-center mb-4">
                  <Award className="h-8 w-8 text-accent mr-3" />
                  <h3 className="font-display text-xl font-semibold">AMA-Gastrosiegel</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Das AMA-Gastrosiegel garantiert höchste Qualität und Herkunft unserer Produkte. 
                  Wir sind stolz auf diese Auszeichnung für regionale Qualität.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={foodImage} 
                alt="Traditionelle österreichische Küche" 
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Opening Hours Section */}
          <Card className="p-8 bg-muted/30">
            <h3 className="font-display text-2xl font-bold mb-6 text-center text-primary">
              Öffnungszeiten Restaurant
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <h4 className="font-semibold text-lg mb-3">Restaurant</h4>
                <div className="space-y-2 text-muted-foreground">
                  <p>Montag, Dienstag, Mittwoch, Freitag</p>
                  <p className="font-semibold text-foreground">16:00 - 22:00 Uhr</p>
                  <p className="mt-4">Samstag</p>
                  <p className="font-semibold text-foreground">11:00 - 22:00 Uhr</p>
                  <p className="text-sm mt-4 text-accent">Küche bis 21:00 Uhr geöffnet</p>
                </div>
              </div>
              
              <div className="text-center">
                <h4 className="font-semibold text-lg mb-3">Frühstück</h4>
                <div className="space-y-2 text-muted-foreground">
                  <p>Montag - Freitag</p>
                  <p className="font-semibold text-foreground">ab 6:30 Uhr</p>
                  <p className="mt-4">Samstag - Sonntag</p>
                  <p className="font-semibold text-foreground">ab 7:30 Uhr</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Video Section */}
          <div className="mt-12">
            <h3 className="font-display text-3xl font-bold mb-6 text-center text-primary">
              Unser Gasthof im Video
            </h3>
            <div className="max-w-4xl mx-auto">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg shadow-xl"
                  src="https://www.youtube.com/embed/V8r23RIFiK8"
                  title="Gasthof Alpenblick Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>

          {/* Menu Download Section */}
          <div className="mt-12 text-center">
            <h3 className="font-display text-3xl font-bold mb-6 text-primary">
              Unsere Speisekarte
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Entdecken Sie unsere vielfältige Auswahl an traditionellen österreichischen Gerichten 
              und regionalen Spezialitäten.
            </p>
            <Button size="lg" variant="default" className="bg-primary hover:bg-primary/90" asChild>
              <a href="https://www.gasthof-alpenblick.at/downloads/Speisekarte_GHAlpenblick.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-5 w-5" />
                Speisekarte herunterladen (PDF)
              </a>
            </Button>
          </div>

          {/* Bachus-Lounge Section */}
          <div className="mt-16 bg-secondary text-secondary-foreground rounded-lg p-12">
            <div className="flex flex-col items-center text-center">
              <img 
                src={bachusLogo} 
                alt="Bachus-Lounge Logo" 
                className="h-32 md:h-40 mb-8"
              />
              <h3 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Bachus-Lounge
              </h3>
              <p className="text-xl mb-6 italic">
                "Die Weinbar & Vinothek"
              </p>
              <div className="max-w-3xl space-y-4 text-lg leading-relaxed">
                <p>
                  Genießen Sie im modernem Ambiente beste österreichische Weine.
                </p>
                <p>
                  Wir bieten unsere Topweine auch glasweise zum Verkosten oder auch in Zusammenarbeit 
                  mit unseren Winzer und Lieferanten auch für Ihre Vinothek oder Ihr Fest zu den 
                  Abhofpreisen der Winzern an!!
                </p>
              </div>
              <Wine className="h-12 w-12 mt-8 text-accent" />
            </div>
          </div>

          {/* Reservation CTA */}
          <div className="mt-16 bg-primary text-primary-foreground rounded-lg p-12 text-center">
            <h3 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Tischreservierung empfohlen
            </h3>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Sichern Sie sich Ihren Platz und genießen Sie unsere kulinarischen Köstlichkeiten. 
              Abholung ist von 16:00 - 21:00 Uhr möglich.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <a href="tel:+4372592552">
                  Jetzt anrufen: 07259/2552
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

export default Restaurant;
