import { Input, Button } from 'antd';
import React, { useState, useEffect } from 'react';
import { BoardServiceGroup } from '../application/services';
import PropTypes from 'prop-types';
import { getUser } from '../application/services/auth';

export function Search(props) {

    const { closeModal, action, teste, visible } = props;
    const [key, setkey] = useState('');
    const [boardDes, setBoardDes] = useState('');
    const [loading, setLoading] = useState(false);
    const [boards, setBoards] = useState({});

    const isEmptyText = (text) => !text || !text.trim();
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
    const objectToArray = (data) =>
        !data
            ? []
            : Object.values(data).map((value, index) => ({
                ...value,
                key: Object.keys(data)[index],
            }));


    const handleCreateBoard = async (event, key_) => {
        const Boards = boards.filter(board => board.user);
        var new_data = [];
        Object.entries(boards).forEach(([key, value]) => {
            if (key_ === value.key) {
                new_data.push(value.user.length)
            }
        });

        setLoading(true);
        setkey('');
        event.preventDefault();
        if (isEmptyText(key)) {
            return;
        }
        const action =
            { [new_data[0]]: getUser().uid }

        const a = BoardServiceGroup.userBoards();
        a.child(key_).child('user').update(action);
        setLoading(false);
    };

    return (
        <div className='searchbar py-2 border-b-2  border-transparent mx-10 sm:mx-30   md:mx-40  lg:px-44 '>
            <form className={`flex items-center `} onSubmit={(event) => handleCreateBoard(event)}>
                <Input
                    type='search'
                    className='searchbar border-indigo-600 '
                    placeholder="Type the code
                    "
                    onChange={(event) => setkey(event.target.value)}
                    value={key}
                >
                </Input>
                <Button
                    className="bg-indigo-600 border-transparent"
                    type="primary"
                    onClick={(event) => handleCreateBoard(event, key)}
                >
                    Enter

                </Button>
            </form>
        </div >
    );
};
export default Search;


Search.propTypes = {
    closeModal: PropTypes.func.isRequired,
    action: PropTypes.func.isRequired,
    teste: PropTypes.func.isRequired,
    visible: PropTypes.bool.isRequired,
};