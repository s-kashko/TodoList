import React from 'react';
import { connect } from 'react-redux';
import { deleteTaskAC, updateTaskAC } from '../redux/reducer';


const ListTask = (props) => {
    const {task, listId} = props;
    const deleteTask = () => props.deleteTask(listId, task.id);
        const updateTask = (e) => props.updateTask(listId, task.id, { isDone: e.currentTarget.checked }); 
        return (
            <li key={task.id} >
                <input
                    type='checkbox'
                    checked={task.isDone}
                    onClick={updateTask} 
                />
                {task.title} &nbsp;
                <button onClick={deleteTask} className='deleteTask'>X</button>
            </li>
        )
}

const mapDipatchToProps = (dispatch) => {
    return {
        deleteTask: (listId, taskId) => dispatch( deleteTaskAC(listId, taskId) ),
        updateTask: (listId, taskId, dataObj) => dispatch( updateTaskAC(listId, taskId, dataObj) )
        }
    }


export default connect(null, mapDipatchToProps)(ListTask);