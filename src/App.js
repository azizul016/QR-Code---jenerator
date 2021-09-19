import React, { useState, useRef } from "react";
import "./App.css";
import QRCodeJenaretor from "./component/qrCodeJenaretor";
import Barcode from "react-barcode";
// var Barcode = require('react-barcode');

function App() {
  const data = {
    // ItemName: "Speed Can",
    // price: 35,
    discount: 5,
  };
  return (
    <React.Fragment>
      <QRCodeJenaretor />
      {/* <h3>This is code jeneraretor</h3>
      <Barcode value={JSON.stringify(data)} />, */}
    </React.Fragment>
  );
}

export default App;
