import React from 'react';
import classes from './Modal.module.css'

const Modal = ({modalActive, setModalActive, children}) => {
    return (
        <div className={modalActive ? `${classes.modal__background} ${classes.active}` : `${classes.modal__background}`} onClick={()=>setModalActive(false)}>
                <div className={classes.modal__window} onClick={e=> e.stopPropagation()}>
                    {children}
                </div>
        </div>
    );
};

export default Modal;