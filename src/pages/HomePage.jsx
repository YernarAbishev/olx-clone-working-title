import { Link } from "react-router-dom";
import BoardList from "../components/boards/BoardList";
import CategoryList from "../components/categories/CategoryList";
import { ALL_BOARDS_PAGE_ROUTE } from "../utils/consts";


function HomePage() {
    return (
        <main className="main">
            <section className="categories">
                <div className="container">
                    <h2 className="title">Бөлімдер</h2>
                    <CategoryList />
                </div>
            </section>
            <section className="boards">
                <div className="container">
                    <h2 className="title">Соңғы тақталар</h2>
                    <BoardList />
                    <div className="centered">
                        <Link to={ALL_BOARDS_PAGE_ROUTE} className="btn is-primary">Барлық тақталар</Link>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default HomePage;