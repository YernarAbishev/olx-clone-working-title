import BoardList from "../components/boards/BoardList";


function AllBoardsPage() {
    return (
        <main className="main">
            <section className="boards">
                <div className="container">
                    <h2 className="title">Барлық тақталар</h2>
                    <BoardList />
                </div>
            </section>
        </main>
    );
}

export default AllBoardsPage;