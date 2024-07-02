// import { useEffect } from "react";
import { IoInformationCircle } from "react-icons/io5";
import { FaRegCheckCircle } from "react-icons/fa";
import { IoWarning } from "react-icons/io5";
import { MdError } from "react-icons/md";
import { IoIosCloseCircleOutline } from "react-icons/io";


/**
 * @param {object} props - Свойства компонента.
 * @param {string} props.variant - Вариант уведомления (info, warning, success, error)
 * @param {string} props.title - Заголовок компонента 
 * @param {string} props.subtitle - Подзаголовок компонента 
 * @param {boolean} props.isOpen - Компанент показа
 * @param {function} props.isClose - Компанент закрытия
 * @returns {JSX.Element} Элемент JSX.
 */

const Alert = ({
    variant = "info",
    title,
    subtitle,
    isOpen,
    onclose,
}) => {
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

    // useEffect(() => {
    //     if (isOpen) {
    //         const timer = setTimeout(() => {
    //             onclose();
    //         }, 3000)
    //         return () => clearTimeout(timer)
    //          console.log("123"(onclose))
    //     }
    // }, [isOpen, onclose])
   
    return (
        isOpen &&(
            <div
            className={`flex items-center ${variantClasses[variant]} absolute z-10 bottom-4 left-4 w-96 px-3 py-2 rounded-sm`}
            role="alert"
        >
            <div id="icon">{iconsVariants[variant]}</div>
            <div className="ml-4 mr-4">
              {title && <h3 className="font-bold text-md text-zinc-800">{title}</h3>}  
               {subtitle && <p className="text-md text-zinc-800">{subtitle}</p>} 
            </div>
            <button className="absolute right-2 top-2" onClick={onclose}>
                <IoIosCloseCircleOutline className="w-5 h-5" />
            </button>
        </div>
        )
    );
};

export default Alert;