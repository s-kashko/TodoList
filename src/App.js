import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import TodoList from "./ui/TodoList";
import AddItem from './ui/AddItem';
import { addListAC } from './redux/reducer'
import Navigation from './ui/Navigation';

function App(props) {
   const { lists } = props;

   const routeLists = lists.map((list) => 
      <Route path={ `/list ${list.id}` } render={ () => <TodoList list={list} key={list.id} /> } />)
   
   const allLists = lists.map( (list) => <TodoList list={list} key={list.id} /> )
   const linkData = lists.map( (list) => ({ id: list.id, title: list.title }) )

   return (
      <div className="App">
         <NavLink to='/' exact><h2>Планировщик задач</h2></NavLink>
         <AddItem addItem={props.addList} placeHolder='add list'/>
         <Navigation linkData={linkData} />
         <Route path='/' exact render={ () => ( <div className='todoLists'>{allLists}</div> ) } />
         <div className='todoLists'>
            {routeLists}
         </div>
      </div>
   );
}


const mapStateToProps = (state) => {
   return {
      lists: state.lists
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      addList: (title) => {
         const action = addListAC(title);
         dispatch(action);
      }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
