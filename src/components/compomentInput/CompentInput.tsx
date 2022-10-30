import React, { Dispatch, FC, useState } from 'react'
import { ITodos } from '../../models/ITodos';
import styles from "./ComponentInput.module.css"

interface IComponentInput {
  setTodos: Dispatch<React.SetStateAction<ITodos[]>>;
  setCopyTodos: Dispatch<React.SetStateAction<ITodos[]>>
}

export const ComponentInput: FC<IComponentInput> = ({setTodos, setCopyTodos}) => {
  const [inputValue, setInputValue] = useState("");
  const [valid, setValid] = useState(true);
  const [id, setId] = useState(0);

  const addTodo = () => {  
    if(inputValue.length > 0) {
      setValid(true);
      setId(prev => prev + 1)
      setTodos((last: ITodos[]) => [...last, {todoValue: inputValue, completed: false, id: id}])
      setCopyTodos((last: ITodos[]) => [...last, {todoValue: inputValue, completed: false, id: id}])
      setInputValue("");
    } else {
      setValid(false);
    }
  }

  return (
    <div className={[styles.form__group, styles.field].join(" ")}>
      <input
        value={inputValue}
        onChange={(event) => setInputValue(event?.currentTarget?.value)}
        type="input" 
        className={valid ? styles.form__field : [styles.form__field, styles.inputError].join(" ")} 
        placeholder="Что хотите добавить?" 
        name="name" 
        id='name' 
        required 
      />
      <label 
        htmlFor="name" 
        className={styles.form__label}>
          Что хотите добавить?
      </label>
      <button 
          onClick={addTodo}
          className={styles.form__button}
        >
          +
      </button>
    </div>
    );
  }
