import useForm from "../hooks/useForm";
import { useEffect, useState } from "react";
import { Drawer } from "../components/ui/Drawer/Drawer";
import Alert from "../components/ui/Alert/Alert";
import Table from "../components/ui/Table/Table";
import useItemsStore from "../store/useItemsStore";

const Admin = () => {
  // Стейт для скрытия/показа компонента Drawer
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  // Стейт для скрытия/показа компонента Alert
  const [isAlertOpen, setAlertOpen] = useState(false);

  // Стейт для показа детальной информации по товару в Drawer
  const [selectedValue, setSelectedValue] = useState(null);


  // Использование абстрактного стора
  const { items, fetchItems, addItem } = useItemsStore();

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  /**
   * Функция для добавления нового продукта в список.
   */
  const handleFormSubmit = (e) => {
    event.preventDefault();

    console.log("Отправленные данные:", formData);

    addItem(formData);
    setDrawerOpen(false); // Закрываем Drawer после добавления продукта
    setAlertOpen(true); // Показываем Alert
    resetForm(); // Сбрасываем форму
  };

  // Использование кастомного хука для обработки данных
  const { formData, handleInput } = useForm(
    {
      name: "",
      category: "",
      price: "",
    },
    setNewProduct
  );

  // Функция для обработки двойного клика на строку таблицы
  const handleRowDoubleClick = (rowData) => {
    console.log(rowData);
    setSelectedValue(rowData); // Помещаем в стейт выбранное значение из строки
    setDrawerOpen(true); // Открываем Drawer
  };

  return (
    <section className="admin">
      <div className="max-w-7xl mx-auto px-2">
        <h2 className="mb-4 text-4xl font-bold text-zinc-800">
          Страница управления товарами
        </h2>

        <button
          className="bg-indigo-500 mb-4 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded"
          onClick={() => setDrawerOpen(true)}
        >
          Добавить товар
        </button>

        <Table
          headers={[
            { key: "name", title: "Название" },
            { key: "category", title: "Категория" },
            { key: "price", title: "Цена" },
          ]}
          data={items}
          onRowDoubleClick={handleRowDoubleClick}
        />

        {isDrawerOpen && (
          <Drawer
            isOpen={isDrawerOpen}
            onClose={() => setDrawerOpen(false)}
            title="Добавление нового товара"
          >
            <div className="w-full max-w-xs">
              <form onSubmit={handleFormSubmit}>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="taskName"
                  >
                    Название товара
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="name"
                    type="text"
                    value={formData?.name}
                    onChange={handleInput}
                    placeholder="Введите название"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="taskName"
                  >
                    Категория товара
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="category"
                    type="text"
                    value={formData?.category}
                    onChange={handleInput}
                    placeholder="Введите категорию"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="taskName"
                  >
                    Цена товара
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="price"
                    type="number"
                    value={formData?.price}
                    onChange={handleInput}
                    placeholder="Введите цену"
                  />
                </div>
                <button
                  className="bg-indigo-500 mb-4 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded"
                  type="submit"
                >
                  Add Item
                </button>
              </form>
            </div>
          </Drawer>
        )}

        <Alert
          title="Добавление товара."
          subtitle="Товар был успешно добавлен."
          //   variant="neutral"
          isOpen={isAlertOpen}
          onClose={() => setAlertOpen(false)}
        />
      </div>
    </section>
  );
};

export default Admin;
