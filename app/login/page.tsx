import AcmeLogo from '@/app/ui/acme-logo';
import LoginForm from '@/app/ui/login-form';
import { Suspense } from 'react';

export default function LoginPage() {
    return (
        <main className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="flex flex-col items-center w-full max-w-md p-6 space-y-6 bg-white shadow-lg rounded-lg border border-gray-200">
                {/* Logo Section */}
                <div className="w-32 md:w-36">
                    <AcmeLogo />
                </div>

                {/* Login Form */}
                <Suspense>
                    <LoginForm />
                </Suspense>
            </div>
        </main>
    );
}
