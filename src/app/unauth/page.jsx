import { auth } from '@/auth';
import { redirect } from 'next/navigation';

export default async function Unauth() {
  const getSession = await auth();
  if (getSession?.user) redirect('/');

  return (
    <div className='p-20 text-center text-blue-500'>
      <h2 className='text-3xl font-bold'>You are not logged in!</h2>
      <p className='text-xl mt-4'>Please log in to continue.</p>
    </div>
  );
}
