import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, UtensilsCrossed, Bed, Calendar, Award } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/bachus-lounge.jpg";
import restaurantImage from "@/assets/restaurant-card.jpg";
import zimmerImage from "@/assets/alpenblick-zimmer.jpg";
import foodImage from "@/assets/veranstaltungen-card.jpg";
import bachusLogo from "@/assets/bachus-lounge-logo-negativ.png";


const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden mt-20">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        </div>
        
        {/* Bachus Lounge Logo - Top Right */}
        <Link to="/restaurant" className="absolute top-6 right-6 z-20 animate-in fade-in duration-700 delay-150">
          <div className="bg-black/80 backdrop-blur-sm rounded-lg px-5 py-3 border border-white/10 shadow-lg hover:bg-black/90 transition-all duration-300 hover:scale-105">
            <img 
              src={bachusLogo} 
              alt="Bachus-Lounge Logo" 
              className="h-20 md:h-28"
            />
          </div>
        </Link>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto text-primary-foreground">
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-8 animate-in fade-in duration-700">
            Willkommen im<br />Gasthof Alpenblick
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in duration-700 delay-300">
            <Button size="lg" variant="secondary" asChild className="text-base">
              <a href="#tischreservierung">
                Tisch Reservieren
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <a href="/downloads/Speisekarte_GHAlpenblick.pdf" target="_blank" rel="noopener noreferrer">
                Speisekarte Ansehen
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Welcome Message */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-primary">
            Liebe Gäste des Alpenblicks
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
            Wir freuen uns, Sie bei uns begrüßen zu dürfen. Genießen Sie traditionelle österreichische Küche 
            mit regionalen Produkten in gemütlicher Atmosphäre. Familie Moucka heißt Sie herzlich willkommen!
          </p>
          <div className="inline-flex items-center justify-center p-4 bg-accent/10 rounded-lg border-2 border-accent/20">
            <Award className="h-8 w-8 text-accent mr-3" />
            <div className="text-left">
              <p className="font-semibold text-foreground">AMA-Gastrosiegel</p>
              <p className="text-sm text-muted-foreground">Ausgezeichnet für regionale Qualität</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Restaurant Card */}
            <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer">
              <Link to="/restaurant" className="block">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={restaurantImage} 
                    alt="Restaurant Alpenblick" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <UtensilsCrossed className="h-8 w-8 mb-2" />
                    <h3 className="font-display text-2xl font-bold">Restaurant</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground mb-4">
                    Regionale Köstlichkeiten und traditionelle österreichische Küche in gemütlicher Atmosphäre.
                  </p>
                  <span className="text-primary font-medium inline-flex items-center group-hover:gap-2 transition-all">
                    Mehr erfahren 
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </Card>

            {/* Zimmer Card */}
            <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer">
              <Link to="/zimmer" className="block">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={zimmerImage} 
                    alt="Zimmer Alpenblick" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <Bed className="h-8 w-8 mb-2" />
                    <h3 className="font-display text-2xl font-bold">Zimmer</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground mb-4">
                    Komfortable Zimmer für einen erholsamen Aufenthalt mit herrlichem Ausblick.
                  </p>
                  <span className="text-primary font-medium inline-flex items-center group-hover:gap-2 transition-all">
                    Mehr erfahren 
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </Card>

            {/* Veranstaltungen Card */}
            <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer">
              <Link to="/veranstaltungen" className="block">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={foodImage} 
                    alt="Veranstaltungen Alpenblick" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <Calendar className="h-8 w-8 mb-2" />
                    <h3 className="font-display text-2xl font-bold">Veranstaltungen</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground mb-4">
                    Feiern Sie Ihre besonderen Momente bei uns. Wir bieten auch Catering-Service.
                  </p>
                  <span className="text-primary font-medium inline-flex items-center group-hover:gap-2 transition-all">
                    Mehr erfahren 
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      <section id="tischreservierung" className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Wir bitten um Tischreservierung
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Sichern Sie sich Ihren Platz in unserem gemütlichen Restaurant.<br />
            Abholung ist von 16:00 - 21:00 Uhr möglich.
          </p>
          
          {/* Tablex Reservation Widget */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg mb-8">
            <iframe 
              src="https://tablexpro.at/4.0/index.php?txfe_gastronomie=48oonb8zvkl4eccczdwkhx49st" 
              width="100%" 
              height="600" 
              frameBorder="0"
              title="Tischreservierung"
              className="w-full"
            />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" variant="secondary" asChild className="text-base">
              <a href="tel:+4372592552">
                Anrufen: 07259/2552
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <a href="mailto:office@gasthof-alpenblick.at">
                E-Mail schreiben
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
