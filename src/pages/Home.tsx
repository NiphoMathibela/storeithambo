import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FeaturedProducts } from '../components/FeaturedProducts';
import { Footer } from '../components/Footer';

export const Home = () => {
  return (
    <>
      <div className="relative min-h-screen">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1549298916-b41d501d3772"
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white max-w-3xl"
          >
            <h1 className="text-6xl font-serif italic mb-6">Ithambo</h1>
            <p className="text-xl mb-8">
              Welcome to fashion fusion, your ultimate destination for all things stylish. A place where creativity knows no limits and innovation is the driving force behind every trend.
            </p>
            <Link
              to="/products"
              className="inline-flex items-center space-x-2 bg-white text-black px-8 py-3 rounded-md hover:bg-gray-100 transition-colors"
            >
              <span>Explore More</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </div>

      <FeaturedProducts />
    </>
  );
};