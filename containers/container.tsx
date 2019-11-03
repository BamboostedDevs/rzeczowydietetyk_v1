import { Container } from "unstated";

type ExampleContainerSate = { toggle: boolean };

class ExampleContainer extends Container<ExampleContainerSate> {
  state = { toggle: false };

  switch() {
    this.setState({ toggle: true });
  }
}

export default ExampleContainer;
