
import React, { useState } from 'react';
import Header from '../components/Header';
import FeaturedCarousel from '../components/FeaturedCarousel';
import CategoryBar from '../components/CategoryBar';
import MenuGrid from '../components/MenuGrid';
import { categories, menuItems } from '../data/menuData';

const Index = () => {
  const [activeCategory, setActiveCategory] = useState<string>(categories[0]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      
      <main className="flex-grow">
        <FeaturedCarousel />
        
        <CategoryBar 
          categories={categories} 
          activeCategory={activeCategory} 
          onCategoryChange={setActiveCategory} 
        />
        
        <MenuGrid 
          items={menuItems} 
          currentCategory={activeCategory} 
        />
      </main>
      
      <footer className="bg-wine py-4 text-center text-white text-sm">
        <p>&copy; {new Date().getFullYear()} Cardápio Desk - Elegant Digital Menu Solution</p>
      </footer>
    </div>
  );
};

export default Index;
