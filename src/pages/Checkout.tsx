import React, { useState } from 'react';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { useCart } from '../context/CartContext';

export const Checkout = () => {
  const { state } = useCart();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate checkout process
    setTimeout(() => {
      setIsLoading(false);
      alert('Order placed successfully!');
    }, 2000);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-medium mb-8">Checkout</h1>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-white p-6 rounded-lg space-y-4">
          <h2 className="text-xl font-medium">Shipping Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input label="First Name" required />
            <Input label="Last Name" required />
            <Input label="Email" type="email" required className="md:col-span-2" />
            <Input label="Address" required className="md:col-span-2" />
            <Input label="City" required />
            <Input label="Postal Code" required />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg space-y-4">
          <h2 className="text-xl font-medium">Payment Information</h2>
          <div className="space-y-4">
            <Input label="Card Number" required />
            <div className="grid grid-cols-2 gap-4">
              <Input label="Expiry Date" placeholder="MM/YY" required />
              <Input label="CVV" required />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg">
          <div className="flex justify-between mb-4">
            <span className="font-medium">Total</span>
            <span className="font-medium">${state.total.toFixed(2)}</span>
          </div>
          <Button type="submit" className="w-full" isLoading={isLoading}>
            Place Order
          </Button>
        </div>
      </form>
    </div>
  );
};