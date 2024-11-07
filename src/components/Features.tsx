import React from 'react';
import { Zap, Shield, Smartphone, Globe } from 'lucide-react';

const features = [
  {
    icon: <Zap className="h-6 w-6 text-indigo-600" />,
    title: 'Rápido y Eficiente',
    description: 'Optimizado para ofrecer la mejor experiencia de usuario con tiempos de carga mínimos.'
  },
  {
    icon: <Shield className="h-6 w-6 text-indigo-600" />,
    title: 'Seguro',
    description: 'Implementamos las últimas medidas de seguridad para proteger tu información.'
  },
  {
    icon: <Smartphone className="h-6 w-6 text-indigo-600" />,
    title: 'Responsive',
    description: 'Diseño adaptable que funciona perfectamente en todos los dispositivos.'
  },
  {
    icon: <Globe className="h-6 w-6 text-indigo-600" />,
    title: 'Global',
    description: 'Accesible desde cualquier parte del mundo, en cualquier momento.'
  }
];

export default function Features() {
  return (
    <div id="caracteristicas" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Características Principales
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Descubre todo lo que podemos ofrecerte
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="absolute -top-4 left-6 bg-indigo-100 rounded-lg p-3">
                {feature.icon}
              </div>
              <h3 className="mt-8 text-xl font-medium text-gray-900">{feature.title}</h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}