'use client';

import { useEffect, useState } from 'react';
import { useStore } from '@/store/store';
import { Trash2 } from 'lucide-react';
import { useShallow } from 'zustand/react/shallow';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '../ui/button';

export default function Cart() {
  const [total, setTotal] = useState(0);
  const { cartItems, removeFromCart } = useStore(
    useShallow((state) => ({
      cartItems: state.cartItems,
      removeFromCart: state.removeFromCart,
    })),
  );

  useEffect(() => {
    setTotal(cartItems.reduce((acc, item) => acc + item.price, 0));
  }, [cartItems]);

  if (cartItems.length === 0) {
    return (
      <div className='py-4'>
        <div className='mx-auto max-w-7xl'>
          <h2 className='px-4 py-2 text-2xl font-bold'>Cart</h2>
          <p className='px-4 py-2 text-lg'>Cart is empty</p>
        </div>
      </div>
    );
  }

  return (
    <div className='py-4'>
      <div className='mx-auto max-w-7xl'>
        <h2 className='px-4 py-2 text-2xl font-bold'>Cart</h2>

        <div className='overflow-y-auto'>
          <Table className='border-b-4'>
            <TableCaption className='text-lg'>
              Cart Item Total Price is {total.toFixed(2)}$
            </TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className='text-lg'>Title</TableHead>
                <TableHead className='text-lg'>price</TableHead>
                <TableHead className='text-lg'>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {cartItems &&
                cartItems?.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>{item.title}</TableCell>
                    <TableCell>{item.price.toFixed(2)}</TableCell>
                    <TableCell>
                      <Button onClick={() => removeFromCart(item.id)} variant='ghost' size='icon'>
                        <Trash2 className='text-red-500 hover:text-red-700 dark:hover:text-red-300' />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
