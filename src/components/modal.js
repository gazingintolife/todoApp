import React from 'react';
import AddNote from './AddNote';
import EditNote from './EditNote';

const Modal = (props) => {

    if (!props.show) {
        return null;
    }

    return (
        <div className='modal' onClick={props.onClose}>
            <div className='modal-content' onClick={e => e.stopPropagation()}>   
                <div className='modal-header'>
                    <h3 className='modal-title'>Add a Note</h3>
                </div>
                <div className='modal-body'>
                    {props.add ? <AddNote/>: <EditNote/>}
                </div>
            </div>
        </div>
    );
}

export default Modal;