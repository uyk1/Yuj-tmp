import React from 'react'

const LectureDetailCarousel = () => {
    return (
        <div>
            <div class="carousel w-96">
                <div id="item1" class="carousel-item relative w-full">
                    <img src="./assets/Sample.jpg" class="w-full" />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#item3" class="btn btn-circle">❮</a>
                        <a href="#item2" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="item2" class="carousel-item relative w-full">
                    <img src="./assets/Sample2.jpg" class="w-full" />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#item1" class="btn btn-circle">❮</a>
                        <a href="#item3" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="item3" class="carousel-item relative w-full">
                    <img src="./assets/Sample3.jpg" class="w-full" />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#item2" class="btn btn-circle">❮</a>
                        <a href="#item1" class="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <div class="flex justify-center w-96 py-2 gap-2">
                <a href="#item1" class="btn btn-xs">1</a>
                <a href="#item2" class="btn btn-xs">2</a>
                <a href="#item3" class="btn btn-xs">3</a>
            </div>
        </div>
    )
}

export default LectureDetailCarousel