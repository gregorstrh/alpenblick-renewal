import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Kontakt = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Nachricht gesendet!",
      description: "Vielen Dank für Ihre Nachricht. Wir melden uns bald bei Ihnen.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden mt-20 bg-primary">
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto text-primary-foreground">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">
            Kontakt
          </h1>
          <p className="text-xl md:text-2xl font-light">
            Wir freuen uns auf Ihre Nachricht
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="font-display text-3xl font-bold mb-8 text-primary">
                Kontaktinformationen
              </h2>
              
              <div className="space-y-6 mb-8">
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Adresse</h3>
                      <p className="text-muted-foreground">
                        Gasthof Alpenblick<br />
                        Frauenhofenstraße 23<br />
                        A-4523 Sierning/Neuzeug<br />
                        Österreich
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Telefon</h3>
                      <a 
                        href="tel:+4372592552" 
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        +43 7259 2552
                      </a>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">E-Mail</h3>
                      <a 
                        href="mailto:info@gasthof-alpenblick.at" 
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        info@gasthof-alpenblick.at
                      </a>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Öffnungszeiten</h3>
                      <div className="text-sm text-muted-foreground space-y-1">
                        <p><strong>Restaurant:</strong></p>
                        <p>MO/DI/MI/FR: 16:00 - 22:00 Uhr</p>
                        <p>SA: 11:00 - 22:00 Uhr</p>
                        <p className="text-xs opacity-80">Küche bis 21:00 Uhr</p>
                        <p className="pt-2"><strong>Frühstück:</strong></p>
                        <p>MO-FR: ab 6:30 Uhr</p>
                        <p>SA/SO: ab 7:30 Uhr</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="font-display text-3xl font-bold mb-8 text-primary">
                Schreiben Sie uns
              </h2>
              
              <Card className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ihr Name"
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">E-Mail *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="ihre@email.at"
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Telefon</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+43 ..."
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Nachricht *</Label>
                    <Textarea
                      id="message"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Ihre Nachricht an uns..."
                      className="mt-2 min-h-[150px]"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                    <Send className="mr-2 h-5 w-5" />
                    Nachricht senden
                  </Button>
                </form>
              </Card>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-16">
            <h2 className="font-display text-3xl font-bold mb-8 text-center text-primary">
              So finden Sie uns
            </h2>
            <Card className="overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2673.8!2d14.2911!3d48.0444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDAyJzM5LjgiTiAxNMKwMTcnMjguMCJF!5e0!3m2!1sde!2sat!4v1234567890"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Gasthof Alpenblick Standort"
              />
            </Card>
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-primary text-primary-foreground rounded-lg p-12 text-center">
            <h3 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Besuchen Sie uns
            </h3>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Wir freuen uns auf Ihren Besuch im Gasthof Alpenblick. 
              Familie Moucka heißt Sie herzlich willkommen!
            </p>
            <Button size="lg" variant="secondary" asChild>
              <a href="tel:+4372592552">
                <Phone className="mr-2 h-5 w-5" />
                Jetzt anrufen: 07259/2552
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Kontakt;
