import { useEffect, useState } from "react";
import userAvatar from "../assets/images/user/auhtor-avatar.png";
import { useParams } from "react-router-dom";
import axiosInstance from "../services/axiosInstance";
import Loader from "../components/Loader";
import Error from "../components/Error";

function BoardDetailPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [board, setBoard] = useState({});
    const {id} = useParams();

    useEffect(() => {
        async function fetchBoard() {
            try {
                setIsLoading(true);
                const res = await axiosInstance.get(`/board/${id}`);
                setBoard(res.data);
            } catch(e) {
                setIsLoading(false);
                setIsError(true);
                console.log(e);
            } finally {
                setIsLoading(false);
            }
        }

        fetchBoard();


    }, [id]);

    if (isError) {
        return <Error />;
    }

    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                <main className="main">
                    <section className="boards">
                        <div className="container">
                            <h2 className="title">{board.name}</h2>
                            <div className="board-detail-card">
                                <img src={board.imageUrl} className="board-detail-img" alt={board.name} />
                                <div className="board-detail-action">
                                    <button className="board-detail-btn">+</button>
                                    <button className="board-detail-btn">-</button>
                                </div>
                            </div>
                            <h2 className="title">Сипаттамасы</h2>
                            <div className="description">
                                {board.description}
                            </div>
                            <h3 className="title">Бағасы: {board.price} ₸ </h3>
                            <div className="board-detail-author">
                                <img src={userAvatar} className="bd-author__avatar" alt="Avatar" />
                                <ul className="bd-author__data">
                                    <li>Ернар</li>
                                    <li>+7 777 333 22 11</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </main>
            )}
        </>
    );
}

export default BoardDetailPage;