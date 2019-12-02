
const addListAC = (title) => {
   return {
      type: 'ADD-LIST',
      title
   }
}

const deleteListAC = (listId) => {
   return {
      type: 'DELETE-LIST',
      listId
   }
}

const addTaskAC = (title, listId) => {
   return {
      type: 'ADD-TASK',
      listId,
      title
   }
}

const deleteTaskAC = (listId, taskId) => {
   return {
      type: 'DELETE-TASK',
      listId,
      taskId
   }
}

const updateTaskAC = (listId, taskId, dataObj) => {
   return {
      type: 'UPDATE-TASK',
      listId,
      taskId,
      dataObj
   }
}

const initialState = localStorage.getItem('TrainList') !== null
   ? JSON.parse(localStorage.getItem('TrainList'))
   : {
      lists: [{ id: 0, title: 'Спорт', tasks: [{ id: 1, title: 'Прыг', isDone: false }] },
      { id: 1, title: 'Здоровье', tasks: [{ id: 1, title: 'Скок', isDone: false }] }]
   };

const reducer = (state = initialState, action) => {

   switch (action.type) {

      case 'ADD-LIST':
         const nextListId = state.lists.length;
         const newList = { id: nextListId, title: action.title, tasks: [] };
         return {
            ...state,
            lists: [...state.lists, newList]
         }
      
      case 'DELETE-LIST':
         return {
            ...state,
            lists: state.lists.filter( (list) => list.id !== action.listId )
                  .map( (list, index) => ({ ...list, id: index }) )
         }

      case 'ADD-TASK':
         const nextId = state.lists[action.listId].tasks.length + 1;
         const newTask = { id: nextId, title: action.title, isDone: false };
         return {
            ...state,
            lists: state.lists.map((list) => {
               return (
                  (list.id === action.listId)
                     ? { ...list, tasks: [...list.tasks, newTask] }
                     : list
               )
            })
         }

      case 'DELETE-TASK':
         return {
            ...state,
            lists: state.lists.map((list) => {
               if (list.id === action.listId) {
                  return {
                     ...list,
                     tasks: list.tasks.filter((task) => task.id !== action.taskId)
                        .map((task, index) => ({ ...task, id: index + 1 }))
                  }
               } else return list
            })

         }

      case 'UPDATE-TASK':
         return {
            ...state,
            lists: state.lists.map((list) => {
               if (list.id === action.listId) {
                  return {
                     ...list,
                     tasks: list.tasks.map((task) => {
                        if (task.id === action.taskId) {
                           return { ...task, ...action.dataObj }
                        } else return task
                     })
                  }
               } else return list
            })
         }

      default:
         return state;
   }
}

export default reducer;
export { addListAC, deleteListAC, addTaskAC, deleteTaskAC, updateTaskAC };