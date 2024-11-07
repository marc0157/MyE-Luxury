import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <div id="contacto" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Contáctanos
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Estamos aquí para ayudarte
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-6">Información de Contacto</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Phone className="text-rose-600" size={24} />
                <div>
                  <p className="font-medium">Teléfono</p>
                  <p className="text-gray-600">+1 234 567 890</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="text-rose-600" size={24} />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-gray-600">info@fashionstore.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="text-rose-600" size={24} />
                <div>
                  <p className="font-medium">Dirección</p>
                  <p className="text-gray-600">123 Calle Principal, Ciudad</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Clock className="text-rose-600" size={24} />
                <div>
                  <p className="font-medium">Horario</p>
                  <p className="text-gray-600">Lun - Sáb: 10:00 - 20:00</p>
                </div>
              </div>
            </div>
          </div>

          <form className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-6">Envíanos un mensaje</h3>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Nombre</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Mensaje</label>
                <textarea
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-rose-600 text-white px-4 py-2 rounded-lg hover:bg-rose-700 transition"
              >
                Enviar Mensaje
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}