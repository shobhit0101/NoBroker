import React from "react";

const AboutusCards = (props) => {
  return (
    <>
      <div className="row featurette d-flex justify-content-center align-items-center my-4">
        <div className="col-md-7 textColor bg-dark">
          <h2
            className="featurette-heading"
            style={{
              "fontFamily": "'Poppins', sans-serif",
              "fontWeight": "700",
              "fontSize": " 50px",
              "textAlign": "center",
              color: " aliceblue",
            }}
          >
            {props.name}
          </h2>
          <p
            className="lead"
            style={{
              "fontFamily": "'Poppins', sans-serif",
              "fontWeight": "700",
              "textAlign": "center",
              color: "#96968d",
            }}
          >
            {props.college}
          </p>
          <p
            style={{
              "fontFamily": "'Poppins', sans-serif",
              "fontWeight": "700",
              "textAlign": "center",
              color: "#96968d",
            }}
          >
            {props.year}
          </p>
          <br /> <br />
        </div>
        <div className="col-md-5">
          <img
            className="img-fluid"
            width="250"
            height="250"
            src="../images/pp1.png"
            alt=""
          />
        </div>
      </div>
      <hr />
    </>
  );
};

export default AboutusCards;
