'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ErrorPage({ error, reset }: { error: Error, reset: () => void }) {
  const router = useRouter();

  useEffect(() => {
    // Optionally, you can log the error to an external error reporting service
    console.error('Error occurred:', error);
  }, [error]);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 text-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-red-600">Oops! Something went wrong.</h1>
        <p className="text-xl text-gray-700">We're sorry, but we encountered an unexpected issue.</p>
        <p className="text-md text-gray-600 mb-4">
          Error details: <code className="text-sm">{error.message}</code>
        </p>
        <button
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          onClick={() => {
            // Optionally, we could try to reset the app or navigate to a safe page
            reset();
            router.push('/');
          }}
        >
          Go Back to Home
        </button>
      </div>
    </div>
  );
}
