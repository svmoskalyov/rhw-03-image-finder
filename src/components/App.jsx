import { Component } from 'react';
import { Box } from './Box';
import { Searchbar } from './Searchbar/Searchbar';
// import Modal from './xModal/xModal';

export class App extends Component {
  state = {};

  render() {
    return (
      <Box display="grid" gridTemplateColumns="1fr" gridGap={4} pb={5}>
        <Searchbar />
      </Box>
    );
  }
}

// export class App extends Component {
//   state = {
//     showModal: false,
//   };

//   toggleModal = () => {
//     this.setState(({ showModal }) => ({
//       showModal: !showModal,
//     }));
//   };

//   render() {
//     const { showModal } = this.state;

//     return (
//       <>
//         <button type="button" onClick={this.toggleModal}>
//           Open Modal
//         </button>
//         {showModal && (
//           <Modal onClose={this.toggleModal}>
//             <h1>Title</h1>
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
//               ducimus!
//             </p>
//             <button type="button" onClick={this.toggleModal}>
//               Close Modal
//             </button>
//           </Modal>
//         )}
//       </>
//     );
//   }
// }
