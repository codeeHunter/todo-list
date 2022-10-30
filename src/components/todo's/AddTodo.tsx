import { Dispatch, FC, useEffect } from 'react'
import { ITodos } from '../../models/ITodos';
import { ComponentInput } from '../compomentInput/CompentInput'
import { Todo } from '../todo/Todo';
import styles from "./AddTodo.module.css"

interface IAddTodo {
  todos: ITodos[];
  setTodos: Dispatch<React.SetStateAction<ITodos[]>>
  setCountCompleted: () => void;
  setCopyTodos: Dispatch<React.SetStateAction<ITodos[]>>
}

export const AddTodo: FC<IAddTodo> = ({todos, setTodos, setCountCompleted, setCopyTodos}) => {
  const getChecked = (id: number, checked: boolean, setChecked: Dispatch<React.SetStateAction<boolean>>) => {
    let arr = todos;
    arr = arr.map((item) => {
      if(id === item.id) {
        item.completed = !item.completed
      }
      return item;
    })

    setChecked(!checked)
    setTodos(arr);
    setCopyTodos(arr);
    setCountCompleted();
  }

  useEffect(() => {
    setCountCompleted();
  }, [todos])


  return (
    <div className={styles.form}>
      <ComponentInput 
        setTodos={setTodos}
        setCopyTodos={setCopyTodos}
      />
      <>
      { todos.length > 0 &&
          todos.map(value => 
            <Todo 
              key={value.id}
              todoValue={value.todoValue}
              completed={value.completed}
              getChecked={getChecked}
              id={value.id}
            />
          )
      }
     </>
     
    </div>
  )
}
