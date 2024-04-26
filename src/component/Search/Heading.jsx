import React from 'react'
import video from '/header.mp4'
const Heading = () => {
    return (
        <div className="  w-full h-screen flex justify-center items-center sm:flex-row flex-col-reverse">
                <div className=' absolute h-full w-full flex flex-col justify-center items-center'>
                    <h1 data-aos="fade-up" className="sm:text-6xl text-4xl font-extrabold cursor-default text-violet-50">
                        CommuteGo
                    </h1>
                    <p
                        data-aos="fade-up"
                        className="sm:text-3xl mt-5 font-extrabold cursor-default text-2xl text-white text-center"
                    >
                        Best Way To Start Your Journey!
                    </p>
                </div>
        </div>
    )
}

export default Heading
