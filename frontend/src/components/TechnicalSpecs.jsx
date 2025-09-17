import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { 
  Ruler, 
  Weight, 
  Zap, 
  Users, 
  Ship, 
  Gauge,
  Anchor,
  Cog
} from 'lucide-react';
import { mockData } from '../data/mock';

export const TechnicalSpecs = () => {
  return (
    <section id="especificaciones" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Cog className="w-16 h-16 text-slate-700 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Especificaciones Técnicas</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Los impresionantes datos técnicos que hicieron del Titanic una maravilla de la ingeniería
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Dimensiones */}
          <Card className="border-blue-200 hover:shadow-xl transition-shadow">
            <CardHeader className="text-center pb-4">
              <Ruler className="w-12 h-12 text-blue-700 mx-auto mb-4" />
              <CardTitle className="text-2xl text-slate-800">Dimensiones</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {Object.entries(mockData.specifications.dimensions).map(([key, value], index) => (
                <div key={index} className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                  <span className="font-medium text-slate-700 capitalize">
                    {key.replace('_', ' ')}:
                  </span>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                    {value}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Capacidad */}
          <Card className="border-amber-200 hover:shadow-xl transition-shadow">
            <CardHeader className="text-center pb-4">
              <Users className="w-12 h-12 text-amber-600 mx-auto mb-4" />
              <CardTitle className="text-2xl text-slate-800">Capacidad</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {Object.entries(mockData.specifications.capacity).map(([key, value], index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-slate-700 capitalize">
                      {key.replace('_', ' ')}:
                    </span>
                    <Badge variant="secondary" className="bg-amber-100 text-amber-700">
                      {value}
                    </Badge>
                  </div>
                  {key === 'lifeboat_capacity' && (
                    <div className="space-y-1">
                      <Progress value={52} className="h-2" />
                      <p className="text-xs text-slate-500">Solo 52% de la capacidad total</p>
                    </div>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Rendimiento */}
          <Card className="border-slate-300 hover:shadow-xl transition-shadow">
            <CardHeader className="text-center pb-4">
              <Gauge className="w-12 h-12 text-slate-700 mx-auto mb-4" />
              <CardTitle className="text-2xl text-slate-800">Rendimiento</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {Object.entries(mockData.specifications.performance).map(([key, value], index) => (
                <div key={index} className="flex justify-between items-center p-3 bg-slate-100 rounded-lg">
                  <span className="font-medium text-slate-700 capitalize">
                    {key.replace('_', ' ')}:
                  </span>
                  <Badge variant="secondary" className="bg-slate-200 text-slate-700">
                    {value}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Comparación Visual */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
          <h3 className="text-2xl font-bold text-center text-slate-800 mb-8">Comparación de Tamaño</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Ship className="w-8 h-8 text-blue-700" />
              </div>
              <h4 className="font-semibold text-slate-800 mb-2">Titanic</h4>
              <p className="text-2xl font-bold text-blue-700">269m</p>
              <Progress value={100} className="mt-2 h-2" />
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Ship className="w-8 h-8 text-green-700" />
              </div>
              <h4 className="font-semibold text-slate-800 mb-2">Estadio de Fútbol</h4>
              <p className="text-2xl font-bold text-green-700">105m</p>
              <Progress value={39} className="mt-2 h-2" />
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Ship className="w-8 h-8 text-amber-700" />
              </div>
              <h4 className="font-semibold text-slate-800 mb-2">Torre Eiffel</h4>
              <p className="text-2xl font-bold text-amber-700">330m</p>
              <Progress value={122} className="mt-2 h-2" />
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Anchor className="w-8 h-8 text-purple-700" />
              </div>
              <h4 className="font-semibold text-slate-800 mb-2">Ancla del Titanic</h4>
              <p className="text-2xl font-bold text-purple-700">15.5 ton</p>
              <p className="text-sm text-slate-600">Peso récord</p>
            </div>
          </div>
        </div>

        {/* Datos Adicionales */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
            <CardContent className="p-6 text-center">
              <Weight className="w-12 h-12 text-blue-700 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Peso del Acero</h3>
              <p className="text-3xl font-bold text-blue-700 mb-2">26,000 ton</p>
              <p className="text-slate-600">Acero utilizado en construcción</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-amber-50 to-amber-100 border-amber-200">
            <CardContent className="p-6 text-center">
              <Zap className="w-12 h-12 text-amber-700 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Electricidad</h3>
              <p className="text-3xl font-bold text-amber-700 mb-2">10,000</p>
              <p className="text-slate-600">Bombillas eléctricas a bordo</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-slate-50 to-slate-100 border-slate-200">
            <CardContent className="p-6 text-center">
              <Ship className="w-12 h-12 text-slate-700 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Construcción</h3>
              <p className="text-3xl font-bold text-slate-700 mb-2">3 años</p>
              <p className="text-slate-600">Tiempo de construcción</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};