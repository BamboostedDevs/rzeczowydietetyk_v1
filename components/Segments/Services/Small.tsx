function Small() {
  return (
    <div>
      <div className="officeMobile">
        <div style={{ height: "40vh" }} />
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
      <div className="machineMobile">
        <div style={{ height: "40vh" }} />
        <div
          style={{
            width: "100%",
            height: "100vh",
            background: "rgb(220,250,221)"
          }}
        >
          Collaborations
        </div>
      </div>
      <style jsx>
        {`
          .officeMobile {
            background: url(/photos/office_mobile.jpg);
            background-size: cover;
            background-attachment: fixed;
            width: 100%;
            text-align: center;
          }
          .machineMobile {
            background: url(/vegetables.jpg);
            background-size: cover;
            background-attachment: fixed;
            width: 100%;
            text-align: center;
          }
        `}
      </style>
    </div>
  );
}

export default Small;
