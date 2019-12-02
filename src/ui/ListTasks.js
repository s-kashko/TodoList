import React from 'react';
import ListTask from './ListTask';


const ListTasks = (props) => {
    
    
    const task = props.tasks.map((task) => <ListTask listId={props.listId} task={task} /> )
    return (
        <ul className='tasks'>
            {task}
        </ul>
    )
}

export default ListTasks;