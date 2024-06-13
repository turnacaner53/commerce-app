import React from 'react';
import { getAllProducts } from '@/actions';
import { auth } from '@/auth';
import ProductCard from '@/components/product-card';
import { redirect } from 'next/navigation';

export default async function Home() {
  const getSession = await auth();

  if (!getSession?.user) redirect('/unauth');

  const products = await getAllProducts();

  return (
    <div>
      <div className='mx-auto grid min-h-[80vh] max-w-4xl gap-8 p-2 sm:grid-cols-2 md:grid-cols-4'>
        {products &&
          products.data &&
          products.data.map((product) => <ProductCard product={product} key={product.id} />)}
      </div>
    </div>
  );
}
