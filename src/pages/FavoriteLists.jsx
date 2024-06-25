import { Card } from "../components/ui/Card/Card.jsx";
import useProductsStore from "../store/useProductsStore.js";
import { Link } from "react-router-dom";

const FavoriteList = () => {


  // Стор для работы с продуктами
  const { getFavoriteProduct, setFavorite } = useProductsStore();

  const favoriteProducts = getFavoriteProduct();

  
  return (
    <section className="products">
      <div className="container mx-auto px-4">
      <h3 className="flex mb-3">Сохраненные ранее товары</h3>
      <Link
          to="/cards"
          className=" text-indigo-500 hover:text-indigo-600 border-b-2 border-b-indigo-500 mb-8 inline-flex"
        >
          Вернуться карточкам
        </Link>
        <div className="flex flex-wrap justify-between">
          {!!favoriteProducts &&
            favoriteProducts.map((product) => (
              <Card
                key={product?.id}
                details={product}
                onToggleFavorite={setFavorite}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default FavoriteList;