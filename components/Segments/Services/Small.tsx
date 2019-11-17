function Large() {
  return (
    <div>
      <img className="fixed-img" src="/photos/office_mobile.jpg" />
      <div>
        <div style={{ height: "20vh" }} />
        <div
          style={{
            width: "100%",
            height: "100vh",
            background: "rgb(220,250,221)"
          }}
        >
          Services
        </div>
      </div>
      <div
        style={{
          width: "100%",
          height: "100vh",
          background: "rgb(220,250,221)"
        }}
      >
        Collaborations
      </div>
      <style jsx>{`
        .fixed-img {
          position: fixed;
          z-index: -10;
          top: 0;
          height: 100%;
        }
      `}</style>
    </div>
  );
}

export default Large;
