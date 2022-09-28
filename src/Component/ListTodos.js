import { useDispatch } from "react-redux"

export default function ListTodos () {

    const dispatch = useDispatch()

    return (
        <div className="d-flex justify-content-center mt-2">
            <div><input type="checkbox"/></div>
            <div className="ms-3">name</div>
            <div><button className="ms-3">Delete</button></div>
        </div>
    )
}