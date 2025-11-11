import React from "react";

const OrderPage = ({ orderList }) => {
  if (orderList.length === 0) {
    return (
      <div className="min-h-[400px] flex justify-center items-center text-gray-700">
        <h1>No products in your order. Go back to Services!</h1>
      </div>
    );
  }

  return (
    <div className="min-h-[500px] py-10 container mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Your Order</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {orderList.map((product, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-xl p-5 text-center">
            <img src={product.img} alt={product.name} className="w-[180px] h-[180px] mx-auto object-contain mb-4" />
            <h1 className="text-xl font-bold">{product.name}</h1>
            <p className="text-lg font-semibold">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderPage;
