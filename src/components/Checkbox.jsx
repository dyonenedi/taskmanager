'use client';
import { useRouter } from 'next/navigation';
import React from 'react';

const Checkbox = ({checked}) => {
  const router = useRouter();
  const [isPending, startTransition] = React.useTransition();

  return (
    <input 
      type='checkbox' 
      className='form-checkbox h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500' 
      defaultChecked={checked}
      onChange={e => {
        e.target.form.requestSubmit();
        startTransition(() => {
          router.refresh();
        });
      }}
      disabled={isPending}
    />
  );
};

export default Checkbox;