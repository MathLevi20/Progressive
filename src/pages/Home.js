import React, { useEffect, useState } from 'react';
import { Menu } from 'antd';
import { useHistory } from 'react-router-dom';
import { UserOutlined, StarOutlined } from '@ant-design/icons';
import { boardService } from '../application/services';
import { withAuthorization } from '../auth/auth-hoc';
import { BoardsPageSkeleton } from '../components/BoardsPageSkeleton';
import { getUser } from '../application/services/auth';
import { signOut } from '../application/services/auth';


export const Home = () => {
    return (
        <div className={`pt-16 py-4 px-3`}>
            <div className="flex mb-3 items-center text-xl">
                <UserOutlined className={`mr-2`} /> My Profile
            </div>
            <div>
                <div className='flex justify-center items-center'></div>
                <Menu className='flex justify-center items-center '>
                    <Menu.Item className='bg-indigo-900 rounded text-white' key="0" onClick={() => signOut()}>
                        Sign Out
                    </Menu.Item>
                </Menu>

            </div>
        </div>
    );
};
