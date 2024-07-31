import { Routes, Route } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout.jsx";
import Home from "../../pages/Home.jsx";
import Cards from "../../pages/Cards.jsx";
import Cart from "../../pages/Cart.jsx";
import CardDetail from "../../pages/CardDetail.jsx";
import FavoriteList from "../../pages/FavoriteLists.jsx";
import Admin from "../../pages/Admin.jsx";

/** Массив роутов приложения */
const routes = [
  { path: "/", element: <Home /> },
  { path: "cards", element: <Cards /> },
  { path: "cards/:id", element: <CardDetail /> },
  { path: "cart", element: <Cart /> },
  { path: "Favorites", element: <FavoriteList /> },
  { path: "Admin", element: <Admin /> }
];

/**
 * Рекурсивно отображает роуты и и дочерние роуты.
 * @param {RouteItem[]} routes - Массив роутов.
 * @returns {JSX.Element[]} Массив JSX элементов роутов.
 */
const renderRoutes = (routes) => {
  return routes.map((route) => (
    <Route key={route?.path} path={route?.path} element={route?.element}>
      {route?.children && renderRoutes(route.children)}
    </Route>
  ));
};

/** Корневой компонент приложения с роутами */
const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<MainLayout />}>
      {renderRoutes(routes)}
    </Route>
  </Routes>
);

export default AppRoutes;
