import React, { useState } from "react";
import styles from './style.module.css'

const Video = ({src, title}: React.VideoHTMLAttributes<HTMLVideoElement>) => {

  return (
    <iframe src={src} title={title}/>
  )
}

export default Video