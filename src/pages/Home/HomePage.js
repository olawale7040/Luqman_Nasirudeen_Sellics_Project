import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// Actions
import { fetchRandomPhotos, updatePhotos } from "src/slices/imageList";
// Api
import { getRandomPhotos } from "src/Api";
// Styled Components
import Header from "src/components/Header";
import {
  Container,
  Main,
  Divider,
} from "src/components/styles/Container.styled";
import { AddPhotoStyled } from "src/components/styles/AddPhotoStyled";
import { Image } from "src/components/styles/Image.styled";
// App Components
import ApprovedPhotos from "src/components/ApprovedPhotos";
import Footer from "src/components/Footer";

const HomePage = () => {
  const dispatch = useDispatch();
  // State store
  const { randomPhotos } = useSelector((state) => state.imageList);
  // State
  const [errorMessage, setErrorMessage] = useState("");
  const [isImage, setImage] = useState(false);

  const handleShowImage = () => {
    setImage(true);
  };
  const currentImage = randomPhotos.length > 0 && randomPhotos[0];

  // Handle approve and reject photo
  const handleUpdatePhoto = (type) => {
    const { id } = currentImage;
    if (id && isImage) {
      const payload = { id, type };
      dispatch(updatePhotos(payload));
    }
  };

  // Fetch Random Photos
  const getAllPhotos = useCallback(() => {
    getRandomPhotos()
      .then((response) => {
        if (response.status === 200) {
          dispatch(fetchRandomPhotos(response.data));
        } else {
          // error handling
          setErrorMessage("An error occurred while fetching photos");
        }
      })
      .catch((error) => {
        // error handling
        setErrorMessage(error.message);
      });
  }, [dispatch]);

  useEffect(() => {
    if (randomPhotos.length === 0) {
      getAllPhotos();
    }
  }, [getAllPhotos, randomPhotos]);
  return (
    <div data-testid="home-page-wrapper">
      <Header />
      <Container mt="66px" display="flex" justifyContent="center">
        <Main>
          <ApprovedPhotos handleShowImage={handleShowImage} isImage={isImage} />
          <Divider mb="12px" />
          {!isImage && randomPhotos.length > 0 && (
            <AddPhotoStyled
              width="100%"
              height="360px"
              data-testid="view-photo-box"
            >
              <img
                onClick={handleShowImage}
                data-testid="plus-button"
                src="/img/plus-big.svg"
                alt=""
              />
            </AddPhotoStyled>
          )}
          {randomPhotos.length > 0 && isImage && (
            <Image
              data-testid="current-view-image"
              src={currentImage.urls.regular}
            />
          )}
          {randomPhotos.length === 0 && !errorMessage && (
            <Container
              data-testid="loading-container"
              display="flex"
              justifyContent="center"
              alignItems="center"
              height="360px"
            >
              <div>Loading...</div>
            </Container>
          )}
          {errorMessage && (
            <Container
              display="flex"
              justifyContent="center"
              alignItems="center"
              height="360px"
            >
              <div>{errorMessage}</div>
            </Container>
          )}
          <Divider mt="12px" mb="12px" />
          {randomPhotos.length > 0 && (
            <Footer handleUpdatePhoto={handleUpdatePhoto} isImage={isImage} />
          )}
        </Main>
      </Container>
    </div>
  );
};

export default HomePage;
