import { Button } from "src/components/styles/Button.styled";
import { FooterStyled } from "src/components/styles/Footer.styled";
// Contact
import { APPROVED_PHOTO, REJECT_PHOTO } from "src/constant";

const Footer = ({ handleUpdatePhoto, isImage }) => {
  return (
    <FooterStyled>
      {!isImage ? (
        <div>Click on the + in order to get images recommendation</div>
      ) : (
        <>
          <Button
            width="144px"
            bg="#53585f"
            onClick={() => handleUpdatePhoto(REJECT_PHOTO)}
          >
            <img src="/img/cancel.svg" alt="" />
          </Button>
          <Button
            width="144px"
            onClick={() => handleUpdatePhoto(APPROVED_PHOTO)}
          >
            <img src="/img/check.svg" alt="" />
          </Button>
        </>
      )}
    </FooterStyled>
  );
};

export default Footer;
