function Large() {
  return (
    <div>
      <div className="officeWeb">
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
      <div className="machineWeb">
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
          .officeWeb {
            background: url(/photos/office_web.jpg);
            background-size: cover;
            background-attachment: fixed;
            width: 100%;
            text-align: center;
          }
          .machineWeb {
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

export default Large;
