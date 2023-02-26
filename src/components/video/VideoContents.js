import React from 'react';
import { AiFillPlayCircle } from "react-icons/ai"
import { Link } from 'react-router-dom';

const VideoContents = ({ content, serial }) => {
    // console.log(serial)
    console.log(content);
    return (
        <div className='mb-2'>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                    {content.chapter}
                </div>
                <div className="collapse-content">
                    <Link to={`/class/li/${content?._id}`} className='flex justify-start gap-2 items-center cursor-pointer hover:text-green-400'>
                        <AiFillPlayCircle className='text-2xl text-gray-500' />
                        <p>{content.contentTitle}</p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default VideoContents;