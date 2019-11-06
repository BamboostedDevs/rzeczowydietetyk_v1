import { FunctionComponent } from "react";
import { Nav } from "react-bootstrap";
import navbarContainer from "../../containers/navbar";

const Navigation: FunctionComponent = () => {
  return navbarContainer.state.size == "large" ? (
    <Nav
      style={{
        fontSize: "1.75rem"
      }}
    >
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="/blog">Blog</Nav.Link>
      <Nav.Link href="#contact">Contact</Nav.Link>
    </Nav>
  ) : (
    <div></div>
  );
};

export default Navigation;
