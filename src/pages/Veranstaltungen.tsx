import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, Users, Utensils, PartyPopper, Phone } from "lucide-react";
import foodImage from "@/assets/kulinarischer-kalender.jpg";
import restaurantImage from "@/assets/veranstaltungen-card.jpg";

const Veranstaltungen = () => {
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
          <Calendar className="h-16 w-16 mx-auto mb-6" />
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">
            Veranstaltungen
          </h1>
          <p className="text-xl md:text-2xl font-light">
            Feiern Sie Ihre besonderen Momente bei uns
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Introduction */}
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold mb-6 text-primary">
              Ihr Event im Alpenblick
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Der Gasthof Alpenblick ist der ideale Ort für Ihre Feierlichkeiten. 
              Ob Familienfeier, Firmenveranstaltung oder privates Fest – wir sorgen für den perfekten Rahmen 
              und kulinarischen Genuss.
            </p>
          </div>

          {/* Event Types Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card className="p-8 hover:shadow-xl transition-shadow">
              <PartyPopper className="h-12 w-12 text-primary mb-4" />
              <h3 className="font-display text-2xl font-bold mb-3 text-primary">Familienfeiern</h3>
              <p className="text-muted-foreground mb-4">
                Geburtstage, Taufen, Hochzeiten oder Jubiläen – wir gestalten Ihre Familienfeier 
                zu einem unvergesslichen Erlebnis mit persönlicher Note und kulinarischen Highlights.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  <span>Individuelle Menügestaltung</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  <span>Gemütliche Räumlichkeiten</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  <span>Persönliche Betreuung</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-shadow">
              <Users className="h-12 w-12 text-primary mb-4" />
              <h3 className="font-display text-2xl font-bold mb-3 text-primary">Firmenveranstaltungen</h3>
              <p className="text-muted-foreground mb-4">
                Geschäftsessen, Meetings oder Firmenfeiern in professionellem Ambiente. 
                Wir bieten Ihnen den idealen Rahmen für geschäftliche und gesellige Zusammenkünfte.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  <span>Professioneller Service</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  <span>Flexible Raumgestaltung</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  <span>Business-Lunch-Menüs</span>
                </li>
              </ul>
            </Card>
          </div>

          {/* Catering Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="relative order-2 lg:order-1">
              <img 
                src={foodImage} 
                alt="Catering vom Gasthof Alpenblick" 
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
            </div>
            
            <div className="order-1 lg:order-2">
              <Utensils className="h-12 w-12 text-primary mb-4" />
              <h3 className="font-display text-3xl font-bold mb-6 text-primary">
                Catering & More
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Unser Catering-Service bringt die Qualität und den Geschmack des Gasthof Alpenblick 
                  direkt zu Ihnen. Perfekt für Veranstaltungen an Ihrem Wunschort.
                </p>
                <p>
                  Wir bieten maßgeschneiderte Lösungen für:
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start">
                    <span className="text-accent mr-2 mt-1">•</span>
                    <span>Private Feiern zu Hause</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2 mt-1">•</span>
                    <span>Firmenmeetings und Events</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2 mt-1">•</span>
                    <span>Buffets und Flying Buffets</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2 mt-1">•</span>
                    <span>Menüs nach Ihren Wünschen</span>
                  </li>
                </ul>
                <p className="text-foreground font-medium mt-6">
                  Kontaktieren Sie uns für ein individuelles Angebot!
                </p>
              </div>
            </div>
          </div>

          {/* Features */}
          <Card className="p-8 bg-muted/30 mb-12">
            <h3 className="font-display text-2xl font-bold mb-8 text-center text-primary">
              Unser Service für Ihre Veranstaltung
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Utensils className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">Individuelle Menüs</h4>
                <p className="text-sm text-muted-foreground">
                  Zusammenstellung nach Ihren Wünschen und Vorlieben
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">Persönliche Beratung</h4>
                <p className="text-sm text-muted-foreground">
                  Wir planen gemeinsam mit Ihnen Ihre perfekte Feier
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <PartyPopper className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">Rundum-Service</h4>
                <p className="text-sm text-muted-foreground">
                  Von der Planung bis zur Durchführung – alles aus einer Hand
                </p>
              </div>
            </div>
          </Card>

          {/* Contact CTA */}
          <div className="bg-primary text-primary-foreground rounded-lg p-12 text-center">
            <h3 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Planen Sie Ihre Veranstaltung
            </h3>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch. 
              Wir freuen uns darauf, Ihre Feier unvergesslich zu machen!
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
                <a href="mailto:office@gasthof-alpenblick.at">
                  E-Mail schreiben
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

export default Veranstaltungen;
