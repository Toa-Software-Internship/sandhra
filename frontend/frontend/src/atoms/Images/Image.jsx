import React from 'react'
import "./Image.css"
import leftimage from "../../images/leftimage.svg"
import rightimage from "../../images/rightimage.svg"
import Descr from '../descr/Descr'

const Image=(props) => {
  return (
    <div className="dashboard-style">
        <img src={leftimage} alt ="left image"/>
        <Descr/>
        <img src={rightimage} alt ="right image"/>
    </div>
  )
}

export default Image