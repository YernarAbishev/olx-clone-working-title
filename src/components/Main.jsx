import BoardList from "./boards/BoardList";
import CategoryList from "./categories/CategoryList";

function Main() {
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
                </div>
            </section>
        </main>
    );
}

export default Main;