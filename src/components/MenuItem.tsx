import React from 'react';
import { AspectRatio } from './ui/aspect-ratio';
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
const MenuItem: React.FC<MenuItemProps> = ({
  item
}) => {
  return <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-in">
      <div className="flex flex-col sm:flex-row">
        <div className="sm:w-1/3">
          <AspectRatio ratio={4 / 3} className="h-full">
            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
          </AspectRatio>
        </div>
        <div className="p-4 flex flex-col justify-between sm:w-2/3">
          <div>
            <h3 className="font-cursive text-lg font-semibold">{item.name}</h3>
            <p className="text-gray-600 text-sm mt-1 line-clamp-2">
              {item.description}
            </p>
          </div>
          <div className="mt-3 self-end">
            <span className="text-wine font-semibold text-xl">${item.price.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>;
};
export default MenuItem;