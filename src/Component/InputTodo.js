import { useDispatch } from "react-redux"
import { addTodo } from "../Todos/todoSlice"

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
        <form>
            <input type="text" value={value} onChange={inputTodo}/>
            <input type="button" value="submit" onClick={handleSubmit} />
          </form>
    )
}