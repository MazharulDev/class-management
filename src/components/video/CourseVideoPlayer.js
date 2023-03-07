import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';
// import getYouTubeID from 'get-youtube-id';


const CourseVideoPlayer = () => {
    // const url = singleVideo ? singleVideo?.link : courseContent[0]?.link
    // const id = getYouTubeID(url)
    const title = useParams()
    const [courseContent, setCourseContent] = useState([])
    console.log(title);
    // const url = `http://localhost:5000/api/v1/course-content/content/${id}`
    // useEffect(() => {
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(result => setCourseContent(result?.data?.content))
    // }, [url])
    // console.log(courseContent);
    return (
        <div className='h-[90vh]'>
            {/* class pointer-events-none */}
            <div className='h-[70%]'>
                <ReactPlayer
                    controls={true}
                    config={{
                        file: {
                            attributes: {
                                controlsList: 'nodownload'

                            }
                        },
                        youtube: {
                            playerVars: { showinfo: 0 }
                        },
                    }}
                    width="100%"
                    height="100%"
                    onSeek={true}
                    playing={true}
                    // url={singleVideo ? singleVideo?.link : courseContent[0]?.link}
                    // url={courseContent?.link}
                    // url={"http://localhost:5000/course-video/1675587815446-391766755-Drag%20and%20Drop%20CSV%20Files%20-%20React%20Js.mp4"}
                    // url={`https://www.youtube.com/embed/${id}?rel=0`}
                    light={true}
                />

            </div>
        </div>
    );
};

export default CourseVideoPlayer;