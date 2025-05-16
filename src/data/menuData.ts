
import { MenuItemType } from '../components/MenuItem';

export const categories = ['All', 'Starters', 'Main Dishes', 'Seafood', 'Pasta', 'Desserts', 'Drinks'];

export const menuItems: MenuItemType[] = [
  {
    id: 1,
    name: 'Bruschetta',
    description: 'Toasted bread topped with fresh tomatoes, basil, and a drizzle of olive oil',
    price: 9.50,
    image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&q=80',
    categoryId: 'Starters'
  },
  {
    id: 2,
    name: 'Caprese Salad',
    description: 'Fresh mozzarella, tomatoes, and basil leaves with balsamic glaze',
    price: 12.00,
    image: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&q=80',
    categoryId: 'Starters'
  },
  {
    id: 3,
    name: 'Grilled Salmon',
    description: 'Fresh Atlantic salmon with lemon butter sauce and seasonal vegetables',
    price: 24.95,
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80',
    categoryId: 'Seafood'
  },
  {
    id: 4,
    name: 'Filet Mignon',
    description: 'Prime cut beef tenderloin with red wine reduction and truffle mashed potatoes',
    price: 35.95,
    image: 'https://images.unsplash.com/photo-1546964124-0cce460f38ef?auto=format&fit=crop&q=80',
    categoryId: 'Main Dishes'
  },
  {
    id: 5,
    name: 'Lobster Ravioli',
    description: 'Homemade pasta filled with lobster meat in a creamy tomato sauce',
    price: 28.50,
    image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a3479c?auto=format&fit=crop&q=80',
    categoryId: 'Pasta'
  },
  {
    id: 6,
    name: 'Chocolate Lava Cake',
    description: 'Warm chocolate cake with a molten center, served with vanilla ice cream',
    price: 12.00,
    image: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&q=80',
    categoryId: 'Desserts'
  },
  {
    id: 7,
    name: 'Shrimp Scampi',
    description: 'Jumbo shrimp sautéed in garlic butter and white wine, served over linguine',
    price: 22.95,
    image: 'https://images.unsplash.com/photo-1633504581786-316c8002b1b9?auto=format&fit=crop&q=80',
    categoryId: 'Seafood'
  },
  {
    id: 8,
    name: 'Classic Margherita Pizza',
    description: 'Thin crust pizza with San Marzano tomato sauce, fresh mozzarella, and basil',
    price: 18.00,
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&q=80',
    categoryId: 'Main Dishes'
  },
  {
    id: 9,
    name: 'Tiramisu',
    description: 'Traditional Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream',
    price: 10.50,
    image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&q=80',
    categoryId: 'Desserts'
  },
  {
    id: 10,
    name: 'Signature Martini',
    description: 'House specialty cocktail with premium vodka, elderflower, and fresh citrus',
    price: 14.00,
    image: 'https://images.unsplash.com/photo-1605270012917-bf357a1fae9e?auto=format&fit=crop&q=80',
    categoryId: 'Drinks'
  },
  {
    id: 11,
    name: 'Beef Carpaccio',
    description: 'Thinly sliced raw beef with arugula, capers, and parmesan shavings',
    price: 16.95,
    image: 'https://images.unsplash.com/photo-1533088942881-e10e830a9db9?auto=format&fit=crop&q=80',
    categoryId: 'Starters'
  },
  {
    id: 12,
    name: 'Fettuccine Alfredo',
    description: 'Fresh pasta with creamy parmesan sauce and grilled chicken',
    price: 19.50,
    image: 'https://images.unsplash.com/photo-1645112411341-6c4fd023882a?auto=format&fit=crop&q=80',
    categoryId: 'Pasta'
  }
];
