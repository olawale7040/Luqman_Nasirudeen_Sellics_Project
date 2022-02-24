import { StyledHeader, Nav } from "./styles/Header.styled";
const Header = () => {
  return (
    <StyledHeader data-testid="app-header">
      <Nav>
        <div data-testid="header-brand-name">IMAGE APPROVAL APPLICATION</div>
      </Nav>
    </StyledHeader>
  );
};

export default Header;
