
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const FeaturedCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Sample featured dishes - in a real app, this would come from a database
  const featuredDishes = [
    {
      id: 1,
      name: "Gourmet Steak",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80",
      description: "Premium cut with seasonal vegetables"
    },
    {
      id: 2,
      name: "Seafood Delight",
      image: "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&q=80",
      description: "Fresh catch of the day with lemon butter sauce"
    },
    {
      id: 3,
      name: "Signature Pasta",
      image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&q=80",
      description: "Handmade pasta with truffle cream sauce"
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === featuredDishes.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? featuredDishes.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full">
      <div className="overflow-hidden h-[280px] md:h-[400px]">
        <div 
          className="transition-all duration-500 ease-in-out flex h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {featuredDishes.map((dish) => (
            <div key={dish.id} className="min-w-full h-full relative">
              <div className="absolute inset-0 bg-black/10"></div>
              <img 
                src={dish.image} 
                alt={dish.name} 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent text-white">
                <h2 className="text-2xl font-cursive font-semibold">{dish.name}</h2>
                <p className="text-sm opacity-90">{dish.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation arrows */}
      <button 
        onClick={prevSlide} 
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full transition-colors"
      >
        <ChevronLeft size={24} />
      </button>
      <button 
        onClick={nextSlide} 
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full transition-colors"
      >
        <ChevronRight size={24} />
      </button>
      
      {/* Indicator dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {featuredDishes.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              currentIndex === index ? "bg-white scale-125" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedCarousel;
