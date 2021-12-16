import React, { useState } from 'react';
import Todo from './Todo';
import InProgress from './InProgress';
import Completed from './Completed';
import Modal from './modal';


const NoteDashBoard = () => {

    const [show,setShow] = useState(false);
    const [add,setAdd] = useState(false)

    return (
        <div className=''>
            <div className='dashboard'>
                <div className='dashboardContent'>
                    <h3> Keep track of your tasks <br/>  and stay updated </h3>
                </div>
                <div className='dashboardContent' >
                <button className="addbutton" onClick={() => (setShow(true), setAdd(true))}>Add Task</button>
                </div>
                <div className='titles'>
                    <p className='categoryTitle'>To Do</p>
                    <p className='categoryTitle'>In Progress</p>
                    <p className='categoryTitle'>Completed</p>
                </div>
                 <div className="content-container">
                    <Todo/>
                    <InProgress/>
                    <Completed/>
                </div>
            </div>
            <div>
                <Modal onClose = {() => setShow(false)} show = {show} add={add}/>
            </div>
        </div>
    );
}

export default NoteDashBoard;