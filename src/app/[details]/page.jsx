import { getProductById } from '@/actions';
import { auth } from '@/auth';
import AddToCartButton from '@/components/add-to-cart-btn';
import { redirect } from 'next/navigation';

export default async function ProductDetails({ params }) {
  const getSession = await auth();
  if (!getSession?.user) redirect('/unauth');

  const product = await getProductById(params.details);

  return (
    <div className='mx-auto max-w-4xl p-2'>
      <div className='p-4'>
        <div className='grid grid-cols-1 items-start gap-8 lg:grid-cols-5'>
          <div className='top-0 flex w-full flex-col items-center rounded-md bg-gray-100 p-6 text-center dark:bg-gray-600 lg:sticky lg:col-span-3'>
            <img
              src={product?.thumbnail}
              alt={product?.title}
              className='rounded-md object-cover'
            />

            <hr className='my-6 w-full border-2 border-slate-600 dark:border-slate-300' />

            <div className='mx-auto flex flex-wrap justify-center gap-4'>
              {product?.images?.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={product?.title}
                  className='w-24 rounded-md border object-cover'
                />
              ))}
            </div>
          </div>
          <div className='lg:col-span-2'>
            <h2 className='text-2xl font-bold text-primary'>{product?.title}</h2>
            <p className='my-4 text-xl text-muted-foreground'>{product?.price}</p>
            <h3 className='text-lg font-bold text-muted-foreground'>{product?.description}</h3>
            <AddToCartButton productItem={product} />
          </div>
        </div>
      </div>
    </div>
  );
}
