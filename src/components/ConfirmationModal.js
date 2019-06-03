import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#app');

const ConfirmationModal = (props) => (
   <Modal
     isOpen={props.modalIsOpen}
     onRequestClose={props.handleCloseModal}
     contentLabel="Selected Option"
     closeTimeoutMS={200}
     className="modal"
   >
    <h3 className="modal__title">Selected Expense</h3>
    <p className="modal__body">Are you sure to remove the selected expense</p>
    <button className="button modal__button" onClick={props.handleOnRemoveSelectedOption}>Yes</button>
    <button className="button modal__button" onClick={props.handleCloseModal}>No</button>
   </Modal>
);
export default ConfirmationModal;