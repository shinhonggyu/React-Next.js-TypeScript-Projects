import CartContext from './cart-context';

const CartProvider = (props) => {
  // manage the cart context data .
  // provide data to all components that wnat access to it .

  const addItemToCartHandler = item => {},

  const removeItemFromCartHandler = id => {},


  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler
  }

  return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>;
};

export default CartProvider;
