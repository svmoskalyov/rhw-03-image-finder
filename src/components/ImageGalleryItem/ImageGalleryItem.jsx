import { Component } from 'react';
import { ImageItem, Image, ImageLarge } from './ImageGalleryItem.styled';
import { Modal } from 'components/Modal/Modal';

export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { showModal } = this.state;
    const { webformatURL, largeImageURL, tags } = this.props.photo;

    return (
      <ImageItem>
        <Image src={webformatURL} alt={tags} onClick={this.toggleModal} />

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <ImageLarge src={largeImageURL} alt={tags} />
          </Modal>
        )}
      </ImageItem>
    );
  }
}
