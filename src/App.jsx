import AddTodo from "./components/AddTodo/AddTodo.jsx";
import TodoList from "./components/TodoList/TodoList.jsx";
// import { useReducer } from "react";
// import TodoContext from "./components/TodoContext/TodoContext.jsx";
// import todoReducer from "./reducers/todoReducer.jsx";
// import TodoDispatchContext from "./components/TodoContext/TodoDispatchContext.jsx";
function App() {
  // const [list,setList] = useState([
  //   {id:1, todoData:"todo1",finished:false},
  //   {id:2, todoData:"todo2",finished:false}
  // ])

  // const [list, dispatch] = useReducer(todoReducer, []);
  // console.log(list);
  // console.log(dispatch);
  return (
    <>
      <AddTodo></AddTodo>
      <TodoList />
    </>
  );
}

export default App;
