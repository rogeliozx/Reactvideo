import React from 'react';
import './videoplayerlayout.css';
const VideoPlayerLayout =(props)=>(
<div className="VideoPlayer">
    {props.children}
</div>
)
export default VideoPlayerLayout;