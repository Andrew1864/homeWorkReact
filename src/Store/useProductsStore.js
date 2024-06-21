import { create } from 'zustand'
import { initialProducts } from "../../data.js";
import { json } from 'react-router-dom';

const useProductsStore = create((set) => {
  // Загрузка избранных продуктов из localStorage.
  const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];

  // Инициализация продуктов с учетом сохраненных состояний
  const products = initialProducts?.map((product) => ({
    ...product,
    isFavorite: storedFavorites?.includes(product?.id),
  }));
    /**
   * Переключает состояние сохраненного продукта по id.
   * @param {string} id - id продукта.
   * @returns {Object} Возвращает обновленное состояние продуктов.
   */
  const setFavorite =(id) =>{
    set((state) =>{
      // Обновления продуктов на странице, переключая состояние сох-го продукта 
      const updateProducts = state?.map((product) =>{
        if (product?.id === id) {
          product.isFavorite = !product.isFavorite;
        }
        return product;
      });

// Обновляем id сохраненок для записи в localStorage 
      const updateFavorites = updateProducts
      ?.filter((product) => product?.isFavorite)
      ?.map((product) => product.id);

      localStorage.setItem("Favorites", JSON.stringify(updateFavorites));

      // Вщзращение обновленных продуктов 
        return { product: updateProducts };
    });

    return {
      products,
      setFavorite,
    };
  };
});

export default useProductsStore