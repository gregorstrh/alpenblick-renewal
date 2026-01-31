import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Download, Mail, Phone } from "lucide-react";

const Links = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden mt-20 bg-primary">
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto text-primary-foreground">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">
            Links & Downloads
          </h1>
          <p className="text-xl md:text-2xl font-light">
            Nützliche Informationen und Partner
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Partner Section */}
          <div className="mb-16">
            <h2 className="font-display text-3xl font-bold mb-8 text-primary text-center">
              Unsere Partner
            </h2>
            <div className="space-y-6">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-display text-xl font-semibold mb-2">
                      Rind & Schwein - gourmetfein
                    </h3>
                    <p className="text-muted-foreground mb-3">
                      Guter Geschmack. Gutes Gewissen.
                    </p>
                  </div>
                  <ExternalLink className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                </div>
                <Button 
                  variant="outline" 
                  asChild 
                  className="mt-3"
                >
                  <a href="https://www.gourmetfein.at" target="_blank" rel="noopener noreferrer">
                    www.gourmetfein.at
                  </a>
                </Button>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-display text-xl font-semibold mb-2">
                      Edelpute
                    </h3>
                    <p className="text-muted-foreground mb-3">
                      Pöttersdorfer Edelpute aus Österreich
                    </p>
                  </div>
                  <ExternalLink className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                </div>
                <Button 
                  variant="outline" 
                  asChild 
                  className="mt-3"
                >
                  <a href="https://www.edelpute.at" target="_blank" rel="noopener noreferrer">
                    www.edelpute.at
                  </a>
                </Button>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-display text-xl font-semibold mb-2">
                      Huhn - Tschiltsch
                    </h3>
                    <p className="text-muted-foreground mb-3">
                      wir machen's besser
                    </p>
                  </div>
                  <ExternalLink className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                </div>
                <Button 
                  variant="outline" 
                  asChild 
                  className="mt-3"
                >
                  <a href="https://www.tschiltsch.at" target="_blank" rel="noopener noreferrer">
                    www.tschiltsch.at
                  </a>
                </Button>
              </Card>
            </div>
          </div>

          {/* Downloads Section */}
          <div className="mb-16">
            <h2 className="font-display text-3xl font-bold mb-8 text-primary text-center">
              Downloads
            </h2>
            <div className="space-y-4">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Download className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Kulinarischer Kalender Gasthof Alpenblick</h3>
                      <p className="text-sm text-muted-foreground">PDF Dokument</p>
                    </div>
                  </div>
                  <Button variant="default" asChild className="bg-primary hover:bg-primary/90">
                    <a href="/downloads/2014_kulinarischerKalender_GHAlpenblick.pdf" target="_blank" rel="noopener noreferrer">
                      Download
                    </a>
                  </Button>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Download className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Speisekarte</h3>
                      <p className="text-sm text-muted-foreground">PDF Dokument</p>
                    </div>
                  </div>
                  <Button variant="default" asChild className="bg-primary hover:bg-primary/90">
                    <a href="/downloads/Speisekarte_GHAlpenblick.pdf" target="_blank" rel="noopener noreferrer">
                      Download
                    </a>
                  </Button>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Download className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">AMA-Genusswirt Zertifikat</h3>
                      <p className="text-sm text-muted-foreground">PDF Dokument</p>
                    </div>
                  </div>
                  <Button variant="default" asChild className="bg-primary hover:bg-primary/90">
                    <a href="/downloads/AMA_Genusswirt_GH_Alpenblick.pdf" target="_blank" rel="noopener noreferrer">
                      Download
                    </a>
                  </Button>
                </div>
              </Card>
            </div>
          </div>

          {/* Daily Menu Info */}
          <Card className="p-8 bg-muted/30 text-center">
            <h3 className="font-display text-2xl font-bold mb-4 text-primary">
              Aktuelle Tageskarte
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Die aktuelle Tageskarte senden wir Ihnen auf Anfrage auch gerne per Mail oder Fax zu!
              Rufen Sie uns an oder schicken Sie uns ein kurzes E-Mail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="default" size="lg" asChild className="bg-primary hover:bg-primary/90">
                <a href="tel:+4372592552">
                  <Phone className="mr-2 h-5 w-5" />
                  07259/2552
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="mailto:office@gasthof-alpenblick.at">
                  <Mail className="mr-2 h-5 w-5" />
                  E-Mail senden
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Links;
