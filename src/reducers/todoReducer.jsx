function todoReducer(state=[],action){
    if(action.type == 'add_todo'){
        let inputTodo = action.payload.inputTodo;
        return [...state,{id:state.length+1,todoData:inputTodo, finished:false}]
    }
    else if(action.type == 'edit_todo'){
        let todo = action.payload.todo;
        let data = action.payload.data;
        const updatedList = state.map((t)=>{
            if(t.id === todo.id){
                todo.todoData = data;
            }
            return t;
        })
        return updatedList;
    }else if(action.type == 'delete_todo'){
        let todo = action.payload.todo;
        const updatedList = state.filter((t)=> t.id != todo.id);
        return updatedList;
    }else if(action.type === "finish_todo"){
        let todo = action.payload.todo;
        let isFinished = action.payload.isFinished;
        const updatedList = state.map((t) =>{
                if(t.id === todo.id){
                    todo.finished = isFinished
                }
                return t;
            })
            return updatedList;
    }
}

export default todoReducer;