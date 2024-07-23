import boardsIcon from "../assets/images/header-nav/boards.svg";
import authIcon from "../assets/images/header-nav/auth.svg";
import categoriesIcon from "../assets/images/header-nav/categories.svg";
import { Link } from "react-router-dom";
import { ALL_BOARDS_PAGE_ROUTE, HOME_PAGE_ROUTE, LOGIN_PAGE_ROUTE } from "../utils/consts";

function Header() {
    return (
        <header className="header">
            <div className="container d-flex align-items-center space-between">
                <Link to={HOME_PAGE_ROUTE} className="logo">Olx Clone</Link>
                <ul className="header-nav">
                    <li className="header-nav__item">
                        <Link to={ALL_BOARDS_PAGE_ROUTE} className="header-nav__link">
                            <img src={boardsIcon} alt="Boards" />
                        </Link>
                    </li>
                    <li className="header-nav__item">
                        <Link to={LOGIN_PAGE_ROUTE} className="header-nav__link">
                            <img src={authIcon} alt="Auth" />
                        </Link>
                    </li>
                    <li className="header-nav__item">
                        <Link to={HOME_PAGE_ROUTE} className="header-nav__link">
                            <img src={categoriesIcon} alt="Categories" />
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;