import Todo from "../Todo/Todo";
import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
// import TodoContext from "../TodoContext/TodoContext.jsx";
// import TodoDispatchContext from "../TodoContext/TodoDispatchContext";
function TodoList(){
    // console.log(list);
    const dispatch = useDispatch();
    const list = useSelector((state)=>state.todo);
    // list.map((todo)=>console.log(todo.todoData));
    // const {list} = useContext(TodoContext);
    // const {dispatch} = useContext(TodoDispatchContext);
    function Edit(todo,data){
        // const updatedList = list.map((t)=>{
        //     if(t.id === todo.id){
        //         todo.todoData = data;
        //     }
        //     return t;
        // })
        // setList(updatedList);
        dispatch({type:'edit_todo',payload:{todo,data}});
    }

    function Delete(todo){
        // const updatedList = list.filter((t)=> t.id != todo.id);
        // setList(updatedList);
        dispatch({type:'delete_todo',payload:{todo}})
    }
    function changeFinished(isFinished,todo){
        // const updatedList = list.map((t) =>{
        //     if(t.id === todo.id){
        //         todo.finished = isFinished
        //     }
        //     return t;
        // })
        // setList(updatedList);
        dispatch({type:'finish_todo',payload:{todo, isFinished:isFinished}})
    }
    return(
        <div>
            {
                list.map((todo)=><Todo key={todo.id} todoData={todo.todoData} 
                isFinished={todo.finished}
                onEdit={(data)=> Edit(todo,data)}
                onDelete={()=>Delete(todo)}
                changeFinished={(isFinished)=> changeFinished(isFinished,todo)}
                />)
            }
        </div>
    )
}

export default TodoList;