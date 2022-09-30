import { useDispatch } from "react-redux"
import { addTodo } from "../Todos/todoSlice"
import "./component.css"

export default function InputTodo ({ value, setValue}) {

    const dispatch = useDispatch()

    const inputTodo =  ((e) => {
        setValue(e.target.value)
    })

    const handleSubmit = (() => {
        dispatch(addTodo({value}))
        setValue("")
    })


    return (
        <div className="input-todo d-flex justify-content-center">
            <div className="input-group">
            <input type="text" value={value} onChange={inputTodo} placeholder="input todo"/>
            <button className="btn btn-success" onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    )
}