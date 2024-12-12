import React from 'react';
import { motion } from 'framer-motion';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { Plus } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { dispatch } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group relative bg-white rounded-lg overflow-hidden"
    >
      <div className="aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-medium">{product.name}</h3>
        <p className="text-gray-600">R{product.price.toFixed(2)}</p>
        
        <button
          onClick={() => dispatch({ type: 'ADD_TO_CART', payload: product })}
          className="mt-2 w-full bg-black text-white py-2 px-4 rounded-md flex items-center justify-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <Plus className="w-4 h-4" />
          <span>Add to Cart</span>
        </button>
      </div>
    </motion.div>
  );
};