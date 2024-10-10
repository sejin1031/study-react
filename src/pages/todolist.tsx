import Card from "components/card/card"
import Feed from "components/TodoList/feed"
import CustomInput from "components/TodoList/input"
import { Link } from "react-router-dom"
import { SetStateAction, useEffect, useState } from "react"
import Layout from "layout"

type Todo = {
  text: string;
  done: boolean;
}

function TodoList () {

  const [ addText, setAddText ] = useState<string>("");

  const [ todoList, setTodoList ] = useState<Todo[]>([]);

  const addTodoList = () => {
    if(addText == "") {
      return;
    }
    const todo: Todo = { text: addText, done: false }
    console.log(addText)
    const newTodoList = [...todoList, todo]
    setTodoList(newTodoList);
    saveItem(newTodoList);
    setAddText("");
  };

  const removeTodoList = (todo: Todo) => {
    const newTodoList = todoList.filter(v => v !== todo);

    setTodoList(newTodoList);
    saveItem(newTodoList)
  }

  const changeTodoStatus = (todo: Todo) => {
    const newTodoList = todoList.map(v => {
      if(v == todo) {
        return {
          ...todo,
          done: !todo.done
        }
      } else {
        return v;
      }
    })

    setTodoList(newTodoList);
    saveItem(newTodoList)
  }

  const saveItem = (list: Array<Todo>) => {
    localStorage.setItem('todolist', JSON.stringify(list))
  }

  useEffect(() => {
    const savedList = localStorage.getItem('todolist');

    if(savedList) {
      setTodoList(JSON.parse(savedList));
    }
  }, [])

  

  return (
    <Layout>
      <Feed>
        <Link to={"/"}> Go To Home</Link>

        <Card>
          할일목록!!
          <div>
            <CustomInput onChange={(e: { target: { value: SetStateAction<string> } }) => setAddText(e.target.value)} value={addText} />
            <button onClick={addTodoList}>Add</button>
          </div>
          
          <ul>
            {
              todoList.map(v => <li key={v.text}><input type="checkbox" checked={v.done} onChange={e => changeTodoStatus(v)} />  {v.text} <button onClick={e => removeTodoList(v)}>x</button></li>)
            }
          </ul>
        </Card>

      </Feed>
    </Layout>
    
  )
}

export default TodoList