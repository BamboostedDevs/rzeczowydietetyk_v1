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
        backgroundColor: 0x2889ff,
        color1: 0xff2d,
        color2: 0xffc200,
        birdSize: 1,
        separation: 47.0,
        alignment: 49.0,
        cohesion: 30.0,
        quantity: 4.0,
        backgroundAlpha: 0.81
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
      >
        <script src="/scripts/three.r92.min.js" />
        <script src="/scripts/vanta.birds.min.js" />
      </div>
    );
  }
}
