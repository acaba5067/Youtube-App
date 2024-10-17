import React from 'react'
import './Video.css'
import Playvideo from '../../Components/playvideo/Playvideo'
import Recommendded from '../../Components/Recommended/Recommended'
import { useParams } from 'react-router-dom'
const Video = () => {
  const {videoId,categoryId}=useParams();
  return (
    <div className='play-container'>
      <Playvideo videoId={videoId} />
      <Recommendded categoryId={categoryId}/>
    </div>
  )
}

export default Video