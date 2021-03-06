export default class BgAnimation extends React.Component {
  constructor(props) {
    super(props);
    this.bgAnimation = React.createRef();
  }

  componentDidMount() {
    const bgAnimation = this.bgAnimation.current;

    if (typeof window !== undefined) {
      this.effect = VANTA.BIRDS({
        el: bgAnimation,
        backgroundColor: 0x459bf9,
        color1: 0xff2d,
        color2: 0xffc200,
        birdSize: 1,
        separation: 47.0,
        alignment: 49.0,
        cohesion: 30.0,
        quantity: 4.0
      });
    }
  }

  componentWillUnmount() {
    if (this.effect) setTimeout(() => this.effect.destroy(), 50000);
  }
  render() {
    return (
      <div
        style={{ top: 0, maxHeight: "100vh" }}
        className="BgAnimation"
        ref={this.bgAnimation}
      ></div>
    );
  }
}
