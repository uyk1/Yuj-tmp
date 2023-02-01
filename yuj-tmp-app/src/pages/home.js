import React from 'react'
import LectureItemCard from '../components/lectureItemCard/LectureItemCard';

const home = () => {
  return (
    <div>
      <h1>Home</h1>
      <div className='flex flex-wrap justify-start gap-5'>
        <LectureItemCard className='flex-none p-3'/>
        <LectureItemCard className='flex-none' />
        <LectureItemCard className='flex-none' />
        <LectureItemCard className='flex-none' />
        <LectureItemCard className='flex-none' />
        <LectureItemCard className='flex-none' />
      </div>
    </div>
  )
}

export default home;