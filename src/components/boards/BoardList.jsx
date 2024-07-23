import { useEffect, useState } from "react";
import BoardCard from "./BoardCard";
import axiosInstance from "../../services/axiosInstance";

function BoardList() {

    const [boards, setBoards] = useState([]);

    useEffect(() => {
        async function fetchBoards() {
            try {
                const res = await axiosInstance.get('/board');
                setBoards(res.data);
                // const res = await fetch(
                //     "https://23578b50ab080ebe.mokky.dev/board"
                // );
                // const data = await res.json();
                // setBoards(data);
            } catch(e) {
                console.log(e);
            }
        }

        fetchBoards();
    }, [])



    return (
        <div className="board-list">
            {boards.map((board) => (
                <BoardCard board={board} key={board.id} />
            ))}
        </div>
    );
}

export default BoardList;