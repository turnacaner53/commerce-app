import { Spinner } from '@/components/ui/spinner';

export default function Loading() {
  return (
    <div className='flex min-h-screen items-center justify-center gap-3'>
      <Spinner size='large' className='text-blue-400'>
        <span className='mt-4 text-3xl text-blue-400'>Loading</span>
      </Spinner>
    </div>
  );
}
