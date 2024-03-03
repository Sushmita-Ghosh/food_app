import { useDispatch, useSelector } from "react-redux";
import ItemList from "../ItemList/ItemList";
import { clearCart } from "../../utils/store/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-3xl font-bold">Cart</h1>
      <div className="m-auto w-6/12 p-4">
        <button
          className="p-2 m-2 bg-black text-white rounded-md ease-in-out transition-all duration-300 active:scale-50"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>

        {cartItems.length === 0 && <h1>No items in cart</h1>}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
