import React from 'react'
import LectureDetailScheduleCard from './LectureDetailScheduleCard';

const LectureDetailSchedule = () => {
    return (
        <div className='my-7'>
            <p className='text-lg font-bold text-accent mb-6'>μμμΌμ </p>
            <div className='flex gap-3'>
                <LectureDetailScheduleCard />
                <LectureDetailScheduleCard />
                <LectureDetailScheduleCard />
            </div>
        </div>
    )
}

export default LectureDetailSchedule