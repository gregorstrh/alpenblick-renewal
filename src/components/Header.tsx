import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-alpenblick.jpg";

const navigation = [
  { name: "Startseite", href: "/" },
  { name: "Restaurant", href: "/restaurant" },
  { name: "Zimmer", href: "/zimmer" },
  { name: "Veranstaltungen", href: "/veranstaltungen" },
  { name: "Links", href: "/links" },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 w-full bg-white shadow-sm z-50 border-b border-border">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img src={logo} alt="Gasthof Alpenblick Logo" className="h-12 w-auto" />
            <span className="font-display text-xl font-semibold text-primary hidden sm:block">
              Gasthof Alpenblick
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === item.href
                    ? "text-primary border-b-2 border-primary pb-1"
                    : "text-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button variant="default" size="sm" asChild className="bg-primary hover:bg-primary/90">
              <a href="tel:+4372592552">
                <Phone className="mr-2 h-4 w-4" />
                Reservieren
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden rounded-md p-2 text-foreground hover:bg-muted"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-4 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  location.pathname === item.href
                    ? "bg-primary/10 text-primary"
                    : "text-foreground hover:bg-muted"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button variant="default" className="w-full mt-4 bg-primary hover:bg-primary/90" asChild>
              <a href="tel:+4372592552">
                <Phone className="mr-2 h-4 w-4" />
                Jetzt Reservieren
              </a>
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};
