import { FiShoppingCart } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";

const Cart = ({ selectedProducts, setSelectedProducts, price, setPrice }) => {

    const handleDelete = (forDeleteProduct) => {
        setPrice(price - forDeleteProduct.price);
        const filterProducts = selectedProducts.filter(selectedProduct => selectedProduct.id !== forDeleteProduct.id);
        console.log(filterProducts);
        setSelectedProducts(filterProducts);
        toast("Product removed");
    }

    const handleCheckOut = () => {
        setSelectedProducts([]);
        toast("Checkout Successful");
    }
  //   console.log(selectedProducts);

  return selectedProducts.length === 0 ? (
    <div className="h-50 flex justify-center flex-col items-center bg-gray-100 mx-10 rounded-2xl mb-20">
      <FiShoppingCart className="text-4xl text-[#627382]" />
      <p className="text-[#627382]">Your cart is empty!</p>
    </div>
  ) : (
    <div className="min-h-70 bg-gray-100 mx-10 rounded-2xl mb-20 p-5">
      <p className="font-bold text-xl mb-3">Your cart</p>
      <div className="flex flex-col gap-3">
        {selectedProducts.map((selectedProduct) => {
          return (
            <div
              key={selectedProduct.id}
              className="flex sm:justify-between flex-col sm:flex-row items-center bg-white p-4 rounded-2xl"
            >
              <div className="flex items-center gap-3">
                <div className="text-4xl">{selectedProduct.icon}</div>
                <div className="">
                  <h3 className="font-semibold text-xl">
                    {selectedProduct.name}
                  </h3>
                  <p className="text-[#627382]">${selectedProduct.price}</p>
                </div>
              </div>
              <button onClick={() => handleDelete(selectedProduct)} className="btn">
                <MdDelete className="text-red-500 text-3xl" />
              </button>
            </div>
          );
        })}
      </div>
      <div className="flex justify-between p-5 font-bold text-2xl">
        <p className="">Total:</p>
        <p className="">${price.toFixed(2)}</p>
      </div>
      <button onClick={handleCheckOut} className="btn w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white">Proceed to checkout</button>
    </div>
  );
};

export default Cart;
