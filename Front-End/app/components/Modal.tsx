import React, { ReactNode } from 'react';
import Modal from 'react-modal';

interface PropsParam {
  isOpen: boolean;
  onClose?: () => void;
  children: ReactNode;
}

export default function ModalStandart(props: PropsParam) {
  return (
    <Modal
      isOpen={props.isOpen}
      onRequestClose={props.onClose}
      contentLabel="Modal"
      className="w-full max-w-lg p-8 bg-white rounded-xl shadow-lg transform -translate-y-1/2 -translate-x-1/2 absolute top-1/2 left-1/2 focus:outline-none"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div className="flex flex-col items-center">
        {props.children}
      </div>
    </Modal>
  );
}
