import React,{Component} from 'react';
import VideoPlayerLayout from '../Components/videoplayerlayout';
import Video from '../Components/video';
import Title from '../Components/title';
import PlayPause from '../Components/play-pause';
class VideoPlayer extends Component {
  state={
    pause:true,
  }
  componentDidMount(){
    this.setState({
      pause:(!this.props.autoplay)
    })
    }
  toogglePlay=(event)=>{
this.setState({
  pause:!this.state.pause
})


  }
    render() {
      return (
        <VideoPlayerLayout handleSet={this.props}>
        <Title
        title="me la pela el pino alv :v"
        />
        <PlayPause
        pause={this.state.pause}
        handleClick={this.toogglePlay}
        />
         <Video
         autoplay={this.props.autoplay}
         src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
         />
        </VideoPlayerLayout>
      )
    }
  }
  
  export default VideoPlayer;