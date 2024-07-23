import HomePage from "../pages/HomePage";
import AllBoardsPage from "../pages/AllBoardsPage";
import BoardDetailPage from "../pages/BoardDetailPage";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import ProfilePage from "../pages/ProfilePage";
import { ALL_BOARDS_PAGE_ROUTE, BOARD_DETAIL_PAGE_ROUTE, HOME_PAGE_ROUTE, LOGIN_PAGE_ROUTE, PROFILE_PAGE_ROUTE, SIGN_UP_PAGE_ROUTE } from "./consts";

export const routes = [
    {
        path: HOME_PAGE_ROUTE,
        element: HomePage
    },
    {
        path: ALL_BOARDS_PAGE_ROUTE,
        element: AllBoardsPage
    },
    {
        path: BOARD_DETAIL_PAGE_ROUTE,
        element: BoardDetailPage
    },
    {
        path: LOGIN_PAGE_ROUTE,
        element: LoginPage
    },
    {
        path: SIGN_UP_PAGE_ROUTE,
        element: SignUpPage
    },
    {
        path: PROFILE_PAGE_ROUTE,
        element: ProfilePage
    },
];



