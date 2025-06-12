import { create } from 'zustand';

type NotifyModalState = {
  open: boolean;
  context: string | null;
  openModal: (context: string) => void;
  closeModal: () => void;
};

export const useNotifyModal = create<NotifyModalState>((set) => ({
  open: false,
  context: null,
  openModal: (context) => set({ open: true, context }),
  closeModal: () => set({ open: false, context: null }),
}));
