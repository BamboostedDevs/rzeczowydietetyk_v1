import { FunctionComponent } from "react";
import { Nav, Row } from "react-bootstrap";
import navbarContainer from "../../containers/navbar";
import { Breadcrumbs, Link, Typography } from "@material-ui/core";
import ChromeReaderModeIcon from "@material-ui/icons/ChromeReaderMode";
import HomeIcon from "@material-ui/icons/Home";
import CallIcon from "@material-ui/icons/Call";

const Navigation: FunctionComponent = () => {
  return navbarContainer.state.size == "large" ? (
    <Nav
      style={{
        fontSize: "1.75rem"
      }}
    >
      <Breadcrumbs aria-label="breadcrumb">
        <Link color="textPrimary" href="#home" underline="none">
          Home
        </Link>
        <Link color="textPrimary" href="#info" underline="none">
          Info
        </Link>
        <Link color="textPrimary" href="#contact" underline="none">
          Kontakt
        </Link>
        <Typography color="textSecondary">Blog</Typography>
        {/* <Link color="inherit" href="/blog">
          Blog
        </Link> */}
      </Breadcrumbs>
    </Nav>
  ) : (
    <Breadcrumbs aria-label="breadcrumb">
      <Link color="textPrimary" href="#home" underline="none">
        <HomeIcon />
      </Link>
      <Typography color="textSecondary">
        <ChromeReaderModeIcon />
      </Typography>
      {/* <Link color="inherit" href="/blog">
        <ChromeReaderModeIcon />
      </Link> */}
      <Link color="textPrimary" href="#contact" underline="none">
        <CallIcon />
      </Link>
    </Breadcrumbs>
  );
};

export default Navigation;
