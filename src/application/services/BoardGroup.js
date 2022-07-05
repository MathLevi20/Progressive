import { db } from './firebase';
import { nanoid } from 'nanoid';

const userBoards = () => db.ref('Group');

const userBoard = (board) => userBoards();

const key = (key) => userBoards().child(key);

const getBoard = (key) => userBoards().child(key).once('value');

const addBoard = (board) => userBoards();

const deleteBoard = (key) => db.ref('Group').child(key).child('boards').child(key).remove();

const deleteBoardGroup = (key) => db.ref('Group').child(key).remove();

const updateBoard = (key, data) => db.ref('Group').child(nanoid()).child('boards');

const updateBoard_KEY = (key, data) => userBoards().child(key).update(data);

const updateBoard_teste = (key, data) => userBoard(key).update(data);

export const BoardServiceGroup = {
    userBoards, updateBoard_teste,
    getBoard, userBoard,
    addBoard,
    deleteBoard,
    updateBoard,
    updateBoard_KEY, key, deleteBoardGroup
};
