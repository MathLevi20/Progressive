import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ProfileOutlined } from '@ant-design/icons';
import { BoardServiceGroup } from '../application/services';
import { getUser } from '../application/services/auth';
import { withAuthorization } from '../auth/auth-hoc';
import { BoardTitle } from '../components/BoardTitleGroup';
import { BoardModal } from '../components/BoardModal';
import { Search } from '../components/SearchBar';
import { BoardModalup } from '../components/BoardModalGroup';
import { BoardsPageSkeleton } from '../components/BoardsPageSkeleton';

export const BoardsGroup = withAuthorization((authUser) => !!authUser)((props) => {

    const [boards, setBoards] = useState({});
    const [loading, setLoading] = useState(true);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisible2, setModalVisible2] = useState(false);
    const [key, setkey] = useState({});
    const history = useHistory();
    const teste = getUser().uid

    useEffect(() => {
        setLoading(true);
        (async () => {
            await fetchBoards();
        })();
    }, []);

    const fetchBoards = async () => {
        await BoardServiceGroup.userBoards().on('value', (snapshot) => {
            if (!snapshot) {
                return;
            }
            setBoards(objectToArray(snapshot.val() || {}));
            setLoading(false);
        });
    };

    const addBoard = async (board) => {
        const a = BoardServiceGroup.addBoard();

        await a.push(board);
        setModalVisible(false);
    };
    const handleDataChangeupdate = async (key_board, data) => {
        await BoardServiceGroup.userBoards().child(key_board).update(data);
        setModalVisible(false);
    };

    const starBoard = async (board, starred) => {
        await BoardServiceGroup.updateBoard(board, { starred });
    };
    const handleDataChange = async (key_board) => {
        await BoardServiceGroup.deleteBoardGroup(key_board)
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

    const Boards = boards.filter(board => board.user);
    const Board = Boards.filter(board => board.user);

    return (

        <div className={`pt-16 py-4 px-3  border-8 border-transparent`}>

            <div className="flex pt-2 items-center text-xl">
                <ProfileOutlined className={`mr-2`} />Group Boards

            </div>
            <Search
                teste={getUser().uid}
            />
            <div className="grid grid-cols-1 gap-3  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <BoardTitle
                    title="Add new board"
                    addition={true}
                    handleBoardClick={() => setModalVisible(true)}
                />
                {Board.map((board) => {
                    if (board.user.toString().indexOf(teste) > -1) {
                        return (
                            <div>
                                <div key={board.key}>
                                    <BoardTitle
                                        key_board={board.key}
                                        title={board.title}
                                        des={board.des}
                                        handleBoardClick={() => history.push(`boardsgroup/${board?.key}`)}
                                        handleBoardStarToggling={() => starBoard(board?.key, !board.starred)}
                                        handleDataChange={() =>
                                            handleDataChange(board.key)
                                        }
                                        text={board.key}
                                        PopUp={() =>
                                            handleDataChange(board.key)
                                        }

                                        handleBoardClick1={() => { setModalVisible2(true); setkey(board.key); }
                                        }
                                    />

                                </div>


                            </div>

                        )
                    }
                })}
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

