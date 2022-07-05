import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { UserOutlined, StarOutlined } from '@ant-design/icons';
import { boardService, BoardServiceGroup } from '../application/services';
import { BoardServicePersonal } from '../application/services';
import { withAuthorization } from '../auth/auth-hoc';
import { BoardTitle } from '../components/BoardTitle';
import { BoardModal } from '../components/BoardModal';
import { BoardModalup } from '../components/BoardModalup';
import { BoardsPageSkeleton } from '../components/BoardsPageSkeleton';
import { getUser } from '../application/services/auth';

export const BoardsPage = withAuthorization((authUser) => !!authUser)(() => {
    const [boards, setBoards] = useState({});
    const [key, setkey] = useState({});
    const [loading, setLoading] = useState(true);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisible2, setModalVisible2] = useState(false);
    const history = useHistory();
    const teste = getUser().uid
    useEffect(() => {
        setLoading(true);
        (async () => {
            await fetchBoards();
        })();
    }, []);

    const fetchBoards = async () => {
        await boardService.userBoards().on('value', (snapshot) => {
            if (!snapshot) {
                return;
            }
            setBoards(objectToArray(snapshot.val() || {}));
            setLoading(false);
        });
    };

    const addBoard = async (board) => {
        await boardService.addBoard(board);
        setModalVisible(false);
    };
    const handleDataChangeupdate = async (key_board, data) => {
        await BoardServicePersonal.updateBoard(key_board, data);
        setModalVisible(false);
    };

    const starBoard = async (board, starred) => {
        await boardService.updateBoard(board, { starred });
    };
    const handleDataChange = async (key_board) => {
        await boardService.deleteBoard(key_board)
    };
    const teste1 = async (key_board) => {
        await BoardServiceGroup.deleteBoard(key_board)
    };
    const objectToArray = (data) =>
        !data
            ? []
            : Object.values(data).map((value, index) => ({
                ...value,
                key: Object.keys(data)[index],
            }));

    if (loading) {
        return <BoardsPageSkeleton count={4} />;
    }

    const starredBoards = boards.filter((board) => board.starred);

    return (
        <div className={`pt-16 py-4 px-3  border-8 border-transparent`}>
            {!!starredBoards.length && (
                <>
                    <div className="flex mb-3 items-center text-xl">
                        <StarOutlined className={`mr-2`} /> Starred Boards
                    </div>
                    {/*----------------------local onde se mapea os boards------------------------ */}
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {starredBoards.map((board) => (
                            <BoardTitle
                                key_board={board?.key}
                                title={board.title}
                                des={board.des}
                                handleBoardClick={() => history.push(`boards/${board?.key}`)}
                                handleBoardStarToggling={() =>
                                    starBoard(board?.key, !board.starred)
                                }
                                handleDataChange={() =>
                                    handleDataChange(board.key)
                                }
                                starred={board.starred}

                            />

                        ))}

                    </div>
                </>
            )}

            <div className="flex mb-3 pt-2 items-center text-xl">
                <UserOutlined className={`mr-2`} /> Personal Boards
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <BoardTitle
                    title="Add new board"
                    addition={true}
                    handleBoardClick={() => setModalVisible(true)}
                />
                {boards.map((board) => (
                    <div> <div>
                        <BoardTitle
                            key_board={board?.key}
                            title={board.title}
                            des={board.des}
                            handleBoardClick={() => history.push(`boards/${board?.key}`)}
                            handleBoardStarToggling={() => starBoard(board?.key, !board.starred)}
                            handleDataChange={() =>
                                handleDataChange(board.key)
                            }
                            handleBoardClick1={() => { setModalVisible2(true); setkey(board.key); }
                            }
                        />

                    </div>
                    </div>

                ))}
                <BoardModalup
                    action={() => handleDataChangeupdate()}
                    key_board={key}
                    closeModal={() => setModalVisible2(false)}
                    visible={modalVisible2}
                />

            </div>
            <BoardModal
                action={addBoard}
                teste={teste}
                closeModal={() => setModalVisible(false)}
                visible={modalVisible}
            />

        </div>
    );
});
