import React, { useState } from "react";
import Img1 from "../../assets/coffee1.png";
import Img2 from "../../assets/coffee2.png";
import Img3 from "../../assets/coffee3.png";
import Img4 from "../../assets/coffee4.png";
import Img5 from "../../assets/coffee5.png";
import Img6 from "../../assets/coffee6.png";
import Img7 from "../../assets/coffee7.png";
import Img8 from "../../assets/coffee8.png";

const ServicesData = [
  { id: 1, img: Img1, name: "Espresso", price: 3.50, description: "A strong, rich coffee brewed by forcing hot water through finely-ground coffee beans." },
  { id: 2, img: Img2, name: "Americano", price: 4.00, description: "Espresso diluted with hot water for a lighter taste and smooth flavor." },
  { id: 3, img: Img3, name: "Cappuccino", price: 4.50, description: "A creamy combination of espresso, steamed milk, and milk foam." },
  { id: 4, img: Img4, name: "Latte", price: 4.50, description: "Espresso mixed with plenty of steamed milk for a smooth and mild flavor." },
  { id: 5, img: Img5, name: "Mocha", price: 5.00, description: "A delicious blend of coffee, chocolate, and milk topped with whipped cream." },
  { id: 6, img: Img6, name: "Macchiato", price: 3.80, description: "Espresso marked with a small amount of foamed milk for a bold taste." },
  { id: 7, img: Img7, name: "Flat White", price: 4.20, description: "Velvety smooth coffee made with micro-foamed milk and a shot of espresso." },
  { id: 8, img: Img8, name: "Irish Coffee", price: 5.50, description: "Hot coffee with sugar, Irish whiskey, and a topping of thick cream." },
];

const Services = ({ addToOrder }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const calculateSalePrice = (price) => (price * 0.85).toFixed(2);

  return (
    <div className="py-10" id="services">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold font-cursive text-gray-800 text-center mb-10">Best Coffee For You</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 place-items-center">
          {ServicesData.map(product => (
            <div key={product.id} className="relative rounded-2xl bg-white shadow-xl w-full max-w-[300px] text-center p-5 hover:scale-105 transition-transform duration-300">
              <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold z-10">
                15% OFF
              </div>

              <img
                src={product.img}
                alt={product.name}
                className="max-w-[180px] mx-auto mb-4 h-[160px] object-contain cursor-pointer"
                onClick={() => setSelectedProduct(product)}
              />

              <h1 className="text-xl font-bold mb-2">{product.name}</h1>

              <div className="mb-2">
                <span className="text-gray-400 line-through mr-2">${product.price.toFixed(2)}</span>
                <span className="text-lg font-semibold text-green-600">${calculateSalePrice(product.price)}</span>
              </div>

              <button
                onClick={() => addToOrder({ ...product, price: calculateSalePrice(product.price) })}
                className="bg-blue-600 text-white px-4 py-2 rounded-full font-medium hover:bg-blue-700 transition-colors"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>

      {selectedProduct && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 px-4">
          <div className="bg-white rounded-2xl w-full max-w-md p-6 relative">
            <button
              className="absolute top-3 right-3 text-xl font-bold"
              onClick={() => setSelectedProduct(null)}
            >&times;</button>
            <img
              src={selectedProduct.img}
              alt={selectedProduct.name}
              className="w-full h-60 object-contain mb-4"
            />
            <h1 className="text-2xl font-bold mb-2">{selectedProduct.name}</h1>
            <p className="text-gray-700 mb-4">{selectedProduct.description}</p>
            <div>
              <span className="text-gray-400 line-through mr-2">${selectedProduct.price.toFixed(2)}</span>
              <span className="text-lg font-semibold text-green-600">${calculateSalePrice(selectedProduct.price)}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
