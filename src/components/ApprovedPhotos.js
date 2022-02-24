import React from "react";
import { useSelector } from "react-redux";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";
import { ApprovedPhotosStyled } from "./styles/ApprovedPhotosStyled";
import { Image } from "src/components/styles/Image.styled";
import { AddPhotoStyled } from "./styles/AddPhotoStyled";

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
          <ScrollingCarousel>
            {approvedPhotos.map((photo) => (
              <Image
                src={photo.urls.regular}
                key={photo.id}
                width="78px"
                height="60px"
              />
            ))}
          </ScrollingCarousel>
        </section>
      )}
    </ApprovedPhotosStyled>
  );
};

export default ApprovedPhotos;
