import React, { ReactNode, useState } from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#fff',
    overflow: 'auto',
    borderRadius: 'xl',
    padding: '2rem',
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};
interface propsParam{
  isOpen:any,
  onClose?:any,
  children:ReactNode
}

export default function ModalUsuario(props:propsParam){
 const [fechat,setFechar]=useState<boolean>(false)
  return (
    <Modal 
    
      isOpen={props.isOpen}
      onRequestClose={props.onClose}
      style={customStyles}
      contentLabel="Modal"
    >
      <div className="flex flex-col items-center">
        {props.children}
      
      </div>
    </Modal>
  );
};
