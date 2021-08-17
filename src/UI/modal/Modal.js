import React from 'react';
import classes from './Modal.module.css'

const Modal = ({modalActive, setModalActive, children}) => {
    const rootClasses = [classes.modal__background]
        if (modalActive) {
            rootClasses.push(classes.active)

    }
    return (
        <div className={rootClasses.join(' ')} onClick={()=>setModalActive(false)}>
                <div className={classes.modal__window} onClick={e=> e.stopPropagation()}>
                    {children}
                </div>
        </div>
    );
};

export default Modal;