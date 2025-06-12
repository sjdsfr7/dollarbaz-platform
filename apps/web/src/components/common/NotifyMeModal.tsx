'use client';

import { useNotifyModal } from '../../store/useNotifyModal';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from 'components/ui/dialog';
import { Input } from 'components/ui/input';
import { Button } from 'components/ui/button';
import { useState } from 'react';

export function NotifyMeModal() {
  const { open, context, closeModal } = useNotifyModal();
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    console.log('Notify:', email, 'for:', context);
    // TODO: backend submission
    closeModal();
    setEmail('');
  };

  return (
    <Dialog open={open} onOpenChange={closeModal}>
      <DialogContent className="bg-zinc-900 border border-zinc-700 text-white">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">Notify Me</DialogTitle>
        </DialogHeader>
        <p className="text-sm text-gray-400 mb-4">
          Be notified when{' '}
          <span className="text-orange-400 font-medium">{context}</span> goes
          live.
        </p>
        <Input
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button className="mt-4 w-full" onClick={handleSubmit}>
          Notify Me
        </Button>
      </DialogContent>
    </Dialog>
  );
}
// This component is a modal that allows users to enter their email address
// to be notified when a specific event (context) goes live. It uses the
// `useNotifyModal` store to manage the modal's open state and context.
// The modal contains an input field for the email address and a button to
// submit the email. When the button is clicked, it logs the email and
// context to the console (this should be replaced with a backend submission
// in a real application), closes the modal, and clears the email input.