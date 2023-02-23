import { Component } from 'react';
import { Box } from './Box';
import { Searchbar } from './Searchbar/Searchbar';
import { Modal } from './Modal/Modal';
import { fetchImage } from 'services/api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  REJECTED: 'rejected',
  RESOLVED: 'resolved',
};

export class App extends Component {
  state = {
    images: [],
    error: null,
    status: Status.IDLE,
    showModal: false,
  };

  handleFormSubmit = imageName => {
    this.getSearchImage(imageName);
  };

  getSearchImage = async name => {
    try {
      this.setState({ status: Status.PENDING });
      const images = await fetchImage(name);
      this.setState({ images: images.hits, status: Status.RESOLVED });
    } catch (error) {
      this.setState({ error, status: Status.REJECTED });
      console.log(error.message);
    }
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { showModal, images, status } = this.state;

    return (
      <Box display="grid" gridTemplateColumns="1fr" gridGap={4} pb={5}>
        <Searchbar onSubmit={this.handleFormSubmit} />

        {status === Status.PENDING && <Loader />}

        {images.length > 0 && <ImageGallery photos={images} />}

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <Box>modal</Box>
          </Modal>
        )}
      </Box>
    );
  }
}
