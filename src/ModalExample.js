import React from 'react';
import { withState } from 'recompose';
import Modal from './Modal';

const ModalExample = withState('isOpen', 'toggleModal', false)(({ isOpen, toggleModal }) => (
  <div>
    This is an example for the modal, click on the button to open a new modal dialog.
    {isOpen ?
      <Modal onBackDropClick={() => toggleModal(false)}><ModalExample /></Modal> :
      null
    }
    <button onClick={() => toggleModal(!isOpen)}>Toggle Modal</button>
  </div>
));

export default ModalExample;
