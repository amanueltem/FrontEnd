import Axum from "./Axum";
import Alamata from "./Almata";
import Gheralta from "./Gheralta.js";
import "./places.css";
import MaryZion from "./Mary_Zion.js";
import DebreDamo from "./Debre_Damo.js";
import Negash from "./Negash.js";
export default function Places() {
  return (
    <div style={{ marginLeft: "5%", marginRight: "5%" }}>
      <p className="guide">
        <h1>These are our Historical and Muziem places </h1>
      </p>
      <div className="card-container">
        <Axum />
        <Alamata />
        <Gheralta />
        <MaryZion />
        <DebreDamo />
        <Negash />
      </div>
    </div>
  );
}
