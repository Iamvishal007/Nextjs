'use client';

import { lusitana } from '@/app/ui/fonts';
import {
  AtSymbolIcon,
  KeyIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { Button } from '@/app/ui/button';
import { useActionState } from 'react';
import { authenticate } from '@/app/lib/actions';
import { useSearchParams } from 'next/navigation';

export default function LoginForm() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/dashboard';
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined,
  );

  return (
    <form action={formAction} className="w-full space-y-4">
      <div className="w-full flex flex-col space-y-4">
        {/* Email Field */}
        <div>
          <label className="block text-sm font-medium text-gray-900" htmlFor="email">
            Email
          </label>
          <div className="relative mt-1">
            <input
              className="w-full rounded-md border border-gray-300 py-2 px-3 pl-10 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email"
              required
            />
            <AtSymbolIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>

        {/* Password Field */}
        <div>
          <label className="block text-sm font-medium text-gray-900" htmlFor="password">
            Password
          </label>
          <div className="relative mt-1">
            <input
              className="w-full rounded-md border border-gray-300 py-2 px-3 pl-10 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="password"
              type="password"
              name="password"
              placeholder="Enter password"
              required
              minLength={6}
            />
            <KeyIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Hidden Redirect Input */}
      <input type="hidden" name="redirectTo" value={callbackUrl} />

      {/* Submit Button */}
      <Button className="w-full flex items-center justify-center gap-2 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md transition duration-200" aria-disabled={isPending}>
        Log in <ArrowRightIcon className="h-5 w-5" />
      </Button>

      {/* Error Message */}
      {errorMessage && (
        <div className="flex items-center space-x-2 text-red-500 text-sm mt-2">
          <ExclamationCircleIcon className="h-5 w-5" />
          <p>{errorMessage}</p>
        </div>
      )}
    </form>
  );
}
