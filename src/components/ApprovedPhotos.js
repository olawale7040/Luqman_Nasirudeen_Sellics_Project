import { useSelector } from "react-redux";
import { ApprovedPhotosStyled } from "./styles/ApprovedPhotosStyled";
import { Image } from "src/components/styles/Image.styled";
import { AddPhotoStyled } from "./styles/AddPhotoStyled";
import { ImageContainer } from "./styles/Container.styled";
import {
  BackSliderButton,
  NextSliderButton,
} from "./styles/SliderButton.styled";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const ApprovedPhotos = ({ handleShowImage }) => {
  const { approvedPhotos } = useSelector((state) => state.imageList);

  const isMobile = () => {
    const isMobile = window?.matchMedia("only screen and (max-width: 760px)");
    return isMobile.matches ? true : false;
  };

  return (
    <ApprovedPhotosStyled>
      <div data-testid="section-title">
        {" "}
        Approval Images (
        <span data-testid="total-approved-photos">{approvedPhotos.length}</span>
        )
      </div>
      {approvedPhotos.length === 0 ? (
        <AddPhotoStyled data-testid="get-image-btn" width="78px" height="60px">
          <img
            data-testid="plus-btn"
            onClick={handleShowImage}
            src="/img/plus.svg"
            alt=""
          />
        </AddPhotoStyled>
      ) : (
        <section data-testid="approved-photos">
          <CarouselProvider
            naturalSlideWidth={!isMobile() ? 700 : 500}
            naturalSlideHeight={!isMobile() ? 500 : 120}
            visibleSlides={!isMobile() ? 7 : 1}
            step={!isMobile() ? 7 : 1}
            totalSlides={approvedPhotos.length}
          >
            <BackSliderButton>
              <ButtonBack>
                <img src="/img/arrow-back.svg" alt="" />
              </ButtonBack>
            </BackSliderButton>
            <Slider>
              {approvedPhotos.map((photo) => (
                <Slide key={photo.id}>
                  <ImageContainer width="78px" height="60px" xsWidth="100%">
                    <Image
                      src={photo.urls.regular}
                      key={photo.id}
                      width="78px"
                      height="60px"
                      xsWidth="100%"
                    />
                    <div>
                      <img src="/img/check.svg" alt="" />
                    </div>
                  </ImageContainer>
                </Slide>
              ))}
            </Slider>
            <NextSliderButton>
              <ButtonNext>
                <img src="/img/arrow-next.svg" alt="" />
              </ButtonNext>
            </NextSliderButton>
          </CarouselProvider>
        </section>
      )}
    </ApprovedPhotosStyled>
  );
};

export default ApprovedPhotos;
