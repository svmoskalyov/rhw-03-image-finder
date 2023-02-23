import { Component } from 'react';
import { Box } from './Box';
import { Searchbar } from './Searchbar/Searchbar';
import { Modal } from './Modal/Modal';
import { fetchImage } from 'services/api';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  REJECTED: 'rejected',
  RESOLVED: 'resolved',
};

export class App extends Component {
  state = {
    imageName: '',
    images: [],
    error: null,
    status: Status.IDLE,
    showModal: false,
  };

  handleFormSubmit = imageName => {
    console.log(imageName);
    this.setState({ imageName });
  };

  getSearchImage = async () => {
    try {
      this.setState({ status: Status.PENDING });
      const images = await fetchImage();
      this.setState({ images, status: Status.RESOLVED });
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
    const { showModal } = this.state;

    return (
      <Box display="grid" gridTemplateColumns="1fr" gridGap={4} pb={5}>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <button type='button' onClick={this.getSearchImage}>Search image</button>

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <Box>modal</Box>
          </Modal>
        )}
      </Box>
    );
  }
}
