import Card from '../UI/Card';
import classes from './ProductItem.module.css';

import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';

const ProductItem = (props) => {
  const dispatch = useDispatch();

  const { title, price, description, id } = props;

  const addToCartHandler = () => {
    // const newTotalQuantity = cart.totalQuantity + 1;

    // const updatedItems = cart.items.slice();
    // const existingItem = updatedItems.find((item) => item.id === id);
    // if (existingItem) {
    //   const updatedItem = { ...existingItem };
    //   updatedItem.quantity++;
    //   updatedItem.totalPrice = updatedItem.totalPrice + price;
    //   const existingItemIndex = updatedItems.findIndex(
    //     (item) => item.id === id
    //   );
    //   updatedItems[existingItemIndex] = updatedItem;
    // } else {
    //   updatedItems.push({
    //     id: id,
    //     price: price,
    //     quantity: 1,
    //     totalPrice: price,
    //     name: title,
    //   });
    // }

    // const newCart = {
    //   items: updatedItems,
    //   totalQuantity: newTotalQuantity,
    // };

    // dispatch(cartActions.replaceCart(newCart));

    // and then send Http request
    // fetch('firebase-url', { method: 'POST', body: JSON.stringify(newCart) })

    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price,
      })
    );
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
