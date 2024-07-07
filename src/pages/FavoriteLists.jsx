import { useState } from "react";
import Alert from "../components/ui/Alert/Alert.jsx";
import { Card } from "../components/ui/Card/Card.jsx";
import useProductsStore from "../store/useProductsStore.js";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const FavoriteList = () => {
  const navigate = useNavigate();  // хук для роутинга

  // Стор для работы с продуктами
  const { getFavoriteProducts, onToggleFavorite, getProductById } = useProductsStore();

  const favoriteProducts = getFavoriteProducts();

  const handleCardClick = (id) => {
    navigate(`/cards/${id}`)
  }

  const [alertState, setAlertState] = useState({
    isOpen: false,
    message: "",
  })
  setTimeout((setAlertState), 3000)

  const handleCloseAlert = () => {
    setAlertState({ ...alertState, isOpen: false })
  };

  const handleFavoriteAndShowAlert = (id) => {
    // Достаем из store поле  isFavorite
    const { isFavorite } = getProductById(id);

    onToggleFavorite(id); // Вкл/Выключения товара в сохраненки 

    setAlertState
      ({
        isOpen: true,
        message: isFavorite ? "Товар удален из сохраненок" : "Товар добален в сохранненое"
      });
  };

  return (
    <>
      <section className="favorites">
        <div className="container mx-auto px-4">
          <Link
            to="/cards"
            className=" text-gray-600 hover:text-gray-900 mb-8 inline-flex mt-5">
            <IoIosArrowBack className="mr-1 w-5 h-5" />
            Back
          </Link>
          <h3 className="flex  mb-4 text-4xl font-bold">Сохраненные ранее товары.</h3>
          <div className="flex flex-wrap gap-6">
            {!!favoriteProducts &&
              favoriteProducts.map((product) => (
                <Card
                  key={product?.id}
                  details={product}
                  onCardClick={handleCardClick}
                  onHeartClick={handleFavoriteAndShowAlert}
                />
              ))}
          </div>
        </div>
      </section>
      <Alert
        title="Товар добавлен"
        subtitle={alertState?.message}
        isOpen={alertState?.isOpen}
        isClose={handleCloseAlert}
      // variant="success"
      />
    </>

  );
};

export default FavoriteList;