// import { useState, useEffect } from "react";
import { IoInformationCircle } from "react-icons/io5";
import { FaRegCheckCircle } from "react-icons/fa";
import { IoWarning } from "react-icons/io5";
import { MdError } from "react-icons/md";
import { IoIosCloseCircleOutline } from "react-icons/io";


/**
 * @param {object} props - Свойства компонента.
 * @param {string} props.variant - Вариант уведомления (info, warning, success, error)
 * @param {boolean} props.isOpen - Компанент показа
 * @param {function} props.isClose - Компанент закрытия
 * @param {React.ReactNode} props.children - Дочерний элемент компанента
 * @returns {JSX.Element} Элемент JSX.
 */

const Alert = ({ variant = "info", children, isOpen }) => {
    const variantClasses = {
        info: "border-l-4 border-blue-700 bg-blue-100 text-blue-800",
        warning: "border-l-4 border-yellow-700 bg-yellow-100 text-yellow-800",
        success: "border-l-4 border-green-700 bg-green-100 text-green-800",
        error: "border-l-4 border-red-700 bg-red-100 text-red-800",
      };
      
    const iconsVariants = {
        icon: <IoInformationCircle className="w-5 h-5" />,
        warning: <IoWarning className="w-5 h-5" />,
        success: <FaRegCheckCircle className="w-5 h-5" />,
        error: <MdError className="w-5 h-5" />
    }

    return (
        isOpen && (
            <div
            className={`flex items-center ${variantClasses[variant]} absolute z-10 bottom-4 left-4 w-96 px-3 py-2 rounded-sm`}
            role="alert"
        >
            <div id="icon">{iconsVariants[variant]}</div>
            <div className="ml-4 mr-4">{children}</div>
            <h2>Вы успешно добавили в сохраненки</h2>
            <button className="absolute right-2 top-2">
                <IoIosCloseCircleOutline className="w-5 h-5" /> 
            </button>
        </div>
        )
    );

};

export default Alert;