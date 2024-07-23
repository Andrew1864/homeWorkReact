import { useState } from "react";
import useForm from "../../../hooks/useForm";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import useProductsStore from "../../../store/useProductsStore";
import { Modal } from "../Modal/Modal"
import Input from "../Input/Input";
import { useAuth } from "../../../hooks/useAuth"

/** Массив пунктов меню */
const navItems = [
  { name: "Home", path: "/" },
  { name: "Cards", path: "/cards" },
  { name: "Admin", path: "/admin" },
];

/**
 * Компонент Шапка.
 * @returns {JSX.Element} Элемент header.
 */
const Header = () => {
  const [showModal, setShowModal] = useState(false);

  const { formValues, formErrors, handleInput, resetForm } = useForm({
    text: "",
    password: "",
  });

  const { onRegister } = useAuth();

  console.log('данные формы', formValues);

  const location = useLocation();
  const navigate = useNavigate(); // хук для роутинга

  const { getFavoriteProducts } = useProductsStore();

  const favoritesCount = getFavoriteProducts()?.length;

  // Обработчик клика по карточке (для открытия сайдбара, например)
  const handleOpenFavorite = () => {
    navigate(`/Favorites`);
  };


  /**
   * Определяет, активна ли ссылка.
   * @param {string} path - Путь ссылки.
   * @returns {boolean} ссылка активна или нет.
   */
  const isActiveLink = (path) => {
    return (
      location?.pathname === path ||
      (path === "/cards" && location?.pathname?.startsWith("/cards"))
    );
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    onRegister(formValues);

    setShowModal(false);

    resetForm();
  }

  return (
    <header className="bg-white shadow fixed top-0 left-0 right-0 z-10">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex justify-between h-16">
          <img src="https://tailus.io/sources/blocks/company-site/preview/images/clients/airbnb.svg" className="p-4 w-28" alt="Your Company"></img>
          <nav className="container mx-auto flex justify-conte items-center">
            <NavLink to="/" className="text-lg font-bold hover:text-gray-700">
              My App
            </NavLink>
            <div className="space-x-4">
              {navItems?.map((item) => (
                <NavLink
                  to={item?.path}
                  key={item?.path}
                  className={`px-3 py-2 rounded transition ${isActiveLink(item?.path) ? "text-blue-500" : ""
                    }`}
                >
                  {item?.name}
                </NavLink>
              ))}
            </div>
          </nav>
          <div id="buttons-wrapper" className="inline-flex items-center">
            <button
              type="button"
              className="border-2 text-indigo-500 border-indigo-500 font-medium py-2 px-4 rounded"
            >
              Login
            </button>
            <button
              type="button"
              className="ml-3 border-2 border-indigo-500 bg-indigo-500 text-white font-medium py-2 px-4 rounded"
              onClick={() => setShowModal(true)}
            >
              Registeration
            </button>
          </div>
          {showModal && (
            <Modal
              title="Registration form"
              isOpen={showModal}
              onClose={() => setShowModal(false)}
            >
              <form onSubmit={handleFormSubmit}>
                <Input
                  label="Login"
                  name="text"
                  type="text"
                  value={formValues?.text}
                  onInput={handleInput}
                  placeholder="Enter your login"
                  error={formErrors?.text}
                  required
                />
                <Input
                  label="Password"
                  type="password"
                  name="password"
                  value={formValues?.password}
                  onInput={handleInput}
                  placeholder="Enter your password"
                  error={formErrors?.password}
                  required
                />

                <button
                  className="bg-indigo-500 text-white font-medium py-2 px-4 rounded"
                  type="submit"
                >
                  Submit data
                </button>
              </form>
            </Modal>
          )}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button type="button"
              onClick={handleOpenFavorite}
              className="relative bg-transparent p-1 mr-3 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <svg
                fill="currentColor"
                width="24"
                height="24"
                viewBox="0 0 32 32"
              >
                <path d="M27.303,12a2.6616,2.6616,0,0,0-1.9079.8058l-.3932.4054-.397-.4054a2.6615,2.6615,0,0,0-3.8157,0,2.7992,2.7992,0,0,0,0,3.8964L25.0019,21l4.2089-4.2978a2.7992,2.7992,0,0,0,0-3.8964A2.6616,2.6616,0,0,0,27.303,12Z" />
                <path d="M2,30H4V25a5.0059,5.0059,0,0,1,5-5h6a5.0059,5.0059,0,0,1,5,5v5h2V25a7.0082,7.0082,0,0,0-7-7H9a7.0082,7.0082,0,0,0-7,7Z" />
                <path d="M12,4A5,5,0,1,1,7,9a5,5,0,0,1,5-5m0-2a7,7,0,1,0,7,7A7,7,0,0,0,12,2Z" />
                <rect className="fill-none" width="32" height="32" />
              </svg>
              {!!favoritesCount?.length && (
                <span className="w-4 h-4 mb-1 text-xs/6 px-1 leading-4 text-white inline-flex justify-center justify-items-center bg-indigo-500 rounded-3xl absolute  bottom-4 right-0">
                  {favoritesCount?.length}
                </span>
              )}
            </button>
            <button
              type="button"
              className="bg-transparent p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <svg
                fill="currentColor"
                width="24"
                height="24"
                viewBox="0 0 32 32"
                aria-hidden="true"
              >
                <path d="M17 24H21V28H17zM24 24H28V28H24zM17 17H21V21H17zM24 17H28V21H24z"></path>
                <path d="M28,11h-6V7c0-1.7-1.3-3-3-3h-6c-1.7,0-3,1.3-3,3v4H4c-0.6,0-1,0.4-1,1c0,0.1,0,0.1,0,0.2l1.9,12.1c0.1,1,1,1.7,2,1.7H15v-2	H6.9L5.2,13H28V11z M12,7c0-0.6,0.4-1,1-1h6c0.6,0,1,0.4,1,1v4h-8V7z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;


