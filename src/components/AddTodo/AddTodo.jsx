import { useState } from "react";
// import TodoDispatchContext from "../TodoContext/TodoDispatchContext";
import { useDispatch } from "react-redux";
function AddTodo(){
    // const {dispatch} = useContext(TodoDispatchContext)
    const dispatch = useDispatch();
    
    const[input,setInput] = useState('');
    return <div>
        <input type="text" value={input} placeholder="Add todo..." onChange={(e)=>setInput(e.target.value)}></input>
            <button onClick={()=>
            {
                if(input != ""){
                    dispatch({type:'add_todo',payload:{inputTodo:input}})
                    setInput('');
                };
            }
        }>Add</button>
    </div>
}
export default AddTodo;