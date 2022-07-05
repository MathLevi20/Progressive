import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import Board from 'react-trello';
import { boardServiceG, BoardServiceGroup } from '../application/services';
import { withAuthorization } from '../auth/auth-hoc';
import { BoardSkeleton } from '../components/BoardSkeleton';

export const BoardPageGroup = withRouter(
    withAuthorization((authUser) => !!authUser)((props) => {
        const [board, setBoard] = useState({
            lanes: [],
        });
        const [loading, setLoading] = useState(false);

        useEffect(() => {
            (async () => {
                setLoading(true);
                await fetchBoard();
                setLoading(false);
            })();
        }, []);
        const boardId = () => props.match?.params?.boards_group;

        const fetchBoard = async () => {

            const data = (await BoardServiceGroup.getBoard(boardId())).val();

            setBoard(prepareBoard(data));
        };

        // Fill empty properties that are important for Board component
        const prepareBoard = (board) => ({
            ...board,
            lanes: (board?.lanes || []).map((lane) => ({
                ...lane,
                cards: lane?.cards || [],
            })),
        });

        const handleDataChange = async (data) => await BoardServiceGroup.updateBoard_KEY(boardId(), data);

        if (loading) {
            return <BoardSkeleton count={5} />;
        }

        return (
            <Board
                className={`pt-16 bg-red-50 h-full`}
                canAddLanes={true}
                editable={true}
                data={{
                    lanes: board.lanes || [],
                }}
                onDataChange={handleDataChange}
            />
        );
    })
);
