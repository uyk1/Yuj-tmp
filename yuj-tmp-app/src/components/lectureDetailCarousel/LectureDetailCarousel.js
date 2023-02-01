import React from 'react'

const LectureDetailCarousel = () => {
    return (
        <div>
            <div className="carousel w-96">
                <div id="item1" className="carousel-item relative w-full">
                    <img src="./assets/Sample.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#item3" className="btn btn-circle">❮</a>
                        <a href="#item2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="item2" className="carousel-item relative w-full">
                    <img src="./assets/Sample2.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#item1" className="btn btn-circle">❮</a>
                        <a href="#item3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="item3" className="carousel-item relative w-full">
                    <img src="./assets/Sample3.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#item2" className="btn btn-circle">❮</a>
                        <a href="#item1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <div className="flex justify-center w-96 py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
            </div>
        </div>
    )
}

export default LectureDetailCarousel