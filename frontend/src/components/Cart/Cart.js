import { useDispatch, useSelector } from "react-redux";
import ItemList from "../ItemList/ItemList";
import { clearCart } from "../../utils/store/cartSlice";
import { Link } from "react-router-dom";
import empty from "../../assets/empty.png";
import emptyCart from "../../assets/cart-empty.png";
import cartFull from "../../assets/cart-full.png";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <section className="empty-cart px-2 py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto text-center">
        <div className="m-auto md:w-1/2 p-4">
          {cartItems.length === 0 ? (
            <>
              <h1 className="text-3xl	font-bold mb-2 capitalize">
                Your cart is empty{" "}
                <img src={emptyCart} className="w-8 inline-block" alt="empty" />
              </h1>
              <p className="text-md text-gray-400 mb-4">
                You have no items in your cart. <br />
                To order something, click on the "Add to Cart" button
              </p>

              <img
                className="w-8/12 mx-auto object-cover"
                src={empty}
                alt="empty"
              />
              <Link to="/">
                <button className="rounded-full px-6 py-2 border-2 border-green-500 text-gray-50 font-bold mt-4 bg-green-500 hover:bg-gray-50  hover:border-green-500 hover:text-gray-900">
                  Go to Home
                </button>
              </Link>
            </>
          ) : (
            <>
              <div className="flex items-center justify-between border-3 border-bottom border-gray-100 pb-4">
                <div className="flex items-center">
                  <img src={cartFull} alt="empty" className="w-10" />
                  <h1 className="font-bold ml-4 text-2xl">Order Summary</h1>
                </div>
                <div className="flex items-center justify-start">
                  <button
                    className="px-2 py-2 border-2 font-bold mt-4 bg-gray-50 border-green-500 text-gray-900 hover:bg-green-500 hover:border-green-500 hover:text-gray-50"
                    onClick={handleClearCart}
                  >
                    Clear
                  </button>
                </div>
              </div>
              {cartItems.map((item) => (
                <CartItem item={item} addButton={true} />
              ))}

              <div className="text-right py-4">
                <div>
                  <span className="font-bold text-lg">Total Amount</span>
                  <span className="text-2xl ml-2 font-bold text-green-500">
                    ₹ 300
                  </span>
                </div>
              </div>

              <div className="text-right py-4">
                <div>
                  <button className="rounded-full px-6 py-2 border-2 border-green-500 text-gray-50 font-bold mt-4 bg-green-500 hover:bg-gray-50  hover:border-green-500 hover:text-gray-900">
                    Order Now
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Cart;
