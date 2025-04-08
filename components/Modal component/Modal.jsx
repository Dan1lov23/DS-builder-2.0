import React from 'react';
import './modal.css'; // Убедитесь, что путь к вашему CSS правильный

const Modal = ({ isOpen, onClose, children }) => {
    return (
        <div className={`modal-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}>×</button>
                {children}
            </div>
        </div>
    );
};

export default Modal;
