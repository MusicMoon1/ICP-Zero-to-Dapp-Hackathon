import React from 'react';
import './Modal.css'; // You'll create this CSS file

const Modal = ({ isOpen, onClose }) => {
    if (!isOpen) {
      return null;
    }
  return (
    <div className="modal-overlay">
      <div className="modal">
     
        <h1 style={{fontWeight:'bold',fontSize:30,textAlign:'center'}}>Coming Soon with Interlay</h1>
       
        <button style={{marginTop:'5%', border: '2px solid #9bff00',padding:'2%',borderRadius:'10%'}}  onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
