import React, { useEffect, useState } from 'react';
import { Menu } from 'antd';
import { useHistory } from 'react-router-dom';
import { UserOutlined, StarOutlined } from '@ant-design/icons';
import { boardService } from '../application/services';
import { withAuthorization } from '../auth/auth-hoc';
import { BoardsPageSkeleton } from '../components/BoardsPageSkeleton';
import { getUser } from '../application/services/auth';
import { signOut } from '../application/services/auth';


export const myProfile = withAuthorization((authUser) => !!authUser)(() => {
    const [boards, setBoards] = useState({});
    const [loading, setLoading] = useState(true);

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

    const teste1 = getUser()
    console.log(teste1)
    return (
        <div className={`pt-16 py-4 px-3  border-8 border-transparent`}>
            <div className="flex mb-3 items-center text-xl">
                <UserOutlined className={`mr-2`} /> My Profile
            </div>
            <div className='flex justify-center items-center m-15'>
                <div className='bg-indigo-600 content-center m-auto p-5 rounded-lg px-10 shadow-lg shadow-indigo-500/40'>
                    <div className='flex justify-center items-center'>
                        {console.log(teste1)}
                        <img className='w-10/12 rounded-3xl p-4 border-8 border-black' src={teste1.photoURL === null ? "https://img.icons8.com/ios/50/null/gender-neutral-user--v1.png" : teste1.photoURL } alt='imagem-user'></img>
                    </div>
                    <div className='flex justify-center items-center text-white text-2xl'>
                        {teste1.displayName}
                    </div>
                    <div className='flex justify-center items-center text-white'>
                        {teste1.email}
                    </div>
                    {/*<div className='flex justify-center items-center'>
                        {teste1.uid}
                    </div>*/}
                    <div className='flex justify-center items-center'>
                        <button className='bg-indigo-900 rounded text-white px-12 py-3 mt-3' key="0" onClick={() => signOut()}>
                            Sign Out
                        </button>

                    </div>
                    <div className="text-center mt-3 mb-3 text-white ">
                        © Progressive Software
                    </div>
                </div>

            </div>

        </div >
    );
});
