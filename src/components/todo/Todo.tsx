import { Dispatch, FC, useState } from 'react'
import styles from "./Todo.module.css"

interface ITodo {
  completed: boolean;
  todoValue: string;
  getChecked: (id: number, checked: boolean, setChecked: Dispatch<React.SetStateAction<boolean>>) => void;
  id: number;
}

export const Todo: FC<ITodo> = ({todoValue, completed, getChecked, id}) => {
  const [checked, setChecked] = useState(completed);

  return (
      <div className={checked ? [styles.form, styles.formChecked].join(" "): styles.form}>
        <input 
          type="checkbox"
          className={styles.checker} 
          id="cb1" 
          defaultChecked={completed} 
          onClick={() => getChecked(id, checked, setChecked)}
        /> 
        <label htmlFor="cb1">{todoValue}</label>
      </div>
  )
}
