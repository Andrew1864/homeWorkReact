import { NavLink, useLocation } from "react-router-dom";

/** Массив пунктов меню */
const navItems = [
  { name: "Home", path: "/" },
  { name: "Cards", path: "/cards" },
];

/**
 * Компонент Шапка.
 * @returns {JSX.Element} Элемент header.
 */
const Header = () => {
  const location = useLocation();

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

  return (
    <header className="bg-white text-gray-900 p-4 shadow-lg fixed top-0 w-full z-10 flex">
      <img src="https://tailus.io/sources/blocks/company-site/preview/images/clients/airbnb.svg" className="p-4" alt="Your Company"></img>
      <nav className="container mx-auto flex justify-conte items-center">
        <NavLink to="/" className="text-lg font-bold hover:text-gray-700">
          My App
        </NavLink>
        <div className="space-x-4">
          {navItems?.map((item) => (
            <NavLink
              to={item?.path}
              key={item?.path}
              className={`px-3 py-2 rounded transition ${
                isActiveLink(item?.path) ? "text-blue-500" : ""
              }`}
            >
              {item?.name}
            </NavLink>
          ))}
        </div>
      </nav>
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
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
    </header>
  );
};

export default Header;
