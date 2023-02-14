import { Component } from 'react';
import Modal from './Modal/Modal';

export class App extends Component {
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

    return (
      <>
        <button type="button" onClick={this.toggleModal}>
          Open Modal
        </button>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <h1>Title</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
              ducimus!
            </p>
            <button type="button" onClick={this.toggleModal}>Close Modal</button>
          </Modal>
        )}
      </>
    );
  }
}
