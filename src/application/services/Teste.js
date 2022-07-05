import { db } from "./firebase";
import { nanoid } from "nanoid"
import { set, ref, onValue, remove, update } from "firebase/database";
import { useState, useEffect } from "react";

export function Teste() {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);
    const [isEdit, setIsEdit] = useState(false);
    const [tempnanoid, setTempnanoid] = useState("");

    const handleTodoChange = (e) => {
        setTodo(e.target.value);
    };

    //read
    useEffect(() => {
        onValue(ref(db), (snapshot) => {
            setTodos([]);
            const data = snapshot.val();
            if (data !== null) {
                Object.values(data).map((todo) => {
                    setTodos((oldArray) => [...oldArray, todo]);
                });
            }
        });
    }, []);

    //write
    const writeToDatabase = () => {

        set(ref(db, `/${nanoid}`), {
            todo,
            nanoid,
        });

        setTodo("");
    };

    //update
    const handleUpdate = (todo) => {
        setIsEdit(true);
        setTempnanoid(todo.nanoid);
        setTodo(todo.todo);
    };

    const handleSubmitChange = () => {
        update(ref(db, `/${tempnanoid}`), {
            todo,
            nanoid: tempnanoid,
        });

        setTodo("");
        setIsEdit(false);
    };

    //delete
    const handleDelete = (todo) => {
        remove(ref(db, `/${todo.nanoid}`));
    };

    return (
        <div className="App">
            <input type="text" value={todo} onChange={handleTodoChange} />
            {isEdit ? (
                <>
                    <button onClick={handleSubmitChange}>Submit Change</button>
                    <button
                        onClick={() => {
                            setIsEdit(false);
                            setTodo("");
                        }}
                    >
                        X
                    </button>
                </>
            ) : (
                <button onClick={writeToDatabase}>submit</button>
            )}
            {todos.map((todo) => (
                <>
                    <h1>{todo.todo}</h1>
                    <button onClick={() => handleUpdate(todo)}>update</button>
                    <button onClick={() => handleDelete(todo)}>delete</button>
                </>
            ))}
        </div>
    );
}

export default Teste;

// npm install firebase
// npm install uid