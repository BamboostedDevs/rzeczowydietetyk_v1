import { FunctionComponent } from "react";
import { Navbar } from "react-bootstrap";
import { Sticky } from "react-sticky";
import { navbarContainer } from "../../containers/navbar";

const Header: FunctionComponent = () => (
  <Sticky>
    {({ style }) => (
      <div style={style}>
        {!navbarContainer.state.visible && (
          <Navbar bg="light" variant="light" fixed="top" className="bg">
            <Navbar.Brand href="#home" style={{ fontSize: "1.25em" }}>
              <img
                alt=""
                src="https://images.vexels.com/media/users/3/143057/isolated/preview/b96fb3ff9a11216da3f124e69f9e377e-avocado-color-flat-icon-by-vexels.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
                style={{ marginRight: "10%" }}
              />
              RZECZOWY DIETETYK
            </Navbar.Brand>
            <style jsx global>{`
              .bg {
                background-color: rgba(234, 235, 235, 0.5) !important;
                font-family: "Abel";
              }
            `}</style>
          </Navbar>
        )}
      </div>
    )}
  </Sticky>
);

export default Header;
