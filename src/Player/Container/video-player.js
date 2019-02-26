import React,{Component} from 'react';
import VideoPlayerLayout from '../Components/videoplayerlayout';
import Video from '../Components/video';
import Title from '../Components/title';
class VideoPlayer extends Component {
    render() {
      return (
        <VideoPlayerLayout handleSet={this.props}>
        <Title
        title="me la pela el pino alv :v"
        />
         <Video
         autoplay={true}
         src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
         />
        </VideoPlayerLayout>
      )
    }
  }
  
  export default VideoPlayer;