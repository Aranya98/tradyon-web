'use client'; 

import { useState } from 'react';

const Navigation = () => {
  const navItems = [
    "Overview",
    "Products",
    "Posts",
    "Certificates",
    "Representat",
  ];

  const [activeItem, setActiveItem] = useState("Products");

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <ul className="flex space-x-8 py-3">
          {navItems.map((item) => (
            <li key={item}>
              <button
                onClick={() => setActiveItem(item)}
                className={`text-sm font-medium pb-2 border-b-2 transition-colors duration-200
                  ${
                    activeItem === item
                      ? 'border-green-500 text-green-600'
                      : 'border-transparent text-gray-700 hover:text-gray-900'
                  }`}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
