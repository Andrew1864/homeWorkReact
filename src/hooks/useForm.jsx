import { validateForm } from "../utils/validators";
import { useState } from "react";

/**
 * Хук для управления обработки, обновления и отправки данных формы.
 *
 * @param {Object} initialState - Начальное состояние формы (Объект).
 * @param {Function} setNewState - Функция для обновления ссостояния.
 * @returns {formData} - Объект с состоянием формы.
 * @returns {handleInputChange} - Функция обработчик при смене данных в инпуте.
 * @returns {handleSubmit} - Функция обработчик при отправке формы.
 * @returns {resetForm} - Функция сброса состояния формы.
 */
export function useForm(initialState) {
    // Состояние формы, хранит значения полей
    const [formData, setFormData] = useState(initialState);
    // Состояние для отслеживания ошибок валидации
    const [formErorrs, setFormErorrs] = useState({});

    const handleInput = (event) => {
        const { name, value } = event.target;

        const updateFormState = { ...formData, [name]: value };

        setFormData(updateFormState);

        const validationErorrs = {
            ...formErorrs,
            [name]: validateForm({ [name]: value })[name],
        };
        console.log('ошибки в хуке', validationErorrs);

        setFormErorrs(validationErorrs);
    }

    // Функция для сброса состояния формы
    const resetForm = () => setFormData(initialState);

    return {
        formData,
        formErorrs,
        handleInput,
        resetForm,
    };
}

export default useForm;