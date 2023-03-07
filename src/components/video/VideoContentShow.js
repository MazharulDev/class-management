import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
// import CourseVideoPlayer from './CourseVideoPlayer';
import VideoContents from './VideoContents';

const VideoContentShow = () => {
    const id = "63eb51569dd5aeec55a4654c"
    // const [index, setIndex] = useState(0);
    const [courseContent, setCourseContent] = useState([])

    // let queryUrl = http://localhost:5000/api/v1/course-content/contents/class?courseid=63eb51569dd5aeec55a4654c&classname=How%20to%20add%20primary
    const url = `http://localhost:5000/api/v1/course-content/content/${id}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(result => setCourseContent(result?.data?.content))
    }, [url])
    // const handleNext = () => {
    //     setIndex(prevIndex => (prevIndex + 1) % courseContent?.length);
    // };
    // const handlePrev = () => {
    //     setIndex(prevIndex => (prevIndex - 1 + courseContent?.length) % courseContent?.length);
    // };
    // const courseItem = courseContent[index]
    return (
        <div className='container mx-auto my-10'>
            <div className='grid lg:grid-cols-3 justify-between gap-10'>
                <div className='col-span-2'>
                    <div className=''>
                        {/* <CourseVideoPlayer courseContent={courseItem} index={index} handlePrev={handlePrev} handleNext={handleNext} /> */}
                        <Outlet />
                    </div>

                </div>
                <div className='py-5 px-2 border-2 h-screen rounded-md gap-2 overflow-y-scroll'>
                    <div className='px-2 mb-4'>
                        <h2 className='text-2xl'>কোর্স সিলেবাস</h2>
                    </div>
                    {
                        courseContent.map((content, index) => (

                            <VideoContents key={content._id} serial={index} content={content} />
                        ))
                    }
                </div>
            </div>

        </div>
    );
};

export default VideoContentShow;