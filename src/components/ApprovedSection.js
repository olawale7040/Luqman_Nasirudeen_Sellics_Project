import React from "react";
import { useSelector } from "react-redux";
import { ApprovedSectionStyled } from "./styles/ApprovedSectionStyled";
import { Image } from "src/components/styles/Image.styled";
import { AddWidgetStyled } from "./styles/AddWidgetStyled";

const ApprovedSection = ({ handleShowImage }) => {
  const { approvedPhotos } = useSelector((state) => state.imageList);
  console.log(approvedPhotos, "Currently approved");
  return (
    <ApprovedSectionStyled>
      <div> Approval Images ({approvedPhotos.length})</div>
      {approvedPhotos.length === 0 ? (
        <AddWidgetStyled onClick={handleShowImage} width="78px" height="60px">
          <img src="/img/plus.svg" alt="" />
        </AddWidgetStyled>
      ) : (
        <section>
          {approvedPhotos.map((photo) => (
            <Image
              src={photo.urls.regular}
              key={photo.id}
              width="78px"
              height="60px"
            />
          ))}
        </section>
      )}
    </ApprovedSectionStyled>
  );
};

export default ApprovedSection;
