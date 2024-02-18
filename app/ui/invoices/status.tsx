"use client"
import { CheckIcon, ClockIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { useState } from 'react';

export default function InvoiceStatus({ status }: { status: string }) {
  const [_status, set_status] = useState<string>(status);
  const onClick = () => {
    set_status(_status === 'pending' ? 'paid' : 'pending')
  }
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full px-2 py-1 text-xs',
        {
          'bg-gray-100 text-gray-500': _status === 'pending',
          'bg-green-500 text-white': _status === 'paid',
        },
      )}
      onClick={onClick}
    >
      {_status === 'pending' ? (
        <>
          Pending
          <ClockIcon className="ml-1 w-4 text-gray-500" />
        </>
      ) : null}
      {_status === 'paid' ? (
        <>
          Paid
          <CheckIcon className="ml-1 w-4 text-white" />
        </>
      ) : null}
    </span>
  );
}
