import { SignIn } from '@clerk/nextjs';

export default function AuthPage() {
  return (
    <div className="flex min-h-screen items-center justify-center p-6">
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
  );
}
