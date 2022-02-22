import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// Actions
import { fetchRandomPhotos, updatePhotos } from "src/slices/imageList";

import Header from "src/components/Header";
import { Container } from "src/components/styles/Container.styled";
import { Main } from "src/components/styles/Main.styled";
import ApprovedSection from "src/components/ApprovedSection";
import { Divider } from "src/components/styles/Divider.styled";

import { AddWidgetStyled } from "src/components/styles/AddWidgetStyled";
import { Image } from "src/components/styles/Image.styled";
import Footer from "./Footer";
// import ImageSection from "./ImageSection";
const HomePage = () => {
  const dispatch = useDispatch();
  const { randomPhotos } = useSelector((state) => state.imageList);

  const [isImage, setImage] = useState(false);

  const handleShowImage = () => {
    setImage(true);
  };
  const currentImage = randomPhotos.length > 0 && randomPhotos[0];

  const handleUpdatePhoto = (type) => {
    const { id } = currentImage;
    if (id && isImage) {
      const payload = { id, type };
      dispatch(updatePhotos(payload));
    }
  };
  useEffect(() => {
    if (randomPhotos.length === 0) {
      dispatch(fetchRandomPhotos());
    }
  }, [dispatch && randomPhotos]);
  return (
    <div>
      <Header />
      <Container mt="66px" display="flex" justifyContent="center">
        <Main>
          <ApprovedSection
            handleShowImage={handleShowImage}
            isImage={isImage}
          />
          <Divider mb="12px" />
          {!isImage && randomPhotos.length > 0 && (
            <AddWidgetStyled
              onClick={handleShowImage}
              width="100%"
              height="360px"
            >
              <img src="/img/plus-big.svg" alt="" />
            </AddWidgetStyled>
          )}
          {randomPhotos.length > 0 && isImage && (
            <Image src={currentImage.urls.regular} />
          )}
          {randomPhotos.length === 0 && (
            <Container
              display="flex"
              justifyContent="center"
              alignItems="center"
              height="360px"
            >
              <div>Loading...</div>
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
