
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import useForm from "../hooks/useForm";

function Admin() {
    // Использование хука для обработки данных
    const { formData, handleSubmite, handleInputChange } = useForm({
        name: "",
        descriotion: "",
    })

    console.log(handleSubmite)


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
                <div className="w-full max-w-xs">
                    <form onSubmit={handleSubmite}>
                        <div className="mb-4">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="task name">
                                Название товара
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3  text-gray-700 leading-tight
                                focus:outline-none focus:shadow-outline"
                                name="name"
                                type="text"
                                value={formData?.name}
                                onInput={handleInputChange}
                                placeholder="Введите название" />
                        </div>
                        <div className="mb-4">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="task name">
                                Описание товара
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3  text-gray-700 leading-tight
                                focus:outline-none focus:shadow-outline"
                                name="descriotion"
                                type="text"
                                value={formData?.descriotion}
                                onInput={handleInputChange}
                                placeholder="Введите описание" />
                        </div>
                        <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-normal py-2 px-4 rounded
                            focus:outline-none focus:shadow-outline">
                            Add Task
                        </button>
                    </form>
                </div>
            </div>
        </section >
    )
}


export default Admin
