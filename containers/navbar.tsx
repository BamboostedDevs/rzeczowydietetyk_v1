import { Container } from "unstated";

type NavbarState = {
  visible: boolean;
  allow: boolean;
  size: boolean | "large" | "medium" | "small";
  done: boolean;
};

export class NavbarContainer extends Container<NavbarState> {
  constructor() {
    super();
    this.state = { visible: false, allow: false, size: false, done: false };
  }

  show() {
    this.setState({ visible: true });
  }
  hide() {
    this.setState({ visible: false });
  }
  allow() {
    this.setState({ allow: true });
  }
  changeSize(size: "large" | "medium" | "small") {
    this.setState({ size });
    return true;
  }
}

const navbarContainer = new NavbarContainer();
export default navbarContainer;
