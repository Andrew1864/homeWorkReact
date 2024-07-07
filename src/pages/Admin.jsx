import Todo from "../components/todo/Todo"
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const Admin = () => {


    return (
        <section className="task-tracker">
            <div className="max-w-7xl mx-auto px-2">
                <Link
                    to="/cards"
                    className=" text-gray-600 hover:text-gray-900 mb-8 inline-flex mt-5">
                    <IoIosArrowBack className="mr-1 w-5 h-5" />
                    Back
                </Link>
                <h2 className="mb-4 text-4xl font-bold">Задачи.</h2>
                <Todo />
            </div>
        </section >
    )
}


export default Admin
