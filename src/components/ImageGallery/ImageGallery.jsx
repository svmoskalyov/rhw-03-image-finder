import { Image, ImageItem, ImageList } from "./ImageGallery.styled";

export const ImageGallery = ({ photos }) => {
  return (
    // console.log(photos)

    <ImageList>
      {photos.map(({ id, webformatURL }) => {
        return (
          <ImageItem key={id}>
            <Image src={webformatURL} alt="" />
          </ImageItem>
        );
      })}
    </ImageList>
  );
};
