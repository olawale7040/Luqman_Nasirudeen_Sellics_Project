import React from "react";
import { useSelector } from "react-redux";
import { ApprovedPhotosStyled } from "./styles/ApprovedPhotosStyled";
import { Image } from "src/components/styles/Image.styled";
import { AddPhotoStyled } from "./styles/AddPhotoStyled";
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
            naturalSlideWidth={700}
            naturalSlideHeight={500}
            visibleSlides={7}
            step={7}
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
                  <Image
                    src={photo.urls.regular}
                    key={photo.id}
                    width="78px"
                    height="60px"
                  />
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
