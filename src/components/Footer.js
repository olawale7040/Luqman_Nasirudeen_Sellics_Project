import { Button } from "src/components/styles/Button.styled";
import { FooterStyled } from "src/components/styles/Footer.styled";
// Constant
import { APPROVED_PHOTO, REJECT_PHOTO } from "src/constant";

const Footer = ({ handleUpdatePhoto, isImage }) => {
  return (
    <FooterStyled data-testid="footer-container">
      {!isImage ? (
        <div data-testid="default-text-instruction">
          Click on the + in order to get images recommendation
        </div>
      ) : (
        <>
          <Button
            data-testid="reject-button"
            width="144px"
            bg="#53585f"
            onClick={() => handleUpdatePhoto(REJECT_PHOTO)}
          >
            <img src="/img/cancel.svg" alt="" />
          </Button>
          <Button
            data-testid="approve-button"
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
