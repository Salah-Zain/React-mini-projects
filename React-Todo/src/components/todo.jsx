import React, { useState } from 'react'
import './../components/styles.css'

const Todo = () => {
  const [task, setTask] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [warn, setWarn] = useState(false);
  const [completedTodo, setcompletedTodo] = useState([]);

  const addTask = () => {
    if(task.trim() !== ''){
      setWarn(false);
      const todoId = {id: Date.now(), task}
      setTodoList([...todoList, todoId]);
      setTask('');
      console.log(todoList)
    }
    else{
      setWarn(true);
    }
    }

    const editTodo = (item) => {
      setTask(item.task)
    }

    const removeTodo = (index) => {
      const remove = todoList.filter((_,i)=> i !== index);
      // const update = [todoList]
      // update.splice(index, 1);
      setTodoList(remove);
    }


    const changeCompletedTodo = (index) => {
      const update  = todoList[index];
      setcompletedTodo([...completedTodo, update]);
      removeTodo(index);
    }


    const removeCompletedtodo = (index) => {
      // const update = [...completedTodo];
      const arr = completedTodo.filter((_,i)=> i !== index );
      setcompletedTodo(arr);
    }


  return (
    <div>
      <div className='inp'>
        <p>{warn == true ? '*Please Enter a Task' : '' }</p>
        <input type="text" 
        value={task}
        onChange={(inp)=>{ setTask(inp.target.value.trim()) }}/>
        <button onClick={()=>{ addTask();
         }}>add</button>
      </div>

        <h3>Pending Todo ({todoList.length}) Tasks</h3>
      <div>
        <ul>
          {todoList.map((item, index)=>(
            <li key={item.id}>
              <input type="checkbox"
              onClick={()=> changeCompletedTodo(index)}/>
              {item.task}
              <button onClick={()=>{ editTodo(item), removeTodo(index) }}>edit</button>
              <button onClick={()=> removeTodo(index)}>remove</button>
              </li>
          ))}
        </ul>
      </div>

        <h3>Completed Todo Task</h3>
      <div>
        <ul>
          {completedTodo.map((item, index) => (
            <li key={item.id}>
              {item.task} 
              <button onClick={()=> removeCompletedtodo(index)}>delete</button>
              </li>
          ))}
        </ul>
      </div>

    </div>
  )
}

export default Todo
