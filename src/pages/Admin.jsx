
import Todo from "../components/todo/Todo"

const Admin = () => {

   
    return (
        <section className="task-tracker">
            <div className="max-w-7xl mx-auto px-2">
                <h2 className="mb-4 text-4xl font-bold">Задачи.</h2>
                <Todo />
            </div>
        </section >
    )
}


export default Admin
 