'use client';

import { useStore } from '@/store/store';
import { useShallow } from 'zustand/react/shallow';
import { Button } from '../ui/button';

export default function AddToCartButton({ productItem }) {
  const { cartItems, addToCart, removeFromCart } = useStore(
    useShallow((state) => ({
      cartItems: state.cartItems,
      addToCart: state.addToCart,
      removeFromCart: state.removeFromCart,
    })),
  );

  const handleAdd = () => {
    if (cartItems.some((item) => item.id === productItem.id)) {
      removeFromCart(productItem.id);
    } else {
      addToCart(productItem);
    }
  };

  return (
    <div className='mt-6 max-w-md'>
      <Button onClick={handleAdd} className='hover:bg-primary/40' variant='outline'>
        {cartItems.some((item) => item.id === productItem.id) ? 'Remove from Cart' : 'Add to Cart'}
      </Button>
    </div>
  );
}
