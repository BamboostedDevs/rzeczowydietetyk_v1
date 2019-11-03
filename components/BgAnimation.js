export default class BgAnimation extends React.Component {
  constructor(props) {
    super(props);
    this.bgAnimation = React.createRef();
  }

  componentDidMount() {
    const bgAnimation = this.bgAnimation.current;

    if (typeof window !== undefined) {
      this.effect = VANTA.FOG({
        el: bgAnimation,
        midtoneColor: 0xff1e,
        blurFactor: 0.21,
        speed: 0.6
      });
    }
  }

  componentWillUnmount() {
    if (this.effect) this.effect.destroy();
  }
  render() {
    return (
      <div
        style={{ top: 0, maxHeight: "100vh" }}
        className="BgAnimation"
        ref={this.bgAnimation}
      >
        <script src="/scripts/three.r92.min.js" />
        <script src="/scripts/vanta.fog.min.js" />
      </div>
    );
  }
}
