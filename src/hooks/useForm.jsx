import { useState } from "react";
/**
 * Хук для управления обработки, обновления и отправки данных формы.
 *
 * @param {Object} initialState - Начальное состояние формы.
 * @param {Function} setNewState - Функция для обновления ссостояния.
 * @returns {formData} - Объект с состоянием формы.
 * @returns {handleInputChange} - Функция обработчик при смене данных в инпуте.
 * @returns {handleSubmit} - Функция обработчик при отправке формы.
 * @returns {resetForm} - Функция сброса состояния формы.
 */

export function useForm(initialState, setNewState) {

    const [formData, setfromData] = useState(initialState); // Состояние формы 

    const handleInputChange = (event) =>{
        const { name, value } = event?.target; // Извлекаем имя поля и его значение из события 
        // Обновление стейта 
        setfromData({
            ...formData,
            [name]: value,
        })
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // проверка на наличие пустых полей 
        const isEmptyField = Object.values(formData).some(
            (value) => value.trim() === ""
        );

        if(isEmptyField){
            console.log("Все поля обязательны к заполнению");
        } else {
            console.log("Отправленые данные", formData);

            setNewState(formData); // Данные поля не содержат пустых полей 
            resetForm(); // Очистка формы 
        };
    };

    const resetForm = () => setfromData(initialState); // Функция для сброса формы 

    return {
        formData,
        handleSubmit,
        handleInputChange,
    };
}

export default useForm