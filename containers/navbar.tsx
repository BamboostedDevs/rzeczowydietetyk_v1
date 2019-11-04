import { Container } from "unstated";

type NavbarState = { visible: boolean };

class NavbarContainer extends Container<NavbarState> {
  state = { visible: false };

  show() {
    this.setState({ visible: true });
  }
  hide() {
    this.setState({ visible: false });
  }
}

export const navbarContainer = new NavbarContainer();
