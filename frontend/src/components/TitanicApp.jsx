import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { Progress } from './ui/progress';
import { 
  Ship, 
  Waves, 
  Clock, 
  Users, 
  MapPin, 
  Camera, 
  Anchor,
  Compass,
  Star,
  Calendar,
  Info,
  Heart,
  Award,
  Navigation
} from 'lucide-react';
import { mockData } from '../data/mock';

export const TitanicApp = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [timelineProgress, setTimelineProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(scrolled / maxScroll * 100, 100);
      setTimelineProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50">
      {/* Navigation Header */}
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-blue-100 z-50">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Ship className="w-8 h-8 text-blue-700" />
              <h1 className="text-2xl font-bold text-slate-800">RMS Titanic</h1>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#historia" className="text-slate-600 hover:text-blue-700 transition-colors">Historia</a>
              <a href="#cronologia" className="text-slate-600 hover:text-blue-700 transition-colors">Cronología</a>
              <a href="#galeria" className="text-slate-600 hover:text-blue-700 transition-colors">Galería</a>
              <a href="#pasajeros" className="text-slate-600 hover:text-blue-700 transition-colors">Pasajeros</a>
              <a href="#especificaciones" className="text-slate-600 hover:text-blue-700 transition-colors">Especificaciones</a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-blue-700/10 to-slate-800/20"></div>
        <div className="absolute inset-0">
          <div className="ocean-waves"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <Anchor className="w-16 h-16 text-amber-600 mx-auto mb-6" />
            <h1 className="text-6xl md:text-8xl font-bold text-slate-800 mb-6">
              RMS TITANIC
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed">
              La historia del barco más famoso del mundo
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3">
                <Navigation className="w-5 h-5 mr-2" />
                Explorar Historia
              </Button>
              <Button variant="outline" size="lg" className="border-slate-300 text-slate-700 px-8 py-3">
                <Camera className="w-5 h-5 mr-2" />
                Ver Galería
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <Card className="bg-white/80 backdrop-blur-sm border-blue-100">
              <CardContent className="p-6 text-center">
                <Calendar className="w-12 h-12 text-blue-700 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-slate-800 mb-2">10 Abril 1912</h3>
                <p className="text-slate-600">Inicio del viaje inaugural</p>
              </CardContent>
            </Card>
            <Card className="bg-white/80 backdrop-blur-sm border-blue-100">
              <CardContent className="p-6 text-center">
                <Users className="w-12 h-12 text-blue-700 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-slate-800 mb-2">2,224 Personas</h3>
                <p className="text-slate-600">Pasajeros y tripulación</p>
              </CardContent>
            </Card>
            <Card className="bg-white/80 backdrop-blur-sm border-blue-100">
              <CardContent className="p-6 text-center">
                <MapPin className="w-12 h-12 text-blue-700 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Atlántico Norte</h3>
                <p className="text-slate-600">Ruta Southampton-Nueva York</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Historia Section */}
      <section id="historia" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Compass className="w-16 h-16 text-amber-600 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Historia del Titanic</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Descubre la fascinante historia del barco más legendario de todos los tiempos
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Card className="border-blue-100">
                <CardHeader>
                  <CardTitle className="flex items-center text-blue-700">
                    <Award className="w-6 h-6 mr-3" />
                    Construcción y Diseño
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 leading-relaxed">
                    {mockData.history.construction}
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-blue-100">
                <CardHeader>
                  <CardTitle className="flex items-center text-blue-700">
                    <Ship className="w-6 h-6 mr-3" />
                    El Viaje Inaugural
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 leading-relaxed">
                    {mockData.history.voyage}
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="border-amber-200 bg-amber-50/50">
                <CardHeader>
                  <CardTitle className="flex items-center text-amber-700">
                    <Info className="w-6 h-6 mr-3" />
                    Datos Fascinantes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {mockData.facts.map((fact, index) => (
                      <li key={index} className="flex items-start">
                        <Star className="w-5 h-5 text-amber-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700">{fact}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="cronologia" className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Clock className="w-16 h-16 text-blue-700 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Cronología del Desastre</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Los eventos clave de aquella fatídica noche del 14-15 de abril de 1912
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>
              <Progress 
                value={timelineProgress} 
                className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-transparent"
              />
              
              {mockData.timeline.map((event, index) => (
                <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="border-blue-100 hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <Badge className="bg-blue-100 text-blue-700 mb-3">{event.time}</Badge>
                        <h3 className="text-lg font-semibold text-slate-800 mb-2">{event.event}</h3>
                        <p className="text-slate-600">{event.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-700 rounded-full border-4 border-white shadow-lg"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galeria" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Camera className="w-16 h-16 text-amber-600 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Galería Histórica</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Imágenes auténticas que capturan la magnificencia y el legado del Titanic
            </p>
          </div>

          <Tabs defaultValue="exterior" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-4 bg-slate-100">
              <TabsTrigger value="exterior">Exterior</TabsTrigger>
              <TabsTrigger value="interior">Interior</TabsTrigger>
              <TabsTrigger value="construccion">Construcción</TabsTrigger>
              <TabsTrigger value="rescate">Rescate</TabsTrigger>
            </TabsList>
            
            {Object.entries(mockData.gallery).map(([category, images]) => (
              <TabsContent key={category} value={category} className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {images.map((image, index) => (
                    <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow group">
                      <div className="aspect-video bg-slate-200 flex items-center justify-center">
                        <Camera className="w-12 h-12 text-slate-400" />
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-semibold text-slate-800 mb-2">{image.title}</h3>
                        <p className="text-sm text-slate-600">{image.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <Ship className="w-8 h-8 text-blue-400" />
                <h3 className="text-2xl font-bold">RMS Titanic</h3>
              </div>
              <p className="text-slate-300 leading-relaxed">
                Preservando la memoria del Titanic y honrando a todos aquellos que viajaron en su viaje inaugural.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Navegación</h4>
              <ul className="space-y-2">
                <li><a href="#historia" className="text-slate-300 hover:text-blue-400 transition-colors">Historia</a></li>
                <li><a href="#cronologia" className="text-slate-300 hover:text-blue-400 transition-colors">Cronología</a></li>
                <li><a href="#galeria" className="text-slate-300 hover:text-blue-400 transition-colors">Galería</a></li>
                <li><a href="#pasajeros" className="text-slate-300 hover:text-blue-400 transition-colors">Pasajeros</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Información</h4>
              <ul className="space-y-2">
                <li className="text-slate-300">Southampton - Nueva York</li>
                <li className="text-slate-300">10-15 Abril 1912</li>
                <li className="text-slate-300">2,224 Almas a bordo</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-8 text-center">
            <p className="text-slate-400">
              © 2024 RMS Titanic Memorial. En memoria de todos los que navegaron.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};