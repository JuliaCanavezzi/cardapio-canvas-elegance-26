
import React from 'react';
import MenuItem, { MenuItemType } from './MenuItem';

interface MenuGridProps {
  items: MenuItemType[];
  currentCategory: string;
}

const MenuGrid: React.FC<MenuGridProps> = ({ items, currentCategory }) => {
  const filteredItems = currentCategory === 'All' 
    ? items 
    : items.filter(item => item.categoryId === currentCategory);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {filteredItems.map(item => (
        <MenuItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default MenuGrid;
