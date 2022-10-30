import { Dispatch, FC, useEffect, useState } from "react";
import { ITodos } from "../../models/ITodos";
import styles from "./FilterTodos.module.css"

interface IFilterTodos {
    countCompleted: number;
    todos: ITodos[];
    setTodos: Dispatch<React.SetStateAction<ITodos[]>>
    setCopyTodos: Dispatch<React.SetStateAction<ITodos[]>>
    copyTodos: ITodos[];
}

export const FilterTodos: FC<IFilterTodos> = ({countCompleted, todos, setTodos, setCopyTodos, copyTodos}) => {
    const [completed, setCompleted] = useState<ITodos[]>([]); 
    const [active, setActive] = useState<ITodos[]>([]);

    useEffect(() => {
        setCompleted([...copyTodos].filter(item => item.completed === false));
        setActive([...copyTodos].filter(item => item.completed === true))
    }, [todos])

    const getAllTodos = () => {
        setTodos(copyTodos);
    }

    const getActiveTodos = () => {
        setTodos(completed)
    }

    const getCompletedTodos = () => {
        setTodos(active)
    }

    const getClearCompleted = () => {
        setTodos([...todos.filter(item => item.completed === false)])
        setCopyTodos([...todos.filter(item => item.completed === false)])
    }

    return(
        <div className={styles.infoTasks}>
            <div className={styles.notCompleted}>
                <span>Невыполненные задания {countCompleted} </span>
            </div>
            <div className={styles.filterTodos}>
                <span
                    className={styles.cursor}
                    onClick={getAllTodos}
                >
                    All
                </span>
                <span 
                    className={styles.cursor}
                    onClick={getActiveTodos}
                >
                    Active
                </span>
                <span 
                    className={styles.cursor}
                    onClick={getCompletedTodos}
                >
                    Completed
                </span>
            </div>
            <div className={styles.clearCompleted}>
                <span 
                    className={styles.cursor}
                    onClick={getClearCompleted}
                >
                    Clear completed
                </span>
            </div>
      </div>
    )
}