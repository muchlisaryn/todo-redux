import { useDispatch} from "react-redux"
import { deleteTodo, todoChecked} from "../Todos/todoSlice"
import "./component.css"
import Swal from "sweetalert2"

export default function ListTodos ({title, completed, id, date}) {

    const dispatch = useDispatch()

    const handleDelete = (() => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
            dispatch(deleteTodo({id}))
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
                
              )
            }
          })
        
    })

    const checked = (() => {
        dispatch(todoChecked({id}))
    })

    return (
        <div className="list-todos">
                <div className="d-flex justify-content-between align-items-center mt-2">
                    <div><input type="checkbox" onClick={checked} checked={completed? "checked" : ""} /></div>
                    <div className="ms-3 fw-bold" style={{ textDecoration : completed ? "line-through" : ""}}>{title}</div>
                    <div className="d-flex align-items-center">
                    <div className="ms-3 text-success fs-6 ">{date}</div>
                    <button className="ms-3 btn btn-danger" onClick={handleDelete}>Delete</button>
                    </div>
                    
                </div>
                <hr/>
        </div>
    )
}