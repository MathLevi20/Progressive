import { Button, Input, Modal } from 'antd';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { BoardServicePersonal } from '../application/services';




export const BoardModalup = (props) => {

    const { closeModal, visible, key_board } = props;
    const [boardTitle, setBoardTitle] = useState('');
    const [boardDes, setBoardDes] = useState('');
    const [loading, setLoading] = useState(false);
    const boardId = () => key_board;
    const isEmptyText = (text) => !text || !text.trim();

    const handleCreateBoard = async (event, key_board) => {

        const update = BoardServicePersonal.updateBoard();
        setLoading(true);
        event.preventDefault();
        if (isEmptyText(boardTitle)) {
            return;
        }
        await update.child(key_board).update({
            title: boardTitle,
            des: boardDes

        });
        setBoardTitle('');
        setBoardDes('');
        setLoading(false);

    };

    return (
        <Modal
            title="Update board"
            width="400px"
            visible={visible}
            onCancel={closeModal}
            footer={null}
        >
            <form className={`w-full`} onSubmit={(event) => handleCreateBoard(event)}>
                <Input
                    className={`mb-3`}
                    placeholder="Title"
                    onChange={(event) => setBoardTitle(event.target.value)}
                    value={boardTitle}
                />
                <Input
                    className={`mb-3`}
                    placeholder="Description"
                    onChange={(event) => setBoardDes(event.target.value)}
                    value={boardDes}
                />

                <Button
                    type="primary"
                    onClick={(event) => handleCreateBoard(event, key_board)}
                    loading={loading}
                    disabled={isEmptyText(boardTitle)}
                >
                    Add Update
                </Button>

            </form>
        </Modal>
    );
};

BoardModalup.propTypes = {
    closeModal: PropTypes.func.isRequired,
    update: PropTypes.func.isRequired,
    visible: PropTypes.bool.isRequired,
    key: PropTypes.string.isRequired,
};
