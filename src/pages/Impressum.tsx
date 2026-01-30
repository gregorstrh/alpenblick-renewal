import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Phone, Mail, FileText } from "lucide-react";

const Impressum = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden mt-20 bg-primary">
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto text-primary-foreground">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">
            Impressum
          </h1>
          <p className="text-xl md:text-2xl font-light">
            Rechtliche Informationen
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8">
            <div className="space-y-8">
              {/* Company Info */}
              <div>
                <h2 className="font-display text-2xl font-bold mb-4 text-primary">
                  Betreiber
                </h2>
                <div className="space-y-2 text-foreground">
                  <p className="font-semibold text-lg">Markus Moucka</p>
                  <p>Gasthof Alpenblick</p>
                  <p>Frauenhofenstraße 23</p>
                  <p>A-4523 Sierning/Neuzeug</p>
                </div>
              </div>

              {/* Contact */}
              <div>
                <h2 className="font-display text-2xl font-bold mb-4 text-primary">
                  Kontakt
                </h2>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <a href="tel:+4372592552" className="hover:text-primary transition-colors">
                      +43 (0) 7259 / 2552
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FileText className="h-5 w-5 text-primary" />
                    <span>Fax: +43 (0) 7259 / 2552 40</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <a href="mailto:office@gasthof-alpenblick.at" className="hover:text-primary transition-colors">
                      office@gasthof-alpenblick.at
                    </a>
                  </div>
                </div>
              </div>

              {/* Legal Info */}
              <div>
                <h2 className="font-display text-2xl font-bold mb-4 text-primary">
                  Rechtliche Angaben
                </h2>
                <div className="space-y-2 text-foreground">
                  <p><span className="font-medium">UID-Nr:</span> ATU 6389 8633</p>
                  <p><span className="font-medium">Gerichtsstand:</span> Steyr</p>
                </div>
              </div>

              {/* Photos */}
              <div>
                <h2 className="font-display text-2xl font-bold mb-4 text-primary">
                  Bildnachweis
                </h2>
                <p className="text-muted-foreground">Fotos: fotolia.com</p>
              </div>

              {/* Copyright */}
              <div>
                <h2 className="font-display text-2xl font-bold mb-4 text-primary">
                  Copyright
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Alle Daten dieser Website sind urheberrechtlich geschützt. Jede Bearbeitung, 
                  Vervielfältigung, Verbreitung und/oder öffentliche Wiedergabe unabhängig vom 
                  verwendeten Medium stellt einen Urheberrechtsverstoß dar. Für Freigaben wenden 
                  Sie sich bitte an{" "}
                  <a href="mailto:office@gasthof-alpenblick.at" className="text-primary hover:underline">
                    office@gasthof-alpenblick.at
                  </a>
                </p>
              </div>

              {/* Disclaimer */}
              <div>
                <h2 className="font-display text-2xl font-bold mb-4 text-primary">
                  Haftungsausschluss
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die 
                  Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich 
                  deren Betreiber verantwortlich.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Impressum;
