import React, { useState } from 'react'
import SubProducts from './SubProducts'

const ProductCard = () => {

    const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    { 
      id: 1,
      title: "Spices", 
      category: "Spices",
      subProducts: [
        { id: 1, name: "Black Pepper", description: "Vietnam, Brazil, India, Ecuador, Sri Lanka, Indonesia", image: "https://www.kmgrobust.com/graphics/a1.jpg" },
        { id: 2, name: "White Pepper", description: "Vietnam, China, Indonesia", image: "https://www.kmgrobust.com/graphics/a2.jpg" },
        { id: 3, name: "Cardamom", description: "India, Gautemala", image: "https://www.kmgrobust.com/graphics/a3.jpg" },
        { id: 4, name: "Cassia", description: "China, Indonesia", image: "https://www.kmgrobust.com/graphics/a4.jpg" },
        { id: 5, name: "Cinnamon", description: "Sri Lanka", image: "https://www.kmgrobust.com/graphics/a14.jpg" },
        { id: 6, name: "Cloves", description: "Madagascar, Comoros, Zanzibar, Brazil, Indonesia, Sri Lanka", image: "https://www.kmgrobust.com/graphics/a6.jpg" },
        { id: 7, name: "Nutmeg", description: "India, Sri Lanka, Indonesia", image: "	https://www.kmgrobust.com/graphics/nutmeg2.jpg" },
        { id: 8, name: "Nutmeg with Shell", description: "India, Sri Lanka, Indonesia", image: "https://www.kmgrobust.com/graphics/a8.jpg" },
        { id: 9, name: "Mace", description: "India, Indonesia", image: "https://www.kmgrobust.com/graphics/a9.jpg" }
      ]
    },
    { 
      id: 2,
      title: "Seeds", 
      category: "Agriculture",
      subProducts: [
        { id: 1, name: "Sesame Seeds", description: "Turkey", image:"https://www.kmgrobust.com/graphics/b1.jpg" },
        { id: 2, name: "Sunflower Seeds", description: "Egypt, Finland", image:"https://www.kmgrobust.com/graphics/b2.jpg" },
        { id: 3, name: "Celery Seeds", description: "India", image:"https://www.kmgrobust.com/graphics/b3.jpg" },
        { id: 4, name: "Coriander Seeds", description: "India, Bulgaria, Ukraine", image:"https://www.kmgrobust.com/graphics/b4.jpg" },
        { id: 5, name: "Coriander Seeds Split", description: "India", image:"https://www.kmgrobust.com/graphics/a18.jpg" },
        { id: 6, name: "Cumin Seeds", description: "Turkey, India", image:"https://www.kmgrobust.com/graphics/b5.jpg" },
        { id: 7, name: "Fennel Seeds", description: "India, Egypt", image:"	https://www.kmgrobust.com/graphics/b7.jpg" }
      ]
    },
    { 
      id: 3,
      title: "Herbs & Dehydrates", 
      category: "Herbs & Dehydrates",
      subProducts: [
        { id: 1, name: "Basil", description: "Turkey, Spain", image: "https://www.kmgrobust.com/graphics/basil.jpg" },
        { id: 2, name: "Oregano", description: "Turkey, Spain", image: "https://www.kmgrobust.com/graphics/regano.jpg" },
        { id: 3, name: "Rosemary", description: "Turkey, Spain", image: "https://www.kmgrobust.com/graphics/rosemary.jpg" },
        { id: 4, name: "Sage", description: "Turkey, Spain", image: "https://www.kmgrobust.com/graphics/sage.jpg" },
        { id: 5, name: "Bay leaves", description: "Turkey, India", image: "https://www.kmgrobust.com/graphics/bay.jpg" },
        { id: 6, name: "Tamarind Seedless", description: "India", image: "	https://www.kmgrobust.com/graphics/a13.jpg" }
      ]
    }
  ];

  return (
    <div>
           <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">

          {/* Products List - Left Side */}

          <div className="w-full md:w-1/4">
            <div className="bg-white rounded-lg shadow">
              <h2 className="p-4 font-bold text-lg border-b border-gray-100">
                Products
              </h2>
              <div className="divide-y divide-gray-100">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className={`p-4 cursor-pointer hover:bg-gray-50 transition-colors ${
                      selectedProduct?.id === product.id ? 'bg-blue-50' : ''
                    }`}
                    onClick={() => setSelectedProduct(product)}
                  >
                    <h3 className="font-medium text-gray-800">
                      {product.title}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* SubProducts - Right Side */}
          <div className="w-full md:w-3/4">
            <SubProducts product={selectedProduct} />
          </div>
        </div>
      </main> 
    </div>
  )
}

export default ProductCard
