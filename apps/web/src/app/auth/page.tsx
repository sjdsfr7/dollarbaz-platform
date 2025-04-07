'use client';

import { useEffect } from 'react';
import { SignIn } from '@clerk/nextjs';

export default function AuthPage() {
  useEffect(() => {
    // Load Telegram Login Widget script
    const script = document.createElement('script');
    script.src = 'https://telegram.org/js/telegram-widget.js?22';
    script.setAttribute('data-telegram-login', 'Dollarbazbot'); // Your bot username
    script.setAttribute('data-size', 'large');
    script.setAttribute('data-userpic', 'false');
    script.setAttribute('data-radius', '8');
    script.setAttribute(
      'data-auth-url',
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/telegram-auth`,
    );
    script.setAttribute('data-request-access', 'write');
    script.async = true;

    document.getElementById('telegram-login-container')?.appendChild(script);
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-10 p-6">
      <div className="w-full max-w-md">
        <SignIn
          appearance={{
            elements: {
              formButtonPrimary:
                'bg-primary text-primary-foreground hover:bg-primary/90',
            },
          }}
          routing="path"
          path="/auth"
          signUpUrl="/auth"
        />
      </div>
      <div id="telegram-login-container" />
    </div>
  );
}
