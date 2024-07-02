import { Card } from "../components/ui/Card/Card.jsx";
import Alert from "../components/ui/Alert/Alert.jsx";
import { useState } from "react";
import useProductsStore from "../store/useProductsStore.js";
import { useNavigate } from "react-router-dom";

const Cards = () => {
  const navigate = useNavigate(); // хук для роутинга
  // Стор для работы с продуктами
  const { products, onToggleFavorite, getProductById } = useProductsStore();

  // Обработчик клика по карточке (для открытия сайдбара, например)
  const handleCardClick = (id) => {
    navigate(`/cards/${id}`);
  };

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
      <section className="products">
        <div className="container mx-auto px-4">
          <h2 className="mb-4 text-4xl font-bold">Страница с товарами.</h2>
          <div className="flex flex-wrap justify-between">
            {!!products &&
              products.map((product) => (
                <Card
                  key={product?.id}
                  details={product}
                  onCardClick={handleCardClick}
                  onHeartClick={handleFavoriteAndShowAlert}
                />
              ))}
          </div>
          <div></div>
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

export default Cards;
