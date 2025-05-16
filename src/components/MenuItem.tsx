
import React from 'react';

export interface MenuItemType {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  categoryId: string;
}

interface MenuItemProps {
  item: MenuItemType;
}

const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-in">
      <div className="aspect-square">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4 flex flex-col h-[140px]">
        <h3 className="font-cursive text-lg font-semibold">{item.name}</h3>
        <p className="text-gray-600 text-sm mt-1 line-clamp-2 flex-grow">
          {item.description}
        </p>
        <div className="mt-2 self-end">
          <span className="text-wine font-semibold">${item.price.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
