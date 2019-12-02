import React from 'react';
import { connect } from 'react-redux';
import { deleteListAC, addTaskAC } from '../redux/reducer';
import AddItem from './AddItem';
import ListTasks from './ListTasks';

class TodoList extends React.Component {

    deleteList = () => {
        this.props.deleteList(this.props.list.id)
    }

    render() {
        const { list } = this.props;

        return (
            <div className='todoList'>
                <h2> {list.title} &nbsp;
                    <button className='deleteList' onClick = {this.deleteList}>X</button>
                </h2>
                <AddItem listId={list.id} addItem={this.props.addTask} placeHolder='add task'/>
                <ListTasks tasks={list.tasks} listId={list.id} />
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        deleteList: (listId) => {
            const action = deleteListAC(listId);
            dispatch(action);
        },
        addTask: (title, listId) => {
            const action = addTaskAC(title, listId);
            dispatch(action);
        }
    }

}

export default connect(null, mapDispatchToProps)(TodoList);