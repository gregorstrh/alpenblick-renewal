import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Kontakt</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p>Gasthof Alpenblick</p>
                  <p>Rohrach 8</p>
                  <p>4202 Kirchschlag bei Linz</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <a href="tel:+4372592552" className="hover:text-accent transition-colors">
                  07259/2552
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <a href="mailto:info@gasthof-alpenblick.at" className="hover:text-accent transition-colors">
                  info@gasthof-alpenblick.at
                </a>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Öffnungszeiten</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <div className="space-y-1">
                  <p className="font-medium">Restaurant:</p>
                  <p>MO/DI/MI/FR: 16:00 - 22:00 Uhr</p>
                  <p>SA: 11:00 - 22:00 Uhr</p>
                  <p className="text-xs opacity-90">Küche bis 21:00 Uhr</p>
                  <p className="font-medium mt-3">Frühstück:</p>
                  <p>MO-FR: ab 6:30 Uhr</p>
                  <p>SA/SO: ab 7:30 Uhr</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Navigation</h3>
            <nav className="space-y-2 text-sm">
              <Link to="/" className="block hover:text-accent transition-colors">
                Startseite
              </Link>
              <Link to="/restaurant" className="block hover:text-accent transition-colors">
                Restaurant
              </Link>
              <Link to="/zimmer" className="block hover:text-accent transition-colors">
                Zimmer
              </Link>
              <Link to="/veranstaltungen" className="block hover:text-accent transition-colors">
                Veranstaltungen
              </Link>
              <Link to="/links" className="block hover:text-accent transition-colors">
                Links
              </Link>
              <Link to="/kontakt" className="block hover:text-accent transition-colors">
                Kontakt
              </Link>
            </nav>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Gasthof Alpenblick - Familie Moucka. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};
