'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import SearchBar from '../components/SearchBar';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gray-900 py-24">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/hero-bg.jpg"
            alt="Luxury cars"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8">
            Find Your Perfect Car in Qatar
          </h1>
          <p className="text-xl text-gray-300 mb-12">
            Browse through thousands of cars or list your own for sale
          </p>
          <SearchBar />
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Why Choose Mawater974?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Verified Sellers',
                description:
                  'All our sellers go through a strict verification process to ensure your safety.',
                icon: '🛡️',
              },
              {
                title: 'Wide Selection',
                description:
                  'Browse through thousands of cars from various brands and price ranges.',
                icon: '🚗',
              },
              {
                title: 'Easy Process',
                description:
                  'Simple and straightforward process to buy or sell your car.',
                icon: '✨',
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
