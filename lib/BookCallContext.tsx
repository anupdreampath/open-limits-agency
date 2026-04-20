'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface BookCallContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const BookCallContext = createContext<BookCallContextType | undefined>(undefined);

export function BookCallProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <BookCallContext.Provider value={{
      isOpen,
      openModal: () => setIsOpen(true),
      closeModal: () => setIsOpen(false),
    }}>
      {children}
    </BookCallContext.Provider>
  );
}

export function useBookCall() {
  const context = useContext(BookCallContext);
  if (context === undefined) {
    throw new Error('useBookCall must be used within a BookCallProvider');
  }
  return context;
}
