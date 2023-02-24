import { Component } from 'react';
import { Box } from './Box';
import { Searchbar } from './Searchbar/Searchbar';
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
    request: '',
    images: [],
    error: null,
    status: Status.IDLE,
    page: 1,
    totalPages: 1,
  };

  componentDidUpdate(_, prevState) {
    const { request, page } = this.state;
    const prevRequest = prevState.request;
    const prevPage = prevState.page;
    const nextRequest = request;
    const nextPage = page;

    if (prevRequest !== nextRequest) {
      this.setState({ images: [], page: 1 });
    }

    if (prevRequest !== nextRequest || prevPage !== nextPage) {
      this.getSearchImage();
    }
  }

  handleFormSubmit = request => {
    this.setState({ request });
  };

  getSearchImage = async () => {
    const { request, page } = this.state;

    try {
      this.setState({ status: Status.PENDING });
      const images = await fetchImage(request, page);
      // console.log(images);
      // console.log(images.total);
      // console.log(typeof images.total);

      if (images.total <= 12) {
        // console.log('length <= 12');
        this.setState({
          images: images.hits,
          status: Status.RESOLVED,
        });
      } else {
        // console.log('length > 12');
        this.setState(prevState => ({
          images: [...prevState.images, ...images.hits],
          totalPages: Math.ceil(images.total / 12),
          status: Status.RESOLVED,
        }));
      }
    } catch (error) {
      this.setState({ error, status: Status.REJECTED });
      console.log(error.message);
    }
  };

  onClickLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { images, status, page, totalPages } = this.state;

    return (
      <Box display="grid" gridTemplateColumns="1fr" gridGap={4} pb={5}>
        <Searchbar onSubmit={this.handleFormSubmit} />

        {status === Status.PENDING && <Loader />}

        {status === Status.RESOLVED && images.length > 0 && (
          <ImageGallery photos={images} />
        )}

        {page < totalPages && (
          <button type="button" onClick={this.onClickLoadMore}>
            Load more
          </button>
        )}
      </Box>
    );
  }
}
