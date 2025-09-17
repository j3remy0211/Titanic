import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Users, Heart, Star, Crown } from 'lucide-react';
import { mockData } from '../data/mock';

export const PassengerStories = () => {
  return (
    <section id="pasajeros" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Users className="w-16 h-16 text-blue-700 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Historias de Pasajeros</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Las historias humanas detrás de la tragedia: actos de heroísmo, amor y sacrificio
          </p>
        </div>

        <Tabs defaultValue="firstClass" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 bg-slate-100 mb-8">
            <TabsTrigger value="firstClass" className="text-base">
              <Crown className="w-5 h-5 mr-2" />
              Primera Clase
            </TabsTrigger>
            <TabsTrigger value="crew" className="text-base">
              <Star className="w-5 h-5 mr-2" />
              Tripulación
            </TabsTrigger>
          </TabsList>

          <TabsContent value="firstClass" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockData.passengers.firstClass.map((passenger, index) => (
                <Card key={index} className="border-amber-200 hover:shadow-xl transition-all duration-300 group">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-xl text-slate-800">{passenger.name}</CardTitle>
                      <Badge className={`${passenger.fate === 'Sobrevivió' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                        {passenger.fate}
                      </Badge>
                    </div>
                    <p className="text-slate-600">Edad: {passenger.age}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-start mb-4">
                      <Heart className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-slate-700 leading-relaxed">{passenger.story}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="crew" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {mockData.passengers.crew.map((member, index) => (
                <Card key={index} className="border-blue-200 hover:shadow-xl transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-xl text-slate-800">{member.name}</CardTitle>
                      <Badge className="bg-red-100 text-red-700">
                        {member.fate}
                      </Badge>
                    </div>
                    <p className="text-slate-600">Edad: {member.age}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-start">
                      <Star className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-slate-700 leading-relaxed text-lg">{member.story}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Statistics */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg border border-blue-100">
          <h3 className="text-2xl font-bold text-center text-slate-800 mb-8">Estadísticas de Supervivencia</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Crown className="w-10 h-10 text-amber-600" />
              </div>
              <h4 className="text-xl font-semibold text-slate-800 mb-2">Primera Clase</h4>
              <p className="text-3xl font-bold text-green-600 mb-1">62%</p>
              <p className="text-slate-600">Tasa de supervivencia</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold text-slate-800 mb-2">Segunda Clase</h4>
              <p className="text-3xl font-bold text-yellow-600 mb-1">41%</p>
              <p className="text-slate-600">Tasa de supervivencia</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-10 h-10 text-slate-600" />
              </div>
              <h4 className="text-xl font-semibold text-slate-800 mb-2">Tercera Clase</h4>
              <p className="text-3xl font-bold text-red-600 mb-1">24%</p>
              <p className="text-slate-600">Tasa de supervivencia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};