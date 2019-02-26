import React,{Component} from 'react';
import HomeLayout from '../components/home-layout';
import Categories from '../../media/categories';
import Related from '../components/related';
import ModalContainer from '../../widgets/modalcontainer';
import Modal from '../../widgets/Components/modal';
import HandleError from '../../error/containers/handle-error';
import VideoPlayer from '../../Player/Container/video-player';
class Home extends Component {
    state = {
      modalVisible: false,
     
    }
    handleOpenModal = () => {
      this.setState({
        modalVisible: true,
      })
    }
    handleCloseModal = (event) => {
      this.setState({
        modalVisible: false,
      })
    }
    
    render() {
        
      return (
          <HandleError>
        <HomeLayout>
          <Related />
          <VideoPlayer/>
          <Categories
            categories={this.props.data.categories}
            handleOpenModal={this.handleOpenModal}
          />
          {
            this.state.modalVisible &&
            <ModalContainer>
              <Modal
                handleClick={this.handleCloseModal}
              >
                <h1>Esto es un portal</h1>
              </Modal>
            </ModalContainer>
          }
        </HomeLayout>
        </HandleError>
      )
    }
  }
  
  export default Home