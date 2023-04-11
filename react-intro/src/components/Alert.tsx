import React, { ReactNode } from "react";

interface Props {
  msg: string;
  alertType: string;
  onClose: () => void;
}
const Alert = ({ msg, alertType, onClose }) => {
  return (
    <div className={`mt-3 alert alert-dismissible alert-${alertType}`}>
      {msg}
      <button
        type='button'
        className='btn-close'
        data-bs-dismiss='alert'
        aria-label='Close'
        onClick={onClose}></button>
    </div>
  );
};

export default Alert;
