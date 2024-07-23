import { Link } from "react-router-dom";
import { BOARD_DETAIL_PAGE_ROUTE } from "../../utils/consts";

function BoardCard({board}) {
    return (
        <Link to={BOARD_DETAIL_PAGE_ROUTE.substring(0,BOARD_DETAIL_PAGE_ROUTE.length - 3) + board.id} className="board-item">
            <img src={board.imageUrl} className="board-img" alt={board.name} />
            <div className="board-body">
                <span className="board-title">{board.name}</span>
                <strong className="board-price">{board.price} ₸</strong>
            </div>
        </Link>
    )
}

export default BoardCard;