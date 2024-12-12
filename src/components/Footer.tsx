import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-serif italic mb-4">Ithambo</h3>
            <p className="text-gray-600">
              Your ultimate destination for fashion and style.
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/products" className="text-gray-600 hover:text-black">Shop</Link></li>
              <li><Link to="/categories" className="text-gray-600 hover:text-black">Categories</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-black">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-black">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li><Link to="/shipping" className="text-gray-600 hover:text-black">Shipping Info</Link></li>
              <li><Link to="/returns" className="text-gray-600 hover:text-black">Returns</Link></li>
              <li><Link to="/faq" className="text-gray-600 hover:text-black">FAQ</Link></li>
              <li><Link to="/size-guide" className="text-gray-600 hover:text-black">Size Guide</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-black">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-black">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-black">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-black">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} Ithambo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};