'use client';

import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';
import { Card, CardContent, CardTitle } from '../ui/card';

export default function ProductCard({ product }) {
    const router = useRouter();
  return (
    <Card className='hover:bg-primary/10 ease-in-out transition-all'>
      <CardContent>
        <div className='aspect-w-16 aspect-h-8 w-full lg:h-50'>
          <img
            className='h-full w-full object-cover object-top'
            src={product?.thumbnail}
            alt={product?.name}
          />
        </div>

        <div className='p-2'>
          <CardTitle className='text-primary truncate text-lg font-bold'>
            {product?.title}
          </CardTitle>

          <div className='mt-4 flex items-center gap-2'>
            <p className='text-primary/90 text-lg font-extrabold'>{product?.price}</p>
            <Button onClick={()=>router.push(`/${product.id}`)} variant='link'>Details</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
