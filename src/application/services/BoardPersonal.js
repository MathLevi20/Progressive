import { db } from './firebase';
import { getUser } from './auth';


const userBoards = () => db.ref('users').child(getUser().uid);

const userBoard = (board) => userBoards().child(board);

const getBoard = (key) => userBoard(key).once('value');

const addBoard = (board) => userBoards().push(board);

const deleteBoard = (key) => db.ref('users').child(getUser().uid).child('boards').child(key).remove();

const updateBoard = (key, data) => db.ref('users').child(getUser().uid).child('boards');

export const BoardServicePersonal = {
    userBoards,
    getBoard,
    addBoard,
    deleteBoard,
    updateBoard,

};
