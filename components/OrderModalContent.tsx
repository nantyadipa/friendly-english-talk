import React, { ReactNode } from 'react';
import { IoIosCloseCircleOutline } from "react-icons/io";



type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

export function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-2 relative w-full max-w-lg mx-auto">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-400">
          <IoIosCloseCircleOutline size={"2rem"}/>
        </button>
        {children}
      </div>
    </div>
  );
}
