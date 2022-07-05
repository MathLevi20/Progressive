import { StarFilled, StarOutlined, CloseOutlined, ArrowUpOutlined, ShareAltOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import { CopyToClipboard } from 'react-copy-to-clipboard';

export const BoardTitle = ({
    title, des, boards, key_board,
    handleBoardClick, key,
    addition,
    handleBoardStarToggling, handleDataChange, handleBoard,
    starred, handleBoardClick1, PopUp

}) => (
    <div>
        <div
            className={`h-32 rounded-md p-3 font-semibold flex   ${addition ? 'bg-gray-200 text-gray-900 p-1 items-center ' : 'bg-purple-600 text-white justify-between'
                }`}
        >
            <div role="button" tabIndex="0" onKeyDown={() => { }} onClick={() => handleBoardClick()}>
                <div className='flex flex-col'>
                    <div className={addition ? 'm-auto' : ''}>{title}</div>
                    <div >{des}</div>

                </div>

            </div>


            {
                !addition && (
                    <div className="flex flex-nowrap">
                        <CopyToClipboard text={key_board}>
                            <ShareAltOutlined
                                role="button"
                                className=" p-0.5 content-center 
                        transform transition-all text-white text-opacity-75 
                        hover:text-opacity-100 hover:translate-x-px scale-100 
                        hover:scale-110 mt-auto"
                            />
                        </CopyToClipboard>
                        <ArrowUpOutlined role="button"
                            className=" p-0.5 content-center 
                            transform transition-all text-white text-opacity-75 
                            hover:text-opacity-100 hover:translate-x-px scale-100 
                            hover:scale-110 mt-auto"
                            onClick={() => handleBoardClick1(key)} />
                        < CloseOutlined role="button"
                            className=" p-0.5 content-center 
                            transform transition-all text-white text-opacity-75 
                            hover:text-opacity-100 hover:translate-x-px scale-100 
                            hover:scale-110 mt-auto"
                            onKeyDown={() => { }} onClick={() => handleDataChange(key)} />

                        <div
                            role="button"
                            tabIndex="0"
                            className="flex content-center"
                            onClick={(e) => {
                                e.stopPropagation();
                                handleBoardStarToggling();
                            }}
                            onKeyDown={() => { }}
                        >
                        </div>
                    </div >
                )


            }

        </div >
    </div>
);

BoardTitle.propTypes = {
    title: PropTypes.string.isRequired,
    des: PropTypes.string.isRequired,
    key: PropTypes.string.isRequired,
    addition: PropTypes.bool,
    handleBoardClick: PropTypes.func,
    handleDataChange: PropTypes.func,
    handleBoardStarToggling: PropTypes.func,
    starred: PropTypes.bool,
};
