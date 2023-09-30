import React from 'react';
import Modal from 'react-modal';

const SubmitPopup = ({ isOpen, onRequestClose, onSubmit, onContinue }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Submit Confirmation"
    >
      <h2>Submit Quiz</h2>
      <p>You have completed all questions. Do you want to submit the quiz or continue?</p>
      <button onClick={onSubmit}>Submit</button>
      <button onClick={onContinue}>Continue</button>
    </Modal>
  );
};

export default SubmitPopup;
