import React from 'react'
import LectureDetailCarousel from '../components/lectureDetailCarousel/LectureDetailCarousel';
import LectureDetailInfoBox from '../components/lectureDetailInfoBox/LectureDetailInfoBox';
import LectureDetailSchedule from './../components/lectureDetailScheduleCard/LectureDetailSchedule';

const login = () => {
  return (
    <div>
      <div className='flex justify-center'>
        <LectureDetailCarousel />
      </div>
      <div>
        <LectureDetailInfoBox />
      </div>
      <div>
        <LectureDetailSchedule />
      </div>
    </div>
  )
}

export default login;